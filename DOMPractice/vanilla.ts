const app = document.getElementById('app');
const nav = document.createElement('nav');
app.prepend(nav);

const navDiv = document.createElement('div');
navDiv.setAttribute('class', 'nav-center');
document.getElementsByTagName('nav')[0].appendChild(navDiv);

const navTitle = document.createElement('h4');
navTitle.textContent = 'Color Flipper';
navDiv.appendChild(navTitle);

const navUl = document.createElement('ul');
navUl.setAttribute('class', 'nav-links');
navTitle.append(navUl);

const listItem1 = document.createElement('li');
navUl.appendChild(listItem1);
const simpleA = document.createElement('a');
simpleA.setAttribute('href', 'index.html');
simpleA.textContent = 'Simple';
const listItem2 = document.createElement('li');
listItem1.append(listItem2);
const hexA = document.createElement('a');
hexA.setAttribute('href', 'hex.html');
hexA.textContent = 'Hex';
listItem2.appendChild(hexA);

const main = document.createElement('main');
nav.append(main);
const containerDiv = document.createElement('div');
containerDiv.setAttribute('class', 'container');
main.appendChild(containerDiv);
const title = document.createElement('h2');
title.textContent = 'background color: ';
const colorSpan = document.createElement('span');
colorSpan.setAttribute('class', 'color');
colorSpan.textContent = '#f1f5f8';
title.appendChild(colorSpan);
const button = document.createElement('button');
button.setAttribute('class', 'btn');
button.setAttribute('class', 'btn-hero');
button.setAttribute('id', 'btn');
button.textContent = 'click me';
containerDiv.appendChild(button);

const colors:string[] = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
  console.log(document.body);
});





// const colorButton = document.createElement('button');
// app.appendChild(colorButton);
// app.style.display = 'flex';
// app.style.justifyContent = 'center';
// app.style.alignItems = 'center';
// app.style.flexDirection = 'column';

// const colorText = document.createElement('h3');
// colorText.textContent = 'You picked color: ';
// colorButton.prepend(colorText);
