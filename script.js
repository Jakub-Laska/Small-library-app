const myLibrary = [  
    new Book("The Hobbit", "J.R.R. Tolkien", 295, true),
    new Book("1984", "George Orwell", 185, false),
    new Book("1984", "George Orwell", 185, false),
    new Book("1984", "George Orwell", 185, false),
    new Book("1984", "George Orwell", 185, false),
    new Book("1984", "George Orwell", 185, false),
    new Book("1984", "George Orwell", 185, false)
];


function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

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
        
        const title = document.createElement('h2');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;

        const readStatus = document.createElement('p');
        readStatus.textContent = `${book.hasRead ? "already read" : "not read yet"}`;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readStatus);

        onScreenLibrary.appendChild(card);
    })
}

displayBooks();







