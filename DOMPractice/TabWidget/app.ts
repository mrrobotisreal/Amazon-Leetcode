const body = document.querySelector('body');

const app = document.createElement('div');
app.setAttribute('id', 'app');

const inputForm = document.createElement('form');
inputForm.setAttribute('class', 'input-form');

const inputText = document.createElement('input');
// inputText.setAttribute('id', 'input-text');
inputText.type = 'text';
inputText.placeholder = 'Tab Name';
let inputName = '';
inputText.addEventListener('change', function(e) {
  const target = e.target as HTMLInputElement;
  console.log('Target value is -> ', target.value);
  inputName = target.value;
});

const buttonSubmit = document.createElement('button');
buttonSubmit.addEventListener('click', function(e) {
  // Create new Tab with inputName as title
});

const tabDiv = document.createElement('div');
const tabHeader = document.createElement('div');
const tabBody = document.createElement('div');
tabDiv.setAttribute('id', 'tabDiv');
tabHeader.setAttribute('class', 'tabHeader');
tabBody.setAttribute('class', 'tabBody');

/* Appending */
body.appendChild(app);
app.append(inputForm);
inputForm.append(inputText);
inputForm.append(buttonSubmit);
app.append(tabDiv);
tabDiv.append(tabHeader);
tabDiv.append(tabBody);
