import fs from 'fs';
import path from 'path';

export const hollywood100 = [
  // 1-10
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    releaseYear: 1994,
    genres: ["Drama"],
    synopsis: "Over the course of several years, two convicts form a friendship, seeking solace and redemption through basic compassion.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2OGI0XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    releaseYear: 1972,
    genres: ["Crime", "Drama"],
    synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtMDRjYTg2ZmE4XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Marlon Brando", "Al Pacino", "James Caan"]
  },
  {
    title: "The Godfather Part II",
    director: "Francis Ford Coppola",
    releaseYear: 1974,
    genres: ["Crime", "Drama"],
    synopsis: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son Michael tightens his grip on the family crime syndicate.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzNkNWJkNWItNTg5Mi00ZjY2LTgwYmYtMWU0MTlmMGI1YzY4XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Al Pacino", "Robert De Niro", "Robert Duvall"]
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    releaseYear: 2008,
    genres: ["Action", "Crime", "Drama"],
    synopsis: "When the menace known as the Joker wreaks havoc and chaos on Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
  },
  {
    title: "12 Angry Men",
    director: "Sidney Lumet",
    releaseYear: 1957,
    genres: ["Crime", "Drama"],
    synopsis: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to consider the evidence carefully.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYjE4NzdmOTcgNDExOS00YjIzLTlhOGMtNWU4N2FmNjgzNTdhXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Henry Fonda", "Lee J. Cobb", "Martin Balsam"]
  },
  {
    title: "Schindler's List",
    director: "Steven Spielberg",
    releaseYear: 1993,
    genres: ["Biography", "Drama", "History"],
    synopsis: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"]
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    releaseYear: 2003,
    genres: ["Action", "Adventure", "Drama"],
    synopsis: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"]
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    releaseYear: 1994,
    genres: ["Crime", "Drama"],
    synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    director: "Peter Jackson",
    releaseYear: 2001,
    genres: ["Action", "Adventure", "Drama"],
    synopsis: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"]
  },
  {
    title: "Fight Club",
    director: "David Fincher",
    releaseYear: 1999,
    genres: ["Drama"],
    synopsis: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YTAtNmFhNGQ1RmM3ZGQxXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
  },

  // 11-20
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    releaseYear: 1994,
    genres: ["Drama", "Romance"],
    synopsis: "The history of the United States unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    genres: ["Action", "Adventure", "Sci-Fi"],
    synopsis: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    director: "Peter Jackson",
    releaseYear: 2002,
    genres: ["Action", "Adventure", "Drama"],
    synopsis: "While Frodo and Sam edge closer to Mordor with Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ODFmLThjNjctNDBhNWVhOWM3ZDUxXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"]
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    director: "Irvin Kershner",
    releaseYear: 1980,
    genres: ["Action", "Adventure", "Fantasy"],
    synopsis: "After the Empire overpowers the Rebel Alliance, Luke Skywalker begins his Jedi training with Yoda while his friends are pursued across the galaxy.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MmFjNzExXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"]
  },
  {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    releaseYear: 1999,
    genres: ["Action", "Sci-Fi"],
    synopsis: "When computer hacker Neo is led to a forbidding underworld, he discovers the life he knows is the elaborate deception of an evil cyber-intelligence.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
  },
  {
    title: "Goodfellas",
    director: "Martin Scorsese",
    releaseYear: 1990,
    genres: ["Biography", "Crime", "Drama"],
    synopsis: "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and mob partners Jimmy Conway and Tommy DeVito.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGEtY2Y5ZC00YjRhLWI5ZjMtZmQxMzA0MmUxMTU2XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci"]
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    releaseYear: 2014,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    synopsis: "When Earth becomes uninhabitable in the future, a team of researchers travels through a wormhole in space in an attempt to ensure humanity's survival.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
  },
  {
    title: "Parasite",
    director: "Bong Joon Ho",
    releaseYear: 2019,
    genres: ["Drama", "Thriller"],
    synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"]
  },
  {
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    releaseYear: 2001,
    genres: ["Animation", "Adventure", "Family"],
    synopsis: "During her family's move to the suburbs, a 10-year-old girl wanders into a world ruled by gods, witches, and spirits where humans are changed into beasts.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"]
  },
  {
    title: "Saving Private Ryan",
    director: "Steven Spielberg",
    releaseYear: 1998,
    genres: ["Drama", "War"],
    synopsis: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzAzNmE4YjFmXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Tom Hanks", "Matt Damon", "Tom Sizemore"]
  },

  // 21-30
  {
    title: "The Green Mile",
    director: "Frank Darabont",
    releaseYear: 1999,
    genres: ["Crime", "Drama", "Fantasy"],
    synopsis: "A tale set on death row, where gentle giant John Coffey possesses the mysterious power to heal people's ailments.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg",
    cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"]
  },
  {
    title: "The Silence of the Lambs",
    director: "Jonathan Demme",
    releaseYear: 1991,
    genres: ["Crime", "Drama", "Thriller"],
    synopsis: "A young F.B.I. cadet must receive the help of an incarcerated cannibal killer to catch another serial killer.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"]
  },
  {
    title: "Se7en",
    director: "David Fincher",
    releaseYear: 1995,
    genres: ["Crime", "Drama", "Mystery"],
    synopsis: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhZDU5NDM1XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Morgan Freeman", "Brad Pitt", "Kevin Spacey"]
  },
  {
    title: "Oppenheimer",
    director: "Christopher Nolan",
    releaseYear: 2023,
    genres: ["Biography", "Drama", "History"],
    synopsis: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZmVhYi00ZTFmLTk5NTEtNGFiNzczMmE5N2Q1XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon"]
  },
  {
    title: "Gladiator",
    director: "Ridley Scott",
    releaseYear: 2000,
    genres: ["Action", "Adventure", "Drama"],
    synopsis: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"]
  },
  {
    title: "The Prestige",
    director: "Christopher Nolan",
    releaseYear: 2006,
    genres: ["Drama", "Mystery", "Sci-Fi"],
    synopsis: "After a tragic accident, two stage magicians in London engage in a battle to create the ultimate illusion while sacrificing everything.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg",
    cast: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"]
  },
  {
    title: "The Departed",
    director: "Martin Scorsese",
    releaseYear: 2006,
    genres: ["Crime", "Drama", "Thriller"],
    synopsis: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg",
    cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
  },
  {
    title: "Whiplash",
    director: "Damien Chazelle",
    releaseYear: 2014,
    genres: ["Drama", "Music"],
    synopsis: "A promising young drummer enrolls at a cut-throat music conservatory where his instructor stops at nothing to realize his potential.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDhkZDE0XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Miles Teller", "J.K. Simmons", "Melissa Benoist"]
  },
  {
    title: "Memento",
    director: "Christopher Nolan",
    releaseYear: 2000,
    genres: ["Mystery", "Thriller"],
    synopsis: "A man with short-term memory loss attempts to track down his wife's murderer using notes and tattoos.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzY4LWI5MTktMzY4ZmI5MTbddmQ3XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"]
  },
  {
    title: "Alien",
    director: "Ridley Scott",
    releaseYear: 1979,
    genres: ["Horror", "Sci-Fi"],
    synopsis: "The crew of a commercial spacecraft encounters a deadly lifeform after investigating an unknown transmission.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BN2E1ZTU4NmEtZGE5Mi00NTBiLTkwNDYtYzk5MzU2OGVmMDYyXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Sigourney Weaver", "Tom Skerritt", "John Hurt"]
  },

  // 31-40
  {
    title: "Aliens",
    director: "James Cameron",
    releaseYear: 1986,
    genres: ["Action", "Adventure", "Sci-Fi"],
    synopsis: "Decades after surviving the Nostromo incident, Ellen Ripley returns to LV-426 with a squad of colonial marines.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDVjODQzXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Sigourney Weaver", "Michael Biehn", "Carrie Henn"]
  },
  {
    title: "Django Unchained",
    director: "Quentin Tarantino",
    releaseYear: 2012,
    genres: ["Drama", "Western"],
    synopsis: "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg",
    cast: ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"]
  },
  {
    title: "The Lion King",
    director: "Roger Allers, Rob Minkoff",
    releaseYear: 1994,
    genres: ["Animation", "Adventure", "Drama"],
    synopsis: "Lion prince Simba and his father are targeted by his bitter uncle Scar, who wants to ascend the throne himself.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
    cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"]
  },
  {
    title: "The Shining",
    director: "Stanley Kubrick",
    releaseYear: 1980,
    genres: ["Drama", "Horror"],
    synopsis: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into madness.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ODIxNzRjNmQ3XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"]
  },
  {
    title: "WALL-E",
    director: "Andrew Stanton",
    releaseYear: 2008,
    genres: ["Animation", "Adventure", "Family"],
    synopsis: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will decide the fate of mankind.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg",
    cast: ["Ben Burtt", "Elissa Knight", "Jeff Garlin"]
  },
  {
    title: "Avengers: Infinity War",
    director: "Anthony Russo, Joe Russo",
    releaseYear: 2018,
    genres: ["Action", "Adventure", "Sci-Fi"],
    synopsis: "The Avengers and their allies must sacrifice all to defeat Thanos before his blitz of devastation puts an end to the universe.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    cast: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"]
  },
  {
    title: "Avengers: Endgame",
    director: "Anthony Russo, Joe Russo",
    releaseYear: 2019,
    genres: ["Action", "Adventure", "Drama"],
    synopsis: "After the devastating events of Infinity War, the remaining Avengers assemble once more to reverse Thanos' actions.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"]
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    releaseYear: 2018,
    genres: ["Animation", "Action", "Adventure"],
    synopsis: "Teen Miles Morales becomes the new Spider-Man and joins other Spider-Heroes from various dimensions to stop a threat to all realities.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgyNV5BMl5BanBnXkFtZTgwNjkwNTM3NjM@._V1_SX300.jpg",
    cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"]
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    releaseYear: 2023,
    genres: ["Animation", "Action", "Adventure"],
    synopsis: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its existence.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ODQ3LWJhNzctYzBlMTdiOWG1NDdhXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac"]
  },
  {
    title: "Coco",
    director: "Lee Unkrich, Adrian Molina",
    releaseYear: 2017,
    genres: ["Animation", "Adventure", "Comedy"],
    synopsis: "Aspiring musician Miguel enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2UxNDtaNjE1NDY3XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"]
  },

  // 41-50
  {
    title: "Joker",
    director: "Todd Phillips",
    releaseYear: 2019,
    genres: ["Crime", "Drama", "Thriller"],
    synopsis: "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWExMDUtMjFiZmMzODFlZDA3XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"]
  },
  {
    title: "Inglourious Basterds",
    director: "Quentin Tarantino",
    releaseYear: 2009,
    genres: ["Adventure", "Drama", "War"],
    synopsis: "In Nazi-occupied France, a plan to assassinate Nazi leaders by Jewish U.S. soldiers coincides with a theatre owner's vengeful plans.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2NIyN0XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Brad Pitt", "Diane Kruger", "Christoph Waltz"]
  },
  {
    title: "Toy Story",
    director: "John Lasseter",
    releaseYear: 1995,
    genres: ["Animation", "Adventure", "Comedy"],
    synopsis: "A cowboy doll is profoundly threatened when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Tom Hanks", "Tim Allen", "Don Rickles"]
  },
  {
    title: "Toy Story 3",
    director: "Lee Unkrich",
    releaseYear: 2010,
    genres: ["Animation", "Adventure", "Comedy"],
    synopsis: "The toys are mistakenly delivered to a day-care center right before Andy leaves for college, and it's up to Woody to save them.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SX300.jpg",
    cast: ["Tom Hanks", "Tim Allen", "Joan Cusack"]
  },
  {
    title: "Up",
    director: "Pete Docter, Bob Peterson",
    releaseYear: 2009,
    genres: ["Animation", "Adventure", "Comedy"],
    synopsis: "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYjBkMjAzMzMtNDk5Ny00MzQ0LWE2N2QtYTk4NTlmODk1NWY2XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Edward Asner", "Jordan Nagai", "John Ratzenberger"]
  },
  {
    title: "Braveheart",
    director: "Mel Gibson",
    releaseYear: 1995,
    genres: ["Biography", "Drama", "History"],
    synopsis: "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjFDmQxXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan"]
  },
  {
    title: "Good Will Hunting",
    director: "Gus Van Sant",
    releaseYear: 1997,
    genres: ["Drama", "Romance"],
    synopsis: "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTAtZTQ0ZmFkMDU2ZThkXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Robin Williams", "Matt Damon", "Ben Affleck"]
  },
  {
    title: "Requiem for a Dream",
    director: "Darren Aronofsky",
    releaseYear: 2000,
    genres: ["Drama"],
    synopsis: "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOTdiNzTY2MjUtMjQ2OS00ZTFhLThjMTEtZTI0ZTBjYThlZDRkXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Ellen Burstyn", "Jared Leto", "Jennifer Connelly"]
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    director: "Michel Gondry",
    releaseYear: 2004,
    genres: ["Drama", "Romance", "Sci-Fi"],
    synopsis: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTg0OQ@@._V1_SX300.jpg",
    cast: ["Jim Carrey", "Kate Winslet", "Tom Wilkinson"]
  },
  {
    title: "Reservoir Dogs",
    director: "Quentin Tarantino",
    releaseYear: 1992,
    genres: ["Crime", "Thriller"],
    synopsis: "When a simple jewelry heist goes wrong, surviving criminals suspect that one of them is a police informant.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMGZlMzNiNzItYmFiNy00OWM2LWI0ZGUtN2RkM2VkZDNmODJhXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Harvey Keitel", "Tim Roth", "Michael Madsen"]
  },

  // 51-60
  {
    title: "Taxi Driver",
    director: "Martin Scorsese",
    releaseYear: 1976,
    genres: ["Crime", "Drama"],
    synopsis: "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence fuels his urge for violent action.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BM2M2Yjg5MGMtMmNmOS00MmJmLTk5YmItMmQ3YTY4MmE4ZWM4XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Robert De Niro", "Jodie Foster", "Cybill Shepherd"]
  },
  {
    title: "The Wolf of Wall Street",
    director: "Martin Scorsese",
    releaseYear: 2013,
    genres: ["Biography", "Comedy", "Crime"],
    synopsis: "Based on the true story of Jordan Belfort, from his rise as a wealthy stock-broker living the high life to his fall involving crime and corruption.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
    cast: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"]
  },
  {
    title: "Jurassic Park",
    director: "Steven Spielberg",
    releaseYear: 1993,
    genres: ["Action", "Adventure", "Sci-Fi"],
    synopsis: "A paleontologist touring a cloned dinosaur theme park is tasked with protecting two children after a power failure unleashes the dinosaurs.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
    cast: ["Sam Neill", "Laura Dern", "Jeff Goldblum"]
  },
  {
    title: "Titanic",
    director: "James Cameron",
    releaseYear: 1997,
    genres: ["Drama", "Romance"],
    synopsis: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"]
  },
  {
    title: "Avatar",
    director: "James Cameron",
    releaseYear: 2009,
    genres: ["Action", "Adventure", "Fantasy"],
    synopsis: "A paraplegic Marine dispatched to the moon Pandora becomes torn between following his orders and protecting an alien civilization.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NGItMDMwM2RjNDlhNmT0XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"]
  },
  {
    title: "No Country for Old Men",
    director: "Ethan Coen, Joel Coen",
    releaseYear: 2007,
    genres: ["Crime", "Drama", "Thriller"],
    synopsis: "Violence ensues after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
    cast: ["Tommy Lee Jones", "Javier Bardem", "Josh Brolin"]
  },
  {
    title: "Kill Bill: Vol. 1",
    director: "Quentin Tarantino",
    releaseYear: 2003,
    genres: ["Action", "Crime", "Drama"],
    synopsis: "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Uma Thurman", "David Carradine", "Daryl Hannah"]
  },
  {
    title: "Kill Bill: Vol. 2",
    director: "Quentin Tarantino",
    releaseYear: 2004,
    genres: ["Action", "Crime", "Thriller"],
    synopsis: "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous Elle Driver.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNmFiYmJmN2QtNWQwMi00MzliLThiOWMtZjQxNGRhZTQ1MjgyXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Uma Thurman", "David Carradine", "Michael Madsen"]
  },
  {
    title: "Mad Max: Fury Road",
    director: "George Miller",
    releaseYear: 2015,
    genres: ["Action", "Adventure", "Sci-Fi"],
    synopsis: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a drifter named Max.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyOS00Zjg4LThkYjEtZjE3ODliNDVkNWMxXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"]
  },
  {
    title: "The Truman Show",
    director: "Peter Weir",
    releaseYear: 1998,
    genres: ["Comedy", "Drama"],
    synopsis: "An insurance salesman discovers his whole life is actually a reality TV show broadcast to the entire world.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Jim Carrey", "Ed Harris", "Laura Linney"]
  },

  // 61-70
  {
    title: "Shutter Island",
    director: "Martin Scorsese",
    releaseYear: 2010,
    genres: ["Mystery", "Thriller"],
    synopsis: "In 1954, a U.S. Marshal investigates the disappearance of a patient who escaped from a hospital for the criminally insane on Shutter Island.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1OTA3ZGZmXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Leonardo DiCaprio", "Emily Mortimer", "Mark Ruffalo"]
  },
  {
    title: "Blade Runner 2049",
    director: "Denis Villeneuve",
    releaseYear: 2017,
    genres: ["Action", "Drama", "Mystery"],
    synopsis: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, missing for thirty years.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg",
    cast: ["Harrison Ford", "Ryan Gosling", "Ana de Armas"]
  },
  {
    title: "Dune: Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    genres: ["Action", "Adventure", "Drama"],
    synopsis: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset on the dangerous planet Arrakis.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtODExMTMxODBlOWEyXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Timothée Chalamet", "Rebecca Ferguson", "Zendaya"]
  },
  {
    title: "Dune: Part Two",
    director: "Denis Villeneuve",
    releaseYear: 2024,
    genres: ["Action", "Adventure", "Drama"],
    synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"]
  },
  {
    title: "La La Land",
    director: "Damien Chazelle",
    releaseYear: 2016,
    genres: ["Comedy", "Drama", "Music"],
    synopsis: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg",
    cast: ["Ryan Gosling", "Emma Stone", "Rosemarie DeWitt"]
  },
  {
    title: "The Grand Budapest Hotel",
    director: "Wes Anderson",
    releaseYear: 2014,
    genres: ["Adventure", "Comedy", "Crime"],
    synopsis: "A writer encounters the owner of an aging high-class hotel, who recounts his early years as a lobby boy under a legendary concierge.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"]
  },
  {
    title: "Gone Girl",
    director: "David Fincher",
    releaseYear: 2014,
    genres: ["Drama", "Mystery", "Thriller"],
    synopsis: "With his wife's disappearance having become a media circus, a man sees the spotlight turned on him when he is suspected of foul play.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3OTAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg",
    cast: ["Ben Affleck", "Rosamund Pike", "Neil Patrick Harris"]
  },
  {
    title: "Her",
    director: "Spike Jonze",
    releaseYear: 2013,
    genres: ["Drama", "Romance", "Sci-Fi"],
    synopsis: "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjE5MDE@._V1_SX300.jpg",
    cast: ["Joaquin Phoenix", "Amy Adams", "Scarlett Johansson"]
  },
  {
    title: "Arrival",
    director: "Denis Villeneuve",
    releaseYear: 2016,
    genres: ["Drama", "Mystery", "Sci-Fi"],
    synopsis: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg",
    cast: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"]
  },
  {
    title: "Prisoners",
    director: "Denis Villeneuve",
    releaseYear: 2013,
    genres: ["Crime", "Drama", "Mystery"],
    synopsis: "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as police pursue multiple leads.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX300.jpg",
    cast: ["Hugh Jackman", "Jake Gyllenhaal", "Viola Davis"]
  },

  // 71-80
  {
    title: "The Social Network",
    director: "David Fincher",
    releaseYear: 2010,
    genres: ["Biography", "Drama"],
    synopsis: "As Harvard student Mark Zuckerberg creates Facebook, he is sued by the twins who claimed he stole their idea and his alienated co-founder.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"]
  },
  {
    title: "Everything Everywhere All at Once",
    director: "Daniel Kwan, Daniel Scheinert",
    releaseYear: 2022,
    genres: ["Action", "Adventure", "Comedy"],
    synopsis: "A middle-aged Chinese immigrant is swept up into an adventure where she alone can save existence by exploring multiverse realities.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"]
  },
  {
    title: "1917",
    director: "Sam Mendes",
    releaseYear: 2019,
    genres: ["Action", "Drama", "War"],
    synopsis: "Two British soldiers are tasked with delivering an urgent message deep in enemy territory to save 1,600 men during World War I.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtVDNmYDlhOWMwZGYxXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Dean-Charles Chapman", "George MacKay", "Daniel Mays"]
  },
  {
    title: "Ford v Ferrari",
    director: "James Mangold",
    releaseYear: 2019,
    genres: ["Action", "Biography", "Drama"],
    synopsis: "American car designer Carroll Shelby and driver Ken Miles build a revolutionary race car for Ford to defeat Ferrari at Le Mans in 1966.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5NmM2XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Matt Damon", "Christian Bale", "Jon Bernthal"]
  },
  {
    title: "Get Out",
    director: "Jordan Peele",
    releaseYear: 2017,
    genres: ["Horror", "Mystery", "Thriller"],
    synopsis: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness reaches a boiling point.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwNzc3MTI@._V1_SX300.jpg",
    cast: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"]
  },
  {
    title: "Logan",
    director: "James Mangold",
    releaseYear: 2017,
    genres: ["Action", "Drama", "Sci-Fi"],
    synopsis: "In a future where mutants are nearly extinct, an elderly Logan must protect Laura, a young mutant child pursued by dark forces.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYzc5MTU4NjkKUtOTazYi00NDcyLThkMDAtNDUyOTYxNWVlNDlmXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Hugh Jackman", "Patrick Stewart", "Dafne Keen"]
  },
  {
    title: "The Batman",
    director: "Matt Reeves",
    releaseYear: 2022,
    genres: ["Action", "Crime", "Drama"],
    synopsis: "When a sadistic serial killer targets key political figures, Batman investigates Gotham's corruption and questions his family's involvement.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNTAwZGEtNTAxNC00ODVjLTgzOTYtYmVmOWYxNmY2MmU0XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Robert Pattinson", "Zoë Kravitz", "Jeffrey Wright"]
  },
  {
    title: "Barbie",
    director: "Greta Gerwig",
    releaseYear: 2023,
    genres: ["Adventure", "Comedy", "Fantasy"],
    synopsis: "Stereotypical Barbie experiences an existential crisis and journeys to the real world with Ken to discover true meaning.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljZDBhN2RmXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Margot Robbie", "Ryan Gosling", "America Ferrera"]
  },
  {
    title: "Top Gun: Maverick",
    director: "Joseph Kosinski",
    releaseYear: 2022,
    genres: ["Action", "Drama"],
    synopsis: "After thirty years, Maverick trains TOP GUN's elite graduates for a specialized mission demanding the ultimate sacrifice.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMmIwZDMyYWUtNTU0ZS00ODJhLTg2ZmEtMTk5ZmYzODcxODYxXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"]
  },
  {
    title: "The Matrix Reloaded",
    director: "Lana Wachowski, Lilly Wachowski",
    releaseYear: 2003,
    genres: ["Action", "Sci-Fi"],
    synopsis: "Neo, Trinity and Morpheus continue to lead the revolt against the Machine Army, unleashing extraordinary skills and weaponry.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00ODE1LTg5OGYtODkxN2UzOTE3YjA3XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
  },

  // 81-90
  {
    title: "The Matrix Revolutions",
    director: "Lana Wachowski, Lilly Wachowski",
    releaseYear: 2003,
    genres: ["Action", "Sci-Fi"],
    synopsis: "Zion defends itself against machine invasion as Neo fights on multiple fronts while confronting the rogue Agent Smith.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzNlZTU2NzctYWVmNC00M2YzLWE2OTEtYjBhYmM5YWQxOTM1XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
  },
  {
    title: "The Dark Knight Rises",
    director: "Christopher Nolan",
    releaseYear: 2012,
    genres: ["Action", "Drama", "Thriller"],
    synopsis: "Eight years after the Joker's reign, Batman is forced from exile with the help of Catwoman to save Gotham from the terrorist Bane.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
    cast: ["Christian Bale", "Tom Hardy", "Anne Hathaway"]
  },
  {
    title: "Batman Begins",
    director: "Christopher Nolan",
    releaseYear: 2005,
    genres: ["Action", "Crime", "Drama"],
    synopsis: "After witnessing his parents' murder, Bruce Wayne trains with the League of Shadows and returns to Gotham to combat crime.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmBkMC00Ku3LWE1MzItYjVhY2Y0YmE0YzFhXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Christian Bale", "Michael Caine", "Liam Neeson"]
  },
  {
    title: "Iron Man",
    director: "Jon Favreau",
    releaseYear: 2008,
    genres: ["Action", "Adventure", "Sci-Fi"],
    synopsis: "After being held captive in an Afghan cave, billionaire industrialist Tony Stark creates a weaponized suit of armor to fight evil.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    cast: ["Robert Downey Jr.", "Gwyneth Paltrow", "Terrence Howard"]
  },
  {
    title: "Captain America: Civil War",
    director: "Anthony Russo, Joe Russo",
    releaseYear: 2016,
    genres: ["Action", "Sci-Fi"],
    synopsis: "Political involvement in the Avengers' affairs creates a deep rift between former allies Captain America and Iron Man.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
    cast: ["Chris Evans", "Robert Downey Jr.", "Scarlett Johansson"]
  },
  {
    title: "Guardians of the Galaxy",
    director: "James Gunn",
    releaseYear: 2014,
    genres: ["Action", "Adventure", "Comedy"],
    synopsis: "A group of intergalactic misfits must pull together to stop a fanatical warrior with plans to purge the universe.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTAwMDA5NDA1NDEsUtOTlhNi00OTIxLTgwOTUtYmIxN2FlGRmNDg3XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Chris Pratt", "Vin Diesel", "Bradley Cooper"]
  },
  {
    title: "Thor: Ragnarok",
    director: "Taika Waititi",
    releaseYear: 2017,
    genres: ["Action", "Adventure", "Comedy"],
    synopsis: "Imprisoned on Sakaar, Thor must race against time to return to Asgard and stop the ruthless villain Hela.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg",
    cast: ["Chris Hemsworth", "Tom Hiddleston", "Cate Blanchett"]
  },
  {
    title: "Black Panther",
    director: "Ryan Coogler",
    releaseYear: 2018,
    genres: ["Action", "Adventure", "Sci-Fi"],
    synopsis: "T'Challa leads the kingdom of Wakanda into a new future while confronting a challenger from his country's past.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg",
    cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"]
  },
  {
    title: "Casino Royale",
    director: "Martin Campbell",
    releaseYear: 2006,
    genres: ["Action", "Adventure", "Thriller"],
    synopsis: "After earning 00 status, secret agent James Bond enters a high-stakes poker game in Montenegro to defeat a terrorist banker.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNmU1OTlhY2EtOWM2Mi00MTM1LWE3YjMtZTUwZTM5NTUzMzg5XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Daniel Craig", "Eva Green", "Mads Mikkelsen"]
  },
  {
    title: "Skyfall",
    director: "Sam Mendes",
    releaseYear: 2012,
    genres: ["Action", "Adventure", "Thriller"],
    synopsis: "James Bond's loyalty to M is tested when MI6 comes under attack and 007 must hunt down the vengeful mastermind.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNWY1OGFkZjgtMTA2Yy00NzMwLTlhOTItYmUyYjE2OTcyMDRmXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Daniel Craig", "Javier Bardem", "Judi Dench"]
  },

  // 91-100
  {
    title: "Mission: Impossible - Fallout",
    director: "Christopher McQuarrie",
    releaseYear: 2018,
    genres: ["Action", "Adventure", "Thriller"],
    synopsis: "Ethan Hunt and his IMF team race against time after a mission goes wrong, pursued by assassins and former allies.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNjFiMDU3MTQtHPYxOS00YNDgtLTkyYjgtY2M0ZTJkOGFmZGI2XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Tom Cruise", "Henry Cavill", "Ving Rhames"]
  },
  {
    title: "John Wick",
    director: "Chad Stahelski",
    releaseYear: 2014,
    genres: ["Action", "Crime", "Thriller"],
    synopsis: "An ex-hit-man comes out of retirement to track down the gangsters that took everything from him.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTgzOTZkMDE@._V1_SX300.jpg",
    cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"]
  },
  {
    title: "John Wick: Chapter 4",
    director: "Chad Stahelski",
    releaseYear: 2023,
    genres: ["Action", "Crime", "Thriller"],
    synopsis: "John Wick uncovers a path to defeating The High Table, facing off against new enemies across Paris, Osaka, and Berlin.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård"]
  },
  {
    title: "Gladiator II",
    director: "Ridley Scott",
    releaseYear: 2024,
    genres: ["Action", "Adventure", "Drama"],
    synopsis: "Lucius must enter the Colosseum and look to his past to find strength and return the glory of Rome to its people.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjY5MTRlZjMtMzNhYi00NGQ3LWE3NWItYTlmNWQzYmIzNDM3XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Paul Mescal", "Pedro Pascal", "Denzel Washington"]
  },
  {
    title: "A Beautiful Mind",
    director: "Ron Howard",
    releaseYear: 2001,
    genres: ["Biography", "Drama"],
    synopsis: "After John Nash, a brilliant mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    cast: ["Russell Crowe", "Ed Harris", "Jennifer Connelly"]
  },
  {
    title: "Catch Me If You Can",
    director: "Steven Spielberg",
    releaseYear: 2002,
    genres: ["Biography", "Crime", "Drama"],
    synopsis: "Barely 21 yet, Frank Abagnale Jr. works as a doctor, lawyer, and co-pilot while being pursued by FBI agent Carl Hanratty.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTE0NDIzNTU2NDJeQWpwZ15BbWU4MDQ4NTE2MjE@._V1_SX300.jpg",
    cast: ["Leonardo DiCaprio", "Tom Hanks", "Christopher Walken"]
  },
  {
    title: "The Pianist",
    director: "Roman Polanski",
    releaseYear: 2002,
    genres: ["Biography", "Drama", "Music"],
    synopsis: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto during World War II.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Adrien Brody", "Thomas Kretschmann", "Frank Finlay"]
  },
  {
    title: "American Psycho",
    director: "Mary Harron",
    releaseYear: 2000,
    genres: ["Crime", "Drama", "Horror"],
    synopsis: "A wealthy New York City investment banking executive hides his psychopathic ego from his co-workers and friends.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYzA2ZWUxZjctMDQ0My00ZTg3LWIyNDctNDYzZWJhMzY2OWRlXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Christian Bale", "Justin Theroux", "Josh Lucas"]
  },
  {
    title: "Cast Away",
    director: "Robert Zemeckis",
    releaseYear: 2000,
    genres: ["Adventure", "Drama", "Romance"],
    synopsis: "A FedEx executive undergoes a physical and emotional transformation after crash landing on a deserted Pacific island.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA4NjQ1ODIwN15BMl5BanBnXkFtZTYwNTM4MTA3._V1_SX300.jpg",
    cast: ["Tom Hanks", "Helen Hunt", "Paul Sanchez"]
  },
  {
    title: "Zodiac",
    director: "David Fincher",
    releaseYear: 2007,
    genres: ["Crime", "Drama", "Mystery"],
    synopsis: "Between 1968 and 1983, a San Francisco cartoonist becomes obsessed with tracking down the elusive Zodiac Killer.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTc2ODgwNTU0N15BMl5BanBnXkFtZTcwOTM5OTMzMw@@._V1_SX300.jpg",
    cast: ["Jake Gyllenhaal", "Robert Downey Jr.", "Mark Ruffalo"]
  }
];

