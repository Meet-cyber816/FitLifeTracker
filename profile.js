const dataInputs = document.querySelector(".data-input");
const editProfile = document.querySelector(".editProfile");
const profileCard = document.querySelector(".profile-card");
const saveChange = document.querySelector(".save");
const profileCardDetail = document.querySelector(".profileCardDetail");

dataInputs.style.display = "none";

editProfile.addEventListener("click", (e) => {
  e.preventDefault();
  dataInputs.style.display = "flex";
  profileCard.style.display = "none";
});

saveChange.addEventListener("click", (e) => {
  e.preventDefault();

  // Retrieve input values inside the event listener
  const weight = document.querySelector("#weight").value;
  const height = document.querySelector("#height").value;
  const age = document.querySelector("#age").value;
  const gender = document.querySelector("#gender").value;
  const goalWeight = document.querySelector("#goal-weight").value;
  const fitnessGoal = document.querySelector("#fitness-goal").value;

  saveToStorage(weight, height, age, gender, goalWeight, fitnessGoal);

  dataInputs.style.display = "none";
  profileCard.style.display = "block";
  history.go(0);
});
if (
  localStorage.getItem("profile-age") &&
  localStorage.getItem("profile-weight") &&
  localStorage.getItem("profile-height")
) {
  getItemFromStorage();
} else {
  profileCardDetail.innerText = "No Data Found";
}

function getItemFromStorage() {
  const getAge = localStorage.getItem("profile-age");
  const getWeight = localStorage.getItem("profile-weight");
  const getHeight = localStorage.getItem("profile-height");

  profileCardDetail.innerText = `Age: ${getAge} | Weight: ${getWeight} | Height: ${getHeight}`;
}

function saveToStorage(weight, height, age, gender, goalWeight, fitnessGoal) {
  if((weight && height && age && gender && goalWeight && fitnessGoal) == "" ){
    alert("Please fill up the data");
  }else{
    localStorage.setItem("profile-weight", weight);
    localStorage.setItem("profile-height", height);
    localStorage.setItem("profile-age", age);
    localStorage.setItem("profile-gender", gender);
    localStorage.setItem("profile-goalWeight", goalWeight);
    localStorage.setItem("profile-fitnessGoal", fitnessGoal);
  }
}
