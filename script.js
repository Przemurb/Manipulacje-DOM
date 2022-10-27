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
