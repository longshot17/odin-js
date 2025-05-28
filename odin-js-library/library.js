const myLibrary = [];

let container = document.querySelector("#bookshelf");

function Book(title, author) {
  this.title = title;
  this.author = author;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title,author) {
  toAdd = new Book(title,author);
  myLibrary.push(toAdd);
}

function showBooks(){
  container.innerHTML = "";
  for(let i = 0 ; i < myLibrary.length; i++){
    let bookEntry = document.createElement("div");
    bookEntry.classList.add("entry");
    let bookDesc = document.createElement("p");  
    let delBtn = document.createElement("button")
    delBtn.textContent = "Delete Entry"
    delBtn.addEventListener("click", () => deleteEntry(i));

    let bookStatus = document.createElement("select")
    let bookStatus1 = document.createElement("option")
    bookStatus1.textContent = "Read" 
    let bookStatus2 = document.createElement("option")
    bookStatus2.textContent = "Reading" 
    let bookStatus3 = document.createElement("option")
    bookStatus3.textContent = "Want to Read"  

    
    bookEntry.append(bookDesc, bookStatus, delBtn)
    bookStatus.append(bookStatus1, bookStatus2, bookStatus3)

    let book = myLibrary[i];
    let bookText = `Title: ${book.title}, Author: ${book.author}`;
    bookDesc.textContent = bookText
    container.append(bookEntry)
  }
}

let addBookBtn = document.querySelector("#addBook");
addBookBtn.addEventListener("click", function(){
  const newTitle = prompt("Please enter the book's title.")
  const newAuthor = prompt("Please enter the book's author.")
  addBookToLibrary(newTitle,newAuthor)
  showBooks()
});

function deleteEntry(index){
  myLibrary.splice(index,1)
  showBooks()
}
