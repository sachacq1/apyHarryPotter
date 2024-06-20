const $card = document.getElementById("grid");
const $form = document.getElementById("form");
const $input = document.getElementById("input");
let personajes = [];
const imagenGenerica = '/assets/img/lenterayo.jpg'

fetch("https://hp-api.onrender.com/api/characters")
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((data) => {
        personajes = data;
        console.log(personajes);
        mostrarPersonajes(personajes);
    });

function mostrarPersonajes(personajes) {
    $card.innerHTML = "";
    personajes.forEach((personaje) => {
        const imagen = personaje.image ? personaje.image : imagenGenerica;
        $card.innerHTML += `
            <div>
                <h4>${personaje.name}</h4>
                <img src="${personaje.image}" alt="imagen de ${personaje.name}">
                <p>Casa: ${personaje.house}</p>
                <p>Fecha nac: ${personaje.dateOfBirth}</p>
                <p>Patronus: ${personaje.patronus}</p>
                <p>Actor: ${personaje.actor}</p>
            </div>
        `;
    });
}

$input.addEventListener("input", () => {
    const personajeValue = $input.value.toLowerCase();
    const filteredPersonajes = personajes.filter((personaje) =>
        personaje.name.toLowerCase().includes(personajeValue)
    );
    mostrarPersonajes(filteredPersonajes);
});

$form.addEventListener("submit", (event) => {
    event.preventDefault();
});