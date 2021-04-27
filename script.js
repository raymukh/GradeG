
function changeImg(imgNumber) {
  var myImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
  ];
  var imgShown = document.body.style.backgroundImage;
  var newImgNumber = Math.floor(Math.random() * myImages.length);
  document.body.style.backgroundImage = "url(" + myImages[newImgNumber] + ")";
}
window.onload = changeImg;
