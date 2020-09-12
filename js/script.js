const loading = document.querySelector(".loading");

const url = "https://ghibliapi.herokuapp.com/films"
const infoContainer = document.querySelector(".container");


setTimeout(async function callVideo() {
    try {
        const response = await fetch(url);

        const pageInfo = await response.json();

        console.log(pageInfo);


        const jsonCount = pageInfo;

        infoContainer.innerHTML = "";

        for (let i = 0; i <= jsonCount.length; i++) {

            console.log(jsonCount[i].title);
            console.log(jsonCount[i].release_date);
            console.log(jsonCount[i].director);
            if (i == 19) {
                break;
            };
            infoContainer.innerHTML += `<div class="box"><a href="detail.html?id=${jsonCount[i].id}" class="match">
            <div class="title"><h2>film: ${jsonCount[i].title}</h2></div>
            <div class="release-date"><p>Release date: ${jsonCount[i].release_date}</p></div>
            <div class = "Director"> <p>Director: ${jsonCount[i].director}</p></div> </a></div>`;
        }
    }
    catch (error) {
        console.log(error);
        infoContainer.innerHTML = "An error has occurred when calling the API";
    }
}, 2000);

callVideo();