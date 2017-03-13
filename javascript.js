/*
excercise: Lynda - JavaScript
My pseudo code of the project (majdnemhogy szerkesztés menete :)
HTML: defining html with "inputArea" and a "time" counter + javascript
Javascript:
1.	Define 
	-seconds remaining --> var secondsRemaining 
	 interval handle   --> var intervalHandle	
	-input area -->var inputMinutes, /sorrend fontos/
					input type:textbox (html form input types)
					id:"minutes"
					window.onload inputMinutes 
	-button to start countdown, --> var startButton
					input type: button (html form input types)
					text on the button: "Start"
					startButton onclick --> loading function startCountdown()
					window.onload startButton

2. Define startCountdown function --> function startCountdown() (before pushing the start button)
    -Number check in input area (NaN - "Write a number")
    				create variable "minutes" value --> "minutes"
    				check if the value is a number, if it is NaN-return
    -Define Seconds remaining 
    				--> "secondsRemaining" = "minutes" x 60
    -Define intervalHandle - because it will be a constant change (otherwise: set timeout)
    				--> "intervalHandle" = setInterval(what to do, in how many miliseconds);   				
						what to do? --> tick
	-After starting countdown: hide the whole "inputArea" defined in HTML (style.display:none)

3.  Clicking the button: 
	-ticking begins -->define function tick (before starting countdown)
		-timeDisplay --> grabs the "time" defined in HTML
			--> var min :minutes = seconds remaining/60 (kerekitve, egesz percek)
			--> var sec :seconds = seconds remaining - minutes
		-under 10, add a +0 before the number (09, 08, etc))
			--> var "message" : min + sec		
		-ticking changes the text --> html "time" changes with innerHTML to "message" 
		-finish of countdown:
		            sends a message: "Woohoo!"
	                clears Interval
	      	        resets page --> define it in the 4th step, before the tick function begins
		-ticking means: always extract 1 from seconds remaining
		-->secondsRemaining--

4. Define resetPage function
	-show newly the whole "inputArea" defined in HTML (style.display:block)
	  --block: láthatóvá teszi, none eltunteti.

5. Connect elements: "inputMinutes" and "startButton" to the "inputArea" of HTML, to be shown

*/

//step 1.
var secondsRemaining;
var intervalHandle;

//step 4.
function resetPage(){
	document.getElementById("inputArea").style.display = "block"
};

//step 3.
function tick () {
	 var timeDisplay = document.getElementById("time");
	 var min = Math.floor(secondsRemaining / 60);
	 var sec = secondsRemaining - (min * 60);
	if (sec<10) {
		sec="0" + sec;
	};
	 var message = min + ":" + sec;
	timeDisplay.innerHTML = message;

	if (secondsRemaining ===0) {
		alert("Woohoo!");
		clearInterval(intervalHandle);
		resetPage();
	};
    secondsRemaining--;
};

//step 2.
function startCountdown (){
	var minutes = document.getElementById("minutes").value;
	if (isNaN(minutes)) {
		alert("Enter a number!");
		return;
	};
	secondsRemaining = minutes * 60;
	intervalHandle = setInterval(tick, 1000);
	document.getElementById("inputArea").style.display = "none";
};

//step 1.
window.onload = function() {
	var inputMinutes = document.createElement("input");
	inputMinutes.setAttribute("type", "text");
	inputMinutes.setAttribute("id", "minutes");

	var startButton = document.createElement("input");
	startButton.setAttribute("type", "button");
	startButton.setAttribute("value", "Start");

	startButton.onclick = function(){
		startCountdown();
	};
    document.getElementById("inputArea").appendChild(inputMinutes);
    document.getElementById("inputArea").appendChild(startButton);
};
