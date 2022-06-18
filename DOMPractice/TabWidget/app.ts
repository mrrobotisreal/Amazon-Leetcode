/* Needs http server to run, I used python's http server with 'python3 -m http.server' */

const body = document.querySelector('body');

const app = document.createElement('div');
app.setAttribute('id', 'app');

const inputForm = document.createElement('form');
inputForm.setAttribute('class', 'inputForm');

const inputText = document.createElement('input');
inputText.setAttribute('id', 'inputText');
inputText.type = 'text';
inputText.placeholder = 'Tab Name';
let inputName = '';
inputText.addEventListener('input', function(e) {
  const target = e.target as HTMLInputElement;
  inputName = target.value;
});

const buttonSubmit = document.createElement('button');
buttonSubmit.setAttribute('class', 'btn');
buttonSubmit.textContent = 'Add Tab';
const tabs:{headerId: string, tabId: string}[] = [];
buttonSubmit.addEventListener('click', function(e) {
  // Create new Tab with inputName as title
  e.preventDefault();
  const inputText = document.getElementById('inputText') as HTMLInputElement;
  inputText.value = '';
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((data) => {
      const img = document.createElement('img');
      img.setAttribute('id', `${inputName}-img`);
      img.src = `${data.message}`
      tabBody.appendChild(img);
    })
    .catch((err) => console.error(err));
  const newTabHeader = document.createElement('button');
  newTabHeader.setAttribute('id', inputName);
  newTabHeader.setAttribute('class', 'btn');
  newTabHeader.textContent = inputName;
  tabHeader.appendChild(newTabHeader);
  inputName = '';
});

const tabDiv = document.createElement('div');
const tabHeader = document.createElement('div');
const tabBody = document.createElement('div');
tabDiv.setAttribute('id', 'tabDiv');
tabHeader.setAttribute('id', 'tabHeader');
tabBody.setAttribute('id', 'tabBody');

/* Appending */
body.appendChild(app);
app.append(inputForm);
inputForm.append(inputText);
inputForm.append(buttonSubmit);
app.append(tabDiv);
tabDiv.append(tabHeader);
tabDiv.append(tabBody);
