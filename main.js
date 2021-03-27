// for loops

const links = document.getElementsByTagName('a');

let age = 5;

for (let i = 0; i < links.length; i++) {
    console.log('this is link number ' + (i+1));
}

document.write('all links are now looped');