const addNewBook = document.getElementById("dialog-box");

function CreateBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const library = [];

const addButton = document.getElementById("create-button")
addButton.addEventListener("click", () => {
    addNewBook.showModal();
});

function libraryDisplay() {
    const bookList = document.querySelector(".book-list");
    bookList.innerHTML = '';
    for (let i = 0; i < library.length; i++) {
        const shelf = library[i];
        const book = document.createElement("div");
        book.innerText = `${shelf.title}\n by ${shelf.author}\n ${shelf.pages} pages\n`;
        const removeButton = document.createElement("button");
        removeButton.type = "Button";
        removeButton.innerText = "Remove";
        removeButton.addEventListener("click", () => {
            library.splice(i, 1);
            book.remove();
        })
        const readButton = document.createElement("button");
        readButton.type = "button";
        readButton.innerText = "Read";
        readButton.addEventListener("click", () => {
           if (readButton.innerText === "Read") {
            readButton.innerText = "Not Read";
           } else {
            readButton.innerText = "Read";
           }
        })
        book.append(readButton);
        book.appendChild(removeButton);
        bookList.appendChild(book);
        console.log(library);
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