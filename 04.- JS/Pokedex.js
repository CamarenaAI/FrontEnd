const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const buscarPokemon = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(buscarPokemon).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("C:\Users\Alonso\OneDrive\Desktop\Innovacion Virtual\FrontEnd\4.- JavaScript\img\NotFound.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let pokeNam = data.name;
            pokeNombre(pokeNam);
            console.log(pokeNam);

            let pokeID = data.id;
            pokeNum(pokeID);
            console.log(pokeID);

            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let pokeStats = data.stats;
            pokeEst(pokeStats);
            console.log(pokeStats);

            let pokeTypes = data.types;
            pokeTipo(pokeTypes);
            console.log(pokeTypes);

            let pokeMoves = data.moves;
            pokeMove(pokeMoves);
            console.log(pokeMoves);
        }
    });
}
const pokeNombre = (buscarPokemon) => {
    const pokeNombre = document.createElement('pokeNam');
    pokeNombre.textContent = buscarPokemon.name; 
}

const pokeNum = (buscarPokemon) => {
    const pokeNumero = document.createElement('pokeID');
    pokeNumero.textContent = buscarPokemon.id; 
}

const pokeImage = (buscarPokemon) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = buscarPokemon; 
}

const pokeEst = (buscarPokemon) => {
    const pokeEstadisticas = document.createElement("pokeStats");
    pokeEstadisticas.textContent = buscarPokemon.stats;
}

const pokeTipo = (buscarPokemon) => {
    const pokeTipo = document.createElement('pokeTypes');
    pokeTipo.textContent = buscarPokemon.types; 
}

const pokeMove = (buscarPokemon) => {
    const pokeMovimientos = document.createElement('pokeMoves');
    pokeMovimientos.textContent = buscarPokemon.moves; 
}
