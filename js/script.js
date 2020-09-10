const url = "https://www.scorebat.com/video-api/v1/";


const infoContainer = document.querySelector(".container");
//const loading = document.querySelector(".loading");

async function callVideo() {
    try {
        const response = await fetch(url);

        const pageInfo = await response.json();

        console.log(pageInfo);


        const jsonCount = pageInfo;

        infoContainer.innerHTML = "";

        for (let i = 0; i <= jsonCount.length; i++) {
            
            console.log(jsonCount[i].title);
            console.log(jsonCount[i].competition.name);
            console.log(jsonCount[i].thumbnail);
            if (i == 12) {
                break;
            };
            infoContainer.innerHTML += `<a href="detail.html?id=${jsonCount[i].competition.id}" class="match">
            <div class="title"><h2>Match: ${jsonCount[i].title}</h2></div>
            <div class="competition"><p>tournment: ${jsonCount[i].competition.name}</p></div>
            <div class = "thumbnails" style="background-image: url('${jsonCount[i].thumbnail}');  height: 400px; width: 450px; background-repeat: no-repeat"></div> </a>`;
        }
    }
    catch (error) {
        console.log(error);
        infoContainer.innerHTML = "An error has occurred when calling the API";
    }
};

callVideo();