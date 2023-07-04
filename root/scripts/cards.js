const url = "https://pokeapi.co/api/v2/pokemon";

const parentElement = document.getElementById('.container'); // Corregir de acuerdo al nuevo ejemplo

const fetchApi = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        data.results.forEach(async (element) => { //AQUÍ DEBO AGREGAR LA RUTA DE CADA IMAGEN QUE ESTÁ EN EL NAME 
            const response = await fetch(element.url);
            const infoPokemon = await response.json();
            //console.log(element.name);
            const pokemonImg = infoPokemon.sprites.other["home"].front_default;
            //console.log(pokemonImg);
            const pokemonExp = infoPokemon.base_experience;
            //console.log(pokemonExp);

            const newCard = document.createElement("div");
            newCard.className = "card";

            
            /*const newElement = document.createElement('p');
            const img = document.createElement('img');
            newElement.textContent = `nombre :${element.name}`
            img.src = element.image;
            parentElement.appendChild(img);
            parentElement.appendChild(newElement);
*/
        });
    } catch (error) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = `error : ${error.message}`;
        parentElement.appendChild(errorMsg);
    }
}

fetchApi(url);
