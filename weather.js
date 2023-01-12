var lat,lon;
var all;

function fun(){
    navigator.geolocation.getCurrentPosition(async (position)=>{
        lat = await position.coords.latitude;
        lon = await position.coords.longitude;
        console.log(`latitude: ${lat} and longitude: ${lon}`);
        },
        (error)=> console.log(error)
    );
}
fun();
const API = '6582282b3065b8dc7c43f2df598f9bdb';
var wea;


document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('#weather').onclick = ()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
    }
});