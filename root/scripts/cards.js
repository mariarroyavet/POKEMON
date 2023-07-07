const btnShowMore = document.getElementsByClassName("btnShowMore");
const parentElement = document.querySelector(".container");

let url = "https://pokeapi.co/api/v2/pokemon";

let countCards = 0;
let loadCards = 8;
let offSet = 0;

function clear () {
  parentElement.innerHTML = '';
}

//Fetching API
const fetchApi = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    data.results.forEach(async (element) => {
      // Recorriendo el arreglo
      const response = await fetch(element.url); //Obteniendo datos de la propiedad
      const infoPokemon = await response.json(); //Analizando la respuesta del

      const [type1, type2] = infoPokemon.types.map(
        //Recorrer el arreglo
        (typePokemon) => typePokemon.type.name
      );

      //Creating cards
      let newCard = document.createElement("div");
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
      newCard.setAttribute("type1", type1);
      newCard.setAttribute("type2", type2);
    });
  } catch (error) {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = `error : ${error.message}`;
    parentElement.appendChild(errorMsg);
  }
};

//Creating Filters
const filters = document.querySelectorAll("typeElement");
filters.forEach((filterType) => {
  filterType.addEventListener("click", (event) => {
    event.preventDefault();
    const type = filterType.textContent.toLowerCase();
    filterByType(type);
  });
});

const filterByType = (type) => {
  const cards = document.querySelectorAll(".card"); //revisar si con el otro método da
  cards.forEach((card) => {
    const cardType1 = card.getAttribute("type1");
    const cardType2 = card.getAttribute("type2");

    if (type === "all" || cardType1 === type || cardType2 === type) {
      //Si es tipo que me pasaron, coincide con el de la carta, entonces escondo o muestro la acarta
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
};

fetchApi(url);
clear();

/*btnShowMore.addEventListener("click", () => {
  offset += 20;
  number += 20;
  fetchApi(url);
});

//Card count
const cardNumber = document.querySelector(".cardCount");
cardNumber.textContent=`"${infoPokemon.lenght} Cards`;
*/
