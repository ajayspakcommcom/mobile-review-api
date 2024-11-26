
// type: Post
// url: http://localhost:3000/api/movie
// body: {
//     "title": "Star Wars",
//     "description": "A young farm boy discovers his destiny as a Jedi and takes on the evil Galactic Empire.",
//     "release_date": "1977-05-25",
//     "genre": "Science Fiction",
//     "director": "George Lucas",
//     "rating": 8.6,
//     "cast": [
//         {
//             "actor": "Mark Hamill",
//             "role": "Luke Skywalker"
//         },
//         {
//             "actor": "Harrison Ford",
//             "role": "Han Solo"
//         },
//         {
//             "actor": "Carrie Fisher",
//             "role": "Princess Leia"
//         }
//     ],
//     "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/01-09-2024/starwars-poster.jpg",
//     "test_poster_url": "https://example.com/test-poster.jpg",
//     "is_deleted": false,
//     "language": "English"    
// }





const data = [
    {
        "title": "The Three-Body Problem",
        "description": "A group of scientists uncovers an alien civilization's plans after receiving mysterious communications from space, leading to a struggle for humanity's survival.",
        "release_date": "2024-01-01",
        "genre": "Science Fiction",
        "director": "David Benioff & D.B. Weiss",
        "rating": 9.1,
        "cast": [
            {
                "actor": "Eiza González",
                "role": "Ye Wenjie"
            },
            {
                "actor": "John Bradley",
                "role": "Shi Qiang"
            },
            {
                "actor": "Liam Cunningham",
                "role": "Mike Evans"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/3-body-problem.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/3-body-problem.jpg",
        "is_deleted": false,
        "language": "English"
    },
    {
        "title": "A Good Girl's Guide to Murder",
        "description": "An aspiring journalist investigates a cold-case murder in her small town, unraveling shocking truths and dangerous secrets along the way.",
        "release_date": "2024-09-15",
        "genre": "Mystery",
        "director": "Holly Jackson",
        "rating": 8.7,
        "cast": [
            {
                "actor": "Emma Myers",
                "role": "Pip Fitz-Amobi"
            },
            {
                "actor": "Louis Partridge",
                "role": "Ravi Singh"
            },
            {
                "actor": "Millie Bobby Brown",
                "role": "Cara Ward"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/a-good-girls-guide-to-murder.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/a-good-girls-guide-to-murder.jpg",
        "is_deleted": false,
        "language": "English"
    },
    {
        "title": "Alexander: The Making of a God",
        "description": "An epic tale of the rise of Alexander the Great, tracing his journey from a young Macedonian prince to a legendary conqueror and god-king.",
        "release_date": "2024-11-20",
        "genre": "Historical Drama",
        "director": "Ridley Scott",
        "rating": 8.9,
        "cast": [
            {
                "actor": "Timothée Chalamet",
                "role": "Alexander the Great"
            },
            {
                "actor": "Florence Pugh",
                "role": "Roxana"
            },
            {
                "actor": "Ralph Fiennes",
                "role": "Philip II of Macedon"
            },
            {
                "actor": "Anya Taylor-Joy",
                "role": "Olympias"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/alexander-the-making-of-a-god.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/alexander-the-making-of-a-god.jpg",
        "is_deleted": false,
        "language": "English"
    },
    {
        "title": "Baby Reindeer",
        "description": "A gripping and intense exploration of obsession and the dark consequences of an unsettling encounter, based on a true story.",
        "release_date": "2024-12-15",
        "genre": "Drama",
        "director": "Richard Gadd",
        "rating": 8.3,
        "cast": [
            {
                "actor": "Andrew Scott",
                "role": "Richard"
            },
            {
                "actor": "Jessica Barden",
                "role": "Obsessed Woman"
            },
            {
                "actor": "Phoebe Waller-Bridge",
                "role": "Friend of Richard"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/baby-reindeer.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/baby-reindeer.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Bad Monkey",
        "description": "A dark comedy-drama following a former detective turned restaurant inspector, who stumbles upon a severed arm that unravels a bizarre criminal conspiracy in Florida.",
        "release_date": "2024-10-10",
        "genre": "Dark Comedy-Drama",
        "director": "Bill Hader",
        "rating": 8.5,
        "cast": [
            {
                "actor": "Vince Vaughn",
                "role": "Andrew Yancy"
            },
            {
                "actor": "Anna Kendrick",
                "role": "Bonnie"
            },
            {
                "actor": "J.K. Simmons",
                "role": "Neville"
            },
            {
                "actor": "Zazie Beetz",
                "role": "Rosa"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/bad-monkey.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/bad-monkey.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Batman: Caped Crusader",
        "description": "A gritty reimagining of the Dark Knight's early days, exploring his journey as a detective and protector of Gotham City.",
        "release_date": "2025-03-01",
        "genre": "Action, Crime, Superhero",
        "director": "Matt Reeves",
        "rating": 9.2,
        "cast": [
            {
                "actor": "Robert Pattinson",
                "role": "Bruce Wayne / Batman"
            },
            {
                "actor": "Zoë Kravitz",
                "role": "Selina Kyle / Catwoman"
            },
            {
                "actor": "Jeffrey Wright",
                "role": "James Gordon"
            },
            {
                "actor": "Paul Dano",
                "role": "Edward Nygma / The Riddler"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/batman-caped-crusader.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/batman-caped-crusader.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Bodkin",
        "description": "A dark comedy-thriller following a group of podcasters investigating a series of mysterious disappearances in a small Irish town, uncovering a web of secrets and lies.",
        "release_date": "2024-08-25",
        "genre": "Dark Comedy, Thriller",
        "director": "Jared Hess",
        "rating": 8.4,
        "cast": [
            {
                "actor": "Will Forte",
                "role": "Gilbert"
            },
            {
                "actor": "Siobhán McSweeney",
                "role": "Maeve"
            },
            {
                "actor": "Chris O'Dowd",
                "role": "Conor"
            },
            {
                "actor": "Aisling Bea",
                "role": "Eimear"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/bodkin.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/bodkin.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Constellation",
        "description": "A sci-fi drama following a woman on a perilous journey across the stars as she uncovers hidden truths about her family and humanity's future.",
        "release_date": "2025-01-15",
        "genre": "Science Fiction, Drama",
        "director": "Denis Villeneuve",
        "rating": 9.0,
        "cast": [
            {
                "actor": "Natalie Portman",
                "role": "Celeste"
            },
            {
                "actor": "Oscar Isaac",
                "role": "Elliot"
            },
            {
                "actor": "Zendaya",
                "role": "Amara"
            },
            {
                "actor": "Idris Elba",
                "role": "Captain Thorne"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/constellation.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/constellation.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Dark Matter",
        "description": "A gripping sci-fi thriller exploring parallel universes and the choices that define our lives, based on the bestselling novel by Blake Crouch.",
        "release_date": "2025-05-10",
        "genre": "Science Fiction, Thriller",
        "director": "Christopher Nolan",
        "rating": 9.1,
        "cast": [
            {
                "actor": "Jake Gyllenhaal",
                "role": "Jason Dessen"
            },
            {
                "actor": "Rebecca Ferguson",
                "role": "Daniela Dessen"
            },
            {
                "actor": "Rami Malek",
                "role": "Ryan Holder"
            },
            {
                "actor": "Florence Pugh",
                "role": "Amanda"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/dark-matter.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/dark-matter.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "English Teacher",
        "description": "A heartfelt drama about a dedicated English teacher who inspires her students while grappling with personal challenges and the complexities of modern education.",
        "release_date": "2024-09-20",
        "genre": "Drama",
        "director": "Greta Gerwig",
        "rating": 8.7,
        "cast": [
            {
                "actor": "Emma Stone",
                "role": "Ms. Harper"
            },
            {
                "actor": "Timothée Chalamet",
                "role": "Evan"
            },
            {
                "actor": "Viola Davis",
                "role": "Principal Wallace"
            },
            {
                "actor": "Florence Pugh",
                "role": "Margaret"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/english-teacher.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/english-teacher.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Expats",
        "description": "A compelling drama exploring the intertwined lives of three expatriates navigating cultural challenges, personal struggles, and unexpected connections in a bustling foreign city.",
        "release_date": "2025-02-14",
        "genre": "Drama",
        "director": "Chloé Zhao",
        "rating": 8.9,
        "cast": [
            {
                "actor": "Nicole Kidman",
                "role": "Margaret"
            },
            {
                "actor": "Henry Golding",
                "role": "Clark"
            },
            {
                "actor": "Gemma Chan",
                "role": "Sophia"
            },
            {
                "actor": "Dev Patel",
                "role": "Arjun"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/expats.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/expats.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Fallout",
        "description": "A gripping post-apocalyptic drama following survivors navigating a desolate world, uncovering hidden truths about humanity’s downfall and the hope for a better future.",
        "release_date": "2025-07-22",
        "genre": "Post-Apocalyptic, Drama, Science Fiction",
        "director": "George Miller",
        "rating": 9.0,
        "cast": [
            {
                "actor": "Hugh Jackman",
                "role": "Ethan"
            },
            {
                "actor": "Charlize Theron",
                "role": "Lena"
            },
            {
                "actor": "Tom Holland",
                "role": "Alex"
            },
            {
                "actor": "Saoirse Ronan",
                "role": "Claire"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/fallout.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/fallout.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Fool Me Once",
        "description": "A thrilling mystery about a woman who discovers shocking secrets about her family while investigating her husband's suspicious death.",
        "release_date": "2025-03-18",
        "genre": "Mystery, Thriller",
        "director": "David Fincher",
        "rating": 8.8,
        "cast": [
            {
                "actor": "Rosamund Pike",
                "role": "Maya"
            },
            {
                "actor": "Jude Law",
                "role": "Joe"
            },
            {
                "actor": "Jessica Chastain",
                "role": "Rachel"
            },
            {
                "actor": "Andrew Garfield",
                "role": "Detective Harper"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/fool-me-once.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/fool-me-once.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Kaos",
        "description": "A dark comedy and modern retelling of Greek mythology, exploring the dysfunctional relationships and chaos among gods, mortals, and everything in between.",
        "release_date": "2025-09-12",
        "genre": "Dark Comedy, Fantasy",
        "director": "Taika Waititi",
        "rating": 8.5,
        "cast": [
            {
                "actor": "Tilda Swinton",
                "role": "Hera"
            },
            {
                "actor": "Ralph Fiennes",
                "role": "Zeus"
            },
            {
                "actor": "Dev Patel",
                "role": "Hades"
            },
            {
                "actor": "Anya Taylor-Joy",
                "role": "Persephone"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/kaos.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/kaos.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Lady in the Lake",
        "description": "A gripping noir-inspired mystery set in 1960s Baltimore, following a journalist investigating an unsolved murder that shakes the community.",
        "release_date": "2025-10-15",
        "genre": "Mystery, Drama",
        "director": "Sam Mendes",
        "rating": 8.6,
        "cast": [
            {
                "actor": "Natalie Portman",
                "role": "Maddie Schwartz"
            },
            {
                "actor": "Lupita Nyong'o",
                "role": "Cleo Sherwood"
            },
            {
                "actor": "Oscar Isaac",
                "role": "Detective Sullivan"
            },
            {
                "actor": "Michael Shannon",
                "role": "Editor John Peters"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/lady-in-the-lake.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/lady-in-the-lake.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Manhunt",
        "description": "A tense thriller following a relentless investigator chasing a cunning fugitive across state lines, uncovering a deeper conspiracy along the way.",
        "release_date": "2025-08-10",
        "genre": "Thriller, Crime",
        "director": "Denis Villeneuve",
        "rating": 8.9,
        "cast": [
            {
                "actor": "Jake Gyllenhaal",
                "role": "Detective Marcus Hall"
            },
            {
                "actor": "Jodie Comer",
                "role": "Sarah Palmer"
            },
            {
                "actor": "Cillian Murphy",
                "role": "The Fugitive"
            },
            {
                "actor": "Jeffrey Wright",
                "role": "Agent Cooper"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/manhunt.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/manhunt.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Masters of the Air",
        "description": "An epic wartime drama chronicling the courageous exploits of the Eighth Air Force during World War II, showcasing their heroic missions and personal sacrifices.",
        "release_date": "2025-11-11",
        "genre": "War, Drama, History",
        "director": "Steven Spielberg",
        "rating": 9.2,
        "cast": [
            {
                "actor": "Austin Butler",
                "role": "Captain John Egan"
            },
            {
                "actor": "Barry Keoghan",
                "role": "Lieutenant Michael Ryan"
            },
            {
                "actor": "Fionn Whitehead",
                "role": "Sergeant Oliver Carter"
            },
            {
                "actor": "Taron Egerton",
                "role": "Major James Whitman"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/masters-of-the-air.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/masters-of-the-air.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Movie Poster",
        "description": "A behind-the-scenes look at the making of iconic movie posters, featuring interviews with designers and filmmakers who created them.",
        "release_date": "2025-12-01",
        "genre": "Documentary",
        "director": "David Fincher",
        "rating": 8.3,
        "cast": [
            {
                "actor": "Graham Norton",
                "role": "Host"
            },
            {
                "actor": "Ridley Scott",
                "role": "Interviewee"
            },
            {
                "actor": "Meryl Streep",
                "role": "Interviewee"
            },
            {
                "actor": "Martin Scorsese",
                "role": "Interviewee"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/movie-poster.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/movie-poster.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Mr. & Mrs. Smith",
        "description": "A married couple discovers they are both spies working for rival agencies, leading to a thrilling and comedic battle as their secrets unravel.",
        "release_date": "2025-07-17",
        "genre": "Action, Comedy, Romance",
        "director": "Doug Liman",
        "rating": 7.5,
        "cast": [
            {
                "actor": "Brad Pitt",
                "role": "John Smith"
            },
            {
                "actor": "Angelina Jolie",
                "role": "Jane Smith"
            },
            {
                "actor": "Vince Vaughn",
                "role": "Eddie"
            },
            {
                "actor": "Adam Brody",
                "role": "Benjamin Danz"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/mr.-&-mrs.-smith.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/mr.-&-mrs.-smith.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "My Lady Jane",
        "description": "A historical romance-comedy based on the life of Lady Jane Grey, who was crowned Queen of England for just nine days before being overthrown and executed.",
        "release_date": "2026-03-12",
        "genre": "Historical, Romance, Comedy",
        "director": "Kari Skogland",
        "rating": 7.8,
        "cast": [
            {
                "actor": "Florence Pugh",
                "role": "Lady Jane Grey"
            },
            {
                "actor": "Taron Egerton",
                "role": "Guildford Dudley"
            },
            {
                "actor": "Emma Mackey",
                "role": "Princess Elizabeth"
            },
            {
                "actor": "Ben Barnes",
                "role": "Edward VI"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/my-lady-jane.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/my-lady-jane.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "One Day",
        "description": "Two university friends, Emma and Dexter, share a deep bond that spans years, and each year on the same day, the film revisits their lives as they navigate love, loss, and destiny.",
        "release_date": "2025-09-15",
        "genre": "Romance, Drama",
        "director": "Lone Scherfig",
        "rating": 7.0,
        "cast": [
            {
                "actor": "Anne Hathaway",
                "role": "Emma Morley"
            },
            {
                "actor": "Jim Sturgess",
                "role": "Dexter Mayhew"
            },
            {
                "actor": "Patricia Clarkson",
                "role": "Alison Mayhew"
            },
            {
                "actor": "Ken Stott",
                "role": "Stephen Morley"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/one-day.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/one-day.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Palm Royale",
        "description": "A luxury resort in a tropical paradise becomes the setting for a mix of romance, intrigue, and mystery as a group of eclectic guests converge on the island.",
        "release_date": "2026-05-05",
        "genre": "Romance, Mystery, Drama",
        "director": "Gore Verbinski",
        "rating": 7.4,
        "cast": [
            {
                "actor": "Margot Robbie",
                "role": "Sophie Bennett"
            },
            {
                "actor": "Idris Elba",
                "role": "James Hart"
            },
            {
                "actor": "Keira Knightley",
                "role": "Claire Westwood"
            },
            {
                "actor": "Michael B. Jordan",
                "role": "Dexter Scott"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/palm-royale.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/palm-royale.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Presumed Innocent",
        "description": "A prosecutor is forced to investigate the murder of his mistress, and as secrets and lies unravel, he finds himself implicated in the crime.",
        "release_date": "2025-11-11",
        "genre": "Thriller, Mystery, Drama",
        "director": "Alan J. Pakula",
        "rating": 7.9,
        "cast": [
            {
                "actor": "Harrison Ford",
                "role": "Rusty Sabich"
            },
            {
                "actor": "Glenn Close",
                "role": "Carolyn Polhemus"
            },
            {
                "actor": "Raul Julia",
                "role": "Raymond Horgan"
            },
            {
                "actor": "Bonnie Bedelia",
                "role": "Barbara Sabich"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/presumed-innocent.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/presumed-innocent.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Renegade Nell",
        "description": "A young woman in the Old West takes on a life of adventure and rebellion, challenging the norms of society while seeking to uncover her family’s mysterious past.",
        "release_date": "2026-07-20",
        "genre": "Western, Adventure, Drama",
        "director": "John Sturges",
        "rating": 6.8,
        "cast": [
            {
                "actor": "Drew Barrymore",
                "role": "Nell"
            },
            {
                "actor": "Tommy Lee Jones",
                "role": "Sheriff Hank Dalton"
            },
            {
                "actor": "Rosie Perez",
                "role": "Maggie"
            },
            {
                "actor": "Billy Bob Thornton",
                "role": "Tommy Jackson"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/renegade-nell.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/renegade-nell.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Ripley",
        "description": "A charming con artist, Tom Ripley, becomes deeply enmeshed in the world of high society while impersonating a wealthy heir, leading to deceit, murder, and a dangerous game of cat and mouse.",
        "release_date": "2025-12-03",
        "genre": "Thriller, Crime, Drama",
        "director": "Anthony Minghella",
        "rating": 8.0,
        "cast": [
            {
                "actor": "Matt Damon",
                "role": "Tom Ripley"
            },
            {
                "actor": "Jude Law",
                "role": "Dickie Greenleaf"
            },
            {
                "actor": "Gwyneth Paltrow",
                "role": "Marge Sherwood"
            },
            {
                "actor": "Cate Blanchett",
                "role": "Teddy"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/ripley.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/ripley.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Shōgun",
        "description": "An English navigator is shipwrecked in Japan and becomes embroiled in the political intrigue and warfare between the samurai and feudal lords in the 17th century.",
        "release_date": "2026-03-19",
        "genre": "Historical Drama, Adventure",
        "director": "Jerry London",
        "rating": 8.3,
        "cast": [
            {
                "actor": "Richard Chamberlain",
                "role": "John Blackthorne"
            },
            {
                "actor": "Toshiro Mifune",
                "role": "Lord Toranaga"
            },
            {
                "actor": "Shiro Mifune",
                "role": "Lord Ishido"
            },
            {
                "actor": "Yoko Shimada",
                "role": "Mariko"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/shōgun.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/shōgun.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Supacell",
        "description": "In a future where humanity faces extinction from a deadly disease, a team of scientists discover a new power source within the human body that could save the world, but it comes with a dangerous side effect.",
        "release_date": "2027-08-14",
        "genre": "Science Fiction, Thriller, Action",
        "director": "Neill Blomkamp",
        "rating": 7.5,
        "cast": [
            {
                "actor": "Idris Elba",
                "role": "Dr. Marcus Taylor"
            },
            {
                "actor": "Charlize Theron",
                "role": "Dr. Lena Fischer"
            },
            {
                "actor": "Tom Hardy",
                "role": "Jake Turner"
            },
            {
                "actor": "Emma Stone",
                "role": "Eliza Harper"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/supacell.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/supacell.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Terminator Zero",
        "description": "A new chapter in the Terminator franchise where a sentient AI from the future is sent back in time to prevent humanity from ever creating Skynet. As time collapses, a new group of resistance fighters must stop this rogue AI before it eradicates the human race.",
        "release_date": "2028-05-21",
        "genre": "Science Fiction, Action, Thriller",
        "director": "James Cameron",
        "rating": 8.4,
        "cast": [
            {
                "actor": "Arnold Schwarzenegger",
                "role": "The Terminator"
            },
            {
                "actor": "Linda Hamilton",
                "role": "Sarah Connor"
            },
            {
                "actor": "Mackenzie Davis",
                "role": "Grace"
            },
            {
                "actor": "David Tennant",
                "role": "AI Zero"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/terminator-zero.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/terminator-zero.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "The Acolyte",
        "description": "Set in the final days of the High Republic era, 'The Acolyte' follows a young Padawan who is trained in the mysteries of the Force, uncovering dark secrets that threaten the galaxy as Sith activity begins to rise in the shadows.",
        "release_date": "2029-07-15",
        "genre": "Science Fiction, Mystery, Thriller",
        "director": "Leslie Headland",
        "rating": 7.9,
        "cast": [
            {
                "actor": "Amandla Stenberg",
                "role": "Padawan"
            },
            {
                "actor": "Lee Jung-jae",
                "role": "Master"
            },
            {
                "actor": "Carrie-Anne Moss",
                "role": "Acolyte Leader"
            },
            {
                "actor": "Jodie Turner-Smith",
                "role": "Sith Lord"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/the-acolyte.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/the-acolyte.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "The Brothers Sun",
        "description": "Set in ancient China, two brothers from a humble village rise to power, caught in a turbulent time of war, betrayal, and ambition. As they become leaders of opposing factions, they must decide whether to fight for their family’s honor or pursue ultimate power.",
        "release_date": "2029-09-10",
        "genre": "Action, Drama, Historical",
        "director": "Zhang Yimou",
        "rating": 8.1,
        "cast": [
            {
                "actor": "Donnie Yen",
                "role": "Brother Zhang"
            },
            {
                "actor": "Jet Li",
                "role": "Brother Wei"
            },
            {
                "actor": "Zhang Ziyi",
                "role": "Li Mei"
            },
            {
                "actor": "Tony Leung",
                "role": "General Han"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/the-brothers-sun.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/the-brothers-sun.jpg",
        "is_deleted": false,
        "language": "Mandarin"
    }, 
    {
        "title": "The Gentlemen",
        "description": "A sophisticated crime lord decides to sell off his lucrative cannabis empire in London, triggering plots, schemes, and betrayals from those who want to take his throne.",
        "release_date": "2020-01-24",
        "genre": "Crime, Comedy, Action",
        "director": "Guy Ritchie",
        "rating": 7.8,
        "cast": [
            {
                "actor": "Matthew McConaughey",
                "role": "Mickey Pearson"
            },
            {
                "actor": "Charlie Hunnam",
                "role": "Ray"
            },
            {
                "actor": "Hugh Grant",
                "role": "Fletcher"
            },
            {
                "actor": "Michelle Dockery",
                "role": "Rosalind Pearson"
            },
            {
                "actor": "Colin Farrell",
                "role": "Coach"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/the-gentlemen.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/the-gentlemen.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "The Regime",
        "description": "A gripping political drama that chronicles the rise and fall of an authoritarian regime in a fictional European nation, exploring themes of power, corruption, and resistance.",
        "release_date": "2024-04-15",
        "genre": "Drama, Political, Thriller",
        "director": "Stephen Frears",
        "rating": 8.2,
        "cast": [
            {
                "actor": "Kate Winslet",
                "role": "Chancellor Elisa Kovak"
            },
            {
                "actor": "Matthias Schoenaerts",
                "role": "Prime Minister Viktor Maris"
            },
            {
                "actor": "Ralph Fiennes",
                "role": "General Otto Kruger"
            },
            {
                "actor": "Vanessa Kirby",
                "role": "Journalist Anya Roth"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/the-regime.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/the-regime.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "The Tattooist of Auschwitz",
        "description": "Based on the bestselling novel, 'The Tattooist of Auschwitz' tells the powerful story of Lale Sokolov, a Jewish man who becomes the tattooist in Auschwitz-Birkenau, where he falls in love with a fellow prisoner while enduring the horrors of the Holocaust.",
        "release_date": "2025-03-12",
        "genre": "Drama, Historical, Romance",
        "director": "Heather Morris",
        "rating": 7.6,
        "cast": [
            {
                "actor": "Max Irons",
                "role": "Lale Sokolov"
            },
            {
                "actor": "Tatiana Maslany",
                "role": "Gita Furman"
            },
            {
                "actor": "Harvey Keitel",
                "role": "Pepan"
            },
            {
                "actor": "Ben Kingsley",
                "role": "SS Officer"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/the-tattooist-of-auschwitz.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/the-tattooist-of-auschwitz.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "The Veil",
        "description": "A supernatural thriller set in a remote village, where a young woman discovers a dark and dangerous family secret that could tear apart her world. As she unravels the mystery, she faces terrifying forces from the other side of the veil.",
        "release_date": "2026-06-20",
        "genre": "Horror, Thriller, Mystery",
        "director": "James Wan",
        "rating": 7.4,
        "cast": [
            {
                "actor": "Florence Pugh",
                "role": "Mira"
            },
            {
                "actor": "Javier Bardem",
                "role": "Father Juan"
            },
            {
                "actor": "Tessa Thompson",
                "role": "Clara"
            },
            {
                "actor": "Mads Mikkelsen",
                "role": "Elder Alexei"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/the-veil.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/the-veil.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "The Walking Dead: The Ones Who Live",
        "description": "A spinoff of the 'Walking Dead' universe, following the survivors of a new post-apocalyptic world. It focuses on key characters who fought their way through a zombie-infested world, dealing with the psychological and emotional toll of survival while facing new threats.",
        "release_date": "2024-10-18",
        "genre": "Drama, Horror, Thriller",
        "director": "Greg Nicotero",
        "rating": 8.3,
        "cast": [
            {
                "actor": "Norman Reedus",
                "role": "Daryl Dixon"
            },
            {
                "actor": "Melissa McBride",
                "role": "Carol Peletier"
            },
            {
                "actor": "Andrew Lincoln",
                "role": "Rick Grimes"
            },
            {
                "actor": "Lauren Cohan",
                "role": "Maggie Greene"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/the-walking-dead-the-ones-who-live.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/the-walking-dead-the-ones-who-live.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Those About to Die",
        "description": "A historical drama set in Ancient Rome, focusing on the lives of gladiators, their brutal training, and the dangerous battles they fought in the Colosseum, all while exploring the power dynamics of the Roman Empire.",
        "release_date": "2025-05-08",
        "genre": "Drama, Historical, Action",
        "director": "Ridley Scott",
        "rating": 8.1,
        "cast": [
            {
                "actor": "Oscar Isaac",
                "role": "Maximus"
            },
            {
                "actor": "Tom Hardy",
                "role": "Cassius"
            },
            {
                "actor": "Penélope Cruz",
                "role": "Julia"
            },
            {
                "actor": "David Oyelowo",
                "role": "Marcus"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/those-about-to-die.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/those-about-to-die.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Time Bandits",
        "description": "A fantastical adventure film where a young boy is whisked away through time by a group of dwarfs, each with their own agenda, as they travel through history, encountering legendary figures and strange worlds along the way.",
        "release_date": "2024-12-15",
        "genre": "Adventure, Fantasy, Comedy",
        "director": "Terry Gilliam",
        "rating": 7.9,
        "cast": [
            {
                "actor": "John Cleese",
                "role": "Robin Hood"
            },
            {
                "actor": "Sean Connery",
                "role": "King Agamemnon"
            },
            {
                "actor": "Katherine Helmond",
                "role": "The Supreme Being"
            },
            {
                "actor": "Michael Palin",
                "role": "Time Bandit Leader"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/time-bandits.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/time-bandits.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "Under the Bridge",
        "description": "A gripping drama about a troubled young woman who finds herself caught between two worlds: the luxury of her family's wealth and the harsh realities of life under a bridge where she befriends a group of homeless individuals. As she learns their stories, she must decide where her true loyalties lie.",
        "release_date": "2025-04-22",
        "genre": "Drama, Social Issues",
        "director": "Ava DuVernay",
        "rating": 8.2,
        "cast": [
            {
                "actor": "Saoirse Ronan",
                "role": "Claire"
            },
            {
                "actor": "Mahershala Ali",
                "role": "Ray"
            },
            {
                "actor": "Tessa Thompson",
                "role": "Monica"
            },
            {
                "actor": "David Oyelowo",
                "role": "Tom"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/under-the-bridge.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/under-the-bridge.jpg",
        "is_deleted": false,
        "language": "English"
    }, 
    {
        "title": "We Were the Lucky Ones",
        "description": "Based on the bestselling novel, this historical drama tells the gripping story of a Jewish family torn apart during World War II. Amidst the horrors of war, they struggle to survive, holding on to the hope of reunion against all odds. Their journey spans across Europe, fighting not only the enemy but also the forces of fate.",
        "release_date": "2025-07-11",
        "genre": "Drama, Historical, War",
        "director": "Steven Spielberg",
        "rating": 8.5,
        "cast": [
            {
                "actor": "Florence Pugh",
                "role": "Genia"
            },
            {
                "actor": "Timothée Chalamet",
                "role": "Jakob"
            },
            {
                "actor": "Jeff Goldblum",
                "role": "Feliks"
            },
            {
                "actor": "Rachel Weisz",
                "role": "Anna"
            }
        ],
        "poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/we-were-the-lucky-ones.jpg",
        "test_poster_url": "https://moviu.s3.us-east-1.amazonaws.com/movies/25-11-2024/we-were-the-lucky-ones.jpg",
        "is_deleted": false,
        "language": "English"
    }
]


