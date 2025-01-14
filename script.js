const languages = [
    {
        name: 'ABAP',
        description: 'Programming language developed by SAP',
        link: 'https://pages.community.sap.com/topics/abap'
    },
    {
        name: 'ActionScript',
        description: 'Programming language for Flash applications',
        link: 'https://en.wikipedia.org/wiki/ActionScript'
    },
    {
        name: 'Ada',
        description: 'Langage de programmation structuré pour systèmes embarqués',
        link: 'https://ada-lang.io/'
    },
    {
        name: 'ALGOL 68',
        description: 'Langage de programmation historique influent',
        link: 'https://jmvdveer.home.xs4all.nl/en.algol-68-genie.html'
    },
    // Add more language objects as needed...
    {
        name: 'Zig',
        description: 'Langage système moderne et performant',
        link: 'https://ziglang.org/'
    }
];

// Function to generate HTML elements for the programming languages
function displayLanguages(languages) {
    const container = document.getElementById('languages-container');

    languages.forEach(language => {
        const card = document.createElement('div');
        card.classList.add('language-card');

        const title = document.createElement('h3');
        title.textContent = language.name;

        const description = document.createElement('p');
        description.textContent = language.description;

        const link = document.createElement('a');
        link.textContent = 'Learn More';
        link.href = language.link;
        link.target = '_blank';

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(link);

        container.appendChild(card);
    });
}

// Filter languages based on a search query
function filterLanguages(query) {
    const lowerCaseQuery = query.toLowerCase();
    const filteredLanguages = languages.filter(language =>
        language.name.toLowerCase().includes(lowerCaseQuery) ||
        language.description.toLowerCase().includes(lowerCaseQuery)
    );

    // Clear the current container content
    const container = document.getElementById('languages-container');
    container.innerHTML = '';

    // Display filtered languages
    displayLanguages(filteredLanguages);
}

// Event listener for the search bar
document.getElementById('search-bar').addEventListener('input', (event) => {
    filterLanguages(event.target.value);
});

// Initialize the page with all languages displayed
document.addEventListener('DOMContentLoaded', () => {
    displayLanguages(languages);
});
