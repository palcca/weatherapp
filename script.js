document.querySelector("#searchBtn").addEventListener("click", ()=>{
    weather((document.querySelector("#cityInput").value)).catch(err => alert("Add meg a várost")) 
});

async function weather(city){
  const response = await fetch("https://api.weatherbit.io/v2.0/current?city=" + city + "&lang=hu&key=7769188b1d5c4c3991d23168442d44ec", { mode: "cors" });
  const Data = await response.json();
  document.querySelector("#location").textContent = Data.data[0].city_name+", " + Data.data[0].country_code; 
  document.querySelector("#temp").textContent = Data.data[0].temp + " \u2103";
  document.querySelector("#winds").textContent = "Szél: " + (Math.floor(Number(Data.data[0].wind_spd)*3.6)) + "km/h, " + "Irány: " + Data.data[0].wind_cdir;
  document.querySelector("#weatherDescription").textContent = ((Data.data[0].weather.description).charAt(0)).toUpperCase() + Data.data[0].weather.description.substring(1);
  document.querySelector("#humidity").textContent = "Relatív páratartalom: "+ Data.data[0].rh + "%";
  document.querySelector("#weather").style.borderColor="black";
  document.querySelector("#temp").style.borderColor="black";
  
};
