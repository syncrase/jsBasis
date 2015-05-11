
function addCSSRule(){
	
	<!--document.write("You're visiting tutorialspoint!"+screen.height+"px");-->
	var styleEl = document.createElement('style');
	// Append style element to head
	document.head.appendChild(styleEl);
	styleEl.sheet.insertRule("html" + "{" + "background:#123456;" + "}", 0);

}

function displayDate(){
	document.getElementById('demo').innerHTML = Date(); 
	document.getElementById('demo2').innerHTML = Date();
}

function addBackgroundColor(){
	var x = document.forms["formToAlterateBackgroundColor"]["backgroundColor"].value;
	//alert("salut");
	// Validate the entry
    if (x == null || x == "") {
        alert("You have to fill in the field");
        return;
    }
	// document.getElementById('jobsgroup').innerHTML = Date();
	// replace all html! It remains nothing
	// document.write("salut");

	// document.write("<a href=\"test.html\">Clique ici!</a>");
	var styleEl = document.createElement('style');
	// Append style element to head
	document.head.appendChild(styleEl);
	styleEl.sheet.insertRule("html" + "{" + "background:"+x+";" + "}", 0);

}

function modifyHtmlSection(){
	document.getElementById('jobsgroup').innerHTML = "Hello html";
}

function changeText(id){
	id.innerHTML = "Ooops!";

}

// Onload
function onloading(){
	checkCookies();
	adaptContainerSize();
	setupButtons();
	document.getElementById("demo").innerHTML = 
		document.getElementById("demo").innerHTML+
		"<br/>Page hostname is " + window.location.hostname+
		"<br/>Page location is " + window.location.href+
		"<br/>Page path is " + window.location.pathname+
		"<br/>Page protocol is " + window.location.protocol+
		"<br/>Cookies Enabled is " + navigator.cookieEnabled+
		"<br/>Name is " + navigator.appName+
		"<br/>Code name is " + navigator.appCodeName+
		"<br/> navigator product is "+navigator.product+
		"<br/> version "+navigator.appVersion+
		"<br/>user-agent "+navigator.userAgent+
		"<br/> platform "+navigator.platform+
		"<br/> language "+navigator.language+
		"<br/> javaEnabled "+navigator.javaEnabled();
	//alert("salut");
	//var r = confirm("Press a button");
	//if (r == true) {
	//	x = alert("You pressed OK!");
	//} else {
	//	x = alert("You pressed Cancel!");
	//}

	//var person = prompt("Please enter your name", "Harry Potter");
	//if (person != null) {
		//document.getElementById("demo").innerHTML =
		//"Hello " + person + "! How are you today?";
		//alert("Hello " + person + "! How are you today?");
	//}
	
	// JavaScript Timing Events
	window.setInterval(function () {document.getElementById('demo2').innerHTML = Date()}, 1000);

	
	alert(document.cookie);
}
function checkCookies() {
    var text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are not enabled.";
    }
    document.getElementById("demo").innerHTML = text;
	// document.getElementById("demo").innerHTML = "Page location is " + window.location.href;
	//alert("salut");
}

function setupButtons(){
	
	
	document.getElementById("myBtn").addEventListener("click", displayDate);
	document.getElementById("myBtn").addEventListener("click", function(){ alert("Hello World!"); });
	window.addEventListener("resize", function(){
    document.getElementById("demo").innerHTML = "You has resized the window, good boy!";
	});
	
}
function adaptContainerSize(){
	// Adapt the max size to the screen size
	var styleEl = document.createElement('style');
	// Append style element to head
	document.head.appendChild(styleEl);
	// styleEl.sheet.insertRule("#container" + "{" + "width: "+ screen.width + "px; height: "+screen.height +"px;}", 0);
	
	var w = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
//alert("salut");
	var h = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;

	styleEl.sheet.insertRule("#container" + "{" + "width: "+ w + "px; height: "+h +"px;}", 0);
	
}

function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

function mOver(obj) {
    obj.innerHTML = "Thank You"
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
}

function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
}

function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
}

function changeInputFieldBackgroundColor(x, color) {
    x.style.background = color;
}



function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}