const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const buscarPokemon = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(buscarPokemon).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/NotFound.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let pokeId = data.id;
            pokeNum(pokeId);
            console.log(pokeId);

            let pokeNam = data.name;
            pokeNombre(pokeNam.charAt(0).toUpperCase() + pokeNam.slice(1));
            console.log(pokeNam.charAt(0).toUpperCase() + pokeNam.slice(1));

            let pokeH = data.height;
            pokePeso(pokeH);
            console.log(pokeH);

            let pokeW = data.weight;
            pokeAltura(pokeW);
            console.log(pokeW);

            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let pokeTypes = data.types.map(tipo => tipo.type.name.charAt(0).toUpperCase() + tipo.type.name.slice(1));
            pokeTipo(pokeTypes);
            console.log(pokeTypes);

            let pokeStats = data.stats.map(est => est.stat.name.toUpperCase() + " " + est.base_stat);
            pokeEst(pokeStats);
            console.log(pokeStats);

            let pokeMoves = data.moves.map(mov => mov.move.name.toUpperCase());
            pokeMove(pokeMoves);
            console.log(pokeMoves);
        }
    });
}

const pokeNum = (pokeId) => {
    Numero = document.getElementById("pokeId");
    Numero.textContent = `N.° ${pokeId}`;
}

const pokeNombre = (pokeNam) => {
    nombre = document.getElementById("pokeNam");
    nombre.textContent = `${pokeNam}`;
}

const pokePeso = (pokeH) => {
    Peso = document.getElementById("pokeH");
    Peso.textContent = `Height: ${pokeH/10} m`;
}

const pokeAltura = (pokeW) => {
    Altura = document.getElementById("pokeW");
    Altura.textContent = `Weight: ${pokeW/10} kg`;    
}

const pokeImage = (buscarPokemon) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = buscarPokemon;
}

const pokeTipo = (pokeTypes) => {
    Tipo = document.getElementById("pokeTypes")
    Tipo.textContent = `Type: ${pokeTypes}`;
}

const pokeEst = (pokeStats) => {
    Estadisticas = document.getElementById("pokeStats");
    Estadisticas.textContent = `${pokeStats}`;
}

const pokeMove = (pokeMoves) => {
    Movimientos = document.getElementById("pokeMoves");
    Movimientos.textContent = `${pokeMoves}`;
}
