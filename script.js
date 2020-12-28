const getButton = document.querySelector("#get");
const addButton = document.querySelector("#post");
const deleteButton = document.querySelector("#delete");
const url = "http://localhost:3001/api/v1/animals";

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

const animals = fetch("http://localhost:3001/api/v1/animals")
  .then(response => response.json())
  .then (animals => animals)        

