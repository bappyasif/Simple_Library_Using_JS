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

let newTest = new Book("someAuthor", "someTitle", 22, "done");
console.log(newTest);

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

let firestore = firebase.firestore();
// let docRef = firestore.collection("books").doc("bookStorage");
let docRef = firestore.doc("books/storage"); // searches "books" document, if found replaces current document otherwise create one and store document
docRef.set(bookConverter.toFireStore(newTest)).then(function () {
    console.log("Data Stored");
}).catch(function (err) {
    console.log("Error found: ", err);
});

docRef.get().then(function (doc) {
    let someData = doc.data();
    console.log(someData);
    for(let i in someData) {
        let test = document.createElement("div");
        // test.textContent = "Test Data: " + someData.toString();
        test.textContent = "Test Data: " + someData[i];
        document.body.appendChild(test);
    }
});

// Updating a field value
docRef.update({
    read: "Done, eh!!"
}).then(function() {
    console.log("successfully updated");
}).catch(function(err) {
    console.log("EError found: ",err);
});

// to delete a document
function deleteDocument() {
    docRef.delete().then(
        function() {
            console.log("Successfully deleted");
        }
    ).catch(function(err) {
        console.log("Error found: ",err);
    });
}
// deleteDocument();

// delete fields
let removeFields = docRef.update({
    // pages: firestore.FieldValue.delete()
    pages: firebase.firestore.FieldValue.delete(),
    read: firebase.firestore.FieldValue.delete()
});



// storing a single key value paired object into document collection
docRef = firestore.doc("books/so"); // searches "books" document, if found replaces current document otherwise create one and store document
docRef.set({ test: "testNew" }).then(function () {
    console.log("Data Stored");
}).catch(function (err) {
    console.log("Error found: ", err);
});

// load data
docRef.get().then(function (doc) {
    if (doc && doc.exists) {
        let someData = doc.data();
        let test = document.createElement("div");
        test.textContent = "Test Data: " + someData.test;
        document.body.appendChild(test);
    }
});

// get data in realtime, as if data changes overtime that will also reflect on client side as well
let getRealTimeUpdates = function () {
    docRef.onSnapshot(function (doc) {
        if (doc && doc.exists) {
            let someData = doc.data();
            let test = document.createElement("div");
            test.textContent = "Test Data: from Realtime " + someData.test;
            document.body.appendChild(test);
        }
    });
}

getRealTimeUpdates();