export const bollywood100 = [
  // 1-10
  {
    title: "3 Idiots",
    director: "Rajkumar Hirani",
    releaseYear: 2009,
    genres: ["Comedy", "Drama"],
    synopsis: "Two friends search for their long-lost college companion while revisiting their college days and memories of their friend who inspired them to think differently.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Aamir Khan", "Madhavan", "Mona Singh"]
  },
  {
    title: "Dangal",
    director: "Nitesh Tiwari",
    releaseYear: 2016,
    genres: ["Action", "Biography", "Drama"],
    synopsis: "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SX300.jpg",
    cast: ["Aamir Khan", "Sakshi Tanwar", "Fatima Sana Shaikh"]
  },
  {
    title: "Taare Zameen Par",
    director: "Aamir Khan",
    releaseYear: 2007,
    genres: ["Drama", "Family"],
    synopsis: "An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDYwNmY5ZDYtMDRiMi00Y2Y0LTk1MDYtOGU3YTUwZWNmOTYyXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Darsheel Safary", "Aamir Khan", "Tisca Chopra"]
  },
  {
    title: "Sholay",
    director: "Ramesh Sippy",
    releaseYear: 1975,
    genres: ["Action", "Adventure", "Comedy"],
    synopsis: "After his family is murdered by a notorious bandit, a former police officer enlists the services of two outlaws to capture him.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTFmLWJkMTAtNDcxOTJkYjc4MGU0XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Sanjeev Kumar", "Dharmendra", "Amitabh Bachchan"]
  },
  {
    title: "Dilwale Dulhania Le Jayenge",
    director: "Aditya Chopra",
    releaseYear: 1995,
    genres: ["Drama", "Romance"],
    synopsis: "When Raj meets Simran in Europe, it isn't love at first sight but when Simran moves to India for an arranged marriage, love makes its presence felt.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDQ2MmRhNWYtNWQ0Mi00ODcxLWJlNmUtZTE1MDY0YTkyZWM4XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Shah Rukh Khan", "Kajol", "Amrish Puri"]
  },
  {
    title: "Lagaan: Once Upon a Time in India",
    director: "Ashutosh Gowariker",
    releaseYear: 2001,
    genres: ["Drama", "Musical", "Sport"],
    synopsis: "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtBhY1Yy00MTBhLTgwOGUtYTY5MmY3ODhhZmQ4XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Aamir Khan", "Gracy Singh", "Rachel Shelley"]
  },
  {
    title: "Gangs of Wasseypur",
    director: "Anurag Kashyap",
    releaseYear: 2012,
    genres: ["Action", "Comedy", "Crime"],
    synopsis: "A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur, and ignites a deadly blood feud spanning three generations.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_SX300.jpg",
    cast: ["Manoj Bajpayee", "Richa Chadha", "Nawazuddin Siddiqui"]
  },
  {
    title: "Swades",
    director: "Ashutosh Gowariker",
    releaseYear: 2004,
    genres: ["Drama"],
    synopsis: "A successful Indian scientist working at NASA returns to an Indian village to find his childhood nanny, leading to a life-changing journey.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYzExOTcwNjYtOY2Y2MS00Y2FlLTk2Y2EtZmQxNmE1NjkzNTI0XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Shah Rukh Khan", "Gayatri Joshi", "Kishori Ballal"]
  },
  {
    title: "Andhadhun",
    director: "Sriram Raghavan",
    releaseYear: 2018,
    genres: ["Crime", "Drama", "Music"],
    synopsis: "A series of mysterious events changes the life of a blind pianist, who now must report a crime that he should not have seen.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZWZhMjhhZmYtOTIzOC00MGYzLWI1OGYtM2ZkN2IxNTI4ZWI3XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Ayushmann Khurrana", "Tabu", "Radhika Apte"]
  },
  {
    title: "Tumbbad",
    director: "Rahi Anil Barve, Anand Gandhi",
    releaseYear: 2018,
    genres: ["Drama", "Fantasy", "Horror"],
    synopsis: "A mythological story about a human who builds a shrine for Hastar, a monster who should not be worshipped, and the generational greed that follows.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYmQxNmU4ZjgtZjk2ND00OGFiLTk1YmMtNzQ2MmK1MzcxZGY4XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Sohum Shah", "Jyoti Malshe", "Anita Date-Kelkar"]
  },

  // 11-20
  {
    title: "Zindagi Na Milegi Dobara",
    director: "Zoya Akhtar",
    releaseYear: 2011,
    genres: ["Comedy", "Drama"],
    synopsis: "Three friends decide to turn their fantasy vacation into reality after one of their number becomes engaged, discovering truth and romance in Spain.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYWZhMmYwZmYtYWU4My00OWU3LWI5NjgtYjg2NWU0Y2EyZDA2XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Hrithik Roshan", "Farhan Akhtar", "Abhay Deol"]
  },
  {
    title: "Dil Chahta Hai",
    director: "Farhan Akhtar",
    releaseYear: 2001,
    genres: ["Comedy", "Drama", "Romance"],
    synopsis: "Three inseparable childhood friends are separated after college due to their deeply different approaches to relationships.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOGZmOGVjNmQtMTRmYi00YjBhLTk2N2EtYWYxZTU3ZDBkYzdmXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Aamir Khan", "Saif Ali Khan", "Akshaye Khanna"]
  },
  {
    title: "Queen",
    director: "Vikas Bahl",
    releaseYear: 2013,
    genres: ["Adventure", "Comedy", "Drama"],
    synopsis: "A Delhi girl from a traditional family sets out on a solo honeymoon after her marriage gets cancelled, finding independence and self-worth.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA4Nzg5NDQxNV5BMl5BanBnXkFtZTgwNTI1NDA0MDE@._V1_SX300.jpg",
    cast: ["Kangana Ranaut", "Rajkummar Rao", "Lisa Haydon"]
  },
  {
    title: "Rang De Basanti",
    director: "Rakeysh Omprakash Mehra",
    releaseYear: 2006,
    genres: ["Comedy", "Crime", "Drama"],
    synopsis: "The story of six young Indians who assist an English woman to film a documentary on the freedom fighters of their past, sparking an awakening.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNGY0Y2FmNGItOGEzNy00MTE2LThjZTItYWY0ZjEyNzBkOGIzXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Aamir Khan", "Soha Ali Khan", "Siddharth"]
  },
  {
    title: "Chak De! India",
    director: "Shimit Amin",
    releaseYear: 2007,
    genres: ["Drama", "Sport"],
    synopsis: "Kabir Khan, a former hockey star tainted as a traitor, attempts to redeem himself by coaching the Indian Women's National Hockey Team to glory.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMmRlYTA4NGQtNTBhNy00YmU4LTg5YjItN2M1ODAyM2FjMzI1XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Shah Rukh Khan", "Vidya Malvade", "Sagarika Ghatge"]
  },
  {
    title: "Bajrangi Bhaijaan",
    director: "Kabir Khan",
    releaseYear: 2015,
    genres: ["Action", "Adventure", "Comedy"],
    synopsis: "An Indian man with a magnanimous heart takes a mute Pakistani girl back to her hometown to reunite her with her family.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjQ1NzM2MTMwOV5BMl5BanBnXkFtZTgwNDQxNjY3NTE@._V1_SX300.jpg",
    cast: ["Salman Khan", "Harshaali Malhotra", "Nawazuddin Siddiqui"]
  },
  {
    title: "PK",
    director: "Rajkumar Hirani",
    releaseYear: 2014,
    genres: ["Comedy", "Drama", "Sci-Fi"],
    synopsis: "An alien on Earth loses the only device he can use to communicate with his spaceship, exposing the hypocrisies of religious dogma.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_SX300.jpg",
    cast: ["Aamir Khan", "Anushka Sharma", "Sanjay Dutt"]
  },
  {
    title: "Barfi!",
    director: "Anurag Basu",
    releaseYear: 2012,
    genres: ["Comedy", "Drama", "Romance"],
    synopsis: "Three young people learn that love can neither be defined nor contained by society's definition of normal and abnormal.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTgzNTk3MjUyMl5BMl5BanBnXkFtZTcwOTgwMzAwOA@@._V1_SX300.jpg",
    cast: ["Ranbir Kapoor", "Priyanka Chopra Jonas", "Ileana D'Cruz"]
  },
  {
    title: "Drishyam",
    director: "Nishikant Kamat",
    releaseYear: 2015,
    genres: ["Crime", "Drama", "Mystery"],
    synopsis: "Desperate measures are taken by a man who tries to save his family from the dark side of the law, after they commit an unexpected crime.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYmJhZmJlYTItZmZlNy00MGY0LTg0ZGMtNWFkYWU5NTA1YTNhXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Ajay Devgn", "Shriya Saran", "Tabu"]
  },
  {
    title: "RRR",
    director: "S.S. Rajamouli",
    releaseYear: 2022,
    genres: ["Action", "Drama"],
    synopsis: "A fearless revolutionary and an officer in the British force decide to join forces and chart out an inspiring path of freedom against the despotic rulers.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5NjBmZGFhXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["N.T. Rama Rao Jr.", "Ram Charan", "Alia Bhatt"]
  },

  // 21-30
  {
    title: "Baahubali: The Beginning",
    director: "S.S. Rajamouli",
    releaseYear: 2015,
    genres: ["Action", "Drama"],
    synopsis: "In ancient India, an adventurous and daring man becomes involved in a decade-old feud between two warring peoples.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty"]
  },
  {
    title: "Baahubali 2: The Conclusion",
    director: "S.S. Rajamouli",
    releaseYear: 2017,
    genres: ["Action", "Drama"],
    synopsis: "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers while waging war against Bhallaladeva.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOGNlNmRmMWEtZjgxYi00Yj COLTljZTUtODFjNDY5Mjg4OTM0XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty"]
  },
  {
    title: "Udaan",
    director: "Vikramaditya Motwane",
    releaseYear: 2010,
    genres: ["Drama"],
    synopsis: "Expelled from his school, a 16-year old boy returns home to his strict father and a six-year-old half-brother whom he didn't know existed.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzgxMzExOTMtZjY2Ny00ZTVmLTk0MzEtYTBhMDY5NGY1OTI4XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Rajat Barmecha", "Ronit Roy", "Manjot Singh"]
  },
  {
    title: "Kahaani",
    director: "Sujoy Ghosh",
    releaseYear: 2012,
    genres: ["Mystery", "Thriller"],
    synopsis: "A pregnant woman's search for her missing husband takes her from London to Kolkata during the Durga Puja festival, where she uncovers a conspiracy.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTg0ODkzOTIzMV5BMl5BanBnXkFtZTcwNDQ3ODE3Nw@@._V1_SX300.jpg",
    cast: ["Vidya Balan", "Parambrata Chattopadhyay", "Nawazuddin Siddiqui"]
  },
  {
    title: "Gully Boy",
    director: "Zoya Akhtar",
    releaseYear: 2019,
    genres: ["Drama", "Music"],
    synopsis: "A coming-of-age story based on the lives of street rappers in Mumbai, discovering voice through music and expression.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BODc4YjhiNGMtZjgzZC00N2E2LTg3NmMtNGQ3MDNiNDlhNmIwXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Ranveer Singh", "Alia Bhatt", "Siddhant Chaturvedi"]
  },
  {
    title: "Vicky Donor",
    director: "Shoojit Sircar",
    releaseYear: 2012,
    genres: ["Comedy", "Romance"],
    synopsis: "A fertility doctor convinces a young Punjabi man to become a sperm donor to earn extra money, leading to unexpected complications in his love life.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNTg1M2U1MjMtZTM1Ni00Y2FlLWFjMDctZjcxM2I4NmQ0MzE3XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Ayushmann Khurrana", "Yami Gautam", "Annu Kapoor"]
  },
  {
    title: "Piku",
    director: "Shoojit Sircar",
    releaseYear: 2015,
    genres: ["Comedy", "Drama"],
    synopsis: "A quirky road trip brings an aging eccentric father and his career-driven daughter closer together as they travel from Delhi to Kolkata.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTUwOTAyMDMzMF5BMl5BanBnXkFtZTgwOTU5Njg1NTE@._V1_SX300.jpg",
    cast: ["Deepika Padukone", "Amitabh Bachchan", "Irrfan Khan"]
  },
  {
    title: "The Lunchbox",
    director: "Ritesh Batra",
    releaseYear: 2013,
    genres: ["Drama", "Romance"],
    synopsis: "A mistaken delivery in Mumbai's famously efficient lunchbox delivery system connects a young housewife to an older man in the dusk of his life.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTUxMzg2NzgxOV5BMl5BanBnXkFtZTgwNDY0OTYnMDE@._V1_SX300.jpg",
    cast: ["Irrfan Khan", "Nimrat Kaur", "Nawazuddin Siddiqui"]
  },
  {
    title: "Jab We Met",
    director: "Imtiaz Ali",
    releaseYear: 2007,
    genres: ["Comedy", "Drama", "Romance"],
    synopsis: "A depressed wealthy businessman's life changes after he meets a spunky, talkative Punjabi girl on a train journey.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA5OTgxNDc1Ml5BMl5BanBnXkFtZTcwMTQ4NjA2MQ@@._V1_SX300.jpg",
    cast: ["Shahid Kapoor", "Kareena Kapoor", "Tarun Arora"]
  },
  {
    title: "Kal Ho Naa Ho",
    director: "Nikkhil Advani",
    releaseYear: 2003,
    genres: ["Comedy", "Drama", "Musical"],
    synopsis: "Naina, an introverted, depressed girl's life changes when she meets Aman, who harbors a secret that will change their lives forever.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYzA4ZDQ4ZjEtYjU3Ny00NDQ0LWI0ZTYtMmYwNjJmYTM1YTk3XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Preity Zinta", "Shah Rukh Khan", "Saif Ali Khan"]
  },

  // 31-40
  {
    title: "Kabhi Khushi Kabhie Gham...",
    director: "Karan Johar",
    releaseYear: 2001,
    genres: ["Drama", "Musical", "Romance"],
    synopsis: "After marrying a poor woman, rich Rahul is disowned by his father and moves to London. Years later, his younger brother Rohan embarks on a mission to bring Rahul back.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNTI2YTI0ZmEtZDM4OS00ODU3LTg2YWEtMmNmODc3OWQ0MmQxXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Shah Rukh Khan", "Kajol", "Amitabh Bachchan"]
  },
  {
    title: "Kuch Kuch Hota Hai",
    director: "Karan Johar",
    releaseYear: 1998,
    genres: ["Comedy", "Drama", "Musical"],
    synopsis: "During their college years, Anjali falls in love with Rahul, who loves Tina. Years later, Rahul's young daughter attempts to reunite Rahul and Anjali.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYWRlNTQ4MzUtZDcyOC00MTVkLWE3NzItNGJkNzcwYzlmYjQ4XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Shah Rukh Khan", "Kajol", "Rani Mukerji"]
  },
  {
    title: "Om Shanti Om",
    director: "Farah Khan",
    releaseYear: 2007,
    genres: ["Action", "Comedy", "Drama"],
    synopsis: "In the 1970s, Om, an aspiring actor, is murdered but is reincarnated in the present day to discover the mystery of his past life.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTgzMzcxNTExOF5BMl5BanBnXkFtZTcwOTU5NDkyMQ@@._V1_SX300.jpg",
    cast: ["Shah Rukh Khan", "Deepika Padukone", "Arjun Rampal"]
  },
  {
    title: "Don",
    director: "Farhan Akhtar",
    releaseYear: 2006,
    genres: ["Action", "Crime", "Thriller"],
    synopsis: "A simple man from the streets of Mumbai is recruited by a police officer to masquerade as the ruthless boss of an international gang.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYzA2MTBkYmUtOWZlNi00ZjQ1LWE1ZTYtOWYyZWMzMmE0M2NjXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Shah Rukh Khan", "Priyanka Chopra Jonas", "Boman Irani"]
  },
  {
    title: "Don 2",
    director: "Farhan Akhtar",
    releaseYear: 2011,
    genres: ["Action", "Crime", "Thriller"],
    synopsis: "Don turns himself in to the police in Malaysia to execute an elaborate heist on the German central bank in Berlin.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZmM1YjU3ZmQtYmY0ZS00ZjVkLWFkNTktNWMyYjlmODc2Y2VhXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Shah Rukh Khan", "Priyanka Chopra Jonas", "Boman Irani"]
  },
  {
    title: "My Name Is Khan",
    director: "Karan Johar",
    releaseYear: 2010,
    genres: ["Drama"],
    synopsis: "An Indian Muslim man with Asperger's syndrome takes a challenge to speak to the President of the United States on a cross-country journey.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA5MDg2MTIyOF5BMl5BanBnXkFtZTcwODgwMzAwNA@@._V1_SX300.jpg",
    cast: ["Shah Rukh Khan", "Kajol", "Jimmy Shergill"]
  },
  {
    title: "Veer-Zaara",
    director: "Yash Chopra",
    releaseYear: 2004,
    genres: ["Drama", "Musical", "Romance"],
    synopsis: "Veer-Zaara is a saga of love, separation, courage, and sacrifice between an Indian pilot and a Pakistani woman across 22 years.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZjkyMTEzZDQtOTI4Yy00OGJkLTk4NTUtZGFmMmMyNTM4NDAzXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Shah Rukh Khan", "Preity Zinta", "Rani Mukerji"]
  },
  {
    title: "Devdas",
    director: "Sanjay Leela Bhansali",
    releaseYear: 2002,
    genres: ["Drama", "Musical", "Romance"],
    synopsis: "After his wealthy family prohibits him from marrying the woman he is in love with, Devdas's life spirals downward as he takes up alcohol.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMzRjOTU2OTMtZTM1Ny00OWE4LTgyMTYtNDAwNGY2YTE3Y2NhXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Shah Rukh Khan", "Aishwarya Rai Bachchan", "Madhuri Dixit"]
  },
  {
    title: "Bajirao Mastani",
    director: "Sanjay Leela Bhansali",
    releaseYear: 2015,
    genres: ["Action", "Drama", "History"],
    synopsis: "An account of the romance between the Maratha Peshwa Bajirao and Mastani, a warrior princess of Bundelkhand.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA5OTc3NjExNV5BMl5BanBnXkFtZTgwODg1NTY3NzE@._V1_SX300.jpg",
    cast: ["Ranveer Singh", "Deepika Padukone", "Priyanka Chopra Jonas"]
  },
  {
    title: "Padmaavat",
    director: "Sanjay Leela Bhansali",
    releaseYear: 2018,
    genres: ["Drama", "History", "Romance"],
    synopsis: "Queen Padmavati is happily married to Maharawal Ratan Singh until Sultan Alauddin Khilji becomes obsessed with capturing her beauty.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTY3NTc0NDkwMl5BMl5BanBnXkFtZTgwNTc4NTMwNDI@._V1_SX300.jpg",
    cast: ["Deepika Padukone", "Ranveer Singh", "Shahid Kapoor"]
  },

  // 41-50
  {
    title: "Ghajini",
    director: "A.R. Murugadoss",
    releaseYear: 2008,
    genres: ["Action", "Drama", "Mystery"],
    synopsis: "A tycoon suffering from anterograde amnesia uses Polaroid photos and tattoos to hunt down the killer of his beloved Kalpana.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTY1NzM5NTg3NF5BMl5BanBnXkFtZTcwNzY3MDQ4MQ@@._V1_SX300.jpg",
    cast: ["Aamir Khan", "Asin Thottumkal", "Jiah Khan"]
  },
  {
    title: "Krrish",
    director: "Rakesh Roshan",
    releaseYear: 2006,
    genres: ["Action", "Adventure", "Sci-Fi"],
    synopsis: "Krishna is born with magical powers inherited from his father. When he falls in love with Priya, he follows her to Singapore and assumes the secret identity Krrish.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjE3OTgzNTQ4OF5BMl5BanBnXkFtZTcwNTg5MDQyMQ@@._V1_SX300.jpg",
    cast: ["Hrithik Roshan", "Priyanka Chopra Jonas", "Rekha"]
  },
  {
    title: "Koi... Mil Gaya",
    director: "Rakesh Roshan",
    releaseYear: 2003,
    genres: ["Action", "Drama", "Sci-Fi"],
    synopsis: "A developmentally disabled young man uses his late father's computer to contact an extraterrestrial lifeform, gaining extraordinary powers.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTQ4NTk1Mzg2MV5BMl5BanBnXkFtZTcwNDY5MDQyMQ@@._V1_SX300.jpg",
    cast: ["Hrithik Roshan", "Preity Zinta", "Rekha"]
  },
  {
    title: "Dhoom 2",
    director: "Sanjay Gadhvi",
    releaseYear: 2006,
    genres: ["Action", "Crime", "Thriller"],
    synopsis: "Jai and Ali are back to catch Mr. A, an elusive international thief who steals invaluable artifacts in disguise around the world.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTIzMzU5MjkwOF5BMl5BanBnXkFtZTcwNTQ5MDQyMQ@@._V1_SX300.jpg",
    cast: ["Hrithik Roshan", "Abhishek Bachchan", "Aishwarya Rai Bachchan"]
  },
  {
    title: "War",
    director: "Siddharth Anand",
    releaseYear: 2019,
    genres: ["Action", "Adventure", "Thriller"],
    synopsis: "An Indian soldier is assigned to eliminate his former mentor and boss, who has gone rogue following an assassination.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNTlmNDMzOWQtYzg4Ny00OWQ0LWFhN2MtNmQ2MDczY2Q5Yzg1XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Hrithik Roshan", "Tiger Shroff", "Vaani Kapoor"]
  },
  {
    title: "Pathaan",
    director: "Siddharth Anand",
    releaseYear: 2023,
    genres: ["Action", "Adventure", "Thriller"],
    synopsis: "An Indian field agent is assigned to take down a former soldier who leads an organization of rogues planning a biological attack against India.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYzA4ZjM2ZjItNTFhYS00ZTMwLWFhOTQtYjVjZDQ2ZWFiMjEyXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Shah Rukh Khan", "Deepika Padukone", "John Abraham"]
  },
  {
    title: "Jawan",
    director: "Atlee",
    releaseYear: 2023,
    genres: ["Action", "Drama", "Thriller"],
    synopsis: "A prison warden recruits inmates to commit outrageous acts of vigilante justice to correct societal corruption.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNTBmZGE1OWEtZTM4MS00MTkwLWE0YmUtMjVhOTkyN2Y5NmVkXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Shah Rukh Khan", "Nayanthara", "Vijay Sethupathi"]
  },
  {
    title: "Animal",
    director: "Sandeep Reddy Vanga",
    releaseYear: 2023,
    genres: ["Action", "Crime", "Drama"],
    synopsis: "The son of a wealthy and powerful industrialist returns home to avenge an assassination attempt on his emotionally distant father.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYjc5NGZmZTItYmNmYi00YjBhLTk2YjMtNDZlNmI4NTczNmQ3XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Ranbir Kapoor", "Anil Kapoor", "Bobby Deol"]
  },
  {
    title: "Sanju",
    director: "Rajkumar Hirani",
    releaseYear: 2018,
    genres: ["Biography", "Comedy", "Drama"],
    synopsis: "A biographical film exploring the tumultuous life of controversial Bollywood actor Sanjay Dutt, his battle with drugs, and his imprisonment.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDAwNzU1OTgtZGQzMS00MTkzLTk3NjMtNGI3YmY2NmEyNDQyXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Ranbir Kapoor", "Paresh Rawal", "Manisha Koirala"]
  },
  {
    title: "Rockstar",
    director: "Imtiaz Ali",
    releaseYear: 2011,
    genres: ["Drama", "Music", "Romance"],
    synopsis: "Janardhan Jakhar chases his dream of becoming a rock star; along the way, he falls in love with Heer, which sparks both genius and heartache.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOTc3NzAxMjg4M15BMl5BanBnXkFtZTcwMDc2ODQwNw@@._V1_SX300.jpg",
    cast: ["Ranbir Kapoor", "Nargis Fakhri", "Shammi Kapoor"]
  },

  // 51-60
  {
    title: "Yeh Jawaani Hai Deewani",
    director: "Ayan Mukerji",
    releaseYear: 2013,
    genres: ["Comedy", "Drama", "Musical"],
    synopsis: "Kabir and Naina bond during a trekking trip. Before Naina can express her feelings, Kabir leaves India to pursue his career dreams.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BODA4MjU5NDU4OV5BMl5BanBnXkFtZTcwODg1MTE1OQ@@._V1_SX300.jpg",
    cast: ["Ranbir Kapoor", "Deepika Padukone", "Aditya Roy Kapur"]
  },
  {
    title: "Wake Up Sid",
    director: "Ayan Mukerji",
    releaseYear: 2009,
    genres: ["Comedy", "Drama", "Romance"],
    synopsis: "A spoiled young adult residing in Mumbai undergoes a change in his attitude towards life after meeting an aspiring writer from Kolkata.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNTIxNDU3NTE2M15BMl5BanBnXkFtZTcwNTg2MzY2MQ@@._V1_SX300.jpg",
    cast: ["Ranbir Kapoor", "Konkona Sen Sharma", "Supriya Pathak"]
  },
  {
    title: "Tamasha",
    director: "Imtiaz Ali",
    releaseYear: 2015,
    genres: ["Comedy", "Drama", "Romance"],
    synopsis: "Ved and Tara meet in Corsica and decide not to disclose their real identities. Later in Delhi, Tara helps Ved rediscover his true artistic passion.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA4NTA5NTgwNF5BMl5BanBnXkFtZTgwNTU5Njg1NTE@._V1_SX300.jpg",
    cast: ["Ranbir Kapoor", "Deepika Padukone", "Javed Sheikh"]
  },
  {
    title: "Stree",
    director: "Amar Kaushik",
    releaseYear: 2018,
    genres: ["Comedy", "Horror"],
    synopsis: "In the small town of Chanderi, the menfolk live in fear of an evil spirit named Stree who abducts men in the night during festivals.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjE1NDk5MDY4MV5BMl5BanBnXkFtZTgwNTg4OTA1NzM@._V1_SX300.jpg",
    cast: ["Rajkummar Rao", "Shraddha Kapoor", "Pankaj Tripathi"]
  },
  {
    title: "Stree 2",
    director: "Amar Kaushik",
    releaseYear: 2024,
    genres: ["Comedy", "Horror"],
    synopsis: "The town of Chanderi is haunted again by a new headless monster Sarkata, and the gang unites with Stree to save the town's women.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYjVhYTQtZDIzOS00NGQwLWJkYTgtNTgwYmQ2YmMwZGI3XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Rajkummar Rao", "Shraddha Kapoor", "Pankaj Tripathi"]
  },
  {
    title: "Newton",
    director: "Amit V. Masurkar",
    releaseYear: 2017,
    genres: ["Comedy", "Drama"],
    synopsis: "A government clerk on election duty in the conflict-ridden jungle of Central India tries his best to conduct free and fair voting despite the apathy of security forces.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNTI0MDgzNTU5NF5BMl5BanBnXkFtZTgwNTI4NTMwNDI@._V1_SX300.jpg",
    cast: ["Rajkummar Rao", "Pankaj Tripathi", "Anjali Patil"]
  },
  {
    title: "Badhaai Ho",
    director: "Amit Ravindernath Sharma",
    releaseYear: 2018,
    genres: ["Comedy", "Drama"],
    synopsis: "A 25-year-old man faces embarrassment in society when his middle-aged parents announce that they are expecting a baby.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNTExNmViNWItZWIyMS00NTg2LWIzOTctYzkxMDIyNDc3YmIxXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Ayushmann Khurrana", "Neena Gupta", "Gajraj Rao"]
  },
  {
    title: "Article 15",
    director: "Anubhav Sinha",
    releaseYear: 2019,
    genres: ["Crime", "Drama", "Mystery"],
    synopsis: "An upright city-bred police officer is posted to a rural area where he investigates the violent disappearance of three young girls amidst caste discrimination.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzQ0MmE2ZTUtZTk2Yi00OGFlLTk3YzQtNmYyNDYwNWQ4YTIzXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Ayushmann Khurrana", "Nassar", "Manoj Pahwa"]
  },
  {
    title: "Raazi",
    director: "Meghna Gulzar",
    releaseYear: 2018,
    genres: ["Action", "Drama", "Thriller"],
    synopsis: "During the Indo-Pakistani War of 1971, an Indian Kashmiri undercover spy is married into a Pakistani military family to relay critical intelligence.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA5OTM3MjkyM15BMl5BanBnXkFtZTgwNzUzMjEyNDM@._V1_SX300.jpg",
    cast: ["Alia Bhatt", "Vicky Kaushal", "Rajit Kapoor"]
  },
  {
    title: "Uri: The Surgical Strike",
    director: "Aditya Dhar",
    releaseYear: 2019,
    genres: ["Action", "Drama", "History"],
    synopsis: "Indian army special forces execute a covert operation against terrorist launchpads avenging a deadly attack on an army base in Uri, Kashmir.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjI3MzgwMTQ4Ml5BMl5BanBnXkFtZTgwNTU5Nzg1NTE@._V1_SX300.jpg",
    cast: ["Vicky Kaushal", "Paresh Rawal", "Yami Gautam"]
  },

  // 61-70
  {
    title: "Sardar Udham",
    director: "Shoojit Sircar",
    releaseYear: 2021,
    genres: ["Biography", "Crime", "Drama"],
    synopsis: "A detailed account of revolutionary freedom fighter Udham Singh, who assassinated Michael O'Dwyer in London to avenge the Jallianwala Bagh massacre.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDM3OTgzYzItZTkzMC00MTRlLWJkYmItNDZhYjIzZTA3MzI1XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Vicky Kaushal", "Shaun Scott", "Stephen Hogan"]
  },
  {
    title: "12th Fail",
    director: "Vidhu Vinod Chopra",
    releaseYear: 2023,
    genres: ["Biography", "Drama"],
    synopsis: "Based on the real-life story of IPS Officer Manoj Kumar Sharma, who fearlessly restarts his academic journey despite extreme poverty and setbacks.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDAwNzU1OTgtZGQzMS00MTkzLTk3NjMtNGI3YmY2NmEyNDQyXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Vikrant Massey", "Medha Shankr", "Anant Joshi"]
  },
  {
    title: "Mimi",
    director: "Laxman Utekar",
    releaseYear: 2021,
    genres: ["Comedy", "Drama"],
    synopsis: "A young dancer in a small Rajasthan town agrees to become a surrogate mother for an American couple for money, with unexpected emotional turns.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZWZlMzcyNzUtMmQxMi00MThkLWE5YTItYjRlNTRhNDM4N2U1XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Kriti Sanon", "Pankaj Tripathi", "Sai Tamhankar"]
  },
  {
    title: "Ludo",
    director: "Anurag Basu",
    releaseYear: 2020,
    genres: ["Action", "Comedy", "Crime"],
    synopsis: "Four wildly different stories overlap in an eccentric game of fate, chance, and crime in the vibrant streets of Mumbai.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA1MDg5OTgwMF5BMl5BanBnXkFtZTgwNTU5Njg1NTE@._V1_SX300.jpg",
    cast: ["Abhishek Bachchan", "Aditya Roy Kapur", "Rajkummar Rao"]
  },
  {
    title: "Super 30",
    director: "Vikas Bahl",
    releaseYear: 2019,
    genres: ["Biography", "Drama"],
    synopsis: "Based on the life of Patna-based mathematician Anand Kumar, who coaches 30 underprivileged students for the competitive IIT entrance exams.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjY5NTA3OTU4NV5BMl5BanBnXkFtZTgwNTc4NTMwNDI@._V1_SX300.jpg",
    cast: ["Hrithik Roshan", "Mrunal Thakur", "Nandish Singh Sandhu"]
  },
  {
    title: "Special 26",
    director: "Neeraj Pandey",
    releaseYear: 2013,
    genres: ["Crime", "Drama", "Thriller"],
    synopsis: "A team of con artists conduct fake raids posing as CBI officers to rob corrupt politicians and businessmen across India.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTgzNTk3MjUyMl5BMl5BanBnXkFtZTcwOTgwMzAwOA@@._V1_SX300.jpg",
    cast: ["Akshay Kumar", "Anupam Kher", "Manoj Bajpayee"]
  },
  {
    title: "Baby",
    director: "Neeraj Pandey",
    releaseYear: 2015,
    genres: ["Action", "Crime", "Thriller"],
    synopsis: "An elite team of the Indian intelligence system strives to detect and eliminate terrorists and their planned catastrophic operations.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_SX300.jpg",
    cast: ["Akshay Kumar", "Danny Denzongpa", "Rana Daggubati"]
  },
  {
    title: "Airlift",
    director: "Raja Krishna Menon",
    releaseYear: 2016,
    genres: ["Action", "Drama", "History"],
    synopsis: "When Iraq invades Kuwait in 1990, an arrogant Indian businessman becomes the spokesperson and savior for more than 170,000 stranded Indians.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SX300.jpg",
    cast: ["Akshay Kumar", "Nimrat Kaur", "Kumud Mishra"]
  },
  {
    title: "Hera Pheri",
    director: "Priyadarshan",
    releaseYear: 2000,
    genres: ["Action", "Comedy", "Crime"],
    synopsis: "Two tenants and a kind-hearted landlord in severe financial trouble answer a wrong phone call from a kidnapper and plan a desperate ransom scheme.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNTI2YTI0ZmEtZDM4OS00ODU3LTg2YWEtMmNmODc3OWQ0MmQxXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Akshay Kumar", "Suniel Shetty", "Paresh Rawal"]
  },
  {
    title: "Phir Hera Pheri",
    director: "Neeraj Vora",
    releaseYear: 2006,
    genres: ["Comedy", "Crime"],
    synopsis: "Raju, Shyam, and Baburao find themselves wealthy, but lose everything when they get tricked by a con-woman offering to double their money in 21 days.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYzA2MTBkYmUtOWZlNi00ZjQ1LWE1ZTYtOWYyZWMzMmE0M2NjXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Akshay Kumar", "Suniel Shetty", "Paresh Rawal"]
  },

  // 71-80
  {
    title: "Bhool Bhulaiyaa",
    director: "Priyadarshan",
    releaseYear: 2007,
    genres: ["Comedy", "Horror", "Mystery"],
    synopsis: "An NRI and his wife decide to stay in his ancestral palace, unlocking an ancient room that frees the vengeful spirit of a dancer named Manjulika.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTgzMzcxNTExOF5BMl5BanBnXkFtZTcwOTU5NDkyMQ@@._V1_SX300.jpg",
    cast: ["Akshay Kumar", "Vidya Balan", "Shiney Ahuja"]
  },
  {
    title: "Bhool Bhulaiyaa 2",
    director: "Anees Bazmee",
    releaseYear: 2022,
    genres: ["Comedy", "Horror"],
    synopsis: "After an unexpected accident brings two strangers to a haunted ancestral mansion in Rajasthan, the sealed room of Manjulika is opened once more.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA5OTgxNDc1Ml5BMl5BanBnXkFtZTcwMTQ4NjA2MQ@@._V1_SX300.jpg",
    cast: ["Kartik Aaryan", "Kiara Advani", "Tabu"]
  },
  {
    title: "Bhool Bhulaiyaa 3",
    director: "Anees Bazmee",
    releaseYear: 2024,
    genres: ["Comedy", "Horror"],
    synopsis: "Rooh Baba returns to Bengal to resolve the supernatural heritage of the kingdom and face off against two formidable manifestations of Manjulika.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTUxMzg2NzgxOV5BMl5BanBnXkFtZTgwNDY0OTYnMDE@._V1_SX300.jpg",
    cast: ["Kartik Aaryan", "Vidya Balan", "Madhuri Dixit"]
  },
  {
    title: "Sonu Ke Titu Ki Sweety",
    director: "Luv Ranjan",
    releaseYear: 2018,
    genres: ["Comedy", "Romance"],
    synopsis: "Sonu suspects his best friend Titu's fiancee Sweety is too good to be true and tries to break up the upcoming wedding.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA4NTA5NTgwNF5BMl5BanBnXkFtZTgwNTU5Njg1NTE@._V1_SX300.jpg",
    cast: ["Kartik Aaryan", "Nushrratt Bharuccha", "Sunny Singh"]
  },
  {
    title: "Pyaar Ka Punchnama",
    director: "Luv Ranjan",
    releaseYear: 2011,
    genres: ["Comedy", "Drama", "Romance"],
    synopsis: "Three bachelor roommates find romantic partners, but their blossoming relationships quickly turn into exhausting exercises in dominance.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNTIxNDU3NTE2M15BMl5BanBnXkFtZTcwNTg2MzY2MQ@@._V1_SX300.jpg",
    cast: ["Kartik Aaryan", "Raayo S. Bakhirta", "Divyenndu"]
  },
  {
    title: "Munna Bhai M.B.B.S.",
    director: "Rajkumar Hirani",
    releaseYear: 2003,
    genres: ["Comedy", "Drama", "Musical"],
    synopsis: "A kind-hearted Mumbai gangster enrolls in medical school to fulfill his father's dream of seeing him become a respectable doctor.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTgzNTk3MjUyMl5BMl5BanBnXkFtZTcwOTgwMzAwOA@@._V1_SX300.jpg",
    cast: ["Sanjay Dutt", "Arshad Warsi", "Sunil Dutt"]
  },
  {
    title: "Lage Raho Munna Bhai",
    director: "Rajkumar Hirani",
    releaseYear: 2006,
    genres: ["Comedy", "Drama", "Romance"],
    synopsis: "Munna Bhai encounters the spirit of Mahatma Gandhi and begins to practice Gandhigiri (truth and non-violence) to win the heart of a radio jockey.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjQ1NzM2MTMwOV5BMl5BanBnXkFtZTgwNDQxNjY3NTE@._V1_SX300.jpg",
    cast: ["Sanjay Dutt", "Arshad Warsi", "Vidya Balan"]
  },
  {
    title: "Karan Arjun",
    director: "Rakesh Roshan",
    releaseYear: 1995,
    genres: ["Action", "Drama", "Fantasy"],
    synopsis: "Karan and Arjun are reincarnated in different parts of the country seventeen years after their brutal murder to exact revenge on their wicked uncle.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Rakhee Gulzar", "Salman Khan", "Shah Rukh Khan"]
  },
  {
    title: "Hum Aapke Hain Koun..!",
    director: "Sooraj R. Barjatya",
    releaseYear: 1994,
    genres: ["Comedy", "Drama", "Musical"],
    synopsis: "Prem and Nisha fall in love during the grand wedding of their elder siblings, but must sacrifice their feelings when tragedy strikes the family.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYWRlNTQ4MzUtZDcyOC00MTVkLWE3NzItNGJkNzcwYzlmYjQ4XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Madhuri Dixit", "Salman Khan", "Mohnish Bahl"]
  },
  {
    title: "Andaz Apna Apna",
    director: "Rajkumar Santoshi",
    releaseYear: 1994,
    genres: ["Comedy", "Family", "Romance"],
    synopsis: "Two slackers compete for the affections of an heiress, but get entangled in a hilarious kidnapping plot with local criminals.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgyNV5BMl5BanBnXkFtZTgwNjkwNTM3NjM@._V1_SX300.jpg",
    cast: ["Aamir Khan", "Salman Khan", "Raveena Tandon"]
  },

  // 81-90
  {
    title: "Deewaar",
    director: "Yash Chopra",
    releaseYear: 1975,
    genres: ["Action", "Crime", "Drama"],
    synopsis: "Two brothers choose divergent moral paths: one turns to a life of crime in Mumbai's underworld, while the other becomes an honest policeman.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTFmLWJkMTAtNDcxOTJkYjc4MGU0XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Amitabh Bachchan", "Shashi Kapoor", "Nirupa Roy"]
  },
  {
    title: "Black",
    director: "Sanjay Leela Bhansali",
    releaseYear: 2005,
    genres: ["Drama"],
    synopsis: "The cathartic tale of a young deafblind woman and her eccentric teacher who brings light and knowledge into her dark world.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZWZhMjhhZmYtOTIzOC00MGYzLWI1OGYtM2ZkN2IxNTI4ZWI3XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Amitabh Bachchan", "Rani Mukerji", "Shernaz Patel"]
  },
  {
    title: "Pink",
    director: "Aniruddha Roy Chowdhury",
    releaseYear: 2016,
    genres: ["Crime", "Drama", "Thriller"],
    synopsis: "When three young women are molested and subsequently implicated in a crime, an experienced retired lawyer comes forward to defend them.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNTI0MDgzNTU5NF5BMl5BanBnXkFtZTgwNTI4NTMwNDI@._V1_SX300.jpg",
    cast: ["Taapsee Pannu", "Amitabh Bachchan", "Kirti Kulhari"]
  },
  {
    title: "Badla",
    director: "Sujoy Ghosh",
    releaseYear: 2019,
    genres: ["Crime", "Drama", "Mystery"],
    synopsis: "A dynamic young entrepreneur finds herself locked in a hotel room with the corpse of her dead lover and hires a prestigious defense attorney.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzQ0MmE2ZTUtZTk2Yi00OGFlLTk3YzQtNmYyNDYwNWQ4YTIzXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Amitabh Bachchan", "Taapsee Pannu", "Amrita Singh"]
  },
  {
    title: "Thappad",
    director: "Anubhav Sinha",
    releaseYear: 2020,
    genres: ["Drama"],
    synopsis: "Amrita's seemingly perfect domestic life is shattered when her husband slaps her in public at a party, forcing her to question dignity and respect.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA5OTM3MjkyM15BMl5BanBnXkFtZTgwNzUzMjEyNDM@._V1_SX300.jpg",
    cast: ["Taapsee Pannu", "Pavail Gulati", "Ratna Pathak Shah"]
  },
  {
    title: "Masaan",
    director: "Neeraj Ghaywan",
    releaseYear: 2015,
    genres: ["Drama"],
    synopsis: "Four lives intersect along the Ganges river in Varanasi as they battle caste prejudice, small-town morals, and personal grief.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDAwNzU1OTgtZGQzMS00MTkzLTk3NjMtNGI3YmY2NmEyNDQyXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Richa Chadha", "Vicky Kaushal", "Sanjay Mishra"]
  },
  {
    title: "Omkara",
    director: "Vishal Bhardwaj",
    releaseYear: 2006,
    genres: ["Action", "Crime", "Drama"],
    synopsis: "An Indian adaptation of Shakespeare's Othello set amidst the political gang warfare of western Uttar Pradesh.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtVDNmYDlhOWMwZGYxXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Ajay Devgn", "Saif Ali Khan", "Kareena Kapoor"]
  },
  {
    title: "Haider",
    director: "Vishal Bhardwaj",
    releaseYear: 2014,
    genres: ["Action", "Crime", "Drama"],
    synopsis: "A young poet returns to Kashmir at the peak of the 1995 insurgency to seek answers about his father's disappearance.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3OTAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg",
    cast: ["Shahid Kapoor", "Tabu", "Kay Kay Menon"]
  },
  {
    title: "Maqbool",
    director: "Vishal Bhardwaj",
    releaseYear: 2003,
    genres: ["Crime", "Drama"],
    synopsis: "An Indian adaptation of Shakespeare's Macbeth set in the dark underbelly of the Mumbai underworld.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjE5MDE@._V1_SX300.jpg",
    cast: ["Irrfan Khan", "Tabu", "Pankaj Kapur"]
  },
  {
    title: "Paan Singh Tomar",
    director: "Tigmanshu Dhulia",
    releaseYear: 2012,
    genres: ["Action", "Biography", "Crime"],
    synopsis: "The true story of an Indian athlete and seven-time national steeplechase champion who is forced to become a rebel dacoit in the Chambal valley.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg",
    cast: ["Irrfan Khan", "Mahie Gill", "Rajesh Sharma"]
  },

  // 91-100
  {
    title: "Talvar",
    director: "Meghna Gulzar",
    releaseYear: 2015,
    genres: ["Crime", "Drama", "Mystery"],
    synopsis: "An experienced CDI investigator confronts conflicting evidence and internal police corruption while investigating a double murder case.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtODExMTMxODBlOWEyXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Irrfan Khan", "Konkona Sen Sharma", "Neeraj Kabi"]
  },
  {
    title: "Hindi Medium",
    director: "Saket Chaudhary",
    releaseYear: 2017,
    genres: ["Comedy", "Drama"],
    synopsis: "A couple from Chandni Chowk aspire to give their daughter an English-medium education to gain entry into elite society.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ODQ3LWJhNzctYzBlMTdiOWG1NDdhXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Irrfan Khan", "Saba Qamar", "Dishita Sehgal"]
  },
  {
    title: "Secret Superstar",
    director: "Advait Chandan",
    releaseYear: 2017,
    genres: ["Drama", "Music"],
    synopsis: "A talented 14-year-old girl from Vadodara strives to become a singer while wearing a niqab on YouTube to hide her identity from her abusive father.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg",
    cast: ["Zaira Wasim", "Meher Vij", "Aamir Khan"]
  },
  {
    title: "Bhaag Milkha Bhaag",
    director: "Rakeysh Omprakash Mehra",
    releaseYear: 2013,
    genres: ["Biography", "Drama", "Sport"],
    synopsis: "The inspiring true story of 'The Flying Sikh' Milkha Singh, who overcomes childhood trauma during Partition to become an Olympic world champion.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtMDRjYTg2ZmE4XkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Farhan Akhtar", "Sonam Kapoor", "Pawan Malhotra"]
  },
  {
    title: "Chhichhore",
    director: "Nitesh Tiwari",
    releaseYear: 2019,
    genres: ["Comedy", "Drama"],
    synopsis: "Following a tragic incident, a group of college friends reunite in hospital to reminisce about their youth as proud 'losers' and help a young boy fight for life.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Sushant Singh Rajput", "Shraddha Kapoor", "Varun Sharma"]
  },
  {
    title: "MS Dhoni: The Untold Story",
    director: "Neeraj Pandey",
    releaseYear: 2016,
    genres: ["Biography", "Drama", "Sport"],
    synopsis: "The journey of Mahendra Singh Dhoni, from a ticket collector in Ranchi to the legendary captain of the Indian national cricket team.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YTAtNmFhNGQ1RmM3ZGQxXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Sushant Singh Rajput", "Kiara Advani", "Disha Patani"]
  },
  {
    title: "Kai Po Che!",
    director: "Abhishek Kapoor",
    releaseYear: 2013,
    genres: ["Drama", "Sport"],
    synopsis: "Three friends in Ahmedabad start a cricket academy to train future sports stars, but their bond is tested by natural disaster, communal tensions, and ambition.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    cast: ["Sushant Singh Rajput", "Rajkummar Rao", "Amit Sadh"]
  },
  {
    title: "Kedarnath",
    director: "Abhishek Kapoor",
    releaseYear: 2018,
    genres: ["Drama", "Romance"],
    synopsis: "A Hindu Brahmin girl falls in love with a Muslim porter at the holy pilgrimage site of Kedarnath, facing religious prejudice and a catastrophic Himalayan flood.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYjE4NzdmOTcgNDExOS00YjIzLTlhOGMtNWU4N2FmNjgzNTdhXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Sushant Singh Rajput", "Sara Ali Khan", "Nitish Bharadwaj"]
  },
  {
    title: "Rocky Aur Rani Kii Prem Kahaani",
    director: "Karan Johar",
    releaseYear: 2023,
    genres: ["Comedy", "Drama", "Family"],
    synopsis: "Flamboyant Punjabi Rocky and intellectual Bengali journalist Rani fall in love and decide to switch households for three months to win over their families.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Ranveer Singh", "Alia Bhatt", "Dharmendra"]
  },
  {
    title: "Brahmāstra: Part One – Shiva",
    director: "Ayan Mukerji",
    releaseYear: 2022,
    genres: ["Action", "Adventure", "Fantasy"],
    synopsis: "Shiva, a disc jockey with a mysterious connection to the element of fire, discovers that he is the wielder of the Agnyāstra and part of an ancient secret order.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzAzNmE4YjFmXkEyXkFqcGc@._V1_SX300.jpg",
    cast: ["Ranbir Kapoor", "Alia Bhatt", "Amitabh Bachchan"]
  }
];
