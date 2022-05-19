console.log("connected");

let myLibrary = [];
let id = 1;

function Book(name, author, pages){
    this.bookName = name;
    this.author = author;
    this.pages = pages;
    this.isRead = false;
    this.id = id;
}

let addBookToLibrary = (name, author, pages) => {
    const tempBook = new Book(name, author, pages)
    myLibrary.push(tempBook);
    id++;
}

const bookButton = document.querySelector('.newBook');
const deleteButton = document.querySelector('.deleteButton');
let modal = document.querySelector('#modal');
let card = document.querySelector('card');


bookButton.addEventListener('click', () => {
    modal.classList.add('modal-visible');
    modal.focus();
})


const form = document.getElementById('bookForm');
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
form.addEventListener('submit', () => {
    addBookToLibrary(form[0].value, form[1].value, form[2].value);
    displayBooks();
    modal.classList.remove('modal-visible');
    
})

let bookNum = 0;

let displayBooks = () => {
    
    let div = document.createElement("div");
    div.classList.add("card");
    div.classList.add(id-1);
    document.getElementById("bookCards").appendChild(div);
    let childName = document.createElement("div");
    childName.classList.add("bookName");
    childName.textContent = myLibrary[bookNum].bookName;
    div.appendChild(childName);
    let childAuthor = document.createElement("div");
    childAuthor.classList.add("author");
    childAuthor.textContent = myLibrary[bookNum].author;
    div.appendChild(childAuthor);
    let childPages = document.createElement("div");
    childPages.textContent = myLibrary[bookNum].pages;
    childPages.classList.add("pages");
    div.appendChild(childPages);
    let childRead = document.createElement("div");
    childRead.textContent = myLibrary[bookNum].isRead;
    childRead.classList.add("read");
    div.appendChild(childRead);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.setAttribute("data-id", bookNum);
    deleteButton.addEventListener('click', (e) => {
        const currentTarget = e.target.parentNode
        console.log(currentTarget);
        console.log(myLibrary);
        //myLibrary.splice(, 1)
        currentTarget.remove();
    })
    div.appendChild(deleteButton);
    bookNum++;
}

function removeBook(array, position){
    array.splice(position);
}