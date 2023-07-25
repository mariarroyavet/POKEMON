const btnShowMore = document.getElementById("btnShowMore");
const parentElement = document.querySelector(".container");
const cardCounterText = document.getElementById("cardCount");

let countCards = 0;
let loadCards = 8;
let offSet = 1;

//Fetching API
const fetchApi = async (offSet, loadCards) => {
  try {
    for (let i = offSet; i <= offSet + loadCards - 1; i++) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      const data = await res.json();
       //Saving pokemon types
       const [type1, type2] = data.types.map(
          (typePokemon) => typePokemon.type.name
       );
       //Creating cards
       let newCard = document.createElement("div");
       newCard.className = "card";
       newCard.innerHTML = `
             <div>
               <p class= "pokeName">Name: ${data.name}</p>
               <i class = "fa-sharp fa-regular fa-heart"></i>
             </div>
             <img class="pokemonImg" src ="${data.sprites.other["home"].front_default}">
             <div>
               <p>Level: ${data.base_experience}</p>
               <button class = "btnBuy">Buy</button>
             </div> 
             `;
       container.appendChild(newCard);
       newCard.setAttribute("type1", type1);
       newCard.setAttribute("type2", type2);
       countCards = countCards + 1;
    }
    cardCounterUpdate(countCards)
  } catch (error) {
    alert("Ocurrió un error en la API");
    console.log(error)
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

//Update cards counter
const cardCounterUpdate = (countCards) => {
  console.log('Contador', countCards)
  cardCounterText.textContent = `${countCards} Cards`;
}

fetchApi(offSet, loadCards);

btnShowMore.addEventListener('click', () => {
  offSet += 8;
  fetchApi(offSet, loadCards);
});

