const names = new Array[("War and Peace", "The Great Gatsby", "Don Quixote")]();
const author = new Array[
  ("Leo Tolstoy", "Scott Fitzgerald", "Miguel de Cervantes")
]();
const price = new Array[("CH11", "CH12", "CH13")]();
const stat = new Array[("sold out", "in stock", "sold out")]();

const main = document.getElementById("list");
function createBookList() {
  const names = document.createElement("h1");
  const author = document.createElement("p");
  const price = document.createElement("p");
  const stat = document.createElement("p");
  const enter = document.createElement("a");
  enter.innerText = "Enter";

  names.appendChild(author);
  names.appendChild(price);
  names.appendChild(stat);
  main.appendChild(names);
  return { names, author, price, stat };
}

function loadBooks() {
  for (let i = 0; i < names.length; i++) {
    let { names, author, price, stat } = createBookList();
    names.innerText = names[i];
    author.innerText = author[i];
    price.innerText = price[i];
    stat.innerText = stat[i];
  }
}
