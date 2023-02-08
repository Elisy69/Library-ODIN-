// Book.prototype.info = function () {
//   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
// };

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

// const book = new Book(
//   "Crime and Punishment",
//   "Fyodor Dostayevsky",
//   "456",
//   "not read yet"
// );
// console.log(book.info());

const UI = {
  SHELVES: document.querySelector(".shelves"),
  NEWBOOKBTN: document.getElementById("svg"),
  CLOSEBTN: document.querySelector(".exit"),
  SUBMITBTN: document.querySelector(".submitbtn"),
  OVERLAY: document.getElementById("overlay"),
  POPUP: document.querySelector(".popUp"),
};

UI.NEWBOOKBTN.addEventListener("click", () => {
  UI.POPUP.classList.add("active");
  UI.OVERLAY.classList.add("active");
});
UI.CLOSEBTN.addEventListener("click", () => {
  UI.POPUP.classList.remove("active");
  UI.OVERLAY.classList.remove("active");
});

UI.OVERLAY.addEventListener("click", () => {
  UI.OVERLAY.classList.remove("active");
  UI.POPUP.classList.remove("active");
});

const defaultBook = {
  title: "Crime and Punishment",
  author: "Fyodor Dostayevsky",
  genre: "Russian classics",
  read: "read",
};

let myLibrary = [];

myLibrary.push(defaultBook);

function Books() {}
Books.prototype.changeReadStatus = function () {};

function Book(title, author, genre, read) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.read = read;
}

function addBookToLibrary() {
  //take strings from the form...
  Book.prototype = Object.create(Books.prototype);
  const book = new Book("1", "1", "1", "1");
  myLibrary.push(book);
  displayBookOnHtml(myLibrary);
}

function displayBookOnHtml() {
  myLibrary.forEach((book) => {
    let gridElement = document.createElement("div");
    gridElement.className = "book";
    gridElement.innerHTML = `<span class='title'>${book.title}</span> by <span class='author'>${book.author}</span> <span class='genre'>Genre: ${book.genre}</span>`;
    UI.SHELVES.prepend(gridElement);
  });
}
addBookToLibrary();

console.log(myLibrary[1]);
console.log(myLibrary[0]);
