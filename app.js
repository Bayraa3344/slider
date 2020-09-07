var images = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/contBcg-0.jpeg"];
var currentImg = 0;
function change() {
  if (images[currentImg]) {
    let imageDIV = document.getElementById("image");
    imageDIV.style.backgroundImage = `url('${images[currentImg]}')`;
    currentImg++;
  } else {
    currentImg = 0;
  }
}
