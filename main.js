
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

const button = document.getElementById("create-button")
button.addEventListener("click", addBookToLibrary);

const newBook = document.getElementById("dialog-box");

function addBookToLibrary() {
    newBook.showModal();

}

function display() {
    let index = 0;
    for (let i = 0; i < library.length; i++) {
        const shelf = library[index];
        const book = document.createElement("div");
        book.innerText = `${shelf.title}\n by ${shelf.author}\n ${shelf.pages} pages`;
        document.body.appendChild(book);
        index++;
    }
}





display();

