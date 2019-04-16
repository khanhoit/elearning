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
const callModel = document.getElementById('callModel');
const myKqTest = document.getElementById('myKqTest');
const myPracticeOneMore = document.getElementById('myPracticeOneMore');
var numberClick=0;
var myTime = 20;
var a;
// giới hạn thời gian 15s
function checkTimeTest(){
	console.log("checkTimeTest",curentIndex);
		a = setInterval(function(){
		if(curentIndex==10){
			clearInterval(a);
			idTime.textContent = 0;
			return;
		}
		if(myTime==0){
			nextQuestion();
		}
		idTime.textContent = --myTime + "";
		},1000);
}
checkTimeTest();
// itemNext.addEventListener('click',nextQuestion);

// next question
function nextQuestion(){
	console.log("curentIndex",curentIndex);
	myTime=20;
	idTime.textContent = myTime;
	idTime.textContent = myTime + "";
	const answerTrue = '<div class="answer itemFixedTrue"><b><i class="fas fa-check"></i></b></div>';
	const answerFalse = '<div class="answer itemFixedFalse"><b><i class="fas fa-times"></i></b></div>'
	const imgkk =' <img id="a" src="" width="100%">'
	numberClick=0;
	for (let a = 0; a < answer.length; a++) {
			answer[a].classList.remove('show');
		}
	if (curentIndex==10) {
		// đáp án cuối cùng lấy ra số câu đúng
		myKqTest.textContent = result.textContent;
		callModel.click();
		sendResultToServer();
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
// click answer
function kk(e,i){
	if (numberClick!==0) {
		return;
	}
	if (i==(+fixedOit.textContent)) {
		let kq = +result.textContent
		result.textContent= ++kq;
		console.log('true');
	}else{
	}
	answer[i].classList.add('myShow')
	document.getElementsByClassName('itemFixedTrue')[0].classList.add('myShow');		
	numberClick=1;
	setTimeout(nextQuestion,2000);
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
	console.log("playSound");
}
playFixedTest.addEventListener('click',fncPlaySoundTest);

// playsound 
playFixedTest.children[1].load();
playFixedTest.children[1].play();
(fncPlaySoundTest.bind(playFixedTest))();

async function sendResultToServer(){
	await fetch(window.location.href, {
		method: 'post',
		headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"resultTest": myKqTest.textContent})
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
		console.log("ser res:", data);
	});
}