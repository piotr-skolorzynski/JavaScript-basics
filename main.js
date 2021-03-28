//changing css styles

const title = document.getElementById("page-title");
console.log(title);

title.setAttribute('style', 'position: relative;');

title.setAttribute('style', 'position: relative; left: 10px;');

title.style.left = "200px";
title.style.top = "100px";
title.style.color = "red";
title.style.backgroundColor = "blue";

