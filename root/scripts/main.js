/*const userName = window.prompt ("What is your name?")
console.log(userName);
if (userName === "Admin") {
    const userPassword = window.prompt ("What is your password?")

    if (!userName){ //! null or '' --> false --> !false --> true  
        console.log("Cancelado");
    } else if (userName !== "Admin") {
        console.log ("No te conozco")
    } else 
    {const userPassword = window.prompt ("What is your password?")}

    if (!userPassword) {
        console.log("Cancelado");
    } else if (userPassword !== "TheMaster"){
        console.log ("Contraseña Incorrecta");
    } else {
        console.log("Bienvenido!");
    }

}*/

const url = 'https://pokeapi.co/api/v2/pokemon';

const getPokemons = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
};

const pokemons = getPokemons().then((data) => {
    console.log(data);
});

/*const parentElement = document.getElementById('container');

const fetchApi = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        data.results.forEach(element => { ( //AQUÍ DEBO AGREGAR LA RUTA DE CADA IMAGEN QUE ESTÁ EN EL NAME 
            const newElement = document.createElement('p');
            const img = document.ccreateElement('img');
            newElement.textContent = `nombre :${element.name}`
            img.src = element.image;
            parentElement.appendChild(img);
            parentElement.appendChild(newElement);        
        });
    } catch (error) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = `error : ${error.message}`
        parentElement.apprenChild(errorMsg);
    }
}

fetchApi(url);
