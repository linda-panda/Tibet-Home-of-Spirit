//time difference caulculation on Useful Tips page
function init(){
	var timeDiff = document.getElementById("timeDiff");
	var now = new Date()
	var localTime = now.getTime();
	// var date = new Date(localTime);
	// var u = alter(date.toUTCString());
	var hour = now.getHours();
	var min = now.getMinutes();
	var localoffset = now.getTimezoneOffset();

	//Tibet time is GMT+8, so it is -480 minutes in getTimezoneOffset() format; 
	if (localoffset<-480){
		var hourDiff= (-480-localoffset)/60;
		var message = "Tibet is " + hourDiff + " hour(s) behind your time";
	}else{
		hourDiff = (-480-localoffset)/60;
		var message = "Tibet is " + hourDiff + "hour(s) ahead your time";
	}		
	timeDiff.innerHTML="Your local time is "+ now +"<br>";
	timeDiff.innerHTML+= message;
}
window.onload = init;

//form validation on contact us page

function validateForm(){
	var emailInfo = document.getElementById("email").value;
	var lastAtPos = emailInfo.lastIndexOf('@');
	var lastDotPos = emailInfo.lastIndexOf('.');
	if (lastAtPos < lastDotPos && lastAtPos > 0 && emailInfo.indexOf('@@') == -1 && lastDotPos > 2 && (emailInfo.length - lastDotPos) > 2) {
		alert("Contact form has been submitted");
	}
	else {
		alert("please enter a valid email");
	}
}

