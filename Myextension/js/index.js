const fetchData = async () => {
  try {
    const res = await fetch(
      "https://apis.scrimba.com/unsplash/photos/random/?orientation=landscape&query=nature"
    );
    const data = await res.json();
    document.querySelector(
      "body"
    ).style.backgroundImage = `url("${data.urls.regular}")`;
    document.getElementById(
      "author"
    ).innerText = `Taken by:${data.user.username}`;
  } catch (error) {
    console.log("some thing went wrong");

    document.querySelector(
      "body"
    ).style.backgroundImage = `url("https://images.unsplash.com/photo-1520785808361-2ce0216abf67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA0ODE3NTg&ixlib=rb-4.0.3&q=80&w=1080")`;
    document.getElementById("author").innerText = `taken by:Rohith Goura}`;
  }
};
fetchData();

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then((res) => {
    if (!res.ok) {
      throw Error("error in connection to the server");
    }

    return res.json();
  })
  .then((data) => {
    document.getElementById("crypto").innerHTML = `
  <img alt="doge coin icon " src="${data.image.thumb}">
  <span>${data.name}</span>
  <p>💵 :$${data.market_data.current_price.usd}</p>
  <p>💸 :$${data.market_data.high_24h.usd}</p>
  <p>🧨 :$${data.market_data.low_24h.usd}</p>
 
  `;
 
  })
  .catch((err) => {
    console.log("Some thing went wrong during fetching crypto data");
  });

let printDate = () => {
  let date = new Date();
  document.getElementById("timenow").innerText = date.toLocaleTimeString(
    "en-US",
    {
      timeStyle: "medium",
    }
  );
};
setInterval(printDate, 1000);

function success(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=en`
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("some thing went wrong while fetching data");
      }
      return res.json();
    })
    .then((data) => {
      document.getElementById("weather").innerHTML = `
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
      <p>${data.main.temp}º</p>
      <p>${data.name}</p>
      `;
    })
    .catch((err) => console.log(err));
}
function error() {
  alert("Sorry, no position available.");
}
const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};
navigator.geolocation.getCurrentPosition(success, error, options);
