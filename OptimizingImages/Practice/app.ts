function processImage() {
  console.log("I'm connected");

  const file = document.querySelector("#upload").files[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function(event) {
    const imgElement = document.createElement("img") as HTMLImageElement;
    imgElement.src = event.target.result;
    document.querySelector('#input').src = event.target.result;
  }
}