let breakingImg = document.querySelector("#breakingImg");
let breakingNews_title = document.querySelector("#breakingNews .title");
let breakingNews_descr = document.querySelector("#breakingNews .description");
let TopNews = document.querySelector(".topNews");
let Sports_News = document.querySelector("#sportsNews .newsBox");
let Businessnews = document.querySelector("#BusinesNews .newsBox");
let Technologysnews = document.querySelector("#TechnologyNews .newsBox");
let healthNews = document.querySelector("#Apple .newsBox");
let scienceNews = document.querySelector("#Science .newsBox");

//fetching
const apiKey = "4c7671f15c044d8a8526cfd711f27546";

const fetchData = async (category, pageSize) => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${apiKey} `;
  const data = await fetch(url);
  const response = await data.json();
  console.log(response);
  return response.articles;
};
fetchData("general", 5);

//add breaking news

const add_breakingNews = (data) => {
  breakingImg.innerHTML = `<img src=${data[2].urlToImage} alt="image">`;
  breakingNews_title.innerHTML = `<a id="first-des" href = ${data[2].url} target= "_blank"<h2> ${data[2].title} </h2></a>`;
  breakingNews_descr.innerHTML = `${data[2].description}`;
};
fetchData("general", 5).then(add_breakingNews);

const add_TopNews = (data) => {
  let htm = "";
  let title = "";
  data.forEach((element) => {
    if (element.title.length < 100) {
      title = element.title;
    } else {
      title = element.title.slice(0, 100) + "...";
    }
    htm += ` <div class="news">
               <div class="img">
                     <img src="${element.urlToImage}" alt="image">
               </div>
               <div class="text">
              <div class="title">
              <a href = ${element.url} target = "_blank"><p>${title}</p></a>
          </div>
        </div>
      </div>`;

    TopNews.innerHTML = htm;
  });
};
fetchData("general", 20).then(add_TopNews);

//Sports News
const add_sportsNews = (data) => {
  let htm = ""
  let title = ""
  data.forEach((element) => {
    if (element.title.length<100) {
      title = element.title;
    } else {
      title = element.title.slice(0, 100) + "...";
    }
    htm += `<div class="newsCard">
               <div class="img">
               <img id="sportsImg" src="${element.urlToImage}" alt="image">
               </div>
                <div class="text">
                  <div class="title">
                    <a id="sports_link" href = ${element.url} target = "_blank"><p>${title}</p></a>
                  </div>
               </div>
             </div>`;
    Sports_News.innerHTML = htm;
  });
};
fetchData("sports", 5).then(add_sportsNews);

//Apple
const add_health = (data) => {
  let htm = "";
  let title = "";
  data.forEach((element) => {
    if (element.title.length<100) {
      title = element.title;
    } else {
      title = element.title.slice(0, 100) + "...";
    }
    htm += `<div class="newsCard">
  <div class="img">
  <img id="techImg" src="${element.urlToImage}" alt="image">
  </div>
   <div class="text">
     <div class="title">
       <a id="tech_link" href = ${element.url} target = "_blank"><p>${title}</p></a>
     </div>
  </div>
</div>`;
    healthNews.innerHTML = htm;
  });

};
fetchData('health', 5).then(add_health);

//Science
const add_science = (data) => {
  let htm = "";
  let title = "";
  data.forEach((element) => {
    if (element.title.length<100) {
      title = element.title;
    } else {
      title = element.title.slice(0, 100) + "...";
    }
    htm += `<div class="newsCard">
  <div class="img">
  <img id="techImg" src="${element.urlToImage}" alt="image">
  </div>
   <div class="text">
     <div class="title">
       <a id="tech_link" href = ${element.url} target = "_blank"><p>${title}</p></a>
     </div>
  </div>
</div>`;
    scienceNews.innerHTML = htm;
  });

};
fetchData('science', 5).then(add_science);


//Business section
const add_business = (data) => {
  let htm = "";
  let title = "";
  data.forEach((element) => {
    if (element.title.length<100) {
      title = element.title;
    } else {
      title = element.title.slice(0, 100) + "...";
    }
    htm += `<div class="newsCard">
  <div class="img">
  <img id="businessImg" src="${element.urlToImage}" alt="image">
  </div>
   <div class="text">
     <div class="title">
       <a id="business_link" href = ${element.url} target = "_blank"><p>${title}</p></a>
     </div>
  </div>
</div>`;
    Businessnews.innerHTML = htm;
  });

  // fetchData("business", 5).then(add_business);
};
fetchData('business', 5).then(add_business);

//Technology section
const add_technology = (data) => {
  let htm = "";
  let title = "";
  data.forEach((element) => {
    if (element.title.length<100) {
      title = element.title;
    } else {
      title = element.title.slice(0, 100) + "...";
    }
    htm += `<div class="newsCard">
  <div class="img">
  <img id="techImg" src="${element.urlToImage}" alt="image">
  </div>
   <div class="text">
     <div class="title">
       <a id="tech_link" href = ${element.url} target = "_blank"><p>${title}</p></a>
     </div>
  </div>
</div>`;
    Technologysnews.innerHTML = htm;
  });

};
fetchData('technology', 5).then(add_technology);

