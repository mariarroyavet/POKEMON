const btnShowMore = document.getElementsByClassName("btnShowMore");
const typeElement = [...document.getElementsByClassName("typeElement")];
const countPokemones = document.getElementById("cardCount"); //corregir
let offSet = 1;
let limit = 8;

let countCards = 0; //corregir
let loadCards = 8; //corregir

let url = "https://pokeapi.co/api/v2/pokemon";

const parentElement = document.getElementById(".container"); // Corregir de acuerdo al nuevo ejemplo

const fetchApi = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    data.results.forEach(async (element) => {
      //AQUÍ DEBO AGREGAR LA RUTA DE CADA IMAGEN QUE ESTÁ EN EL NAME
      const response = await fetch(element.url);
      const infoPokemon = await response.json();

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

    });
  } catch (error) {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = `error : ${error.message}`;
    parentElement.appendChild(errorMsg);
  }
  countCards += loadCards;
  countPokemones.textContent = `${countCards}  Cards`;
};


fetchApi(url);

typeElement.forEach((type) =>{
  type.addEventListener('click',(signal) =>{
    signal.preventDefault();
    const filter = type.textContent.toLocaleLowerCase();
    filterType(filter);
  });
});

const filterType =(type) => {
  const cards =document.getElementsByClassName("card");
  let countFilter = 0;

  Array.from(cards).forEach(card => {
    const cardType = card.getAttribute("type");

    if (type === "all" || cardType === type) {
      card.classList.remove("hidden");
      countFilter = countFilter + 1;
    } else {
      card.classList.add("hidden");
    }
    countPokemones.textContent = `${countFilter} Cards`;
  });
}

btnShowMore.addEventListener("click", () => {
  offset += 20;
  number += 20;
  fetchApi(url);
});

//Card count
const cardNumber = document.querySelector(".cardCount");
cardNumber.textContent=`"${infoPokemon.lenght} Cards`;
