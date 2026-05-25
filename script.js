// ===============================
// VARIABLES
// ===============================

let calories = 1800;
let water = 2;
let currentWeight = 92;

const initialWeight = 92;
const goalWeight = 75;


// ===============================
// ELEMENTOS
// ===============================

const startBtn =
document.getElementById("startBtn");

const loginBtn =
document.getElementById("loginBtn");

const darkModeBtn =
document.getElementById("darkModeBtn");

const updateWeightBtn =
document.getElementById("updateWeightBtn");

const updateWaterBtn =
document.getElementById("updateWaterBtn");

const waterInput =
document.getElementById("waterInput");

const resetCaloriesBtn =
document.getElementById("resetCaloriesBtn");

const saveMealBtn =
document.getElementById("saveMealBtn");

const completeChallengeBtn =
document.getElementById("completeChallengeBtn");

const newChallengeBtn =
document.getElementById("newChallengeBtn");

const caloriesValue =
document.getElementById("caloriesValue");

const waterValue =
document.getElementById("waterValue");

const currentWeightText =
document.getElementById("currentWeight");

const progressBar =
document.getElementById("progressBar");

const mealInput =
document.getElementById("mealInput");

const mealList =
document.getElementById("mealList");

const challengeText =
document.getElementById("challengeText");

const challengeStatus =
document.getElementById("challengeStatus");


// ===============================
// BASE DE DATOS DE COMIDAS
// ===============================

const foodsDatabase = {

    "pollo":300,
    "arroz":250,
    "huevo":80,
    "avena":150,
    "pizza":400,
    "hamburguesa":550,
    "pan":120,
    "atun":200,
    "carne":350,
    "papas":280,
    "pasta":320,
    "banana":100,
    "manzana":90,
    "cafe":20,
    "ensalada":100,
    "salmon":350,
    "yogurt":120,
    "queso":200,
    "frijoles":180,
    "arepa":200

};


// ===============================
// RETOS FITNESS
// ===============================

const fitnessChallenges = [

    "🔥 Camina 5.000 pasos hoy",
    "💧 Toma 3 litros de agua",
    "🥗 Come una comida saludable",
    "🏋️ Haz 30 minutos de ejercicio",
    "🚶 Camina después de almorzar",
    "🍎 Evita comida chatarra hoy",
    "😴 Duerme mínimo 8 horas",
    "💪 Haz 20 flexiones",
    "🚴 Haz cardio por 15 minutos",
    "🧘 Relájate y reduce estrés"

];


// ===============================
// BOTON EMPEZAR
// ===============================

startBtn.addEventListener("click", () => {

    alert("Bienvenido a FitLife AI 🔥");

});


// ===============================
// LOGIN
// ===============================

loginBtn.addEventListener("click", () => {

    alert("Sistema Login próximamente 🔐");

});


// ===============================
// DARK MODE
// ===============================

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});


// ===============================
// ACTUALIZAR PESO
// ===============================

updateWeightBtn.addEventListener("click", () => {

    const newWeight =
    prompt("Ingresa tu nuevo peso");

    if(!newWeight) return;

    currentWeight =
    parseInt(newWeight);

    currentWeightText.innerText =
    currentWeight + " kg";

    updateProgress();

});


// ===============================
// FUNCION PROGRESO
// ===============================

function updateProgress(){

    let percentage =

    ((initialWeight - currentWeight)
    /
    (initialWeight - goalWeight))

    * 100;

    if(percentage < 0){
        percentage = 0;
    }

    if(percentage > 100){
        percentage = 100;
    }

    progressBar.style.width =
    percentage + "%";

}


// ===============================
// AGREGAR AGUA
// ===============================
// ACTUALIZAR AGUA
// ===============================

updateWaterBtn.addEventListener("click", () => {

    const newWater =
    waterInput.value;

    if(newWater === ""){

        alert("Ingresa una cantidad de agua");

        return;

    }

    water = parseFloat(newWater);

    waterValue.innerText =
    water + "L";

    waterInput.value = "";

});
// ===============================
// REINICIAR CALORIAS
// ===============================

resetCaloriesBtn.addEventListener("click", () => {

    calories = 0;

    caloriesValue.innerText =
    calories;

});


// ===============================
// GUARDAR COMIDA
// ===============================

saveMealBtn.addEventListener("click", () => {

    const meal =
    mealInput.value.toLowerCase();

    if(meal === ""){

        alert("Escribe una comida");

        return;

    }

    let detectedCalories = 0;


    // DETECTAR COMIDAS

    for(let food in foodsDatabase){

        if(meal.includes(food)){

            detectedCalories +=
            foodsDatabase[food];

        }

    }


    // SI NO DETECTA

    if(detectedCalories === 0){

        detectedCalories = 150;

    }


    // SUMAR CALORIAS

    calories += detectedCalories;

    caloriesValue.innerText =
    calories;


    // CREAR ELEMENTO

    const li =
    document.createElement("li");

    li.innerHTML = `
        🍽️ ${meal}
        <br>
        🔥 ${detectedCalories} calorías
    `;

    mealList.appendChild(li);


    // LIMPIAR INPUT

    mealInput.value = "";

});


// ===============================
// RETO FITNESS
// ===============================

function generateChallenge(){

    const randomIndex =
    Math.floor(
        Math.random() *
        fitnessChallenges.length
    );

    challengeText.innerText =
    fitnessChallenges[randomIndex];

    challengeStatus.innerText =
    "Pendiente ❌";

}


completeChallengeBtn.addEventListener("click", () => {

    challengeStatus.innerText =
    "Completado ✅";

});


newChallengeBtn.addEventListener("click", () => {

    generateChallenge();

});


// ===============================
// INICIAR
// ===============================

generateChallenge();

updateProgress();

console.log("FitLife AI cargado correctamente 🔥");
