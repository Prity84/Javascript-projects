const apikey = "afc7ae820b691463a5cd4ea6e2edbf4b";
const inputEl = document.querySelector("#searchInput");
const seachicon = document.querySelector("#searchIcon");
const body = document.querySelector("body");
let currentRandomImage = null;

seachicon.addEventListener("click", () => {
  const cityName = inputEl.value.trim();

  fetchWeather(cityName);
});
async function fetchWeather(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`
    );
    // console.log(response)

    if (!response.ok) {
      throw new Error("Network response was  not ok");
    }
    const data = await response.json();
    console.log(data);

if(!currentRandomImage){
    currentRandomImage = getRandomImage();
    body.style.backgroundImage = `url(${currentRandomImage})`;

}
    const base = data.base;
    const Latitude = Math.floor(data.coord.lat);
    const Longtitude = Math.floor(data.coord.lon);
    const clouds = Math.floor(data.clouds.all);
    const feels = Math.floor(data.main.feels_like);
    const humidity = Math.floor(data.main.humidity);
    const maxTem = Math.floor(data.main.temp_max);
    const minTem = Math.floor(data.main.temp_min);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const main = data.weather[0].main;
    const Winddeg = Math.floor(data.wind.deg);
    const Speed = Math.floor(data.wind.speed);
    const timezone = data.timezone;
    const visibility = data.visibility;

    //Update boxes
    document.getElementById("box1").innerHTML = `<p>base : <br>${base}</p>`;
    document.getElementById(
      "box2"
    ).innerHTML = `<p>Latitude : <br>${Latitude}</p>`;
    document.getElementById(
      "box3"
    ).innerHTML = `<p>Longtitude : <br>${Longtitude}</p>`;
    document.getElementById("box4").innerHTML = `<p>clouds : <br>${clouds}</p>`;
    document.getElementById("box5").innerHTML = `<p>feels : <br>${feels}</p>`;
    document.getElementById(
      "box6"
    ).innerHTML = `<p>Humidity : <br>${humidity}</p>`;
    document.getElementById(
      "box7"
    ).innerHTML = `<p>Max.temp : <br>${maxTem}</p>`;
    document.getElementById(
      "box8"
    ).innerHTML = `<p>Min.temp : <br>${minTem}</p>`;
    document.getElementById(
      "box9"
    ).innerHTML = `<p>Description : <br>${description}</p>`;
    document.getElementById("box10").innerHTML = `<p>Icon : <br>${icon}</p>`;
    document.getElementById("box11").innerHTML = `<p>Main : <br>${main}</p>`;
    document.getElementById(
      "box12"
    ).innerHTML = `<p>Wind.deg : <br>${Winddeg}</p>`;
    document.getElementById("box13").innerHTML = `<p>Speed : <br>${Speed}</p>`;
    document.getElementById(
      "box14"
    ).innerHTML = `<p>Time-zone : <br>${timezone}</p>`;
    document.getElementById(
      "box15"
    ).innerHTML = `<p>Visibility : <br>${visibility}</p>`;
  } catch (error) {
    console.log("Error data:", error);
  }
}

function getRandomImage() {
  const images = [
    "https://images.pexels.com/photos/355844/pexels-photo-355844.jpeg?cs=srgb&dl=pexels-pixabay-355844.jpg&fm=jpg",
    "https://static.vecteezy.com/system/resources/previews/030/258/039/large_2x/beautiful-nature-wallpaper-hd-wallpaper-ai-generated-free-photo.jpg",
    "https://t3.ftcdn.net/jpg/05/35/47/38/360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg",
    "https://images.unsplash.com/photo-1599302592205-d7d683c83eea?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjBzdW5zZXR8ZW58MHx8MHx8fDA%3D",
    "https://w0.peakpx.com/wallpaper/227/122/HD-wallpaper-california-sunset-street-sunset-thumbnail.jpg",
    "./download.jpg",
    "./pexels-pixabay-163255.jpg",
  ];
  return images[Math.floor(Math.random()* images.length)];
}

setInterval(()=>{
    const cityName = inputEl.value.trim();
    if(cityName !==""){
        fetchWeather(cityName);
    }
},2000);
