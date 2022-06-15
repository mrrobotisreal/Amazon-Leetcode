const body = document.querySelector('body');
const app = document.getElementById('app');
const nav = document.createElement('nav');
nav.style.backgroundImage = 'linear-gradient(to left, blue, grey, skyblue)';
body.prepend(nav);

const navDiv = document.createElement('div');
navDiv.setAttribute('class', 'nav-center');
document.querySelector('nav').appendChild(navDiv);

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
listItem1.appendChild(simpleA);
const listItem2 = document.createElement('li');
navUl.appendChild(listItem2);
const hexA = document.createElement('a');
hexA.setAttribute('href', 'hex.html');
hexA.textContent = 'Hex';
listItem2.appendChild(hexA);

const main = document.createElement('main');
body.append(main);
const containerDiv = document.createElement('div');
containerDiv.setAttribute('class', 'container');
main.appendChild(containerDiv);
const title = document.createElement('h2');
title.textContent = 'background color: ';
const colorSpan = document.createElement('span');
colorSpan.setAttribute('class', 'color');
colorSpan.textContent = '#f1f5f8';
title.appendChild(colorSpan);
containerDiv.appendChild(title);
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
  const randomNumber = Math.floor(Math.random() * colors.length);
  console.log('number -> ', randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
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
