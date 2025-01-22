const User = require('../../models/moview/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');


exports.loginUser = async(req, res) => {

    const { username, email, password } = req.body;

    try {
        const user = await User.findOne({
            $or: [{ email: email }, { username: username }]
        });

        if (!user) {
            return res.status(401).json({ status: 'error', message: 'Invalid credentials.' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password_hash);

        if (!isValidPassword) {
            return res.status(401).json({ status: 'error', message: 'Invalid credentials.' });
        }

        console.log('User', user);

        // const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '24h' });
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET);
        res.status(200).json({ status: 'success', token, userDetail: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Server error: Cannot authenticate user.' });
    }
};

exports.forgetPassword = async(req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        user.reset_password_token = resetToken;
        user.reset_password_expires = Date.now() + 3600000;
        await user.save();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'moviu.spakcomm@gmail.com',
                pass: 'zdxsrxogxgpdlqbk'
            },
        });

        const mailOptions = {
            to: user.email,
            from: 'moviu.spakcomm@gmail.com',
            subject: 'Password Reset',
            text: `Please click the following link to reset your password: \n https://moviu.in/reset-password.html?token=${encodeURIComponent(resetToken)}`
        };

        transporter.sendMail(mailOptions, (err, response) => {
            if (err) {
                console.error('Error sending email:', err);
                return res.status(500).json({ success: false, message: 'Error sending email' });
            }
            console.log('Ram....', email);
            res.status(200).json({ success: true, message: 'Password reset email sent' });
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};


exports.resetPassword = async(req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;
    try {
        const user = await User.findOne({
            reset_password_token: token,
            reset_password_expires: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid or expired token' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password_hash = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.status(200).json({ success: true, message: 'Password has been reset' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};