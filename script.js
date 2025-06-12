const myLibrary = [  
    { title: "The Hobbit", author: "J.R.R. Tolkien", pages: '295', hasRead: true },
    { title: "1984", author: "George Orwell" }
];


function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;

  this.info = function () {
    const readStatus = this
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  };
}

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
    
    newBook.id = crypto.randomUUID();
    myLibrary.push(newBook);
}

function displayBooks() {
    const onScreenLibrary = document.getElementById('library');

    if (myLibrary.length === 0) {
        onScreenLibrary.textContent = 'No books to display';
        return
    }
    myLibrary.forEach(book => {

        const card = document.createElement('div');
        
        const title = document.createElement('h2');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;

        const readStatus = document.createElement('p');
        readStatus.textContent = `book.hasRead ? "already read" : "not read yet"`;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readStatus);

        onScreenLibrary.appendChild(card);
    })
}

displayBooks();







const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);

const druga = new Book("druga", "stefan", 12, false);
console.log(theHobbit.info());