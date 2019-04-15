var curentIndex= 0;
const itemTest = document.getElementsByClassName('itemTest');
const answer = document.getElementsByClassName('answer');
const itemNext = document.getElementsByClassName('itemNext')[0];
const itemFixedTest = document.getElementsByClassName('itemFixedTest');
const playFixedTest = document.getElementById('playFixedTest');
const playTest = document.getElementsByClassName('playTest');
const result = document.getElementById('result');
const oit = document.getElementsByClassName('oit');
const fixedOit = document.getElementById('fixedOit');
const idTime = document.getElementById('idTime');

var numberClick=0;
var myTime = 20;
var a;
// giới hạn thời gian 15s
function checkTimeTest(){
	a = setInterval(function(){
		if(myTime==0){
			clearInterval(a);
			nextQuestion();
			console.log('end');
		}
		idTime.textContent = --myTime + "";
	},1000);
}
checkTimeTest();

itemNext.addEventListener('click',nextQuestion);
// next question
function nextQuestion(){
	myTime=20;
	idTime.textContent = myTime;
	checkTimeTest();
	idTime.textContent = myTime + "";
	const answerTrue = '<div class="answer itemFixedTrue"><b><i class="fas fa-check"></i></b></div>';
	const answerFalse = '<div class="answer itemFixedFalse"><b><i class="fas fa-times"></i></b></div>'
	const imgkk =' <img id="a" src="" width="100%">'
	numberClick=0;
	for (let a = 0; a < answer.length; a++) {
			answer[a].classList.remove('show');
		}
	if (curentIndex>9) {
		clearInterval(a);
		return;
	}
	for (let i = 0; i < itemFixedTest.length; i++) {
		if (i==(+oit[curentIndex].textContent)) {
			itemFixedTest[i].innerHTML =imgkk + answerTrue;
		}else{
			itemFixedTest[i].innerHTML =imgkk + answerFalse;
		}
		itemFixedTest[i].children[0].src= itemTest[curentIndex*4+i].children[0].src;
	}
	fixedOit.textContent = oit[curentIndex].textContent;
	playFixedTest.children[1].src = playTest[curentIndex].src;
	curentIndex++;
}

function kk(e,i){
	if (numberClick!==0) {
		return;
	}

	if (i==(+fixedOit.textContent)) {
		let kq = +result.textContent
		result.textContent= ++kq;
	}else{
		console.log('false');
	}
	answer[i].classList.add('myShow')
	document.getElementsByClassName('itemFixedTrue')[0].classList.add('myShow');		
	numberClick=1;
	setTimeout(nextQuestion,3000);
}

for (let i = 0 ; i < itemFixedTest.length; i++) {
	itemFixedTest[i].addEventListener("click",()=>{
		kk(event,i)
	},false)
}

// playsound
function fncPlaySoundTest(){
	const playSound= this.children[1];
	playSound.load();
	playSound.play();
	console.log(playSound);
}
playFixedTest.addEventListener('click',fncPlaySoundTest);
