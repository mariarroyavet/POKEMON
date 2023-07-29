const url = 'https://pokeapi.co/api/v2/pokemon';

//const parentElement = document.getElementById('container'); // Corregir de acuerdo al nuevo ejemplo

const fetchApi = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        data.results.forEach(async element => { //AQUÍ DEBO AGREGAR LA RUTA DE CADA IMAGEN QUE ESTÁ EN EL NAME 
            /*const newElement = document.createElement('p');
            const img = document.createElement('img');
            newElement.textContent = `nombre :${element.name}`
            img.src = element.image;
            parentElement.appendChild(img);
            parentElement.appendChild(newElement);*/
            const pokemonInfoUrl = url + '/' + element.name;
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

fetchApi(url);
