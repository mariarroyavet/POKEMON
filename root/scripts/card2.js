const btnShowMore = document.getElementsByClassName("btnShowMore");

let offSet = 1;
let limit = 8;
let loadpokemons = 8;


let url = "https://pokeapi.co/api/v2/pokemon";

const parentElement = document.getElementById(".container"); // Corregir de acuerdo al nuevo ejemplo

const fetchApi = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
}catch (error) {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = `error : ${error.message}`;
    parentElement.appendChild(errorMsg);
}
return (data)
}

async function pokemonData() {
    for (let i = 0; i < loadpokemons; i++) {
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
