const itemTest = document.getElementsByClassName('itemTest');
	const answer = document.getElementsByClassName('answer');
	const itemTrue = document.getElementsByClassName('itemTrue')[0];
	const itemNext = document.getElementsByClassName('itemNext')[0];
	var numberClick=0;

	itemNext.addEventListener('click',nextQuestion);
	// next question
	function nextQuestion(){
			console.log('next');
	}

	function kk(e,i){
		if (numberClick!=0) {
			return;
		}
		if(e.target.id=="a"){
			answer[i].classList.add('answerTrue')
		}else{
			answer[i].classList.add('answerFalse')
		}
		numberClick=1;
		itemTrue.classList.add('answerTrue');		
		setTimeout(nextQuestion,2000);
	}
	for (let i = 0 ; i < itemTest.length; i++) {
		const inde = i;
		itemTest[i].addEventListener("click",()=>{
			kk(event,i)
		},false)
	}

	// playsound
	function fncPlaySoundTest(){
		const playSound = document.querySelector('#playTest audio');
		playSound.load();
		playSound.play();
	}
	(document.getElementById('playTest')).addEventListener("click",fncPlaySoundTest);

	function createData(numberMax, preNumber){
		let dataRow=[];
		while(true){
			dataRow = Array.from({length:4},()=>Math.floor(Math.random()*numberMax))
			const set1 = new Set(dataRow);
			if (set1.size==dataRow.length) {
				break;
			}
		}
		return dataRow;
	}

	(function createTest(){
		
		const data = Array.from({length:10});
		const dataRow = data.map(()=>createData(12,12));
		console.log(dataRow);
		console.log(data);
	})()