const books = [
    {
        title: "Berserk",
        author: "Miura Kentaro",
        genre: "fantasy",
        description: "Berserk is a story of epic battles, revenge, death, and struggles for power, to make a name in a noble and contemptuous society of 'inferior' classes.",
        image: "imgs/libro7.png",
        availability: "digital"
    },
    {
        title: "Neon Genesis Evangelion",
        author: "Hideaki Anno",
        genre: "science fiction",
        description: "The story takes place in a futuristic world where a paramilitary organization called NERV protects humanity from attacks by unknown beings, called 'Angels,' using bio-mechanical humanoids called Evangelions.",
        image: "imgs/libro8.png",
        availability: "digital"
    },
    {
        title: "Death Note",
        author: "Tsugumi Obba",
        genre: "non-fiction",
        description: "Light Yagami finds a notebook called 'Death Note' that can kill people. After testing its power, he decides to eliminate criminals to create a 'new world' without evil.",
        image: "imgs/libro9.png",
        availability: "digital"
    },
    {
        title: "Slam Dunk",
        author: "Takehiko Inoue",
        genre: "non-fiction",
        description: "It narrates the story of the evolution as a basketball player and as a person of its protagonist Hanamichi Sakuragi, a 15-year-old troublemaker with an impressive record of fifty romantic rejections.",
        image: "imgs/libro10.png",
        availability: "digital"
    },
    {
        title: "Tokyo Ghoul",
        author: "Sui Ishida",
        genre: "science fiction",
        description: "In Tokyo, mysterious murders are committed by Ghouls, unknown beings that eat human flesh. One day, Kaneki Ken, an 18-year-old university student, meets a girl in a restaurant and invites her out, only to find out that she is a Ghoul, and he suffers an attack from her.",
        image: "imgs/libro11.png",
        availability: "digital"
    },
    {
        title: "One Punch Man",
        author: "Yusuke Murata",
        genre: "fantasy",
        description: "The most powerful superhero in the world can defeat anyone with a single punch, but without challenges, he struggles with depression and boredom.",
        image: "imgs/libro12.png",
        availability: "digital"
    },
    ///////////
    {
        title: "Hajime No Ippo",
        author: "Kazuyuki Fudeyasu",
        genre: "science fiction",
        description: "It tells the adventures of Makunouchi Ippo, a young man who, at the age of 17, decides to shed the label of being a weakling and being overshadowed by stronger people, and joins the world of boxing.",
        image: "imgs/libro13.png",
        availability: "digital"
    },
    {
        title: "Attack On Titan",
        author: "Yasuko Kobayashi",
        genre: "science fiction",
        description: "A group of residents in a walled city are protected from attacks by giant cannibals who occasionally manage to breach the walls.",
        image: "imgs/libro14.png",
        availability: "digital"
    },
    {
        title: "Dragon Ball Z",
        author: "Akira Toriyama",
        genre: "fantasy",
        description: "It focuses on an alien boy named Goku, who is sent to Earth. He has special characteristics like a monkey tail and martial arts potential. He meets Bulma and joins her to find the Dragon Balls, a magical artifact capable of granting wishes.",
        image: "imgs/libro15.png",
        availability: "digital"
    },
];

function showBooks(filteredBooks) {
    const bookContainer = document.getElementById('books');
    bookContainer.innerHTML = '';
    
    filteredBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        
        bookDiv.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p>${book.description}</p>
            <p><strong>Availability:</strong> ${book.availability}</p>
        `;
        
        bookContainer.appendChild(bookDiv);
    });
}

function filterBooks() {
    const selectedGenre = document.getElementById('genre').value;
    const selectedAvailability = document.getElementById('availability').value;

    const filteredBooks = books.filter(book => {
        return (selectedGenre === 'all' || book.genre === selectedGenre) &&
               (selectedAvailability === 'all' || book.availability === selectedAvailability);
    });

    showBooks(filteredBooks);

    localStorage.setItem('genre', selectedGenre);
    localStorage.setItem('availability', selectedAvailability);
}

function restoreFilters() {
    const savedGenre = localStorage.getItem('genre');
    const savedAvailability = localStorage.getItem('availability');

    if (savedGenre) document.getElementById('genre').value = savedGenre;
    if (savedAvailability) document.getElementById('availability').value = savedAvailability;

    filterBooks();
}

function sendInquiry(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        alert('Inquiry sent successfully');
    } else {
        alert('Please fill in all fields correctly.');
    }
}

window.onload = restoreFilters;
