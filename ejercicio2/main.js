const img = document.querySelector('.random-image');
const nombre = document.querySelector('#name');

let num = Math.floor((Math.random() * 151) + 1);

fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
.then((res) => res.json())
.then((res) => {
    let imagen = res["sprites"]["other"]["official-artwork"]["front_default"];
    img.src = imagen;
    nombre.innerText = res["name"];
})
.catch((error) => console.log(error));