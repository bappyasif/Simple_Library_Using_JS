let booksArray = [];
let flag = false;

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
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
    booksArray = booksArray.concat(bookObj);

    let oldRecords = localStorage.getItem("books");
    if (oldRecords === null) {
        localStorage.setItem("books", JSON.stringify(booksArray));
    } else {
        // booksArray = booksArray.concat(bookObj);
        let newEntries = JSON.parse(oldRecords);
        // booksArray = booksArray.concat(bookObj);
        // booksArray = parsed;
        booksArray.forEach(item => {
            newEntries.push(item);
            // booksArray.push(item);
        });
        console.log(booksArray);
        localStorage.setItem("books", JSON.stringify(newEntries));
        // document.body.removeChild(document.body.querySelector(".cards"));
        // console.log(document.body.querySelector(".cards"));
        // document.body.querySelector(".cards").remove();
        // renderBooks();
        // flag = true;
        // window.getComputedStyle();

    }
    // document.body.removeChild(cards);
    // renderBooks();
    // window.getComputedStyle();
});

let cards = document.querySelector(".cards");

let parsed = JSON.parse(localStorage.getItem("books"));


function showBooks() {
    // console.log(parsed);
    // items = localStorage.getItem("books");
    // console.log(items);
    // let newArray = parsed;
    parsed.forEach(item => {
        // console.log(item, item["author"]);
        let author = document.createElement("div");
        let title = document.createElement("div");
        let pages = document.createElement("div");
        let read = document.createElement("div");
        let change = document.createElement("div");
        let remove = document.createElement("div");
        let card = document.createElement("div");
        author.textContent = item["author"];
        title.textContent = item["title"];
        pages.textContent = item["pages"];
        read.textContent = item["read"];
        change = document.createElement("div");
        remove = document.createElement("div");
        change.textContent = "Read";
        remove.textContent = "X";
        change.classList.add("read-status");
        remove.classList.add("remove-button");
        read.classList.add("reading-update");
        card = document.createElement("div");
        // card.setAttribute("data-card", i + 1);
        card.classList.add("card");
        // card.append(author,title,pages,read,change,remove);
        // card.appendChild(author);
        // card.appendChild(title);
        // card.appendChild(pages);
        // card.appendChild(read);
        // card.appendChild(change);
        // card.appendChild(remove);
        // let clone = card.cloneNode(true);
        // card.replaceWith(clone);
        cards.appendChild(card);

    });
}
1

function renderBooks() {
    // let parsed = JSON.parse(localStorage.getItem("books"));
    // document.body.removeChild(cards);
    if (parsed && parsed.length > 0 && parsed[0]["author"] !== null) {
        for (let i = 0; i < parsed.length; i++) {
            // document.body.removeChild(cards);
            let author = document.createElement("div");
            let title = document.createElement("div");
            let pages = document.createElement("div");
            let read = document.createElement("div");
            let change = document.createElement("div");
            let remove = document.createElement("div");
            let card = document.createElement("div");
            author.textContent = parsed[i]["author"];
            title.textContent = parsed[i]["title"];
            pages.textContent = parsed[i]["pages"];
            read.textContent = parsed[i]["read"];
            change = document.createElement("div");
            remove = document.createElement("div");
            change.textContent = "Read";
            remove.textContent = "X";
            change.classList.add("read-status");
            remove.classList.add("remove-button");
            read.classList.add("reading-update");
            card = document.createElement("div");
            card.setAttribute("data-card", i + 1);
            card.classList.add("card");
            card.appendChild(author);
            card.appendChild(title);
            card.appendChild(pages);
            card.appendChild(read);
            card.appendChild(change);
            card.appendChild(remove);
            // let clone = card.cloneNode(true);
            // card.replaceWith(clone);
            cards.appendChild(card);
        }
    }
}

renderBooks();
// if (parsed.length > 0) { showBooks(); }

// if (parsed.length > 0 || booksArray.length > 0) { renderBooks(); }
// if(booksArray.length > 0)renderBooks();

// if(flag) {document.removeChild(cards);renderBooks()};   

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
            for (let idx in parsed) {
                if (idx === String(+targetEl - 1)) {
                    parsed.splice(+idx, 1);
                    localStorage.setItem("books", JSON.stringify(parsed));
                }
            }
            cards.removeChild(btn.parentNode);
        }
    });
});





