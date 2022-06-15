const app = document.getElementById('app');
const nav = document.createElement('nav');
app.prepend(nav);
const navDiv = document.createElement('div');
navDiv.setAttribute('class', 'nav-center');
document.getElementsByTagName('nav')[0].appendChild(navDiv);
const title = document.createElement('h4');
title.textContent = 'Color Flipper';
navDiv.appendChild(title);
const navUl = document.createElement('ul');
navUl.setAttribute('class', 'nav-links');
title.append(navUl);
let listItem1 = document.createElement('li');
navUl.appendChild(listItem1);
const simpleA = document.createElement('a');
simpleA.setAttribute('href', 'index.html');
simpleA.textContent = 'Simple';





const colorButton = document.createElement('button');
app.appendChild(colorButton);
app.style.display = 'flex';
app.style.justifyContent = 'center';
app.style.alignItems = 'center';
app.style.flexDirection = 'column';

const colorText = document.createElement('h3');
colorText.textContent = 'You picked color: ';
colorButton.prepend(colorText);
