const myLibrary = [new Book("Besim Tibuk", "En iyi ekonomi kitabı", 100, true)];

function Book(author, title, page, isRead){
    this.author = author;
    this.title = title;
    this.page = page;
    this.isRead = isRead;
}

function handleNewBook(author, title, page, isRead){
    addBookToLibrary(author, title, page, isRead);
    displayNewBook(myLibrary.slice(-1)[0]);
}

function displayNewBook(book){
    const mainInformation = book.title + " by " + book.author;
    const pageInformation = "Has " + book.page + " pages in it";
    const isReadInformation = book.isRead ? "You have read it" : "You haven't read it";
    const newCardDiv = document.createElement('div');
    newCardDiv.classList.add('card');
    const mainInformationDiv = document.createElement('div');
    const pageInformationDiv = document.createElement('div');
    const isReadInformationDiv = document.createElement('div');
    mainInformationDiv.classList.add('main-information');
    pageInformationDiv.classList.add('page-information');
    isReadInformationDiv.classList.add('is-read-information');
    mainInformationDiv.textContent = mainInformation;
    pageInformationDiv.textContent = pageInformation;
    isReadInformationDiv.textContent = isReadInformation;
    newCardDiv.appendChild(mainInformationDiv);
    newCardDiv.appendChild(pageInformationDiv);
    newCardDiv.appendChild(isReadInformationDiv);
    document.getElementById('cards').appendChild(newCardDiv);
}

function addBookToLibrary(author, title, page, isRead){
    const newBook = new Book(author, title, page, isRead);
    myLibrary.push(newBook);
}

function displayBooks(){
    myLibrary.forEach(book => {
        book.display();
    });
}

const addButton = document.getElementById('new-book-button');

addButton.addEventListener('click', () => {
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const page = document.getElementById('page').value;
    const isRead = document.getElementById('is-read').checked;
    handleNewBook(author, title, page, isRead);
})