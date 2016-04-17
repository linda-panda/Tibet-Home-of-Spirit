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
		var message = "Tibet is " + hourDiff + "hour(s) behind your time";
	}else{
		hourDiff = (-480-localoffset)/60;
		var message = "Tibet is " + hourDiff + "hour(s) ahead your time";
	}		
	timeDiff.innerHTML="Hi There!"+"<br>" + " Your local time is "+ now +"<br>";
	timeDiff.innerHTML+= message;
	
}
window.onload = init;