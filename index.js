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
    console.log(myLibrary);;
    for (i = 0; i <= 2; i++){
        form[i].value = "";
    }
})

let bookNum = 0;

let displayBooks = () => {
    
    let div = document.createElement("div");
    div.classList.add("card");
    div.classList.add(id-1);
    document.getElementById("bookCards").appendChild(div);
    let childName = document.createElement("div");
    childName.classList.add("bookName");
    childName.textContent = `${myLibrary[bookNum].bookName}`;
    div.appendChild(childName);
    let childAuthor = document.createElement("div");
    childAuthor.classList.add("author");
    childAuthor.textContent = `${myLibrary[bookNum].author}`;
    div.appendChild(childAuthor);
    let childPages = document.createElement("div");
    childPages.textContent = `${myLibrary[bookNum].pages}`;
    childPages.classList.add("pages");
    div.appendChild(childPages);
    let childRead = document.createElement("button");
    childRead.textContent = myLibrary[bookNum].isRead;
    childRead.classList.add("read");
    childRead.textContent = "Read";
    childRead.addEventListener('click', (e) => {
        const currentTarget = e.target.parentNode;
        let name = currentTarget.firstChild.textContent;
        let button = e.target;
        console.log(button);
        checkRead(name, button);
    })
    div.appendChild(childRead);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.classList.add("delete");
    deleteButton.setAttribute("data-id", bookNum);
    deleteButton.addEventListener('click', (e) => {
        const currentTarget = e.target.parentNode;
        let name = currentTarget.firstChild.textContent;
        currentTarget.remove();
        removeBook(name);
        bookNum--;
    })
    div.appendChild(deleteButton);
    bookNum++;
}

function removeBook(name){
    let index = myLibrary.findIndex( book => book.bookName == name)
    myLibrary.splice(index,1);
    console.log(myLibrary);
}

function checkRead(name, element){
    let index = myLibrary.findIndex( book => book.bookName == name)
    console.log(name)
    if (myLibrary[index].isRead == true){
        myLibrary[index].isRead = false;
        console.log(myLibrary[index])
        element.classList.remove("greenRead");
    }else{
        myLibrary[index].isRead = true;
        console.log(myLibrary[index])
        element.classList.add("greenRead");
    }

}