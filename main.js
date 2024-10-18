
function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

const mistborn = new Book("Mistborn", "Brandon Sanderson", 680, true);
const dune = new Book("Dune", "Frank Herbert", 820, true);
const hobbit = new Book("The Hobbit", "JRR Tolkien", 300, true)

const library = [mistborn, dune, hobbit];


function addBookToLibrary() {
}

// library.forEach(display);

function display() {
    let index = 0;
    for (let i = 0; i < library.length; i++) {
        const shelf = library[index];
        const book = document.createElement("div");
        book.innerText = `${shelf.title} by ${shelf.author} ${shelf.pages} pages`;
        document.body.appendChild(book);
        index++;
    }
}

display();

