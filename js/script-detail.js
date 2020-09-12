const filmDetails = document.querySelector(".film-details");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const filmUrl = "https://ghibliapi.herokuapp.com/films/" + id;

console.log(filmUrl);

async function fetchProperties() {

    try {

        const responseDetails = await fetch(filmUrl);
        const filmInfo = await responseDetails.json();

        console.log(filmInfo);

        createHtml(filmInfo);
    }

    catch (error) {
        console.log(error);
        filmDetails.innerHTML = "an error has occurred"
    }

}
fetchProperties();

function createHtml(filmInfo) {
    filmDetails.innerHTML = `<h1>${filmInfo.title}</h1> <div class="box">
   <div class="details-rating"><p>Director: </p>${filmInfo.director}</div>
   <div class="details-released"><p>releasing date: </p>${filmInfo.release_date}</div>
   <div class="details-released"><p>description: </p>${filmInfo.description}</div></div>`;

}
