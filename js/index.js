let booksArray = [];
function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        console.log(`This Book: "${this.title}" 
        is authored by: ${this.author}, 
        ${this.pages} pages, 
        and reading is "${this.read}"`);
    }
}

booksArray.push({
    author: "someBody",
    title: "SomeTitle",
    pages: 220,
    read: "Done"
},
    {
        author: "someOther",
        title: "AnotherTitle",
        pages: 220,
        read: "Done"
    });


let title = document.querySelector(".book-name");
let author = document.querySelector(".book-title");
let pages = document.querySelector(".book-pages");
let read = document.querySelector(".book-read");
// let card = document.querySelector(".books");
let card = document.querySelector(".cards");

function addBookToLibrary() {
    let add = document.querySelector("#add-now");
    add.addEventListener("click", (evt) => {
        evt.preventDefault();
        if (author.value !== null) {
            booksArray.push({
                author: `"${author.value}"`,
                title: `"${title.value}"`,
                pages: `"${pages.value}"`,
                read: `"${read.value}"`
            });
        }
        addToBookList(booksArray[booksArray.length - 1]);
    });
}

function addToBookList(bookObj) {
    let newCard = document.createElement("div");
    let author = document.createElement("div");
    let title = document.createElement("div");
    let pages = document.createElement("div");
    let read = document.createElement("div");
    let remove = document.createElement("button");
    let change = document.createElement("div");
    author.textContent = bookObj["author"];
    title.textContent = bookObj["title"];
    pages.textContent = bookObj["pages"];
    read.textContent = bookObj["read"];
    newCard.appendChild(author);
    newCard.appendChild(title);
    newCard.appendChild(pages);
    newCard.appendChild(read);
    change.classList.add("change-class");
    change.textContent = "Change";
    remove.classList.add("remove-button");
    remove.textContent = "X";
    newCard.appendChild(change);
    newCard.appendChild(remove);
    card.classList.add(".card");
    card.appendChild(newCard);

    remove.addEventListener("click", () => {
        let sanityCheck = prompt("You sure?!", "y/n");
        if (sanityCheck === "y" || sanityCheck === "Y") {
            booksArray.pop();
            card.removeChild(newCard);
        }
    });
    change.addEventListener("click", () => {
        let bookStat = prompt("enter status", "completed");
        change.textContent = bookStat || "changed";
    });
}

function showBooks() {
    let author = document.querySelector(".author");
    let title = document.querySelector(".title");
    let pages = document.querySelector(".pages");
    let read = document.querySelector(".read-status");
    for (let i = 0; i < booksArray.length; i++) {
        author.textContent = booksArray[i]["author"];
        title.textContent = booksArray[i]["title"];
        pages.textContent = booksArray[i]["pages"];
        read.textContent = booksArray[i]["read"];
    }
}

if (booksArray.length > 0) {
    showBooks();
}

let newBook = document.querySelector(".button");
let form = document.querySelector("#form");
newBook.addEventListener("click", (evt) => {
    if (form.hidden === true) {
        form.hidden = false;
        addBookToLibrary();
    } else {
        form.hidden = true;
    }
});


let changeBookReadingStatus = document.querySelector(".change-status");
changeBookReadingStatus.addEventListener("click", function (evt) {
    booksArray[booksArray.length - 1]["read"] = "changed";
    addToBookList(booksArray[booksArray.length - 1]);
});

function removedBook() {
    let sanityCheck = prompt("You sure?!", "y/n");
    if (sanityCheck === "y" || sanityCheck === "Y") {
        booksArray.pop();
        showBooks();
    }
}

let removeBook = document.querySelector(".remove-button");
removeBook.addEventListener("click", removedBook);


let book = new Book("aB", "cd", 220, "done");
book.info();
// console.log(booksArray);


