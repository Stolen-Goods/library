let index = 0;
const addNewBook = document.getElementById("dialog-box");

function CreateBook(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

const mistborn = new CreateBook("Mistborn", "Brandon Sanderson", 680, true);
const dune = new CreateBook("Dune", "Frank Herbert", 820, true);
const hobbit = new CreateBook("The Hobbit", "JRR Tolkien", 300, true)

const library = [mistborn, dune, hobbit];

const addButton = document.getElementById("create-button")
addButton.addEventListener("click", () => {
    addNewBook.showModal();
});

function libraryDisplay() {
    for (let i = 0; i < library.length; i++) {
        const shelf = library[index];
        const book = document.createElement("div");
        book.innerText = `${shelf.title}\n by ${shelf.author}\n ${shelf.pages} pages`;
        const removeButton = document.createElement("button");
        removeButton.type = "Button";
        removeButton.innerText = "Remove";
        removeButton.addEventListener("click", () => {
            book.remove();
        })
        book.appendChild(removeButton);
        document.body.appendChild(book);
        index++;
    }
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    let newBook = new CreateBook(title, author, pages);
    library.push(newBook);
    addNewBook.close();
    libraryDisplay();
})