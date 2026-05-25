// BOTON EMPEZAR

const startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", () => {

    alert("Bienvenido a FitLife 🔥");

});


// BOTON LOGIN

const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", () => {

    alert("Pantalla de login próximamente");

});


// ANIMACION SIMPLE DE PROGRESO

const progress = document.querySelector(".progress");

let width = 0;

const interval = setInterval(() => {

    if(width >= 35){

        clearInterval(interval);

    } else {

        width++;

        progress.style.width = width + "%";

    }

}, 20);


// DATOS SIMULADOS

const calories = 1840;

console.log("Calorías consumidas:", calories);


// EJEMPLO COACH IA SIMPLE

function coachAdvice(){

    const tips = [

        "Bebe más agua 💧",
        "Aumenta proteína 🍗",
        "Duerme mejor 😴",
        "Haz cardio 3 veces por semana 🏃",
        "Reduce azúcar 🍭"

    ];

    const random = Math.floor(Math.random() * tips.length);

    return tips[random];
}

console.log("Consejo IA:", coachAdvice());
