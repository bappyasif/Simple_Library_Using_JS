let booksArray = [];
class Book {
    constructor(author,title,pages,read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }
}

let form = document.querySelector("#form");
let addButton = document.querySelector(".button");
let addBook = document.querySelector("#add-now");

addButton.addEventListener("click", () => {
    if (form.hidden === true) {
        form.hidden = false;
    } else {
        form.hidden = true;
    }
});

addBook.addEventListener("click", evt => {
    // evt.preventDefault();
    let bookAuthor = document.querySelector(".book-name");
    let bookTitle = document.querySelector(".book-title");
    let bookPages = document.querySelector(".book-pages");
    let bookRead = document.querySelector(".book-read");
    let bookObj = new Book(
        bookAuthor.value,
        bookTitle.value,
        bookPages.value,
        bookRead.value
    );
    booksArray.push(bookObj);
    renderBooks(bookObj);
    // booksArray.forEach(item => renderBooks(item));
});

let cards = document.querySelector(".cards");
let count = 1;

function renderBooks(bookObj) {
    let author = document.createElement("div");
    let title = document.createElement("div");
    let pages = document.createElement("div");
    let read = document.createElement("div");
    let change = document.createElement("div");
    let remove = document.createElement("div");
    let card = document.createElement("div");
    author.textContent = bookObj["author"];
    title.textContent = bookObj["title"];
    pages.textContent = bookObj["pages"];
    read.textContent = bookObj["read"];
    change = document.createElement("div");
    remove = document.createElement("div");
    change.textContent = "Read";
    remove.textContent = "X";
    change.classList.add("read-status");
    remove.classList.add("remove-button");
    read.classList.add("reading-update");
    card = document.createElement("div");
    card.setAttribute("data-card", count);
    card.classList.add("card");
    card.appendChild(author);
    card.appendChild(title);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(change);
    card.appendChild(remove);
    cards.appendChild(card);
    count++;

    change.addEventListener("click", () => {
        read.textContent = prompt("Update Status", "Done, Eh?!") || "Changed";
    });

    remove.addEventListener("click", () => {
        let sanityCheck = prompt("you about to remove this book?!", "y/n");
        if(sanityCheck === "y" || sanityCheck === "Y") {
            cards.removeChild(card);
            booksArray.pop();
        }
    });
}