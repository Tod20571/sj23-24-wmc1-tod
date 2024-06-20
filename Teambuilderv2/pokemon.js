document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.grid-button');
    const pokedexEntries = document.querySelectorAll('.pokedex-entry_button');

    // Function to add Pokémon image to button
    function addPokemonToButton(button, imgSrc, imgAlt) {
        // Create a new image element
        const newImg = document.createElement('img');
        newImg.src = imgSrc;
        newImg.alt = imgAlt;

        // Clear any existing content in the button
        button.innerHTML = '';

        // Append the new image to the button
        button.appendChild(newImg);

        // Add click listener to remove image from button
        newImg.addEventListener('click', function() {
            button.innerHTML = ''; // Remove the image from the button
        });
    }

    // Add click listeners to Pokémon entries
    pokedexEntries.forEach((entry, index) => {
        entry.addEventListener('click', function() {
            const imgSrc = entry.querySelector('img').src;
            const imgAlt = entry.querySelector('img').alt;

            // Find the next available button that doesn't already have an image
            const nextAvailableButton = Array.from(buttons).find(btn => !btn.hasChildNodes());

            if (nextAvailableButton) {
                addPokemonToButton(nextAvailableButton, imgSrc, imgAlt);
            }
        });
    });

    // Add click listeners to existing buttons to remove Pokémon images
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.querySelector('img')) {
                button.innerHTML = ''; // Remove the image from the button
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.grid-button');
    const pokedexEntries = document.querySelectorAll('.pokedex-entry_button img');

    function randomlyAssignPokemon() {
        const shuffledEntries = Array.from(pokedexEntries).sort(() => Math.random() - 0.5);
        
        buttons.forEach((button, index) => {
            const imgSrc = shuffledEntries[index].src;
            const imgAlt = shuffledEntries[index].alt;
            button.innerHTML = `<img src="${imgSrc}" alt="${imgAlt}">`;
        });
    }

    const randomButton = document.getElementById('randomize-button');
    randomButton.addEventListener('click', randomlyAssignPokemon);

    randomlyAssignPokemon();

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            button.innerHTML = ''; // Remove the image from the button
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.grid-button');

    function sortPokemonByNumber() {
        // Get all images inside grid buttons
        const images = Array.from(buttons).map(button => button.querySelector('img'));

        // Sort images by their alt attribute (which contains the Pokémon number)
        images.sort((img1, img2) => {
            const num1 = parseInt(img1.alt); // Extract number from alt attribute
            const num2 = parseInt(img2.alt); // Extract number from alt attribute
            return num1 - num2; // Sort in ascending order
        });

        // Reassign sorted images to the grid buttons
        images.forEach((img, index) => {
            buttons[index].innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
        });
    }

    const sortButton = document.getElementById('sort-button');
    sortButton.addEventListener('click', sortPokemonByNumber);

    // Initial random assignment of Pokémon images
    function randomlyAssignPokemon() {
        const pokedexEntries = document.querySelectorAll('.pokedex-entry_button img');
        const shuffledEntries = Array.from(pokedexEntries).sort(() => Math.random() - 0.5);
        
        buttons.forEach((button, index) => {
            const imgSrc = shuffledEntries[index].src;
            const imgAlt = shuffledEntries[index].alt;
            button.innerHTML = `<img src="${imgSrc}" alt="${imgAlt}">`;
        });
    }

    randomlyAssignPokemon();

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            button.innerHTML = ''; // Remove the image from the button
        });
    });
});


