let booksArray = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

let bookStorage = localStorage.getItem("books");

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
    renderBooks(bookObj);
    // booksArray.forEach(item => renderBooks(item));
    if(bookStorage === null) {
        localStorage.setItem("books", JSON.stringify(booksArray));
    } else {
        let newEntries = JSON.parse(bookStorage);
        // let tempArray = booksArray;
        // tempArray.forEach(item => newEntries.push(item));
        booksArray.forEach(item => newEntries.push(item));
        localStorage.setItem("books", JSON.stringify(newEntries));
    }
});

let cards = document.querySelector(".cards");
let count = 1;
let parsed = JSON.parse(bookStorage);

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
    // count++;

    change.addEventListener("click", () => {
        read.textContent = prompt("Update Status", "Done, Eh?!") || "Changed";
    });

    remove.addEventListener("click", () => {
        let sanityCheck = prompt("you about to remove this book?!", "y/n");
        if(sanityCheck === "y" || sanityCheck === "Y") {
            let check = card.getAttribute("data-card");
            if(+check) {
                console.log(check, check-1);
                // parsed.splice(check,1);
                parsed.splice(check-1,1);
                localStorage.setItem("books", JSON.stringify(parsed));
            } else {
                booksArray = [];
                parsed = [];
                // localStorage.setItem("books", JSON.stringify(parsed));
            }
            cards.removeChild(card);
            booksArray.pop();
        }
    });
    count++;
}

if(bookStorage.length > 0) {
    console.log(parsed, booksArray);
    booksArray = parsed;
    booksArray.forEach(item => renderBooks(item));
}


/**
 // booksArray = booksArray.concat(bookObj);
// booksArray.forEach(item => {
//     if(document.body.querySelector(".cards")) {
//         document.body.querySelector(".cards").remove();
//     } else {
//         test(item);
//     }
//     // test(item);
// });
// test(bookObj);
// function test(ob) {console.log(ob)};

remove.addEventListener("click", () => {
        let sanityCheck = prompt("you about to remove this book?!", "y/n");
        if(sanityCheck === "y" || sanityCheck === "Y") {
            // cards.removeChild(card);
            // booksArray.pop();
            let check = card.getAttribute("data-card");
            if(+check) {
                console.log(check, check-1);
                // let parsed = JSON.parse(bookStorage);
                parsed.splice(check-1,2);
                // card.setAttribute("data-card", count--)
                // count--;
                localStorage.setItem("books", JSON.stringify(parsed));
            }
            cards.removeChild(card);
            booksArray.pop();
            // count--;
        }
    });



        remove.addEventListener("click", () => {
        let sanityCheck = prompt("you about to remove this book?!", "y/n");
        if(sanityCheck === "y" || sanityCheck === "Y") {
            // let idx = cards.querySelectorAll()
            let check = card.getAttribute("data-card");
            if(+check) {
                console.log(check, check-1);
                // let parsed = JSON.parse(bookStorage);
                parsed.splice(check-1,1);
                // parsed.pop();
                // card.setAttribute("data-card", count--)
                // count--;
                localStorage.setItem("books", JSON.stringify(parsed));
            }
            cards.removeChild(card);
            booksArray.pop();
            // count--;
        }
    });

if(bookStorage.length > 0) {
    console.log(parsed);
    // parsed.forEach(item => renderBooks(item));
    // booksArray = [];
    booksArray = parsed;
    booksArray.forEach(item => renderBooks(item));
}
 */