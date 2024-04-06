const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;

const colors = {
        grass: 'rgba(120, 200, 80, 0.7)',
        fire: 'rgba(240, 128, 48, 0.7)',
        water: 'rgba(104, 144, 240, 0.7)',
        bug: 'rgba(168, 184, 32, 0.7)',
        normal: 'rgba(168, 168, 120, 0.7)',
        flying: 'rgba(168, 144, 240, 0.7)',
        poison: 'rgba(160, 64, 160, 0.7)',
        electric: 'rgba(248, 208, 48, 0.7)',
        ground: 'rgba(224, 192, 104, 0.7)',
        fairy: 'rgba(238, 153, 172, 0.7)',
        fighting: 'rgba(192, 48, 40, 0.7)',
        psychic: 'rgba(248, 88, 136, 0.7)',
        rock: 'rgba(184, 160, 56, 0.7)',
        steel: 'rgba(184, 184, 208, 0.7)',
        ice: 'rgba(152, 216, 216, 0.7)',
        ghost: 'rgba(112, 88, 136, 0.7)',
        dragon: 'rgba(112, 56, 248, 0.7)',
        dark: 'rgba(112, 88, 72, 0.7)',
    };


const fetchPokemons = async() => {
	for(let i=1; i<=pokemons_number; i++){
		await getPokemon(i);
	}
}

const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	createPokemonCard(pokemon);
}

fetchPokemons();

function createPokemonCard(pokemon) {
    const pokemonE1 = document.createElement('div');
    pokemonE1.classList.add('pokemon');

    const id = pokemon.id;
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const types = pokemon.types.map(type => type.type.name).join(', ');
    //const abilities = pokemon.abilities.map(ability => ability.ability.name).join(', ');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;
    img.alt = name;

    imgContainer.appendChild(img);

    const idDiv = document.createElement('div');
    idDiv.textContent = `# ${String(id).padStart(3, '0')}`;
    idDiv.classList.add('number'); 

    const nameDiv = document.createElement('div');
    nameDiv.textContent = `${name}`;
    nameDiv.classList.add('name');

    const type = pokemon.types[0].type.name;
    const color = colors[type];
    pokemonE1.style.backgroundColor = color;


    const typesDiv = document.createElement('div');
    typesDiv.textContent = `Type: ${types}`;
    typesDiv.classList.add('info');

    // const abilitiesDiv = document.createElement('div');
    // abilitiesDiv.textContent = `Abilities: ${abilities}`;
    // abilitiesDiv.classList.add('info'); 


    pokemonE1.appendChild(imgContainer);
    pokemonE1.appendChild(idDiv);
    pokemonE1.appendChild(nameDiv);
    pokemonE1.appendChild(typesDiv);
    // pokemonE1.appendChild(abilitiesDiv); => activate the abilities of pokemons by activating the comented lines of code><>line no> 48,76,77,78 & 85

    poke_container.appendChild(pokemonE1);
}







