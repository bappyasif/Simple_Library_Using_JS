var firebaseConfig = {
    apiKey: "AIzaSyAvu938r5h51c41fUYSu-GKwMxAOsZFTNA",
    authDomain: "libraryassignment-18f3a.firebaseapp.com",
    projectId: "libraryassignment-18f3a",
    storageBucket: "libraryassignment-18f3a.appspot.com",
    messagingSenderId: "608057700737",
    appId: "1:608057700737:web:295026c92ae394f1ffb880"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    toString = function () {
        return this.title + ", " + this.author + ", " + this.pages + ", " + this.read;
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

    let docRef = firestore
        .collection("books")
        .doc(`${bookObj["title"]}`);

    docRef.set(bookConverter.toFireStore(bookObj))
        .then(function () {
            console.log("Book Added");
            renderBooks(bookObj);
        }).catch(err => console.log("Error found", err));
});

let cards = document.querySelector(".cards");

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
    card.classList.add("card");
    card.appendChild(author);
    card.appendChild(title);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(change);
    card.appendChild(remove);
    cards.appendChild(card);

    // let docRef = firebase.firestore().collection("books");
    // let docRef = firestore.collection("books");
    // let findDoc = docRef.doc(`${title}`);
    // let findDoc = docRef.doc(bookObj[title]);
    // let findDoc = docRef.doc(`${bookObj[title]}`);
    // let findDoc = docRef.doc(bookObj["title"]);
    let findDoc = docRef.doc(bookObj.title);

    remove.addEventListener("click", () => {
        let sanityCheck = prompt("you sure");
        if (sanityCheck === "y" || sanityCheck === "Y") {
            let query = docRef.where("title", "==", bookObj["title"]);
            query.get().then(function (querySnapshot) {
                querySnapshot.forEach(doc => {
                    doc.ref.delete().then(
                        function () {
                            console.log("successfully removed");
                            cards.removeChild(card);
                        }
                    ).catch(err => console.log(err))
                })
            }).catch(err => console.log("Error Found", err));
        }
    });

    change.addEventListener("click", () => {
        findDoc.onSnapshot(doc => {
            let someData = doc.data();
            // console.log(someData);
            let sanityCheck = prompt("you sure");
            if (sanityCheck === "y" || sanityCheck === "Y") {
                someData.read = prompt("Enter Change") || "updated change";
                cards.removeChild(card);
                renderBooks(someData);
            }
        });
    });
}


let firestore = firebase.firestore();
let docRef = firestore.collection("books");

// load data into DOM
docRef.get().then(
    function (querySnapshot) {
        querySnapshot.forEach(doc => renderBooks(doc.data()));
    }
).catch(err => console.log("Error found: ", err));


// data converter for custom objects in firestore:
let bookConverter = {
    toFireStore: function (book) {
        return {
            title: book.title,
            author: book.author,
            pages: book.pages,
            read: book.read
        };
    },
    fromFirestore: function (snapshot, options) {
        let data = snapshot.data(options);
        return new Book(data.author, data.title, data.pages, data.read);
    }
}


