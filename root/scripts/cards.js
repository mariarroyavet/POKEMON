const pokemonContainer = document.querySelector(".pokemon-container");
const url = `https://pokeapi.co/api/v2/pokemon`;

const fetchApi = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText};
    }catch (error) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = `error : ${error.message}`
    }
}

async () => {
    const pokemon = await fetchApi();
    Name.textContent = pokemon.name;
    imgPokemon.src = pokemon.sprites.other["official-artwork"].front_default;
    level.textContent = `Power level: ${pokemon.base_experience}`;  
}

fetchApi();

/*const url = `https://pokeapi.co/api/v2/pokemon/`;
let pokemones = [];

//const parentElement = document.getElementById('container'); // Corregir de acuerdo al nuevo ejemplo

const fetchApi1 = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        data.results.forEach(async element => { //AQUÍ DEBO AGREGAR LA RUTA DE CADA IMAGEN QUE ESTÁ EN EL NAME 
            /*const newElement = document.createElement('p');
            const img = document.createElement('img');
            newElement.textContent = `nombre :${element.name}`
            img.src = element.image;
            parentElement.appendChild(img);
            parentElement.appendChild(newElement);
            const pokemonInfoUrl =url + element.name;
            const pokemonInfo = await fetch(pokemonInfoUrl);
            const pokemonInfoJson = await pokemonInfo.json();
            const pokemonImg = pokemonInfoJson.sprites.front_default;
            console.log(element.name);
            console.log(pokemonImg);
        });
    } catch (error) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = `error : ${error.message}`
        parentElement.apprenChild(errorMsg);
    }
}

fetchApi1(url)*/
