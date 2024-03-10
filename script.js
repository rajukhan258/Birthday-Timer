// Prompt the user for birth date and month inputs
const birthDate = prompt("Enter birth date (1-31):");
const birthMonth = prompt("Enter birth month (1-12):");

// Get today's date
const today = new Date();
var nextYear;

// Calculate the next year for the birthday
if (today.getMonth() + 1 > birthMonth || (today.getMonth() + 1 == birthMonth && today.getDate() + 1 > birthDate)) {
	nextYear = today.getFullYear() + 1;
} else {
	nextYear = today.getFullYear();
}

// Get the element where the coming year will be displayed
const comingYear = document.getElementById("coming-year");
comingYear.innerHTML = nextYear;

// Function to calculate and display the countdown
function countdown() {
	// Calculate the remaining time until the next birthday
	const remaining = new Date(`${nextYear}-${birthMonth}-${birthDate}`) - new Date();
	//When you create a new Date object using new Date(), it will output the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC, to the current time. This value is often referred to as the "Unix timestamp" or "Epoch time."

	//The calculation of time in milliseconds in JavaScript occurs when working with Date objects. When you subtract one Date object from another, JavaScript internally represents the dates in milliseconds and then computes the difference between those milliseconds values.


	// Calculate the number of complete days within the remaining duration
	const days = Math.floor(remaining / (1000 * 60 * 60 * 24));

	// Calculate the remaining hours within a day
	// % 24 ensures the hours stay within a 24-hour cycle
	const hours = Math.floor(remaining / (1000 * 60 * 60)) % 24;

	// Calculate the remaining minutes within an hour
	// % 60 ensures the minutes stay within a 60-minute cycle
	const minutes = Math.floor(remaining / (1000 * 60)) % 60;

	// Calculate the remaining seconds within a minute
	// % 60 ensures the seconds stay within a 60-second cycle
	const seconds = Math.floor(remaining / 1000) % 60;


	// Update the HTML elements with the calculated countdown values
	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
}
countdown()
setInterval(countdown, 1000);






