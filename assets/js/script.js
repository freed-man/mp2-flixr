// user preferences
let preferences = {
    mood: null,
    maxTime: null,
    excludedGenres: []
};

// movies already shown
let alreadyShown = [];

// map moods to categories
const moods = {
    'comedy': 'comedy',
    'mystery': 'mystery', 
    'drama': 'drama',
    'thriller': 'thriller',
    'feelgood': 'feelgood'
};

// setup when page loads
document.addEventListener('DOMContentLoaded', function() {
    setupMoodButtons();
    setupTimeButtons();
    setupGenreTags();
    setupActionButtons();
    setupContactPopup();
});

function setupMoodButtons() {
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.onclick = function() {
            // Clear others
            document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
            // Select this one
            this.classList.add('selected');
            preferences.mood = this.dataset.mood;
        };
    });
}

function setupTimeButtons() {
    document.querySelectorAll('.time-btn').forEach(btn => {
        btn.onclick = function() {
            document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            preferences.maxTime = parseInt(this.dataset.time);
        };
    });
}

function setupGenreTags() {
    document.querySelectorAll('.genre-tag').forEach(tag => {
        tag.onclick = function() {
            this.classList.toggle('excluded');
            const genre = this.dataset.genre;
            
            if (this.classList.contains('excluded')) {
                if (!preferences.excludedGenres.includes(genre)) {
                    preferences.excludedGenres.push(genre);
                }
            } else {
                preferences.excludedGenres = preferences.excludedGenres.filter(g => g !== genre);
            }
        };
    });
}

function setupActionButtons() {
    document.getElementById('findMovieBtn').onclick = findMovie;
    document.getElementById('surpriseBtn').onclick = surpriseMe;
    document.getElementById('tryAgainBtn').onclick = tryAnotherMovie;
    document.getElementById('resetBtn').onclick = resetEverything;
}

function findMovie() {
    // Make sure they picked mood and time
    if (!preferences.mood || !preferences.maxTime) {
        showError('Please pick your mood and how much time you have!');
        return;
    }

    showLoading();
    
    // Add a little delay so it feels more natural
    setTimeout(() => {
        const movie = pickMovie();
        
        if (movie) {
            showMovie(movie);
        } else {
            showError('Hmm, no movies match what you want. Try different options?');
            showForm();
        }
    }, 800);
}

function pickMovie() {
    // get movies for selected mood
    const moodCategory = moods[preferences.mood];
    const possibleMovies = movieDatabase[moodCategory];
    
    // filter movies
    let goodMovies = possibleMovies.filter(movie => {
        // check runtime
        if (movie.runtime > preferences.maxTime) return false;
        
        // check excluded genres
        for (let genre of movie.genres) {
            if (preferences.excludedGenres.some(excluded => 
                genre.toLowerCase().includes(excluded.toLowerCase()))) {
                return false;
            }
        }
        
        // check if already shown
        if (alreadyShown.includes(movie.id)) return false;
        
        return true;
    });

    // reset if no movies left
    if (goodMovies.length === 0 && alreadyShown.length > 0) {
        alreadyShown = [];
        return pickMovie();
    }
    
    if (goodMovies.length === 0) return null;
    
    // pick random movie
    const randomMovie = goodMovies[Math.floor(Math.random() * goodMovies.length)];
    alreadyShown.push(randomMovie.id);
    
    return randomMovie;
}

function showMovie(movie) {
    document.getElementById('movieTitle').textContent = movie.title;
    document.getElementById('movieYear').textContent = movie.year;
    document.getElementById('movieRuntime').textContent = movie.runtime + ' min';
    document.getElementById('movieRating').textContent = movie.rating;
    document.getElementById('moviePlot').textContent = movie.plot;
    document.getElementById('movieGenres').textContent = movie.genres.join(', ');
    
    const poster = document.getElementById('moviePoster');
    poster.src = movie.poster;
    poster.alt = movie.title + ' poster';
    
    // if poster fails, show placeholder
    // poster.onerror = () => poster.src = 'https://via.placeholder.com/220x330?text=No+Poster';
    
    hideLoading();
    document.getElementById('movieResult').style.display = 'block';
}

function resetEverything() {
    // clear all selections
    document.querySelectorAll('.mood-btn, .time-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    document.querySelectorAll('.genre-tag').forEach(tag => {
        tag.classList.remove('excluded');
    });
    
    // reset data
    preferences = { mood: null, maxTime: null, excludedGenres: [] };
    alreadyShown = [];
    
    // show form
    showForm();
    hideError();
}

function showForm() {
    document.getElementById('preferencesForm').style.display = 'block';
    document.getElementById('movieResult').style.display = 'none';
    document.getElementById('loading').style.display = 'none';
}

function showLoading() {
    document.getElementById('preferencesForm').style.display = 'none';
    document.getElementById('movieResult').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

function showError(message) {
    const errorEl = document.getElementById('errorMessage');
    errorEl.textContent = message;
    errorEl.style.display = 'block';
    
    // hide after 7 seconds
    setTimeout(() => errorEl.style.display = 'none', 7000);
}

function hideError() {
    document.getElementById('errorMessage').style.display = 'none';
}

function surpriseMe() {
    showLoading();
    
    // get all movies from all categories
    const allMovies = [
        ...movieDatabase.comedy,
        ...movieDatabase.mystery,
        ...movieDatabase.drama,
        ...movieDatabase.thriller,
        ...movieDatabase.feelgood
    ];
    
    // pick a random movie
    setTimeout(() => {
        const randomMovie = allMovies[Math.floor(Math.random() * allMovies.length)];
        showMovie(randomMovie);
    }, 800);
}

function tryAnotherMovie() {
    // check if user has preferences set, if not do surprise me
    if (!preferences.mood || !preferences.maxTime) {
        surpriseMe();
    } else {
        findMovie();
    }
}

function setupContactPopup() {
    const contactBtn = document.getElementById('contactBtn');
    const popupOverlay = document.getElementById('popupOverlay');
    const cancelBtn = document.getElementById('cancelBtn');
    const contactForm = document.getElementById('contactForm');

    // show popup
    contactBtn.onclick = () => {
        popupOverlay.style.display = 'block';
    };

    // hide popup
    cancelBtn.onclick = () => {
        popupOverlay.style.display = 'none';
        contactForm.reset();
    };

    // hide popup when clicking outside
    popupOverlay.onclick = (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = 'none';
            contactForm.reset();
        }
    };

    // handle form submission
    contactForm.onsubmit = (e) => {
        e.preventDefault();
        showError('Thanks for your feedback! (Demo mode - no data sent)');
        popupOverlay.style.display = 'none';
        contactForm.reset();
    };
}