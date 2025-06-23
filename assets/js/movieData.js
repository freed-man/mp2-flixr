// Simple movie database - all 50 movies in one array
const allMovies = [
    // Comedy movies (10)
    {
        title: "The Grand Budapest Hotel",
        year: 2014,
        runtime: 99,
        mood: "comedy",
        genres: "Comedy, Adventure",
        plot: "A legendary concierge and his protégé get caught up in a murder mystery at a famous European hotel.",
        rating: 8.1,
        poster: "assets/images/grand-budapest-hotel.jpg"
    },
    {
        title: "Superbad",
        year: 2007,
        runtime: 113,
        mood: "comedy",
        genres: "Comedy",
        plot: "Two inseparable high school friends navigate one wild night trying to obtain alcohol for a party.",
        rating: 7.6,
        poster: "assets/images/superbad.jpg"
    },
    {
        title: "The Big Lebowski",
        year: 1998,
        runtime: 117,
        mood: "comedy",
        genres: "Comedy, Crime",
        plot: "A laid-back bowler gets caught up in a kidnapping plot after being mistaken for a millionaire.",
        rating: 8.1,
        poster: "assets/images/big-lebowski.jpg"
    },
    {
        title: "Borat",
        year: 2006,
        runtime: 84,
        mood: "comedy",
        genres: "Comedy",
        plot: "A Kazakh journalist travels to America to make a documentary and learns about American culture.",
        rating: 7.3,
        poster: "assets/images/borat.jpg"
    },
    {
        title: "Mrs. Doubtfire",
        year: 1993,
        runtime: 125,
        mood: "comedy",
        genres: "Comedy, Drama",
        plot: "A divorced dad disguises himself as a female housekeeper to spend time with his children.",
        rating: 7.0,
        poster: "assets/images/mrs-doubtfire.jpg"
    },
    {
        title: "Airplane!",
        year: 1980,
        runtime: 88,
        mood: "comedy",
        genres: "Comedy",
        plot: "A man afraid of flying must ensure that a plane lands safely after the pilots become sick.",
        rating: 7.7,
        poster: "assets/images/airplane.jpg"
    },
    {
        title: "The Hangover",
        year: 2009,
        runtime: 100,
        mood: "comedy",
        genres: "Comedy",
        plot: "Three friends wake up from a bachelor party in Las Vegas with no memory of the night and a missing groom.",
        rating: 7.7,
        poster: "assets/images/the-hangover.jpg"
    },
    {
        title: "Ghostbusters",
        year: 1984,
        runtime: 105,
        mood: "comedy",
        genres: "Comedy, Sci-Fi",
        plot: "Three scientists start a ghost removal service in New York City.",
        rating: 7.8,
        poster: "assets/images/ghostbusters.jpg"
    },
    {
        title: "Groundhog Day",
        year: 1993,
        runtime: 101,
        mood: "comedy",
        genres: "Comedy, Romance",
        plot: "A weatherman finds himself living the same day over and over again.",
        rating: 8.0,
        poster: "assets/images/groundhog-day.jpg"
    },
    {
        title: "Tropic Thunder",
        year: 2008,
        runtime: 107,
        mood: "comedy",
        genres: "Comedy, Action",
        plot: "A group of actors filming a war movie are forced to become the soldiers they are portraying.",
        rating: 7.0,
        poster: "assets/images/tropic-thunder.jpg"
    },
    
    // Mystery movies (10)
    {
        title: "Inception",
        year: 2010,
        runtime: 148,
        mood: "mystery",
        genres: "Sci-Fi, Thriller",
        plot: "A thief who enters people's dreams takes on the impossible task of planting an idea in someone's mind.",
        rating: 8.8,
        poster: "assets/images/inception.jpg"
    },
    {
        title: "Shutter Island",
        year: 2010,
        runtime: 138,
        mood: "mystery",
        genres: "Mystery, Thriller",
        plot: "A U.S. Marshal investigates the disappearance of a patient from a hospital for the criminally insane.",
        rating: 8.2,
        poster: "assets/images/shutter-island.jpg"
    },
    {
        title: "The Sixth Sense",
        year: 1999,
        runtime: 107,
        mood: "mystery",
        genres: "Mystery, Thriller",
        plot: "A child psychologist tries to help a boy who claims he can see dead people.",
        rating: 8.1,
        poster: "assets/images/sixth-sense.jpg"
    },
    {
        title: "Knives Out",
        year: 2019,
        runtime: 130,
        mood: "mystery",
        genres: "Mystery, Comedy",
        plot: "A detective investigates the death of a patriarch of an eccentric, combative family.",
        rating: 7.9,
        poster: "assets/images/knives-out.jpg"
    },
    {
        title: "The Prestige",
        year: 2006,
        runtime: 130,
        mood: "mystery",
        genres: "Mystery, Drama",
        plot: "Two rival magicians engage in a bitter competition filled with dangerous tricks and dark secrets.",
        rating: 8.5,
        poster: "assets/images/the-prestige.jpg"
    },
    {
        title: "Zodiac",
        year: 2007,
        runtime: 157,
        mood: "mystery",
        genres: "Mystery, Thriller",
        plot: "A cartoonist becomes obsessed with tracking down the Zodiac killer terrorizing Northern California.",
        rating: 7.7,
        poster: "assets/images/zodiac.jpg"
    },
    {
        title: "Gone Girl",
        year: 2014,
        runtime: 149,
        mood: "mystery",
        genres: "Mystery, Thriller",
        plot: "A man becomes the prime suspect in the disappearance of his wife.",
        rating: 8.1,
        poster: "assets/images/gone-girl.jpg"
    },
    {
        title: "The Usual Suspects",
        year: 1995,
        runtime: 106,
        mood: "mystery",
        genres: "Mystery, Crime",
        plot: "A sole survivor tells the story of how five criminals met and planned a heist that went wrong.",
        rating: 8.5,
        poster: "assets/images/usual-suspects.jpg"
    },
    {
        title: "Memento",
        year: 2000,
        runtime: 113,
        mood: "mystery",
        genres: "Mystery, Thriller",
        plot: "A man with short-term memory loss uses notes and tattoos to hunt for his wife's killer.",
        rating: 8.4,
        poster: "assets/images/memento.jpg"
    },
    {
        title: "Seven",
        year: 1995,
        runtime: 127,
        mood: "mystery",
        genres: "Mystery, Thriller",
        plot: "Two detectives hunt a serial killer who uses the seven deadly sins as his motives.",
        rating: 8.6,
        poster: "assets/images/seven.jpg"
    },
    
    // Drama movies (10)
    {
        title: "The Notebook",
        year: 2004,
        runtime: 123,
        mood: "drama",
        genres: "Romance, Drama",
        plot: "A poor young man falls in love with a rich young woman, and their story spans decades.",
        rating: 7.8,
        poster: "assets/images/the-notebook.jpg"
    },
    {
        title: "Forrest Gump",
        year: 1994,
        runtime: 142,
        mood: "drama",
        genres: "Drama, Romance",
        plot: "A man with a low IQ witnesses and influences several defining historical events while pursuing his childhood love.",
        rating: 8.8,
        poster: "assets/images/forrest-gump.jpg"
    },
    {
        title: "Titanic",
        year: 1997,
        runtime: 194,
        mood: "drama",
        genres: "Romance, Drama",
        plot: "A seventeen-year-old aristocrat falls in love with a poor artist aboard the ill-fated ship.",
        rating: 7.9,
        poster: "assets/images/titanic.jpg"
    },
    {
        title: "The Pursuit of Happyness",
        year: 2006,
        runtime: 117,
        mood: "drama",
        genres: "Drama",
        plot: "A struggling salesman takes custody of his son as he's about to begin a life-changing professional endeavor.",
        rating: 8.0,
        poster: "assets/images/pursuit-of-happyness.jpg"
    },
    {
        title: "A Star Is Born",
        year: 2018,
        runtime: 136,
        mood: "drama",
        genres: "Drama, Romance, Music",
        plot: "A seasoned musician discovers and falls in love with a struggling artist.",
        rating: 7.6,
        poster: "assets/images/star-is-born.jpg"
    },
    {
        title: "Life Is Beautiful",
        year: 1997,
        runtime: 116,
        mood: "drama",
        genres: "Drama, Romance",
        plot: "An Italian Jewish father uses humor and imagination to protect his son from the horrors of a Nazi concentration camp.",
        rating: 8.6,
        poster: "assets/images/life-is-beautiful.jpg"
    },
    {
        title: "The Fault in Our Stars",
        year: 2014,
        runtime: 126,
        mood: "drama",
        genres: "Drama, Romance",
        plot: "Two teenage cancer patients begin a journey to visit a reclusive author in Amsterdam.",
        rating: 7.7,
        poster: "assets/images/fault-in-our-stars.jpg"
    },
    {
        title: "Eternal Sunshine of the Spotless Mind",
        year: 2004,
        runtime: 108,
        mood: "drama",
        genres: "Drama, Romance, Sci-Fi",
        plot: "A couple undergoes a procedure to erase memories of each other after their relationship turns sour.",
        rating: 8.3,
        poster: "assets/images/eternal-sunshine.jpg"
    },
    {
        title: "Cinema Paradiso",
        year: 1988,
        runtime: 155,
        mood: "drama",
        genres: "Drama",
        plot: "A filmmaker recalls his childhood when he fell in love with movies at his village's theater.",
        rating: 8.5,
        poster: "assets/images/cinema-paradiso.jpg"
    },
    {
        title: "Marriage Story",
        year: 2019,
        runtime: 137,
        mood: "drama",
        genres: "Drama",
        plot: "A stage director and his actor wife struggle through a grueling divorce that pushes them to their limits.",
        rating: 7.9,
        poster: "assets/images/marriage-story.jpg"
    },
    
    // Thriller movies (10)
    {
        title: "Mad Max: Fury Road",
        year: 2015,
        runtime: 120,
        mood: "thriller",
        genres: "Action, Adventure",
        plot: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler with the help of a group of female prisoners.",
        rating: 8.1,
        poster: "assets/images/mad-max-fury-road.jpg"
    },
    {
        title: "Get Out",
        year: 2017,
        runtime: 104,
        mood: "thriller",
        genres: "Horror, Thriller",
        plot: "A young Black man uncovers a disturbing secret when he meets the family of his white girlfriend.",
        rating: 7.7,
        poster: "assets/images/get-out.jpg"
    },
    {
        title: "The Dark Knight",
        year: 2008,
        runtime: 152,
        mood: "thriller",
        genres: "Action, Thriller",
        plot: "Batman faces his greatest psychological and physical challenge against the criminal mastermind known as the Joker.",
        rating: 9.0,
        poster: "assets/images/dark-knight.jpg"
    },
    {
        title: "A Quiet Place",
        year: 2018,
        runtime: 90,
        mood: "thriller",
        genres: "Horror, Thriller",
        plot: "A family lives in silence to avoid detection by alien creatures that hunt by sound.",
        rating: 7.5,
        poster: "assets/images/quiet-place.jpg"
    },
    {
        title: "John Wick",
        year: 2014,
        runtime: 101,
        mood: "thriller",
        genres: "Action, Thriller",
        plot: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog.",
        rating: 7.4,
        poster: "assets/images/john-wick.jpg"
    },
    {
        title: "Hereditary",
        year: 2018,
        runtime: 127,
        mood: "thriller",
        genres: "Horror, Drama",
        plot: "A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother.",
        rating: 7.3,
        poster: "assets/images/hereditary.jpg"
    },
    {
        title: "Die Hard",
        year: 1988,
        runtime: 132,
        mood: "thriller",
        genres: "Action, Thriller",
        plot: "A New York cop single-handedly takes on a group of terrorists in a Los Angeles skyscraper.",
        rating: 8.2,
        poster: "assets/images/die-hard.jpg"
    },
    {
        title: "The Conjuring",
        year: 2013,
        runtime: 112,
        mood: "thriller",
        genres: "Horror, Mystery",
        plot: "Paranormal investigators help a family terrorized by a dark presence in their farmhouse.",
        rating: 7.5,
        poster: "assets/images/the-conjuring.jpg"
    },
    {
        title: "Mission: Impossible - Fallout",
        year: 2018,
        runtime: 147,
        mood: "thriller",
        genres: "Action, Adventure",
        plot: "Ethan Hunt and his team race against time after a mission goes wrong.",
        rating: 7.7,
        poster: "assets/images/mission-impossible-fallout.jpg"
    },
    {
        title: "The Silence of the Lambs",
        year: 1991,
        runtime: 118,
        mood: "thriller",
        genres: "Thriller, Horror",
        plot: "An FBI trainee seeks the help of an imprisoned cannibal to catch another serial killer.",
        rating: 8.6,
        poster: "assets/images/silence-of-the-lambs.jpg"
    },
    
    // Feel Good movies (10)
    {
        title: "The Princess Bride",
        year: 1987,
        runtime: 98,
        mood: "feelgood",
        genres: "Adventure, Family",
        plot: "A grandfather reads a story of romance and adventure to his sick grandson.",
        rating: 8.0,
        poster: "assets/images/princess-bride.jpg"
    },
    {
        title: "Paddington 2",
        year: 2017,
        runtime: 103,
        mood: "feelgood",
        genres: "Family, Comedy",
        plot: "Paddington Bear is wrongly imprisoned and his family must work to clear his name.",
        rating: 7.8,
        poster: "assets/images/paddington-2.jpg"
    },
    {
        title: "Spirited Away",
        year: 2001,
        runtime: 125,
        mood: "feelgood",
        genres: "Animation, Adventure",
        plot: "A young girl becomes trapped in a magical world and must find a way to free herself and her parents.",
        rating: 8.6,
        poster: "assets/images/spirited-away.jpg"
    },
    {
        title: "The Secret Life of Walter Mitty",
        year: 2013,
        runtime: 114,
        mood: "feelgood",
        genres: "Adventure, Drama",
        plot: "A daydreamer escapes his anonymous life by disappearing into a world of fantasies filled with heroism and romance.",
        rating: 7.3,
        poster: "assets/images/walter-mitty.jpg"
    },
    {
        title: "Up",
        year: 2009,
        runtime: 96,
        mood: "feelgood",
        genres: "Animation, Adventure",
        plot: "An elderly widower travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
        rating: 8.3,
        poster: "assets/images/up.jpg"
    },
    {
        title: "Amélie",
        year: 2001,
        runtime: 122,
        mood: "feelgood",
        genres: "Romance, Comedy",
        plot: "A shy waitress decides to help others find happiness while discovering love herself in Paris.",
        rating: 8.3,
        poster: "assets/images/amelie.jpg"
    },
    {
        title: "The Intouchables",
        year: 2011,
        runtime: 112,
        mood: "feelgood",
        genres: "Biography, Comedy, Drama",
        plot: "An unlikely friendship develops between a wealthy quadriplegic and his caregiver from the projects.",
        rating: 8.5,
        poster: "assets/images/intouchables.jpg"
    },
    {
        title: "Little Miss Sunshine",
        year: 2006,
        runtime: 101,
        mood: "feelgood",
        genres: "Comedy, Drama",
        plot: "A dysfunctional family takes a cross-country trip in their VW bus to get their daughter to a beauty pageant.",
        rating: 7.8,
        poster: "assets/images/little-miss-sunshine.jpg"
    },
    {
        title: "Coco",
        year: 2017,
        runtime: 105,
        mood: "feelgood",
        genres: "Animation, Family",
        plot: "A young musician travels to the Land of the Dead to find his great-great-grandfather, a legendary singer.",
        rating: 8.4,
        poster: "assets/images/coco.jpg"
    },
    {
        title: "Parasite",
        year: 2019,
        runtime: 132,
        mood: "feelgood",
        genres: "Thriller, Drama",
        plot: "A poor family schemes to infiltrate a wealthy household, leading to unexpected consequences.",
        rating: 8.5,
        poster: "assets/images/parasite.jpg"
    }
];