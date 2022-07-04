import { getAvg } from "./averageService";

const scores = [90, 75, 60, 99, 94, 30];

const averageScore = getAvg(scores);

const messageToDisplay = `average score ${averageScore}`;

const imagen = document.createElement("img");
imagen.src = "./assets/logo_1.png";
imagen.alt = "logo";
imagen.style.width = "100px";

document.querySelector("#container")?.appendChild(imagen);
const average = document.createElement("p");
average.innerText = messageToDisplay;
document.querySelector("#container")?.appendChild(average);