let url = "https://pokeapi.co/api/v2";
const btnShowMore = document.getElementsByClassName("btnShowMore");
const parentElement = document.getElementById(".container"); // Corregir de acuerdo al nuevo ejemplo

let offSet = 0;
let limit = 20;
let pokemons = [];
let currentType = "all"; //CAMBIAR 

const container = document.querySelector(".container")

//Cleaning container
function clearContainer () {
  container.innerHTML = '';
}

//Creating Cards 


function fetchApi(offSet, loadPokemons) {
  for (let i = offSet; i <= offSet + loadPokemons - 1; i++) {
    fetch(url)
    .then((res) => res.json())
    .then ((data) => {
      pokemonData(data);
    })
  .catch ((error) => {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = `error : ${error.message}`;
    parentElement.appendChild(errorMsg);
});
}
cardCount += loadPokemons;
countPokemones.textContent=
}

async function pokemonData() {
        try {
            const res = await fetch(data.results[i].url);
            const pokemon = await res.json();
            const newCard = document.createElement("div");
            newCard.className = "card";
             newCard.innerHTML = `
            <div>
              <p class= "pokeName">Name: ${infoPokemon.name}</p>
              <i class = "fa-sharp fa-regular fa-heart"></i>
            </div>
            <img class="pokemonImg" src ="${infoPokemon.sprites.other["home"].front_default}">
            <div>
              <p>Level: ${infoPokemon.base_experience}</p>
              <button class = "btnBuy">Buy</button>
            </div> 
            `;
      container.appendChild(newCard);
        } catch (error) {
            const errorMsg = document.createElement("p");
            errorMsg.textContent = `error : ${error.message}`;
            parentElement.appendChild(errorMsg);
        }
    }

};

fetchApi(url);
