// accessing form elements

const myForm = document.forms.myForm;
console.log(myForm);

console.log(myForm.name);//showing access to input name
//we have also access to properties of that element
console.log(myForm.name.value);

//other element select with name = colour
console.log(myForm.colour.value);

//onfocus event 

myForm.name.onfocus = function(){
    myForm.name.style.border = "4px solid pink";
};

//onblur
myForm.name.onblur = function(){
    myForm.name.style.border = "none";
};