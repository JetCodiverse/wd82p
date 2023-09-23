const addModalBtn = document.getElementById("add-modal-btn");
const modalContainer = document.getElementById("modal-container");
const cancelModalBtn = document.getElementById("cancel-btn");
const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const footerInput = document.getElementById("footer-input");
const addNewBookBtn = document.getElementById("add-book-btn");
const mainBookContainer = document.getElementById("main");

function addModal() {
  modalContainer.style.display = "flex";
}

function cancelModal() {
  modalContainer.style.display = "none";
}

function clearInput() {
  titleInput.value = "";

  authorInput.value = "";
  footerInput.value = "";
}

function bookFactory(title, author, footer) {
  return { title, author, footer };
}

function addNewBook(event) {
  event.preventDefault();
  if (
    titleInput.value === "" ||
    authorInput.value === "" ||
    footerInput.value === ""
  ) {
    return;
  }

  const title = titleInput.value;
  const author = authorInput.value;
  const footer = footerInput.value;

  const book = bookFactory(title, author, footer);

  clearInput();
  cancelModal();
  appendNewBook(book);
}

function appendNewBook(book) {
  const bookContainerDiv = document.createElement("div");
  bookContainerDiv.classList.add("book-container");

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");

  const ul = document.createElement("ul");
  const li = document.createElement("li");

  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  const frontUl = document.createElement("ul");
  frontUl.classList.add("front");

  const liFront = document.createElement("li");

  const frontCover = document.createElement("div");
  frontCover.classList.add("front-cover");

  const titleH2 = document.createElement("h2");
  titleH2.classList.add("title");
  titleH2.textContent = book.title;

  const authorP = document.createElement("p");
  authorP.classList.add("author");
  authorP.textContent = book.author;

  const footerP = document.createElement("p");
  footerP.classList.add("copyright");
  footerP.textContent = book.footer;

  const liFirstP = document.createElement("li");

  const ulPage = document.createElement("ul");
  ulPage.classList.add("page");

  const liPage1 = document.createElement("li");
  const liPage2 = document.createElement("li");
  const liPage3 = document.createElement("li");
  const liPage4 = document.createElement("li");

  const ulBack = document.createElement("ul");
  ulBack.classList.add("back");

  const liBack1 = document.createElement("li");
  const liBack2 = document.createElement("li");

  ulBack.append(liBack1, liBack2);
  ulPage.append(liPage1, liPage2, liPage3, liPage4);
  frontCover.append(footerP, authorP, titleH2);
  liFront.appendChild(frontCover);
  frontUl.append(liFront, liFirstP);
  bookDiv.append(ulBack, ulPage, frontUl);
  li.appendChild(bookDiv);
  ul.appendChild(li);
  contentDiv.appendChild(ul);
  bookContainerDiv.appendChild(contentDiv);
  mainBookContainer.appendChild(bookContainerDiv);
}

addModalBtn.addEventListener("click", addModal);
addNewBookBtn.addEventListener("click", addNewBook);
cancelModalBtn.addEventListener("click", cancelModal);
