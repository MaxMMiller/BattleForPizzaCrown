
var scores = [0,0,0,0];
var timerActive = false;
var started = false;

function updateCount() {
	document.getElementById("p1Score").innerHTML = scores[0];
	document.getElementById("p2Score").innerHTML = scores[1];
	document.getElementById("p3Score").innerHTML = scores[2];
	document.getElementById("p4Score").innerHTML = scores[3];
	document.getElementById("p5Score").innerHTML = scores[4];
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    duration--;

    setInterval(function () { //Countdown timer
    	if(timerActive){
        	minutes = parseInt(timer / 60, 10);
        	seconds = parseInt(timer % 60, 10);

        	minutes = minutes < 10 ? "0" + minutes : minutes;
        	seconds = seconds < 10 ? "0" + seconds : seconds;

        	display.innerHTML = minutes + ":" + seconds;

        	if (--timer < 0) { //When timer reaches 0, reset and turn off timer. then highlight the winner
            	timer = duration; 
            	winnerHighlight();
            	timerActive	= false;
        	}
    	}
    }, 1000);
}

function winnerHighlight() { //highlight highest scoring player on timer end
	var max = 1;
	for(var i=0; i<scores.length; i++){
		if(scores[i+1]>scores[i]){
			max = i+2;
		}
		var winnerTag = "p" + max.toString() + "Score";
		var winnerHead = "p" + max.toString();
	}
	document.getElementById(winnerTag).style.backgroundColor = "darkgreen";
	document.getElementById(winnerTag).style.color = "white";
	document.getElementById(winnerTag).style.borderColor = "white";
	document.getElementById(winnerHead).style.color = "white";
	for(var i=0; i<scores.length; i++){ //Check if there is a tie. if so, highlight all highest scores
		if(scores[i]==scores[max-1]){
			var tie = i+1;
			winnerTag = "p" + tie.toString() + "Score";
			winnerHead = "p" + tie.toString();
			document.getElementById(winnerTag).style.backgroundColor = "darkgreen";
			document.getElementById(winnerTag).style.color = "white";
			document.getElementById(winnerTag).style.borderColor = "white";
			document.getElementById(winnerHead).style.color = "white";
		}
	}


}

document.body.addEventListener("keyup", (ev) => {

	if(timerActive){
		if(ev.key == "1"){
			scores[0] += 1;
			updateCount();		
		}
		if(ev.key == "2"){
			scores[1] += 1;
			updateCount();	
		}
		if(ev.key == "3"){
			scores[2] += 1;
			updateCount();
		}	
		if(ev.key == "4"){
			scores[3] += 1;
			updateCount();	
		}
	}

		if(ev.key == "5"){
			if(started){
				window.location.reload();
			}else{
				started = true;
				timerActive	= true;
				console.log("start");
				scores = [0,0,0,0]
    			var timerMin = 60 * 3,
    			display = document.getElementById("counter");
    			display.innerHTML = "03"+ ":" + "00";
			    startTimer(timerMin-1, display);
			}
		}
});