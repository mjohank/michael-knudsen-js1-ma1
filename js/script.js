// Question 1

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = `Updated heading`;

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New Paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

// Question 7

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function catList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

catList(cats);

// Question 8

function createCats(cats) {
  for (let i = 0; i < cats.length; i++) {}
}
