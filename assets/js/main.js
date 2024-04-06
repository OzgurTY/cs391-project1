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


function filterMovies() { //filters functions based on the option value of filter bar
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
    
