const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
currentyear.textContent = today.getFullYear();


lastModified.innerHTML = `Last Modified: <span class="highlight">
  ${document.lastModified}
</span>`;




const temperature = 18;
const windSpeed = 6;

function calculateWindChill(temp, wind) {
  return 13.12 + 0.6215 * temp - 11.37 * wind ** 0.16 + 0.3965 * temp * wind ** 0.16;
}

// Display static values
document.getElementById("temperature").textContent = temperature;
document.getElementById("windspeed").textContent = windSpeed;

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
  windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
}

document.getElementById("windChill").textContent =
  windChill === "N/A" ? "N/A" : `${windChill} °C`;

