let booksArray = [];
class Book {
  constructor(author, title, pages, read) {
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

form.addEventListener("submit", (evt) => {
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
});

let cards = document.querySelector(".cards");
let count = 1;

function renderBooks(bookObj) {
  let domStr = `<div class="card" data-card="${count}" id="book-card-${count}">
        <div>${bookObj["author"]}</div>
        <div>${bookObj["title"]}</div>
        <div>${bookObj["pages"]}</div>
        <div class="reading-update">${bookObj["read"]}</div>
        <div class="read-status" id="rs-${count}">Read</div>
        <div class="remove-button" id="remove-${count}">X</div>
    </div>`;
  let domEl = document.createRange().createContextualFragment(domStr)
    .firstChild;
  cards.append(domEl);
  count++;
}

let bookCards = document.querySelector(".cards");
bookCards.addEventListener("click", (evt) => {
  console.log(evt.target.parentNode);
  if (evt.target.parentNode.id.startsWith("book-card")) {
      if(evt.target.id.startsWith("rs-")) {
        //   console.log("ch",change, evt.target.id)
          changeBookReadingStatus(evt.target.parentNode)
      } else if(evt.target.id.startsWith("remove-")) {
        // console.log("rm", remove, evt.target.id)
          removeBookFromArray(evt.target.parentNode);
      }
  }
});

function changeBookReadingStatus(node) {
  console.log(node.id);
  let read = node.querySelector(".reading-update");
  read.textContent = prompt("Update Status", "Done, Eh?!") || "Changed";
}

function removeBookFromArray(node) {
  console.log(node.id);
  let sanityCheck = prompt("you about to remove this book?!", "y/n");
  if (sanityCheck === "y" || sanityCheck === "Y") {
    cards.removeChild(node);
    booksArray.pop();
  }
}

/**
 * 
 * 
 let bookCards = document.querySelector(".cards");
bookCards.addEventListener("click", (evt) => {
  console.log(evt.target.parentNode);
  if (evt.target.parentNode.id.startsWith("book-card")) {
      if(evt.target.parentNode.querySelector(".remove-button")) {
        // changeBookReadingStatus(evt.target.parentNode);
        removeBookFromArray(evt.target.parentNode);
      } else if(evt.target.parentNode.querySelector(".read-status")) {
        changeBookReadingStatus(evt.target.parentNode);
        // removeBookFromArray(evt.target.parentNode);
      }
    // changeBookReadingStatus(evt.target.parentNode);
    // removeBookFromArray(evt.target.parentNode);
    // changeBookReadingStatus(evt);
    // removeBookFromArray(evt, domEl);
  }
});

function changeBookReadingStatus(node) {
  console.log(node.id);
  //   let change = node.querySelector(".read-status");
  let read = node.querySelector(".reading-update");
  read.textContent = prompt("Update Status", "Done, Eh?!") || "Changed";
  //   change.addEventListener("click", () => {
  //     read.textContent = prompt("Update Status", "Done, Eh?!") || "Changed";
  //   });
}

function removeBookFromArray(node) {
  console.log(node.id);
  let sanityCheck = prompt("you about to remove this book?!", "y/n");
  if (sanityCheck === "y" || sanityCheck === "Y") {
    cards.removeChild(node);
    booksArray.pop();
  }
  //   let remove = node.querySelector(".remove-button");
  //   remove.addEventListener("click", () => {
  //     let sanityCheck = prompt("you about to remove this book?!", "y/n");
  //     if (sanityCheck === "y" || sanityCheck === "Y") {
  //       cards.removeChild(node);
  //       booksArray.pop();
  //     }
  //   });
}
 * 
 *
 // let bookCard = bookCards.querySelector(".card");
// if (bookCard !== null) {
//   //   bookCards.addEventListener("click", (evt) => {
//   //     if (evt.target.id.startsWith("book-card")) {
//   //       changeBookReadingStatus(evt);
//   //       removeBookFromArray(evt, domEl);
//   //     }
//   //   });
// }

// if(booksArray.length > 0) {
// changeBookReadingStatus();
// removeBookFromArray();
// }
 */
