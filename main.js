// onclick event

//grabbing elements

const content = document.getElementById('content');
const button = document.getElementById('show-more');

button.onclick = function () {
    if (content.className == "open") {
        //shrink the box
        content.className = "";
        button.textContent = "show more";
    } else {
        //expand the box
        content.className = "open";
        button.textContent = "Show less";
    }
};