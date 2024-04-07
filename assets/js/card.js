const movieData = {

    title: "Red Notice",
    imageSrc: "./assets/pictures/movies/red-notice.jpg",
    url: "https://www.hdfilmcehennemi.us/red-notice-8/",
    genre: "Action - Comedy",
    year: 2021,
    rating: 8.1

}

function createCard(data) {

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
        <div class="card-head">
            <img src="${data.imageSrc}" alt="" class="card-img">
            <div class="card-overlay">
                <div class="bookmark">
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div class="rating">
                    <ion-icon name="star-outline"></ion-icon>
                    <span>${data.rating}</span>
                </div>
                <div class="play">
                    <ion-icon name="caret-forward-circle-outline" class="play-button" data-url="${data.url}"></ion-icon>
                </div>
            </div>
        </div>
        <div class="card-body">
            <h3 class="card-title">${data.title}</h3>
            <div class="card-info">
                <span class="genre">${data.genre}</span>
                <span class="year">${data.year}</span>
            </div>
        </div>
    `;

    return movieCard;

}

const movieContainer = document.getElementById("movie-grid");
const movieCardElement = createMovieCard(movieData);
movieContainer.appendChild(movieCardElement);