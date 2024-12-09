// Selecciona el contenedor de las cartas por el id
const pokemonContainer = document.getElementById("pokemon-container");

// Función principal para obtener la lista de pokemon usando fetch
async function fetchPokemons() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=20"; // Endpoint con los primeros 20 pokemon
  try {
    const response = await fetch(url); // Solicitud al endpoint
    if (!response.ok) throw new Error("Error al obtener la lista de Pokémon.");

    const data = await response.json(); // Convierte la respuesta en JSON
    const pokemons = data.results; // Obtiene la lista de pokemon

    // Itera sobre cada pokemon y obtiene los detalles 
    for (const pokemon of pokemons) {
      await fetchPokemonDetails(pokemon);
    }
  } catch (error) {
    console.error("Error al cargar la lista de Pokemones:", error);
    pokemonContainer.innerHTML = `<p>Error al cargar los Pokemones. Intenta nuevamente más tarde.</p>`;
  }
}

// Función para obtener los detalles de cada pokemon
async function fetchPokemonDetails(pokemon) {
  try {
    const response = await fetch(pokemon.url); // URL específica de cada pokemon
    if (!response.ok) throw new Error(`Error al obtener detalles de ${pokemon.name}.`);

    const details = await response.json(); // Convierte la respuesta en JSON

    // Extrae el nombre y la imagen de cada pokemon
    const name = details.name;
    const image = details.sprites.front_default;

    // Crea una carta con ambos datos
    createPokemonCard({ name, image });
  } catch (error) {
    console.error(`Error al cargar los detalles de ${pokemon.name}:`, error);
  }
}

// Función para crear una carta pokemon
function createPokemonCard({ name, image }) {
  const card = document.createElement("div");
  card.classList.add("card"); // Clase para el estilo

  // Elemento para el nombre
  const header = document.createElement("h3");
  header.textContent = name;

  // Elemento para la imagen
  const img = document.createElement("img");
  img.src = image;
  img.alt = name;

  // Agrega los elementos a la carta
  card.appendChild(header);
  card.appendChild(img);

  // Agrega la carta al contenedor
  pokemonContainer.appendChild(card);
}

// Llama a la función principal
fetchPokemons();
