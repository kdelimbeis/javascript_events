var btnOne = document.getElementById("buttonA")

	btnOne.addEventListener("click",function() {
	document.getElementById('demo').innerHTML="I'm right";
	 });

var btnTwo = document.getElementById("buttonB")

	btnTwo.addEventListener("click",function() {
	document.getElementById('demo').innerHTML="No, I'm right!";
	 });

function hover() {
alert("Hey I told you not to hover over me!");
}

function myKey(event) {
    var x = event.key;
    document.getElementById("demo2").innerHTML = "The pressed key was: " + x;
}

var pswVal = document.getElementById("button")

	pswVal.addEventListener("click",function() {
	var x = document.forms["myForm"]["psw"].value;
    	if (x == "12345678") {
       		alert("correct Password");
    	} else {
        	alert("Incorrect Password");
    }})

var nameVal = document.getElementById("button")

	nameVal.addEventListener("click",function() {  
    var re = /^[A-Za-z]+$/;
    	if (re.test(document.forms["myForm"]["name"].value)) {
   	  		alert('Username must contain at least one number');
   		} else {
  	    	document.getElementById("demo3").innerHTML = "Username is valid";      
    }})
