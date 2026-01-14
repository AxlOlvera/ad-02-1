const h1RedElement = document.getElementById("red");
const h1FourthElement = document.getElementById("fourthH");
const h1FivethElement = document.getElementById("fifthH");

h1RedElement.textContent = "Adiós!";
h1FourthElement.textContent = "Cambié a naranja con JS!";
h1FourthElement.style.color = "orange";
h1FivethElement.textContent = "Soy clickeable ahora :D";

h1FivethElement.addEventListener("click", (event)=>{
    h1FivethElement.textContent = "Lo ves??";
    h1FivethElement.style.color = "brown";
})
