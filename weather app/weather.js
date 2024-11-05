const apikey = "f8a69bc673109beb2c2fb9249fafd755";
const url = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

async function weather(city) {
  const info = document.querySelector("#info");
  const humd = document.querySelector("#humd");
  const humdp = document.querySelector("#humdp");
  const w = document.querySelector("#w");
  const wind = document.querySelector("#wind");
  const windSpeed = document.querySelector("#windSpeed");
  const h = document.querySelector("#h");

  const resp = await fetch(url + city + `&appid=${apikey}`);
  const data = await resp.json();

  if (resp.status == 404) {
    document.querySelector("#und").style.display = "block";
    info.style.display = "none";
    humd.style.display = "none";
    humdp.style.display = "none";
    w.style.display = "none";
    wind.style.display = "none";
    windSpeed.style.display = "none";
    h.style.display = "none";
  } else {
    document.querySelector("#und").style.display = "none";
    info.style.display = "block";
    humd.style.display = "block";
    humdp.style.display = "block";
    w.style.display = "block";
    wind.style.display = "block";
    windSpeed.style.display = "block";
    h.style.display = "block";

    console.log(data);
    document.querySelector("#deg").textContent =
      Math.floor(data.list[0].main.temp) + "°c";
    document.querySelector("#city").textContent = data.city.name;

    document.querySelector("#humdp").textContent =
      data.list[0].main.humidity + "%";

    document.querySelector("#windSpeed").textContent =
      data.list[0].wind.speed + "km/h";

    if (data.list[0].weather[0].main == "Rain") {
      document.querySelector("#sun").src = "raining.png";
    } else if (data.list[0].weather[0].main == "Clouds") {
      document.querySelector("#sun").src = "cloud.png";
    } else if (data.list[0].weather[0].main == "Clear") {
      document.querySelector("#sun").src = "sun.png";
    } else if (data.list[0].weather[0].main == "drizzle") {
      document.querySelector("#sun").src = "storm.png";
    } else if (data.list[0].weather[0].main == "mist") {
      document.querySelector("#sun").src = "fog.png";
    }
  }
}

function shouldYouFollowMe() {
  let reasonsToFollow = [
    "Awesome coding tips",
    "Cool JavaScript tricks",
    "Fun tech insights",
    "A friendly community",
  ];

  console.log("Reasons to follow me on Medium:");
  reasonsToFollow.forEach((reason) => {
    console.log(` ${reason}`);
  });

  let followMe = true;

  // If you love coding and learning new things, follow me!
  if (followMe) {
    console.log("✨ Thank you and stay tuned for my next article ✨");
  } else {
    console.log("No worries, but you're missing out on some great tips 😎");
  }

  return followMe;
}
shouldYouFollowMe();