// let change = document.querySelector(".read-status");
// change.addEventListener("click", (evt) => {
//     console.log(evt.target.parentNode);
// });

// if(booksArray.length > 0) {
//     renderBooks();
//     console.log("??", booksArray);
// }

// if(localStorage.getItem("books").length > 0 && JSON.parse(localStorage.getItem("books"))[0]["pages"] !== null) {
//     // renderBooks();
//     console.log("??");
// }

// renderBooks();
// addBook.addEventListener("click", () => {
//     document.body.removeChild(cards);
//     // renderBooks();
// });

// window.localStorage.setItem("books", JSON.stringify(booksArray));
/**
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

// window.localStorage.setItem("books", JSON.stringify(booksArray));

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    // this.info = function () {
    //     console.log(`${this.title} is authored by ${this.author}, ${this.pages} pages, reading status ${this.read}`);
    // }
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
    booksArray = booksArray.concat(bookObj);
    // booksArray.push(bookObj);
    // console.log(booksArray);
    localStorage.setItem("books", JSON.stringify(booksArray));
});

// let author = document.querySelector(".author");
// let title = document.querySelector(".title");
// let pages = document.querySelector(".pages");
// let read = document.querySelector(".read-status");
// let change = document.querySelector("change-status");
// let remove = document.querySelector(".remove-button");
// let card = document.querySelector(".card");
// let cards = document.querySelector(".cards");

function renderBooks() {
    // let author = document.createElement("div");
    // let title = document.createElement("div");
    // let pages = document.createElement("div");
    // let read = document.createElement("div");
    // let change = document.createElement("div");
    // let remove = document.createElement("div");
    // let card = document.createElement("div");
    // let cards = document.createElement("div");
    // console.log("..");
    let parsed = JSON.parse(localStorage.getItem("books"));
    // console.log("??");
    if (parsed && parsed.length > 0 && parsed[0]["author"] !== null) {
        // console.log(parsed, parsed[0]["author"]);
        for (let i = 0; i < parsed.length; i++) {
            let author = document.createElement("div");
            let title = document.createElement("div");
            let pages = document.createElement("div");
            let read = document.createElement("div");
            let change = document.createElement("div");
            let remove = document.createElement("div");
            let card = document.createElement("div");
            let cards = document.createElement("div");
            author.textContent = parsed[i]["author"];
            title.textContent = parsed[i]["title"];
            pages.textContent = parsed[i]["pages"];
            read.textContent = parsed[i]["read"];
            change = document.createElement("div");
            remove = document.createElement("div");
            change.textContent = "Change";
            remove.textContent = "X";
            card = document.createElement("div");
            // cards = document.createElement("div");
            card.appendChild(author);
            card.appendChild(title);
            card.appendChild(pages);
            card.appendChild(read);
            card.appendChild(change);
            card.appendChild(remove);
            cards.appendChild(card);
        }
    }
}


let allCards =  cards.querySelectorAll(".card");
allCards.forEach(card => {
    // console.log(card)
    card.addEventListener("click", () => {
        // console.log(card);
        // card.querySelector(".read-status").textContent = "Changed";
        let readStatus = card.querySelector(".read-status");
        readStatus.textContent = prompt("Update Status", "Done??") || "Changed";

        // let removeCard = card.querySelector(".remove-button");
        // removeCard.addEventListener("click", () => {
        //     cards.removeChild(card);
        // });
    });
});


let readingChanges =  cards.querySelectorAll(".read-status");
readingChanges.forEach(card => {
    card.addEventListener("click", () => {
        // console.log(card.parentNode);
        card.textContent = prompt("Update Status", "Done??") || "Changed";
    });
})

// console.log(cards.querySelectorAll(".card"));
let allCards =  cards.querySelectorAll(".card");
// console.log(allCards);
allCards.forEach(card => {
    let readStatus = card.querySelector(".read-status");
    // console.log(readStatus);
    readStatus.addEventListener("click", () => {
        // console.log(readStatus);
        card.querySelector(".reading-update").textContent = prompt("Update Status", "Done, Eh?!") || "Changed";
    });
})

let removeButtons = cards.querySelectorAll(".remove-button");
removeButtons.forEach(btn => {
    // console.log(btn);
    btn.addEventListener("click", () => {
        // console.log(btn.parentNode);
        let sanityCheck = prompt("you about to remove this book?!", "y/n");
        if(sanityCheck === "y" || sanityCheck === "Y") {
            cards.removeChild(btn.parentNode);
        }
        // cards.removeChild(btn.parentNode);
    });
});

let removeButtons = cards.querySelectorAll(".remove-button");
removeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let sanityCheck = prompt("you about to remove this book?!", "y/n");
        if(sanityCheck === "y" || sanityCheck === "Y") {
            // booksArray.pop();
            // console.log(booksArray);
            let entries = JSON.parse(localStorage.getItem("books"));
            // let entries = localStorage.getItem("books");
            let targetEl = btn.parentNode.getAttribute("data-card")
            // delete entries[+targetEl-1];
            for(let idx in entries) {
                // console.log(idx, entries[idx], idx === +targetEl-1, targetEl, typeof targetEl, typeof +targetEl, idx, typeof idx, targetEl-1, String(targetEl-1));
                if(idx === String(+targetEl-1)) {
                    // console.log(idx);
                    // delete enteries[idx];
                    // entries = entries.slice(+idx,1)
                    entries.splice(+idx, 1);
                    localStorage.setItem("books", JSON.stringify(entries));
                    console.log(entries);
                }
            }
            // console.log(entries, targetEl);
            // console.log(btn.parentNode, btn.parentNode.getAttribute("data-card"));

            cards.removeChild(btn.parentNode);
        }
    });
});

function renderBooks() {
    // let parsed = JSON.parse(localStorage.getItem("books"));
    // document.body.removeChild(cards);
    if (parsed && parsed.length > 0 && parsed[0]["author"] !== null) {
        for (let i = 0; i < parsed.length; i++) {
            // document.body.removeChild(cards);
            let author = document.createElement("div");
            let title = document.createElement("div");
            let pages = document.createElement("div");
            let read = document.createElement("div");
            let change = document.createElement("div");
            let remove = document.createElement("div");
            let card = document.createElement("div");
            author.textContent = parsed[i]["author"];
            title.textContent = parsed[i]["title"];
            pages.textContent = parsed[i]["pages"];
            read.textContent = parsed[i]["read"];
            change = document.createElement("div");
            remove = document.createElement("div");
            change.textContent = "Read";
            remove.textContent = "X";
            change.classList.add("read-status");
            remove.classList.add("remove-button");
            read.classList.add("reading-update");
            card = document.createElement("div");
            card.setAttribute("data-card", i + 1);
            card.classList.add("card");
            card.appendChild(author);
            card.appendChild(title);
            card.appendChild(pages);
            card.appendChild(read);
            card.appendChild(change);
            card.appendChild(remove);
            cards.appendChild(card);
        }
    }
    // booksArray.forEach(item => {
    //     for (let i = 0; i < parsed.length; i++) {
    //         // document.body.removeChild(cards);
    //         let author = document.createElement("div");
    //         let title = document.createElement("div");
    //         let pages = document.createElement("div");
    //         let read = document.createElement("div");
    //         let change = document.createElement("div");
    //         let remove = document.createElement("div");
    //         let card = document.createElement("div");
    //         author.textContent = parsed[i]["author"];
    //         title.textContent = parsed[i]["title"];
    //         pages.textContent = parsed[i]["pages"];
    //         read.textContent = parsed[i]["read"];
    //         change = document.createElement("div");
    //         remove = document.createElement("div");
    //         change.textContent = "Read";
    //         remove.textContent = "X";
    //         change.classList.add("read-status");
    //         remove.classList.add("remove-button");
    //         read.classList.add("reading-update");
    //         card = document.createElement("div");
    //         card.setAttribute("data-card", i + 1);
    //         card.classList.add("card");
    //         card.appendChild(author);
    //         card.appendChild(title);
    //         card.appendChild(pages);
    //         card.appendChild(read);
    //         card.appendChild(change);
    //         card.appendChild(remove);
    //         cards.appendChild(card);
    //     }
    // })
}


renderBooks();
 */