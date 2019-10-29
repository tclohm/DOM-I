// set 1000 means 1 second
function increment(identifier, interval) {
	let count = 0;
	const selectedID = document.querySelector(`#${identifier}`);
	const time = setInterval( () => {
		if (count === 9) { count = 0 }
		if (count < 10) { count++ }
		selectedID.innerHTML = count;
	}, interval);

	setTimeout(function() { 
		clearInterval(time);
		selectedID.innerHTML = 0;
	}, 10000)
}

function forTen() {
	setTimeout( () => {
		const tenSecond = document.querySelector("#secondTens");
		tenSecond.innerHTML = 1;
	}, 10000)
}

function colorRed() {
	let digits = document.querySelectorAll(".digit");
	setTimeout( function() {
		digits.forEach(function(element) {
			element.style.color = "red";
		});
	}, 10000);
	
}

function startTimer() {
	const ms10 = increment("msTens", 10);
	const ms100 = increment("msHundreds", 100);
	const s1 = increment("secondOnes", 1000);
	const s10 = forTen();
	
	colorRed();
}