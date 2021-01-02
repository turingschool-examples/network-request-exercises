const displayArea = document.querySelector('.display-area')
const newAnimalButton = document.getElementById('new-animal-button')
const deleteButton = document.getElementById('delete-button')


const createCards = (animals) => {
  displayArea.innerHTML = animals.reduce((display, animal) => {
    display += `
      <div class="animal-card">
        <h2>${animal.name.toUpperCase()}</h2>
        <h3> ID: ${animal.id}</h3>
        <h3> DIET: ${animal.diet}</h3>
        <h3> FUN FACT: ${animal.fun_fact}<h3>
      </div>`
    return display
  }, '')
}

const loadAnimals = () => {
  fetch('http://localhost:3001/api/v1/animals')
  .then(response => response.json())
  .then(animals => createCards(animals))
}

const getInputs = () => {
  return {
    id: document.getElementById('id').value,
    name: document.getElementById('name').value,
    diet: document.getElementById('diet').value,
    fun_fact: document.getElementById('fun-fact').value
  }
}

const clearInputs = () => {
  inputs = document.querySelectorAll('input')
  inputs.forEach(input => input.value = '')
}

const addAnimal = () => {
  fetch('http://localhost:3001/api/v1/animals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(getInputs())
  })
}

const deleteAnimal = () => {
  fetch(`http://localhost:3001/api/v1/animals/${document.getElementById('id').value}`, {
    method: 'DELETE'
  })
}


window.addEventListener('load', loadAnimals)
newAnimalButton.addEventListener('click', function() {
  addAnimal()
  loadAnimals()
  clearInputs()
})
deleteButton.addEventListener('click', function() {
  deleteAnimal()
  loadAnimals()
})
