console.log("connected");

let myLibrary = [];

function Book(name, author, pages, isRead){
    this.bookName = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

let addBookToLibrary = (name, author, pages, isRead) => {
    const tempBook = new Book(name, author, pages, isRead)
    myLibrary.push(tempBook);
}

addBookToLibrary(34,23,23,true);
addBookToLibrary(34,23,23,true);
addBookToLibrary(34,23,23,true);
addBookToLibrary(34,23,23,true);
addBookToLibrary(34,23,23,true);
addBookToLibrary(34,23,23,true);
console.log(myLibrary)

let displayBooks = () => {
    for (i in myLibrary){
        let div = document.createElement("div");
        document.getElementById("bookCards").appendChild(div);
        div.classList.add("card");
    }
}

displayBooks();

/* 
<div class="card">
    <div class="bookTitle">Asdfghjkl</div>
    <div class="author">Stephen Hawking</div>
    <div class="pages">345</div>
    <div class="read">true</div>
</div> */