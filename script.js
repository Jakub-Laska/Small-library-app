const myLibrary = [  
    new Book("The Hobbit", "J.R.R. Tolkien", 295, true),
    new Book("Lorem", "Lorem Ipsum", 999, false),
    new Book("Lorem", "Lorem Ipsum", 999, false),
    new Book("Lorem", "Lorem Ipsum", 999, false),
    new Book("Lorem", "Lorem Ipsum", 999, false),
    new Book("Lorem", "Lorem Ipsum", 999, false),
    new Book("Lorem", "Lorem Ipsum", 999, false)
];


function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

Book.prototype.toggleReadStatus = function () {
  this.hasRead = !this.hasRead;
    displayBooks();
};

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
    
    newBook.id = crypto.randomUUID();
    myLibrary.push(newBook);
    return newBook;
}

function displayBooks() {
    const onScreenLibrary = document.getElementById('library');
    onScreenLibrary.innerHTML = '';

    if (myLibrary.length === 0) {
        onScreenLibrary.textContent = 'No books to display';
        return
    }
    myLibrary.forEach(book => {


        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = book.id;
        
        const title = document.createElement('h2');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;

        const readStatus = document.createElement('button');
        readStatus.textContent = `${book.hasRead ? "already read" : "not read yet"}`;
        readStatus.addEventListener('click', () => {
            book.toggleReadStatus();
        });
        readStatus.classList.add('readStatusBtn');

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.innerHTML = '<img src="img/plus-icon.svg" alt="exit icon">';
        deleteBtn.addEventListener('click', () => {
            deleteBook(book.id);
        });

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readStatus);
        card.appendChild(deleteBtn);

        onScreenLibrary.appendChild(card);
    })
}

displayBooks();

    const modal = document.getElementById('formPopUp');
    const body = document.body;
const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', () => {


    modal.classList.toggle('hidden'); 
    body.classList.toggle('scrollHidden');
});



const popUpExitBtn = document.getElementById('popUpExit');
popUpExitBtn.addEventListener('click', () => {

    modal.classList.toggle('hidden'); 
    body.classList.toggle('scrollHidden');
})

const form = document.getElementById('popUpForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputTitle = document.getElementById('inputTitle');
    const newBookTitle = inputTitle.value;
    const inputAuthor = document.getElementById('inputAuthor');
    const newBookAuthor = inputAuthor.value;
    const inputPages = document.getElementById('inputPages');
    const newBookPages = inputPages.value;

    addBookToLibrary(newBookTitle, newBookAuthor, newBookPages, false);
    displayBooks();

    modal.classList.toggle('hidden'); 
    body.classList.toggle('scrollHidden');
})

function deleteBook(bookId) {
    const index = myLibrary.findIndex(book => book.id === bookId);
    if (index !== -1) {
        myLibrary.splice(index, 1);
    }

    displayBooks();
}