const fitnessCardDetail = document.querySelector(".fitnessCardDetail");
const editFitnessData = document.querySelector(".editFitnessData");
const fitnessCard = document.querySelector(".fitness-card");
const fitnessForm = document.querySelector(".form");
const submitData = document.querySelector(".submit");
const section = document.querySelector(".section");

section.style.display = "none";

editFitnessData.addEventListener("click", (e) => {
  e.preventDefault();
  section.style.display = "block";
  fitnessForm.style.display = "flex";
  fitnessCard.style.display = "none";
});

submitData.addEventListener("click", (e) => {
  e.preventDefault();

  const steps = document.querySelector("#steps").value;
  const exercise = document.querySelector("#exercise").value;
  const exerciseDuration = document.querySelector("#exercise-duration").value;

  saveFitnessDataToStorage(steps, exercise, exerciseDuration);

  fitnessCardDetail.style.display = "none";

  fitnessForm.reset();
  fitnessForm.style.display = "none";
  history.go(0);
});

if (
  localStorage.getItem("fitness-steps") &&
  localStorage.getItem("fitness-exercise") &&
  localStorage.getItem("fitness-exercise-duration")
) {
  displayFitnessData();
}

function displayFitnessData() {
  const getSteps = localStorage.getItem("fitness-steps");
  const getExercise = localStorage.getItem("fitness-exercise");
  const getExerciseDuration = localStorage.getItem("fitness-exercise-duration");

  fitnessCardDetail.style.display = "block";

  fitnessCardDetail.innerText = `Steps: ${getSteps} | Exercise: ${getExercise} | Duration: ${getExerciseDuration} minutes`;
}

function saveFitnessDataToStorage(steps, exercise, exerciseDuration) {
  if((steps && exercise && exerciseDuration) == "" ){
    alert("Please fill up the data");
  }else{
  localStorage.setItem("fitness-steps", steps);
  localStorage.setItem("fitness-exercise", exercise);
  localStorage.setItem("fitness-exercise-duration", exerciseDuration);
  }
}
