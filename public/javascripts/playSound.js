
function playSound(e){
  document.getElementById('myPlay').play();
}
var playSoundItems = document.querySelectorAll(".playSounditem");

for (let i = 0; i < playSoundItems.length; i++) {
  playSoundItems[i].addEventListener("click", playSound,true);
}


