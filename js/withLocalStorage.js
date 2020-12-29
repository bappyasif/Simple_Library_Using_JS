let booksArray = [
    // {
    //     author: "someAuthor",
    //     title: "someTitle",
    //     pages: 220,
    //     read: "someDone",
    // },
    // {
    //     author: "anotherAuthor",
    //     title: "anotherTitle",
    //     pages: 440,
    //     read: "anotherDone",
    // },
];

window.localStorage.setItem("books", JSON.stringify(booksArray));

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        console.log(`${this.title} is authored by ${this.author}, ${this.pages} pages, reading status ${this.read}`);
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
    evt.preventDefault();
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
    console.log(booksArray);
    localStorage.setItem("books", JSON.stringify(booksArray));
});

// window.localStorage.setItem("books", JSON.stringify(booksArray));