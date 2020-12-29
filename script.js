const getButton = document.querySelector("#get");
const addButton = document.querySelector("#post");
const deleteButton = document.querySelector("#delete");
// const url = "http://localhost:3001/api/v1/animals";

getButton.addEventListener('click', async() => {
  const dataDisplay = document.querySelector("#data-display");
  const animalList = await animals;
  animalList.forEach(animal => {
    dataDisplay.innerHTML += `
    <h2>${animal.name}</h2>
    <p>Diet: ${animal.diet}</p>
    <p>Fun Fact: ${animal.fun_fact}</p>
  `
  });
})

addButton.addEventListener('click', addNewAnimal);
deleteButton.addEventListener('click', removePost);

const animals = fetch("http://localhost:3001/api/v1/animals")
  .then(response => response.json())
  .then (animals => animals)        

function addNewAnimal() {
  let nameInput = document.querySelector("#name");
  let dietInput = document.querySelector("#diet");
  let factInput = document.querySelector("#fact");
  let newAnimal = `{
    "id": 5, 
    "name": "${nameInput.value}", 
    "diet": "${dietInput.value}", 
    "fun_fact": "${factInput.value}"
  }`
  postAnimal(newAnimal);
  clearInput(nameInput, dietInput, factInput);
}

function postAnimal(newPost) {
  fetch("http://localhost:3001/api/v1/animals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: newPost
    })
      .then((response) => response.json())
      .then(animal => animal)
}

function clearInput(first, second, third) {
  first.value = "";
  second.value = "";
  third.value = "";
}

function removePost() {
  
}