/**
 var firebaseConfig = {
    apiKey: "AIzaSyAvu938r5h51c41fUYSu-GKwMxAOsZFTNA",
    authDomain: "libraryassignment-18f3a.firebaseapp.com",
    projectId: "libraryassignment-18f3a",
    storageBucket: "libraryassignment-18f3a.appspot.com",
    messagingSenderId: "608057700737",
    appId: "1:608057700737:web:295026c92ae394f1ffb880"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    toString = function () {
        return this.title + ", " + this.author + ", " + this.pages + ", " + this.read;
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
    // let docRef = firestore.doc("books/"+bookObj["title"]);
    // let docRef = firestore.doc(`books/${bookObj["title"]}`);
    // let docRef = firestore.doc(`books/author`);
    let docRef = firestore
    .collection("books")
    .doc(`${bookObj["title"]}`);
    // console.log("><",docRef);
    // docRef.set(bookObj);
    docRef.set(bookConverter.toFireStore(bookObj))
    .then(function() {
        console.log("Book Added");
        renderBooks(bookObj);
    }).catch(err => console.log("Error found",err));

    // // load data into DOM
    // docRef.get().then(
    //     function() {
    //         console.log("Book Rendered");
    //         if(docRef.length > 0) {
    //             renderBooks(bookObj);
    //         }
    //     }
    // ).catch(err => console.log("Error found: ",err));
});

let cards = document.querySelector(".cards");

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
    // card.setAttribute("data-card", count);
    card.classList.add("card");
    card.appendChild(author);
    card.appendChild(title);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(change);
    card.appendChild(remove);
    cards.appendChild(card);

    let docRef = firestore
    .collection("books");
    let findDoc = docRef.doc(`${title}`);

    remove.addEventListener("click", () => {
        cards.removeChild(card);
        // let findDoc = docRef.doc(`${read}`);
        // let docRef = firestore.collection("books");
        // let findDoc = docRef.doc(`${title}`);
        findDoc.delete().then(
            function(){console.log("done")}
        ).catch(err=>console.log("Error Found",err));
    });

    change.addEventListener("click", () => {
        findDoc.update({
            read: "Done, eh?!"
        }).then(
            function(){console.log("done changed")}
        ).catch(err=>console.log("Error, found", err));
    });
}

// load data into DOM
let firestore = firebase.firestore();
let docRef = firestore.collection("books");
docRef.get().then(
    function(querySnapshot) {
        querySnapshot.forEach(doc =>renderBooks(doc.data()));
    }
    // function() {
    //     console.log("Book Rendered");
    //     if(docRef.length > 0) {
    //         renderBooks(bookObj);
    //     }
    // }
).catch(err => console.log("Error found: ",err));


 // let findDoc = docRef.doc(`${read}`);
        // let docRef = firestore.collection("books");
        // let findDoc = docRef.doc(`${title}`);

        // findDoc.delete().then(
        //     function(){console.log("done")}
        // ).catch(err=>console.log("Error Found",err));

        // docRef.where("title", "===", `"${title}"`)
        // .then(
        //     function() {console.log("Successfully removed")}
        // ).catch(err=>console.log("Error found: ",err));

        // let query = docRef.where("title", "==", `${title}`);

        // docRef.where("title", "===", `${title}`).doc()
        // .delete()
        // .then(
        //     function() {console.log("Successfully removed")}
        // ).catch(err=>console.log("Error found: ",err));

        // docRef.doc(`"${title}"`)
        // .delete()
        // .then(
        //     function() {console.log("Successfully removed")}
        // ).catch(err=>console.log("Error found: ",err));

        // firestore.collection("books").doc(`"${title}"`)
        // .delete()
        // .then(
        //     function() {console.log("Successfully removed")}
        // ).catch(err=>console.log("Error found: ",err));

        // let query = docRef.where("title", "==", bookObj[title]);
        // query.get().then(function(querySnapshot) {
        //     querySnapshot.forEach(item => {
        //         item.delete();
        //     })
        // });


        // let query = docRef.where("title", "==", `"${bookObj[title]}"`);
        // query.get().then(function(querySnapshot) {
        //     querySnapshot.forEach(item => {
        //         // item.delete();
        //         item.ref.delete().then(
        //             function() {console.log("removed successfully")}
        //         ).catch(err => console.log("Error found:", err));
        //     })
        // }).catch(err => console.log("Error found: ",err));

        // let query = docRef.where("title", "==", `${bookObj[title]}`);
        // let batch = firestore.batch();
        // query.get().then(function(querySnapshot) {
        //     querySnapshot.forEach(doc => {
        //         batch.delete(doc.ref);
        //     });
        // })
        // batch.commit();

        // let query = docRef.where("title", "==", `${bookObj[title]}`);
        // query.get().then(function (querySnapshot) {
        //     querySnapshot.forEach(doc => {
        //         doc.ref.delete().then(
        //             function () { console.log("successfully removed") }
        //         ).catch(err => console.log(err))
        //     })
        // }).catch(err => console.log("Error Found", err));


        // load data into DOM in relatime
// let getRealTimeUpdates = docRef.onSnapshot(doc => {
//     if(doc && doc.exists) {
//         let objectData = doc.data();
//         console.log(objectData);
//         objectData.forEach(item=>renderBooks(item))
//     }
// });
// getRealTimeUpdates();
// docRef.onSnapshot(doc => {
//     if(doc && doc.exists) {
//         let objectData = doc.data();
//         console.log(objectData);
//         objectData.forEach(item=>renderBooks(item))
//     }
// });
// docRef.onSnapshot(doc => {
//         // if(doc && doc.exists) {
//         //     let objectData = doc.data();
//         //     console.log(objectData);
//         //     renderBooks(objectData);
//         // }
//         let objectData = doc.data();
//             console.log(objectData);
//             renderBooks(objectData);
//     });

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
    card.classList.add("card");
    card.appendChild(author);
    card.appendChild(title);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(change);
    card.appendChild(remove);
    cards.appendChild(card);

    // let docRef = firebase.firestore().collection("books");
    let docRef = firestore.collection("books");
    // let findDoc = docRef.doc(`${title}`);
    // let findDoc = docRef.doc(bookObj[title]);
    // let findDoc = docRef.doc(`${bookObj[title]}`);
    // let findDoc = docRef.doc(bookObj["title"]);
    let findDoc = docRef.doc(bookObj.title);

    remove.addEventListener("click", () => {
        let query = docRef.where("title", "==", bookObj["title"]);
        query.get().then(function (querySnapshot) {
            querySnapshot.forEach(doc => {
                doc.ref.delete().then(
                    function () {
                        console.log("successfully removed");
                        cards.removeChild(card);
                    }
                ).catch(err => console.log(err))
            })
        }).catch(err => console.log("Error Found", err));
    });

    // change.addEventListener("click", () => {
    //     findDoc.update({
    //         read: "Done, eh?!"
    //     }).then(
    //         function () { console.log("done changed") }
    //     ).catch(err => console.log("Error, found", err));
    // });

    change.addEventListener("click", () => {
        findDoc.onSnapshot(doc => {
            let someData = doc.data();
            console.log(someData);
            cards.removeChild(card);
            renderBooks(someData);
        });
    });
}


remove.addEventListener("click", () => {
        let sanityCheck = prompt("you sure");
        if (sanityCheck === "y" || sanityCheck === "Y") {
            let query = docRef.where("title", "==", bookObj["title"]);
            query.get().then(function (querySnapshot) {
                querySnapshot.forEach(doc => {
                    doc.ref.delete().then(
                        function () {
                            console.log("successfully removed");
                            cards.removeChild(card);
                        }
                    ).catch(err => console.log(err))
                })
            }).catch(err => console.log("Error Found", err));
        }
    });

    // change.addEventListener("click", () => {
    //     findDoc.onSnapshot(doc => {
    //         let someData = doc.data();
    //         // console.log(someData);
    //         cards.removeChild(card);
    //         renderBooks(someData);
    //     });
    // });

    change.addEventListener("click", () => {
        findDoc.onSnapshot(doc => {
            let someData = doc.data();
            // console.log(someData);
            let sanityCheck = prompt("you sure");
            if (sanityCheck === "y" || sanityCheck === "Y") {
                someData.read = prompt("Enter Change") || "updated change";
                cards.removeChild(card);
                renderBooks(someData);
            }
        });
    });
 */