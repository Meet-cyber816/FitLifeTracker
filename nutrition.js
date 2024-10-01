const saveNutrition = document.querySelector(".saveNutrition");
const nutritioLogData = document.querySelector(".nutritioLogData");
const foodList = document.querySelector(".food-list");

foodList.style.display = "none";

saveNutrition.addEventListener("click", (e) => {
  e.preventDefault();
  saveToStorage();
  history.go(0);
});

function saveToStorage() {
  const calories = document.querySelector("#calories").value;
  const waterIntake = document.querySelector("#water").value;
  const foodConsumed = document.querySelector("#food").value;

  if((calories && waterIntake && foodConsumed) == "" ){
    alert("Please fill up the data");
  }else{
    localStorage.setItem("nutrition-calories", calories);
    localStorage.setItem("nutrition-waterIntake", waterIntake);
    localStorage.setItem("nutrition-foodConsumed", foodConsumed);

    alert("Successfully saved nutrition log data");
  }
}

function getData() {
  const getCalories = localStorage.getItem("nutrition-calories");
  const getWater = localStorage.getItem("nutrition-waterIntake");
  const getFood = localStorage.getItem("nutrition-foodConsumed");

  foodList.style.display = "block";
  nutritioLogData.innerText = `Calories Consumed: ${getCalories} || Water Intake: ${getWater} || Food Consumed: ${getFood}`;
}

if (
  localStorage.getItem("nutrition-calories") &&
  localStorage.getItem("nutrition-waterIntake") &&
  localStorage.getItem("nutrition-foodConsumed")
) {
  getData();
} else {
  nutritioLogData.innerText = "No Data Found";
}
