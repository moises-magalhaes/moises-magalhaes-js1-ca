const matchDetails = document.querySelector(".match-details");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://www.scorebat.com/video-api/" + id;
const corsFix = "https://noroffcors.herokuapp.com/" + url;

console.log(corsFix);

//async function fetchProperties() {

//    try {

//        const response = await fetch(corsFix);
//        const details = await response.json();

//        console.log(details);

//        createHtml(details);
//    }

//    catch (error) {
//        console.log(error);
//        containerDetails.innerHTML = message("error", error);
//    }

//}
// fetchProperties();

function createHtml(details) {
    containerDetails.innerHTML = `<h1>${details.name}</h1>
   <div class = "details-image" style="background-image: url('${details.background_image}');  height: 400px; width: 100%; background-repeat: no-repeat"></div>
   <div class="details-rating"><p>Rating: </p>${details.rating}</div>
   <div class="details-released"><p>releasing date: </p>${details.released}</div>
   <div class="details-released"><p>description: </p>${details.description}</div>`;

}
