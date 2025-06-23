// Variables to store what the user picks
var selectedMood = '';
var selectedTime = 0;
var excludedGenres = [];
var shownMovies = [];
var wasSurprise = false;

// Wait for page to load
window.onload = function() {
    setupAllButtons();
    setupContactForm();
};

// Set up all the buttons
function setupAllButtons() {
    // Mood buttons
    var moodButtons = document.getElementsByClassName('mood-btn');
    for (var i = 0; i < moodButtons.length; i++) {
        moodButtons[i].onclick = function() {
            clearSelected('mood-btn');
            this.className = 'mood-btn selected';
            selectedMood = this.getAttribute('data-mood');
        };
    }

    // Time buttons
    var timeButtons = document.getElementsByClassName('time-btn');
    for (var i = 0; i < timeButtons.length; i++) {
        timeButtons[i].onclick = function() {
            clearSelected('time-btn');
            this.className = 'time-btn selected';
            selectedTime = this.getAttribute('data-time');
        };
    }

    // Genre buttons
    var genreButtons = document.getElementsByClassName('genre-tag');
    for (var i = 0; i < genreButtons.length; i++) {
        genreButtons[i].onclick = function() {
            var genre = this.getAttribute('data-genre');
            
            if (this.className === 'genre-tag excluded') {
                this.className = 'genre-tag';
                removeFromExcluded(genre);
            } else {
                this.className = 'genre-tag excluded';
                excludedGenres.push(genre);
            }
        };
    }

    // Main buttons
    document.getElementById('findMovieBtn').onclick = findMovie;
    document.getElementById('surpriseBtn').onclick = surpriseMe;
    document.getElementById('tryAgainBtn').onclick = tryAnother;
    document.getElementById('resetBtn').onclick = resetAll;
}

// Clear selected buttons
function clearSelected(className) {
    var buttons = document.getElementsByClassName(className);
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].className = className;
    }
}

// Remove genre from excluded list
function removeFromExcluded(genre) {
    var newList = [];
    for (var i = 0; i < excludedGenres.length; i++) {
        if (excludedGenres[i] !== genre) {
            newList.push(excludedGenres[i]);
        }
    }
    excludedGenres = newList;
}

// Find movie button clicked
function findMovie() {
    if (selectedMood === '' || selectedTime === 0) {
        showMessage('Please pick your mood and time!');
        return;
    }

    wasSurprise = false;
    document.getElementById('preferencesForm').style.display = 'none';
    document.getElementById('movieResult').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    
    setTimeout(function() {
        var movie = getMovie();
        if (movie) {
            showMovieInfo(movie);
        } else {
            showMessage('No movies found. Try different options!');
            document.getElementById('loading').style.display = 'none';
            document.getElementById('preferencesForm').style.display = 'block';
        }
    }, 800);
}

// Surprise me button clicked
function surpriseMe() {
    wasSurprise = true;
    document.getElementById('preferencesForm').style.display = 'none';
    document.getElementById('movieResult').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    
    setTimeout(function() {
        var randomNumber = Math.floor(Math.random() * allMovies.length);
        showMovieInfo(allMovies[randomNumber]);
    }, 800);
}

// Try another movie
function tryAnother() {
    if (wasSurprise) {
        surpriseMe();
    } else {
        findMovie();
    }
}

// Reset everything
function resetAll() {
    // Clear all buttons
    var allButtons = document.getElementsByTagName('button');
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('selected', 'excluded');
    }
    
    // Reset variables
    selectedMood = '';
    selectedTime = 0;
    excludedGenres = [];
    shownMovies = [];
    wasSurprise = false;
    
    // Show form
    document.getElementById('movieResult').style.display = 'none';
    document.getElementById('preferencesForm').style.display = 'block';
}

// Get a movie based on selections
function getMovie() {
    var goodMovies = [];
    
    // Check each movie
    for (var i = 0; i < allMovies.length; i++) {
        var movie = allMovies[i];
        
        // Skip if wrong mood
        if (movie.mood !== selectedMood) continue;
        
        // Skip if too long
        if (movie.runtime > selectedTime) continue;
        
        // Skip if has excluded genre
        var skipMovie = false;
        for (var j = 0; j < excludedGenres.length; j++) {
            if (movie.genres.includes(excludedGenres[j])) {
                skipMovie = true;
                break;
            }
        }
        if (skipMovie) continue;
        
        // Skip if already shown
        var alreadyShown = false;
        for (var k = 0; k < shownMovies.length; k++) {
            if (shownMovies[k] === movie.title) {
                alreadyShown = true;
                break;
            }
        }
        if (alreadyShown) continue;
        
        // Movie is good!
        goodMovies.push(movie);
    }
    
    // No movies found
    if (goodMovies.length === 0) {
        if (shownMovies.length > 0) {
            shownMovies = [];
            return getMovie();
        }
        return null;
    }
    
    // Pick random from good movies
    var randomIndex = Math.floor(Math.random() * goodMovies.length);
    var chosenMovie = goodMovies[randomIndex];
    shownMovies.push(chosenMovie.title);
    
    return chosenMovie;
}

// Show the movie on screen
function showMovieInfo(movie) {
    document.getElementById('movieTitle').innerText = movie.title;
    document.getElementById('movieYear').innerText = movie.year;
    document.getElementById('movieRuntime').innerText = movie.runtime + ' min';
    document.getElementById('movieRating').innerText = movie.rating;
    document.getElementById('moviePlot').innerText = movie.plot;
    document.getElementById('movieGenres').innerText = movie.genres;
    document.getElementById('moviePoster').src = movie.poster;
    
    document.getElementById('loading').style.display = 'none';
    document.getElementById('movieResult').style.display = 'block';
}

// Show message to user
function showMessage(text) {
    var messageDiv = document.getElementById('errorMessage');
    messageDiv.innerText = text;
    messageDiv.style.display = 'block';
    
    setTimeout(function() {
        messageDiv.style.display = 'none';
    }, 3000);
}

// Contact form
function setupContactForm() {
    var contactBtn = document.getElementById('contactBtn');
    var overlay = document.getElementById('popupOverlay');
    var cancelBtn = document.getElementById('cancelBtn');
    var form = document.getElementById('contactForm');

    contactBtn.onclick = function() {
        overlay.style.display = 'block';
    };

    cancelBtn.onclick = function() {
        overlay.style.display = 'none';
        form.reset();
    };

    overlay.onclick = function(e) {
        if (e.target === overlay) {
            overlay.style.display = 'none';
            form.reset();
        }
    };

    form.onsubmit = function(e) {
        e.preventDefault();
        showMessage('Thanks for your message!');
        overlay.style.display = 'none';
        form.reset();
    };
}