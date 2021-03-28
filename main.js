// adding to & removing elements 

//step 1 - creating element in js

const newLi = document.createElement('li');
const newA = document.createElement('a');

//step2 - pop element in to the DOM

const pageUl = document.getElementById('main-nav').getElementsByTagName('ul')[0];

console.log(pageUl);

newLi.appendChild(newA);
pageUl.appendChild(newLi);
console.log(pageUl);

newA.setAttribute('href', '#');
newA.textContent = "Link 3";

// what if we want to insert element in some else than bottom

pageUl.insertBefore(newLi, pageUl.getElementsByTagName('li')[0]);

// removing elements
const parent = document.getElementById('main-nav').getElementsByTagName('ul')[0];
console.log(parent);

const child = document.getElementsByTagName('li')[0];
console.log(child);

const removed = parent.removeChild(child);
console.log(removed);