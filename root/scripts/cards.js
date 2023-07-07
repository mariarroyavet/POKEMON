const btnShowMore = document.getElementsByClassName("btnShowMore");

let url = "https://pokeapi.co/api/v2/pokemon";

const parentElement = document.getElementById(".container"); // Corregir de acuerdo al nuevo ejemplo

//Fetching API
const fetchApi = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    data.results.forEach(async (element) => {

      const response = await fetch(element.url);
      const infoPokemon = await response.json();

      const [type1,type2] = infoPokemon.types.map( //Recorrer el arreglo
      (typePokemon) => typePokemon.type.name
    );
//Creating cards
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
};

//Creating Filters
const filter = document.querySelectorAll("typeElement")
filter.forEach((filterType) =>{
  filterType.addEventListener('click',(signal) =>{
    signal.preventDefault();
    const type = filterType.textContent.toLowerCase();
    filterType(type);
  });
});

const filterType =(type) => {
  const cards =document.querySelectorAll(".card");//revisar si con el otro método da
  cards.forEach(card => {
    const cardType = card.getAttribute("type");

    if (type === "all" || cardType1 === type || cardType2 === type) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}


fetchApi(url);

/*btnShowMore.addEventListener("click", () => {
  offset += 20;
  number += 20;
  fetchApi(url);
});

//Card count
const cardNumber = document.querySelector(".cardCount");
cardNumber.textContent=`"${infoPokemon.lenght} Cards`;
*/