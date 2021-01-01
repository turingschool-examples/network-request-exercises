const displayArea = document.querySelector('.display-area')


const createCards = (animals) => {
  displayArea.innerHTML = ''
  animals.forEach(animal => {
    displayArea.innerHTML += `
      <div class="animal-card">
        <h2>${animal.name.toUpperCase()}</h2>
        <h3> ID: ${animal.id}</h3>
        <h3> DIET: ${animal.diet}</h3>
        <h3> FUN FACT: ${animal.fun_fact}<h3>
      </div>`
  })
}

const loadAnimals = () => {
  fetch('http://localhost:3001/api/v1/animals')
  .then(response => response.json())
  .then(animals => createCards(animals))
}

window.addEventListener('load', loadAnimals)
