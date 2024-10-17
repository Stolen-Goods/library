
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

console.log(library);

function addBookToLibrary() {
}