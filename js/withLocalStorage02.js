let booksArray = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

let bookStorage = localStorage.getItem("books");

function DisplayLibrary(arr) {
    this.array = arr;
    this.addBookToLibrary = function (title, author, pages, read) {
        // let item = [title, author, pages, read];
        let item = new Book(title, author, pages, read);
        booksArray.push(item);
        // call render
        console.log("<<", item);
        // return item;
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
    // let bookObj = new DisplayLibrary(bookStorage);
    // bookObj.addBookToLibrary(
    //     bookAuthor.value,
    //     bookTitle.value,
    //     bookPages.value,
    //     bookRead.value
    // );
    let bookObj = new Book(
        bookAuthor.value,
        bookTitle.value,
        bookPages.value,
        bookRead.value
    )

    renderBooks(bookObj);
    booksArray.push(bookObj);

    if (bookStorage !== null) {
        let newRcords = JSON.parse(bookStorage);
        booksArray.forEach(item => newRcords.push(item));
        localStorage.setItem("books", JSON.stringify(newRcords));
    } else {
        // booksArray.push(bookObj);
        localStorage.setItem("books", JSON.stringify(booksArray));
    }
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
    // console.log("??", bookObj, bookObj["author"]);
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
}

console.log(bookStorage === null);
if (bookStorage) { JSON.parse(bookStorage).forEach(item => renderBooks(item)) };

let allCards = cards.querySelectorAll(".card");
allCards.forEach(card => {
    let readStatus = card.querySelector(".read-status");
    readStatus.addEventListener("click", () => {
        card.querySelector(".reading-update").textContent = prompt("Update Status", "Done, Eh?!") || "Changed";
    });
});

let removeButtons = cards.querySelectorAll(".remove-button");
removeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let sanityCheck = prompt("you about to remove this book?!", "y/n");
        if (sanityCheck === "y" || sanityCheck === "Y") {
            // let entries = JSON.parse(localStorage.getItem("books"));
            let targetEl = btn.parentNode.getAttribute("data-card")
                let parsed = JSON.parse(localStorage.getItem("books"));
            console.log(parsed);
            for (let idx in parsed) {
                // console.log("><",idx,targetEl);
                if (idx === String(+targetEl - 1)) {
                    // console.log("><",idx,targetEl);
                    parsed.splice(+idx, 1);
                    // localStorage.setItem("books", JSON.stringify(parsed));
                }
            }
            localStorage.setItem("books", JSON.stringify(parsed));
            cards.removeChild(btn.parentNode);
            // localStorage.setItem("books", JSON.stringify(parsed));
        }
    });
});


// if(bookStorage.length) {
//     bookStorage.forEach(item => renderBooks(item));
// } else {
//     localStorage.setItem("books", JSON.stringify(booksArray));
// }






// DisplayLibrary.prototype =  Object.create(Book.prototype);

// let test = new DisplayLibrary(bookStorage);

// let test02 = test.addBookToLibrary("title","author","pages","read");
// console.log(test02, booksArray);










// if(!bookStorage) {
//     localStorage.setItem("books", JSON.stringify(booksArray));
// } else {
//     let newEntries = bookStorage;
//     booksArray.push([title,author,pages,read]);
//     booksArray.forEach(item=>newEntries.push(item));
// }

// function DisplayLibrary(arr) {
//     this.array = arr;
//     this.addBookToLibrary = function(title, author, pages, read) {
//         if(!bookStorage) {
//             localStorage.setItem("books", JSON.stringify(booksArray));
//         } else {
//             let newEntries = bookStorage;
//             booksArray.push([title,author,pages,read]);
//             booksArray.forEach(item=>newEntries.push(item));
//         }
//     }
// }

// let oldRecords = localStorage.getItem("books");
// if(oldRecords === null) {
//     localStorage.setItem("books", JSON.stringify(booksArray));
// } else {
//     let newRecords = JSON.parse(oldRecords);
//     booksArray.forEach(item => newRecords.push(item));
// }

// let newBook = new Book("author", "title", "pages", "read");
// let bookStorage = JSON.parse(localStorage.getItem("books"));

// function DisplayBooks() {
//     // this.array = arr;
//     this.addBook = function (title, author, pages, read) {
//         let bookItem = [title, author, pages, read];
//         let oldRecords = localStorage.getItem("books");
//         if (oldRecords === null) {
//             localStorage.setItem("books", JSON.stringify(booksArray));
//         } else {
//             let newRecords = JSON.parse(oldRecords);
//             booksArray.forEach(item => newRecords.push(item));
//         }
//         booksArray.push(bookItem);
//         return bookItem;
//     }
// };
// DisplayBooks.prototype = Object.create(Book.prototype);
// // console.log(DisplayBooks.prototype.constructor === Book);
// DisplayBooks.prototype.constructor = DisplayBooks
// // console.log(DisplayBooks.prototype.constructor === Book);
// let bookTest = new DisplayBooks();
// let test = bookTest.addBook("title", "author", "pages", "done");
// console.log(test);
// let bookLibrary = new DisplayBooks(bookStorage);




// let bookLibrary = new DisplayBooks(newBook);
// console.log(bookLibrary);



// Object.setPrototypeOf(Book.prototype, DisplayBooks.prototype);
// console.log(Object.getPrototypeOf(Book.prototype) === DisplayBooks.prototype);
// let test = new DisplayBooks("author", "title", "ppages", "done");
// console.log(test);
