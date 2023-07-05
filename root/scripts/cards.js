const url = "https://pokeapi.co/api/v2/pokemon";

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
            <div = "headerCard">
            <p>${infoPokemon.name}</p>
            <i class = "fa-sharp fa-regular fa-heart"></i>
            </div>
            <img class="pokemonImg" src ="${infoPokemon.sprites.other["home"].front_default}">
            <div>
            <p>Level: ${infoPokemon.base_experience}</p>
            <button class = "btnBuy">Buy</button> 
            `;
      container.appendChild(newCard);
    });
  } catch (error) {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = `error : ${error.message}`;
    parentElement.appendChild(errorMsg);
  }
};

fetchApi(url);
