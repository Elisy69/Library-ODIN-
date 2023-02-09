//1) Make the form to work on submit
//2) Create GRID with floating cells !+!
//3) Create a remove function and button
//4) Create 'read' function and button
//click element target id
//add a READ button which makes book RED and transforms the button to GREEN color with the text saying DIDN'T READ

const UI = {
  SHELVES: document.querySelector(".shelves"),
  NEWBOOKBTN: document.getElementById("svg"),
  CLOSEBTN: document.querySelector(".exit"),
  SUBMITBTN: document.querySelector(".submitbtn"),
  OVERLAY: document.getElementById("overlay"),
  POPUP: document.querySelector(".popUp"),
  INPUTS: {
    TITLE: document.getElementById("title"),
    AUTHOR: document.getElementById("author"),
    GENRE: document.getElementById("genre"),
  },
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

UI.SUBMITBTN.addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary();
});

let myLibrary = [];

function Books() {}
Books.prototype.changeReadStatus = function () {
  // switch {
  //     case()
  // }
};

function Book(title, author, genre, read) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.read = read;
}

function addBookToLibrary() {
  let title = addBookForm.book_title.value;
  let author = addBookForm.book_author.value;
  let genre = addBookForm.book_genre.value;
  Book.prototype = Object.create(Books.prototype);
  const book = new Book(title, author, genre);
  myLibrary.push(book);
  console.log(myLibrary);
  displayBookOnHtml(myLibrary);
}

function displayBookOnHtml() {
  let books = document.querySelectorAll(".book");
  books.forEach((e) => {
    e.remove();
  });
  myLibrary.forEach((book) => {
    let gridElement = document.createElement("div");
    let index = myLibrary.indexOf(book);
    gridElement.setAttribute("data-index-number", `${index}`);
    gridElement.className = "book";
    gridElement.innerHTML = `<svg id='removeBook' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z" /></svg><span class='title'>${book.title}</span> by <span class='author'>${book.author}</span> <span class='genre'>Genre: ${book.genre}</span>`;
    UI.SHELVES.prepend(gridElement);
  });
}

function removeBook() {}
