'use strict';

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

const navbarForm = document.querySelector('.navbar-form');
const navbarFormCloseBtn = document.querySelector('.navbar-form-close');
const navbarSearchBtn = document.querySelector('.navbar-search-btn');

function navIsActive() {
    header.classList.toggle('active');
    nav.classList.toggle('active');
    navbarMenuBtn.classList.toggle('active');
}

navbarMenuBtn.addEventListener('click', navIsActive);

const searchBarIsActive = () => navbarForm.classList.toggle('active');

navbarSearchBtn.addEventListener('click', searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive);


function filterMovies() {
    const selectedGenre = document.getElementById("genre-select").value.toLowerCase();
    const selectedYear = document.getElementById("year-select").value.toLowerCase();
    const movies = document.querySelectorAll('.movie-card');

    movies.forEach(movie => {
        const genreText = movie.querySelector('.genre').textContent.toLowerCase();
        const yearText = movie.querySelector('.year').textContent;
        const year = parseInt(yearText, 10);

        const matchesGenre = selectedGenre === 'all genres' || genreText.includes(selectedGenre);

       
        let matchesYear = selectedYear === 'all years';
        if (selectedYear === '2024' && year === 2024) matchesYear = true;
        else if (selectedYear === '2020-2023' && year >= 2020 && year <= 2023) matchesYear = true;
        else if (selectedYear === '2010-2019' && year >= 2010 && year <= 2019) matchesYear = true;
        else if (selectedYear === '2000-2009' && year >= 2000 && year <= 2009) matchesYear = true;
        else if (selectedYear === '1970-1999' && year >= 1970 && year <= 1999) matchesYear = true;

        
        movie.style.display = matchesGenre && matchesYear ? '' : 'none';
    });
}
document.getElementById("genre-select").addEventListener('change', filterMovies);
document.getElementById("year-select").addEventListener('change', filterMovies);

function TotalFilmsBasedOnCategories() {
    const movies = document.querySelectorAll('.movie-card');
    let actionFilms = 0;
    let comedyFilms = 0;
    let scifiFilms = 0; 
    let horrorFilms = 0;
    let animationFilms = 0;
    let adventureFilms = 0;

    movies.forEach(movie => {
        const genreText = movie.querySelector('.genre').textContent.toLowerCase();
        
        if (genreText.includes('action')) actionFilms++;
        if (genreText.includes('comedy')) comedyFilms++;
        if (genreText.includes('sci-fi')) scifiFilms++; 
        if (genreText.includes('horror')) horrorFilms++;
        if (genreText.includes('animation')) animationFilms++;
        if (genreText.includes('adventure')) adventureFilms++;
    });

   
    document.getElementById('animation').querySelector('.total').innerHTML = animationFilms;
    document.getElementById('adventure').querySelector('.total').innerHTML = adventureFilms;
    document.getElementById('comedy').querySelector('.total').innerHTML = comedyFilms;
    document.getElementById('horror').querySelector('.total').innerHTML = horrorFilms;
    document.getElementById('sci-fi').querySelector('.total').innerHTML = scifiFilms; 
    document.getElementById('action').querySelector('.total').innerHTML = actionFilms;
}

document.addEventListener('DOMContentLoaded', TotalFilmsBasedOnCategories);

document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('.navbar-form').addEventListener('submit', function(event) {
        event.preventDefault();
        filterMovies();
    });

    
    document.querySelector('.navbar-form-search').addEventListener('keyup', filterMovies);

    function filterMovies() {
   
        var searchQuery = document.querySelector('.navbar-form-search').value.toLowerCase();

       
        var movies = document.querySelectorAll('.movie-card');

        
        movies.forEach(function(movie) {
          
            var titleText = movie.querySelector('.card-title').textContent.toLowerCase();

           
            if (titleText.includes(searchQuery)) {
                movie.style.display = '';
            } else {
                movie.style.display = 'none';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    
    var playButtons = document.querySelectorAll('.play-button');

   
    playButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            
            var movieUrl = this.getAttribute('data-url');

        
            window.open(movieUrl, '_blank');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const authButton = document.getElementById('signIn');

    function updateButton() {
        
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (isLoggedIn) {
            
            authButton.textContent = 'Log Out';
            authButton.onclick = function() {
                
                localStorage.removeItem('isLoggedIn'); 
                updateButton(); 
            };
        } else {
            
            authButton.textContent = 'Sign In';
            authButton.onclick = function() {
                
                window.location.href = 'signin.html';
            };
        }
    }

    updateButton(); 
});

