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

 document.getElementById("genre-select").addEventListener('change', function() {
        var selectedGenre = this.value.toLowerCase(); // Convert selected genre to lowercase for comparison

        const movies = document.querySelectorAll('.movie-card'); // Select all movie cards
        
        movies.forEach(movie => {
            // Extract genre text from each movie card and convert it to lowercase
            const genreText = movie.querySelector('.genre').textContent.toLowerCase();
            
            // Decision to show/hide based on genre match or 'all genres' selection
            if (selectedGenre === 'all genres') {
                movie.style.display = ''; // Show the movie card
            } else if (genreText.includes(selectedGenre)) {
                movie.style.display = ''; // Show if it matches the selected genre
            } else {
                movie.style.display = 'none'; // Hide if it does not match
            }
        });
    });

