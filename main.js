function setUpEvents () {
    //grabbing elements
    const content = document.getElementById('content');
    const button = document.getElementById('show-more');
    // onclick event
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
};

//onload event
window.onload = function () {
    setUpEvents();
};