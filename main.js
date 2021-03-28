//changing page content

//grabbing an element
const myBody = document.getElementsByTagName('body');
console.log(myBody);

// myBody[0].innerHTML = '<p>I am a pargraph tag </p>'; 

myLink = document.getElementById('first-link');
console.log(myLink);
myLink.textContent = 'This is not a common link';

// changing element attributes

const testLink = document.getElementById('test');
console.log(testLink);

const attribute1 = testLink.getAttribute("href");
console.log(attribute1);
const attribute2 = testLink.getAttribute('class');
console.log(attribute2);

testLink.setAttribute('class', 'test');
const attribute3 = testLink.getAttribute('class');
console.log(attribute3);

console.log(testLink.className);
testLink.className = 'second-link'; //className is a property
console.log(testLink.className);

