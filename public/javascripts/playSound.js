
function playSound(e){
  console.log(e.srcElement.children[0].play());
}
var playSoundItems = document.querySelectorAll(".playSounditem");

for (let i = 0; i < playSoundItems.length; i++) {
  playSoundItems[i].addEventListener("click", playSound);
}


