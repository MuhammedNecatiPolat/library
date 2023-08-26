const myLibrary = [new Book("Besim Tibuk", "En iyi ekonomi kitabı", 100, true)];

function Book(author, title, page, isRead){
    this.author = author;
    this.title = title;
    this.page = page;
    this.isRead = isRead;
}

function handleNewBook(author, title, page, isRead){
    addBookToLibrary(author, title, page, isRead);
    displayBook(myLibrary.length - 1);
}

function getMainInformationDiv(book){
    const mainInformation = book.title + " by " + book.author;
    const mainInformationDiv = document.createElement('div');
    mainInformationDiv.classList.add('main-information');
    mainInformationDiv.textContent = mainInformation;
    return mainInformationDiv;
}

function getPageInformationDiv(book){
    const pageInformation = "Has " + book.page + " pages in it";
    const pageInformationDiv = document.createElement('div');
    pageInformationDiv.classList.add('page-information');
    pageInformationDiv.textContent = pageInformation;
    return pageInformationDiv;
}

function getReadStatusDiv(book){
    const readStatusDiv =  document.createElement('div');
    readStatusDiv.classList.add('read-status')
    const readStatusLabel = document.createElement('label');
    readStatusLabel.textContent = "Have You Read";
    const readStatusCheckbox = document.createElement('input');
    readStatusCheckbox.type = "checkbox";
    readStatusCheckbox.checked = book.isRead;
    
    readStatusDiv.appendChild(readStatusLabel);
    readStatusDiv.appendChild(readStatusCheckbox);
    return readStatusDiv;
}

function getRemoveButton(bookIndex){
    const removeButton = document.createElement('button');
    removeButton.type = "button";
    removeButton.classList.add('remove-button');
    removeButton.dataset.cardId = bookIndex;
    removeButton.textContent = "Remove Book"
    removeButton.addEventListener('click', (button) => {
        delete myLibrary[button.target.dataset.cardId];
        button.target.parentElement.style.display = 'none';
        console.log(button.target.dataset.cardId);
    })
    return removeButton;
}

function displayBook(bookIndex){
    const book = myLibrary[bookIndex];
    const mainInformationDiv = getMainInformationDiv(book);
    const pageInformationDiv = getPageInformationDiv(book);
    const readStatusDiv = getReadStatusDiv(book);
    const removeButton = getRemoveButton(bookIndex);
    const newCardDiv = document.createElement('div');
    newCardDiv.classList.add('card');
    newCardDiv.appendChild(mainInformationDiv);
    newCardDiv.appendChild(pageInformationDiv);
    newCardDiv.appendChild(readStatusDiv);
    newCardDiv.appendChild(removeButton);
    document.getElementById('cards').appendChild(newCardDiv);
}

function addBookToLibrary(author, title, page, isRead){
    const newBook = new Book(author, title, page, isRead);
    myLibrary.push(newBook);
}

function displayBooks(){
    myLibrary.forEach(index, book => {
        displayBook(index, book);
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