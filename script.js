const categories = {
    category1: ['space', 'wild west', 'robot', 'martial arts', 'punk', 'prehistoric', 'futuristic', 'jungle', 'animal', 'undead', 'circus', 'plant', 'beach', 'music', 'magic'],
    category2: ['bow', 'bottle', 'rocket-launcher', 'boomerang', 'grenade', 'shot gun', 'pistol', 'rifle', 'hammer', 'bat', 'hands'],
    category3: ['arrows', 'lasers', 'grenades', 'fire', 'poison', 'cacti', 'sticky-blob', 'snow', 'blades', 'electricity', 'smoke', 'nails', 'asteroids', 'stars']
};

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function generatePhrase() {
    const outputElement = document.getElementById('output');
    
    const randomWord = getRandomElement(categories.category1);
    const randomPhrase = getRandomElement(categories.category2);
    const randomSentence = getRandomElement(categories.category3);

    const generatedPhrase = `This new brawler has a ${randomWord} theme, they prefer a ${randomPhrase} weapon and their choice of projectile is ${randomSentence}.`;

    outputElement.textContent = generatedPhrase;
}