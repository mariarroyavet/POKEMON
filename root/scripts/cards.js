const btnShowMore = document.getElementsByClassName("btnShowMore");
const parentElement = document.querySelector(".container");


let countCards = 0;
let loadCards = 8;
let offSet = 1;

let i = offSet; i <= offSet + loadCards - 1; i++
let url = "https://pokeapi.co/api/v2/pokemon/";

//Fetching API
const fetchApi = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    data.results.forEach(async (element) => {
      // Getting Pokemon detailed information
      const response = await fetch(element.url);
      const infoPokemon = await response.json();
      //Saving pokemon types
      const [type1, type2] = infoPokemon.types.map(
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
    alert("Ocurrió un error en la API");
  }
};

//Creating Filters
const filter = document.querySelectorAll(".typeElement");
filter.forEach((filterType) => {
  filterType.addEventListener("click", (event) => {
    event.preventDefault(); //Avoid default event, instead...
    const type = filterType.textContent.toLowerCase();
    filterPokemons(type);
  });
});

//Calling type
const filterPokemons = (type) => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const cardType1 = card.getAttribute("type1");
    const cardType2 = card.getAttribute("type2");

    if (type === "all" || cardType1 === type || cardType2 === type) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
};

fetchApi(url);

/*btnShowMore.addEventListener('click', () => {
  fetchApi(url);
});*/