/**
// let book = Object.create(Book.prototype("aB", "cd", 220, "done"));
// let book = Object.create(Book.prototype);
// book.title = "ABCD";
// book.author ="??";
// book.pages = 220;
// book.read = "done";
// book.info = function() {console.log(`${this.title}, ${this.author}, ${this.pages}, ${this.read}`)}

function addBookToLibrary() {
    let title = document.querySelector(".book-name");
    let author = document.querySelector(".book-title");
    let pages = document.querySelector(".book-pages");
    let read = document.querySelector(".book-read");
    let add = document.querySelector("#add-now");
    // let form = document.querySelector("#form");
    // console.log(author,title,pages,read);

    add.addEventListener("click", (evt) => {
        if(author.textContent !== null) {
            booksArray.push({
                author: `"${author.textContent}"`,
                title: `"${title.textContent}"`,
                pages: `"${pages.value}"`,
                read: `"${read.textContent}"`
            });
        }



    // add.addEventListener("click", (evt) => {
    //     booksArray.push({
    //         author: `"${author.value}"`,
    //         title: `"${title.value}"`,
    //         pages: `"${pages.value}"`,
    //         read: `"${read.value}"`
    //     });


        // if(form.hidden === true) {
        //     form.hidden = false;
        //     if(form.hidden === false) {
        //         booksArray.push({
        //             author: `"${author.value}"`,
        //             title: `"${title.value}"`,
        //             pages: `"${pages.value}"`,
        //             read: `"${read.value}"`
        //         });
        //     }
        // } else {
        //     form.style.display = "none";
        // }
        // if(form.style.display === "none") {
        //     form.style.display = "block";
        //     if(form.style.display === "block") {
        //         booksArray.push({
        //             author: `"${author.value}"`,
        //             title: `"${title.value}"`,
        //             pages: `"${pages.value}"`,
        //             read: `"${read.value}"`
        //         });
        //     }
        // } else {
        //     form.style.display = "none";
        // }
        // booksArray.push({
        //     author: `"${author.value}"`,
        //     title: `"${title.value}"`,
        //     pages: `"${pages.value}"`,
        //     read: `"${read.value}"`
        // });
    });
    console.log(booksArray);
}
// addBookToLibrary();
let newBook = document.querySelector(".button");
let form = document.querySelector("#form");
newBook.addEventListener("click", (evt) => {
    if (form.hidden === true) {
        form.hidden = false;
        addBookToLibrary();
    } else {
        form.style.display = "none";
    }

    // addBookToLibrary();
    // if(evt.target.style.display === "none") {
    //     evt.target.style.display === "block";
    // } else {
    //     evt.target.style.display === "none";
    // }
    // console.log("..");
});

function addBookToLibrary() {
    // let title = document.querySelector(".book-name");
    // let author = document.querySelector(".book-title");
    // let pages = document.querySelector(".book-pages");
    // let read = document.querySelector(".book-read");
    let add = document.querySelector("#add-now");

    add.addEventListener("click", (evt) => {
        evt.preventDefault();
        // console.log(title.value, title.textContent, "<>");
        if (author.value !== null) {
            booksArray.push({
                author: `"${author.value}"`,
                title: `"${title.value}"`,
                pages: `"${pages.value}"`,
                read: `"${read.value}"`
            });
        }
        console.log(booksArray);
        // showBooks();
        addToBookList(booksArray[booksArray.length-1]);
    });
    // console.log(booksArray);
}
// addBookToLibrary();


function addToBookList(bookObj) {
    let author = document.querySelector(".author");
    let title = document.querySelector(".title");
    let pages = document.querySelector(".pages");
    let read = document.querySelector(".read-status");
    // console.log("<<",bookObj, bookObj["author"]);
    author.textContent = bookObj["author"];
    title.textContent = bookObj["title"];
    pages.textContent = bookObj["pages"];
    read.textContent = bookObj["read"];
}


function showBooks() {
    let author = document.querySelector(".author");
    let title = document.querySelector(".title");
    let pages = document.querySelector(".pages");
    let read = document.querySelector(".read-status");
    for (let i = 0; i < booksArray.length; i++) {
        // author.textContent = "??";
        author.textContent = booksArray[i]["author"];
        title.textContent = booksArray[i]["title"];
        pages.textContent = booksArray[i]["pages"];
        read.textContent = booksArray[i]["read"];
    }
}

if (booksArray.length > 0) {
    showBooks();
}
// showBooks();

let newBook = document.querySelector(".button");
let form = document.querySelector("#form");
newBook.addEventListener("click", (evt) => {
    if (form.hidden === true) {
        form.hidden = false;
        addBookToLibrary();
    } else {
        form.hidden = true;
    }
});


let changeBookReadingStatus = document.querySelector(".change-status");
changeBookReadingStatus.addEventListener("click", function(evt) {
    // console.log("..")
    // read.textContent = "changed";
    booksArray[booksArray.length-1]["read"] = "changed";
    // console.log(booksArray[booksArray.length-1]["read"]);
    addToBookList(booksArray[booksArray.length-1]);
});


let removeBook = document.querySelector(".remove-button");
removeBook.addEventListener("click", evt => {
    // console.log("..");
    let sanityCheck = prompt("You sure?!", "y/n");
    if(sanityCheck === "y" || sanityCheck === "Y") {
        booksArray.pop();
        showBooks();
    }
});

let card = document.querySelector(".cards");

function addBookToLibrary() {
    let add = document.querySelector("#add-now");
    add.addEventListener("click", (evt) => {
        evt.preventDefault();
        if (author.value !== null) {
            booksArray.push({
                author: `"${author.value}"`,
                title: `"${title.value}"`,
                pages: `"${pages.value}"`,
                read: `"${read.value}"`
            });
        }
        console.log(booksArray);
        // showBooks();
        addToBookList(booksArray[booksArray.length - 1]);
    });
    // console.log(booksArray);
}
// addBookToLibrary();


function addToBookList(bookObj) {
    // let author = document.querySelector(".author");
    // let title = document.querySelector(".title");
    // let pages = document.querySelector(".pages");
    // let read = document.querySelector(".read-status");
    // console.log("<<",bookObj, bookObj["author"]);
    // author.textContent = bookObj["author"];
    // title.textContent = bookObj["title"];
    // pages.textContent = bookObj["pages"];
    // read.textContent = bookObj["read"];

    // let card = document.querySelector(".card");
    let newCard = document.createElement("div");
    let author = document.createElement("div");
    let title = document.createElement("div");
    let pages = document.createElement("div");
    let read = document.createElement("div");
    let remove = document.createElement("button");
    let change = document.createElement("div");
    author.textContent = bookObj["author"];
    title.textContent = bookObj["title"];
    pages.textContent = bookObj["pages"];
    read.textContent = bookObj["read"];
    newCard.appendChild(author);
    newCard.appendChild(title);
    newCard.appendChild(pages);
    newCard.appendChild(read);
    change.classList.add("change-class");
    change.textContent = "Change";
    remove.classList.add("remove-button");
    remove.textContent = "X";
    newCard.appendChild(change);
    newCard.appendChild(remove);
    card.classList.add(".card");
    card.appendChild(newCard);
    // remove.addEventListener("click", removedBook); 
    remove.addEventListener("click", () => {
        let sanityCheck = prompt("You sure?!", "y/n");
        if (sanityCheck === "y" || sanityCheck === "Y") {
            booksArray.pop();
            card.removeChild(newCard);
            // console.log(booksArray);
            // showBooks();
        }
        // card.removeChild(newCard);
    });
    change.addEventListener("click", () => {
        let bookStat = prompt("enter status", "completed");
        // booksArray[booksArray.length - 1]["read"] = bookStat|| "changed";
        change.textContent = bookStat || "changed";
        // showBooks();
    })
}


function showBooks() {
    let author = document.querySelector(".author");
    let title = document.querySelector(".title");
    let pages = document.querySelector(".pages");
    let read = document.querySelector(".read-status");
    for (let i = 0; i < booksArray.length; i++) {
        // author.textContent = "??";
        author.textContent = booksArray[i]["author"];
        title.textContent = booksArray[i]["title"];
        pages.textContent = booksArray[i]["pages"];
        read.textContent = booksArray[i]["read"];
    }
}

if (booksArray.length > 0) {
    showBooks();
}
// showBooks();

let newBook = document.querySelector(".button");
let form = document.querySelector("#form");
newBook.addEventListener("click", (evt) => {
    if (form.hidden === true) {
        form.hidden = false;
        addBookToLibrary();
    } else {
        form.hidden = true;
    }
});


let changeBookReadingStatus = document.querySelector(".change-status");
changeBookReadingStatus.addEventListener("click", function (evt) {
    // console.log("..")
    // read.textContent = "changed";
    booksArray[booksArray.length - 1]["read"] = "changed";
    // console.log(booksArray[booksArray.length-1]["read"]);
    addToBookList(booksArray[booksArray.length - 1]);
});

function removedBook() {
    let sanityCheck = prompt("You sure?!", "y/n");
    if (sanityCheck === "y" || sanityCheck === "Y") {
        booksArray.pop();
        // console.log(booksArray)
        showBooks();
    }
}

let removeBook = document.querySelector(".remove-button");
removeBook.addEventListener("click", removedBook);
 */