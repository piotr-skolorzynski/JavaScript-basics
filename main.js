// very simple form validation 

const myForm = document.forms.myForm;
const message = document.getElementById('message');

myForm.onsubmit = function() {
    if (myForm.name.value == "") {
        message.innerHTML = "please enter a name";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    } 
};