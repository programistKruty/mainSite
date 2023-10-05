document.getElementById("year").innerHTML = new Date().getFullYear();


document.getElementById("date").innerHTML = new Date().toLocaleDateString(navigator.language);

function openTechnikum()
{
    document.location.href = "http://zsdios.pl/";
}

var snowConfig = {
  color: [255, 255, 255],
  count: 100,
  opacity: 0.8,
  density: 1 / 100,
};