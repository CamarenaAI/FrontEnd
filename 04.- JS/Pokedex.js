const pokeType = document.querySelector('[pokeTypes]');

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
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    });
}

const pokeImage = (buscarPokemon) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = buscarPokemon;
}

const pokeTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}