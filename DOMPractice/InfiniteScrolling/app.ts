const app = document.getElementById('app');
const containerDiv = document.createElement('div');
containerDiv.setAttribute('class', 'container');
app.append(containerDiv);

function loadImages(numImages:number = 10) {
  let i:number = 0;
  while (i < numImages) {
    // let random:number = Math.floor(Math.random() * 10000);
    // fetch(`http://api.adorable.io/avatars/${random}`)
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        const img = document.createElement('img');
        img.src = `${data.message}`
        containerDiv.appendChild(img);
      })
      .catch((err) => console.error(err));
    i++;
  }
}
loadImages();

window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  console.log(window.innerHeight);
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    loadImages();
  }
})