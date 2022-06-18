/* Needs http server to run, I used python's http server with 'python3 -m http.server' */

const body = document.querySelector('body');

let windowHeight:string = '' + window.innerHeight;
let windowWidth:string = '' + window.innerWidth;
const app = document.createElement('div');
body.prepend(app);
app.setAttribute('id', 'app');
app.style.height = windowHeight;
app.style.width = windowWidth;

const inputForm = document.createElement('form');
app.append(inputForm);
inputForm.setAttribute('class', 'inputForm');

const inputText = document.createElement('input');
inputForm.append(inputText);
inputText.setAttribute('id', 'inputText');
inputText.type = 'text';
inputText.placeholder = 'Tab Name';
let inputName = '';
inputText.addEventListener('input', function(e) {
  const target = e.target as HTMLInputElement;
  inputName = target.value;
});

const buttonSubmit = document.createElement('button');
inputForm.append(buttonSubmit);
buttonSubmit.setAttribute('class', 'btn');
buttonSubmit.textContent = 'Add Tab';
const tabs:{headerId: string, tabId: string}[] = [];
class Tab {
  headerId: string;
  tabId: string;
};
buttonSubmit.addEventListener('click', function(e) {
  // Create new Tab with inputName as title
  e.preventDefault();
  if (tabs.length > 0) {
    for (let i:number = 0; i < tabs.length; i++) {
      const eachTab = document.getElementById(tabs[i].tabId) as HTMLImageElement;
      eachTab.style.display = 'none';
      const eachHeader = document.getElementById(tabs[i].headerId) as HTMLButtonElement;
      eachHeader.style.color = 'white';
    }
  }
  const tab = new Tab();
  tab.headerId = inputName;
  tab.tabId = `${inputName}-img`;
  tabs.push(tab);
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((data) => {
      const img = document.createElement('img');
      tabBody.appendChild(img);
      img.setAttribute('id', tab.tabId);
      img.src = `${data.message}`
      img.style.display = 'flex';
    })
    .catch((err) => console.error(err));
  addHeader(inputName);
  const inputText = document.getElementById('inputText') as HTMLInputElement;
  inputText.value = '';
  inputName = '';
});

function addHeader(id: string): void {
  const newTabHeader = document.createElement('button');
  const tabHeader = document.getElementById('tabHeader') as HTMLDivElement;
  tabHeader.appendChild(newTabHeader);
  newTabHeader.setAttribute('id', id);
  newTabHeader.setAttribute('class', 'btn');
  newTabHeader.textContent = inputName;
  newTabHeader.style.color = 'green';
  newTabHeader.addEventListener('click', function(e) {
    console.log('clicked!');
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    console.log('target id is -> ', target.id);
    for (let i:number = 0; i < tabs.length; i++) {
      if (tabs[i].headerId === target.id) {
        document.getElementById(tabs[i].tabId).style.display = 'flex';
        document.getElementById(tabs[i].headerId).style.color = 'green';
      } else {
        document.getElementById(tabs[i].tabId).style.display = 'none';
        document.getElementById(tabs[i].headerId).style.color = 'white';
      }
    }
  });
};

const tabDiv = document.createElement('div');
app.append(tabDiv);
tabDiv.setAttribute('id', 'tabDiv');
const tabHeader = document.createElement('div');
tabDiv.append(tabHeader);
tabHeader.setAttribute('id', 'tabHeader');
const tabBody = document.createElement('div');
tabDiv.append(tabBody);
tabBody.setAttribute('id', 'tabBody');
