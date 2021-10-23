const info = document.getElementById('info');
const add = document.getElementById("add");
const input = document.getElementById("input");

const API_KEY = "f32cfa0133a992d042027732e48eae99";

let query = "mumbai"

function search(query){
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`;
    fetch(URL).then(res => res.json()).then(data => {
    console.log(data);
    info.innerHTML =  `
            <h3 id="name">${data?.name} , ${data.sys.country}</h3>
            <p>${data.weather[0].description}</p>
            <div class="temp">
              <div class="icon">
                <img src="https://img.icons8.com/emoji/48/000000/cloud-emoji.png"/>
                <h1>${Math.round(data?.main?.temp - 273.15)}°C</h1>
              </div>
            </div>
            <div class="more">
            <div class="left">
                <p>Humidity : ${data.main.humidity}%</p>
                <p>Pressure : ${data.main.pressure}mb</p>
              </div>
              <div class="right">
                <p>Max Temp : ${Math.round(data.main.temp_max -273.15) }°C</p>
                <p>Min Temp : ${Math.round(data.main.temp_min - 273.15)}°C</p>
              </div>
            </div>`
    })
}

search(query);
add.addEventListener('click',()=>{
    search(input.value)
    input.value = ""
})



