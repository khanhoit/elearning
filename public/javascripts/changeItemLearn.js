const items = document.querySelectorAll('.itemLearn');
const imgLearn = document.querySelectorAll('.imgLearn');
const textLearn = document.querySelectorAll('.textLearn');
const soundLearn = document.querySelectorAll('.soundLearn');
function myChange(pos){
	document.querySelector('#img_for_item').src= imgLearn[pos].src;
  document.querySelector('#sound_for_item').src=soundLearn[pos].src;
	document.querySelector("#myPlay").load();
	console.log('show item');
}


for(let i=0;i<items.length;i++){

	items[i].addEventListener('click',()=>{
		myChange(i)
	});
}
