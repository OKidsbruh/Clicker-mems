


let clicks = 0;
let sum_clicks =1;
let imageIndex = 0;

const images = [
  	"images/1mem.png",
  	"images/2mem.png",
  	"images/3mem.png",
  	"images/4mem.png",
  	"images/5mem.png",
  	"images/6mem.png",
  	"images/7mem.png",
  	"images/8mem.png",
  	"images/9mem.png",
  	"images/10mem.png",
  	"images/11mem.png",
  	"images/12mem.png",
  	"images/13mem.png",
  	"images/14mem.png",
  	"images/15mem.png",
];




function updateDisplay() {
	document.getElementById("Clicks").innerText = `Mem coins: ${clicks}`;
	document.getElementById("Clickforclick").innerText = `Mem coins за клік: ${sum_clicks}`;

	let title = "🐣 Початківець";
	if (clicks >= 500000) title = "🧠 Бог Мемів";
	else if (clicks >= 100000) title = "💀 Повелитель мемів";
	else if (clicks >= 20000) title = "🚀 Мемний бог";
	else if (clicks >= 5000) title = "👑 Мем легенда";
	else if (clicks >= 1000) title = "🔥 Мем майстер";
	else if (clicks >= 100) title = "😎 Мемник";

	document.getElementById("player-title").innerText = `Титул: ${title}`;
}


function clicker(event) {
	const isCritical = Math.random() < 0.005; 
  	const earned = isCritical ? sum_clicks * 5 : sum_clicks;
  	clicks += earned;
  	updateDisplay();

	const thresholds = [
  			0,      
  			50,     
  			200,   
  			1000,   
  			5000,   
  			15000,  
  			45000,  
  			80000, 
  			100000, 
  			200000,
  			300000,
  			400000,
  			500000, 
  			600000,
  			800000
];

		let newIndex = 0;
				for (let i = thresholds.length - 1; i >= 0; i--) {
  					if (clicks >= thresholds[i]) {
    				newIndex = i;
    				break;
  }
}

if (newIndex !== imageIndex && newIndex < images.length) {
  imageIndex = newIndex;
  document.getElementById("clickerImage").src = images[imageIndex];
}

  	const coin = document.createElement("img");
  	coin.src = "https://cdn-icons-png.flaticon.com/512/138/138292.png";
  	coin.className = "coin-floater";
  	if (isCritical) coin.classList.add("critical");

  	coin.style.left = `${event.clientX - 20}px`;
  	coin.style.top = `${event.clientY - 20}px`;

  	document.getElementById("floaters-container").appendChild(coin);

  	const image = document.getElementById("clickerImage");
		image.classList.add("pulse");
		setTimeout(() => image.classList.remove("pulse"), 300);

  	setTimeout(() => coin.remove(), 1000);

}



function click1(){
	if (clicks >=50){
		clicks = clicks - 50;
		sum_clicks =sum_clicks + 1;
		updateDisplay();
	}
	else{
		alert(`Невистачає кліків: ${50-clicks}`);
	}

}
function click2(){
	if (clicks >=500){
		clicks = clicks -500;
		sum_clicks =sum_clicks +10;
		updateDisplay();
	}
	else{
		alert(`Невистачає кліків: ${500-clicks}`);
	}
}

function click3(){
	if (clicks >=5000){
		clicks = clicks -5000;
		sum_clicks =sum_clicks +100;
		updateDisplay();
	}
	else{
		alert(`Невистачає кліків: ${5000-clicks}`);
	}
}
function click4(){
	if (clicks >=50000){
		clicks = clicks -50000;
		sum_clicks =sum_clicks +1000;
		updateDisplay();
	}
	else{
		alert(`Невистачає кліків: ${50000-clicks}`);
	}
}

function click5(){
	if (clicks >=500000){
		clicks = clicks -500000;
		sum_clicks =sum_clicks +10000;
		updateDisplay();
	}
	else{
		alert(`Невистачає кліків: ${500000-clicks}`);
	}
}

let miniGameRunning = false;
let miniGameInterval;
let miniGameScore = 0;

window.onload = function(){
	document.getElementById("start-mini").onclick = () => {
  		if (miniGameRunning) return;
  		miniGameRunning = true;
  		miniGameScore = 0;

  		const gameArea = document.getElementById("game-area");
  		gameArea.innerHTML = "";
  		gameArea.style.display = "block";

  		miniGameInterval = setInterval(() => {
    		const shape = document.createElement("div");
    		shape.className = "shape";
    		shape.style.left = Math.random() * 260 + "px";
    		shape.style.top = Math.random() * 260 + "px";

    		shape.onclick = () => {
      		clicks += sum_clicks * 2;
      		updateDisplay();
      		shape.remove();
      		miniGameScore++;
    	};

    	gameArea.appendChild(shape);
    	setTimeout(() => shape.remove(), 1000);
  	}, 600);

  	setTimeout(() => {
    	clearInterval(miniGameInterval);
    	gameArea.style.display = "none";
    	alert(`Міні-гра завершена! Ви зловили ${miniGameScore} фігур`);
    	miniGameRunning = false;
  	}, 10000);
	};
	document.getElementById("roulette-play").onclick = () => {
  const betInput = document.getElementById("roulette-bet");
  let bet = parseInt(betInput.value);

  if (isNaN(bet) || bet <= 0) {
    alert("Введи коректне число мем-коінів для ставки");
    return;
  }

  if (bet > clicks) {
    alert(`У тебе немає стільки мем-коінів. У тебе: ${clicks}`);
    return;
  }

  const win = Math.random() < 0.5;

  if (win) {
    clicks += bet; 
    alert(`🎉 Ти виграв ${bet} мем-коінів!`);
  } else {
    clicks -= bet; 
    alert(`😞 Ти програв ${bet} мем-коінів.`);
  }  

  updateDisplay();
  betInput.value = ""; 
};
};

