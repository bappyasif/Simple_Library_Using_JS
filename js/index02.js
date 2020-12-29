let booksArray = [
    {
        author: "someAuthor",
        title: "someTitle",
        pages: 220,
        read: "someDone",
    },
    {
        author: "anotherAuthor",
        title: "anotherTitle",
        pages: 440,
        read: "anotherDone",
    },
];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        console.log(`${this.title} is authored by ${this.author}, ${this.pages} pages, reading status ${this.read}`);
    }
}

let cards = document.querySelector(".cards");

function addBookToLibrary() {

    for (let i = 0; i < booksArray.length; i++) {
        let author = document.createElement("div");
        let title = document.createElement("div");
        let pages = document.createElement("div");
        let read = document.createElement("div");
        let card = document.createElement("div");
        let change = document.createElement("div");
        let remove = document.createElement("div");
        author.textContent = booksArray[i]["author"];
        title.textContent = booksArray[i]["title"];
        pages.textContent = booksArray[i]["pages"];
        read.textContent = booksArray[i]["read"];
        change.textContent = "Change";
        remove.textContent = "X";
        card.classList.add("card");
        card.setAttribute("data-card", i + 1);
        change.classList.add("change-status");
        remove.classList.add("remove-button");
        card.appendChild(author);
        card.appendChild(title);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(change);
        card.appendChild(remove);
        cards.appendChild(card);

        remove.addEventListener("click", () => {
            let sanityCheck = prompt("You sure about this?", "y/n");
            if (sanityCheck === "y" || sanityCheck === "Y") {
                booksArray.pop();
                cards.removeChild(card);
            }
        });
    
        change.addEventListener("click", () => {
            read.textContent = prompt("enter changes");
        });
    }
}

addBookToLibrary();

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
addBook.addEventListener("click", (evt) => {
    evt.preventDefault();

    let bookAuthor = document.querySelector(".book-name").value;
    let bookTitle = document.querySelector(".book-title").value;
    let bookPages = document.querySelector(".book-pages").value;
    let bookRead = document.querySelector(".book-read").value;

    let bookObject = {
        author: bookAuthor,
        title: bookTitle,
        pages: bookPages,
        read: bookRead
    }
    renderList(bookObject);
});

function renderList(bookObj) {
    let author = document.createElement("div");
    let title = document.createElement("div");
    let pages = document.createElement("div");
    let read = document.createElement("div");
    let card = document.createElement("div");
    let change = document.createElement("div");
    let remove = document.createElement("div");
    author.textContent = bookObj["author"];
    title.textContent = bookObj["title"];
    pages.textContent = bookObj["pages"];
    read.textContent = bookObj["read"];
    change.textContent = "Change";
    remove.textContent = "X";
    card.classList.add("card");
    card.setAttribute("data-card", booksArray.length);
    change.classList.add("change-status");
    remove.classList.add("remove-button");
    card.appendChild(author);
    card.appendChild(title);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(change);
    card.appendChild(remove);
    cards.appendChild(card);

    remove.addEventListener("click", () => {
        let sanityCheck = prompt("You sure about this?", "y/n");
        if (sanityCheck === "y" || sanityCheck === "Y") {
            booksArray.pop();
            cards.removeChild(card);
        }
    });

    change.addEventListener("click", () => {
        read.textContent = prompt("enter changes");
    });
}

let book = new Book("someBody", "someBook", 22, "done");
book.info();



/**
 let removeCard = document.querySelectorAll(".remove-button");
// console.log(removeCard);
removeCard.forEach(card => {
    card.addEventListener("click", (evt) => {
        // console.log(card.getAttribute("data-card"));
        console.log(evt.target.getAttribute("data-card"));
    })
});
 */