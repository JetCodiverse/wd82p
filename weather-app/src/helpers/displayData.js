export default function displayData(data) {
  const app = document.getElementById("app ");
  const p = document.getElementById("p");
  p.textContent = data.currentWeather;

  app.append(p);
}
