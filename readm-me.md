Project: Library Assignment:

- setup project skeleton html/css/js
- book objects are going to be stored in an array
  - so, add a function in your code (not in constructor function) that can take user's input and store new book objects into an array
- write a function that loops through array and displays each book on page, perhaps in a table or a card form, have some demo entris in your array so that it can be visualized properly
- add a "NEW BOOK" button thaat brings up a form allowing users to input details for new book: author,title,pages, done reading and anything else that you might want
- Add a button on each book's display to "remove" it from library
  - you'll need to associate your DOM elements with actual Book Objects, one solution that can be looked at is using "data-attribute" to index of library array
- Add a button on each book's display to change it's "read" status
  - to fasciliatate this toggle capable function can be used

Optional:
- try using local storage for data persistance for this library app
- or, perhaps using Firebase, that can setup relatiively easily an online database so that you can save your data to a server in cloud
