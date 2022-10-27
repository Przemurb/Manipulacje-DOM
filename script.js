function showNewsHeading() {
    let newsHeading = document.getElementById("news");
    console.log(newsHeading);
    console.log(newsHeading.innerHTML);
}

showNewsHeading();  

function showFirstNews() {
    let newsList = document.getElementById("news-list");
    console.log(newsList.getElementsByTagName("li")[0].innerHTML);
    // console.log(newsList.getElementsByTagName("li").item(0).innerHTML);
}

showFirstNews();

function ShowSportNews() {
    let sportNews = document.querySelectorAll("#sport-list > li");
    sportNews.forEach(element => console.log(element.innerHTML));
    }

ShowSportNews();

function changeHeaders() {
    let news = document.getElementById("news");
    news.innerHTML = "Ale hity!"
    let sport = document.getElementById("sport");
    sport.innerHTML = "To ma być sport?"
}

setTimeout(changeHeaders, 3000);

function addDynamicClassToH2() {
    let h2Elements = document.getElementsByTagName("h2");
    for(let i = 0; i < h2Elements.length; i++) {
        const element = h2Elements[i];
        element.classList.add("dynamic");
    }
}

setTimeout(addDynamicClassToH2, 2000);        
    
function addDynamicClassToBullets() {
    let secondBullets = document.querySelectorAll("ul > li:nth-child(2)");
    const addDynamicClass = element => element.classList.add("dynamic");
    secondBullets.forEach(addDynamicClass)
}

setTimeout(addDynamicClassToBullets, 5000);
