var checkresult = false;
var autoCalculate = false;
var text = document.getElementById('display');
var result = document.getElementById('result');

function checkAuto(){
	if (text.innerHTML.indexOf("+") < 0 && text.innerHTML.indexOf("—") < 0 && text.innerHTML.indexOf("*") < 0 && text.innerHTML.indexOf("/") < 0 || (text.innerHTML.substr(text.innerHTML.length-1) == "+" || text.innerHTML.substr(text.innerHTML.length-1) == "—" || text.innerHTML.substr(text.innerHTML.length-1) == "*" || text.innerHTML.substr(text.innerHTML.length-1) == "/")){
		autoCalculate = false;
		result.innerHTML = "";
	}
}
function checkResult(){
	if (checkresult){
		clean();
	}
}
function autoCalculator(){
	if(autoCalculate){
		resultion();
	}
}
function number(num){
	checkResult();
	if (text.innerHTML.length < 17) {
		text.innerHTML = text.innerHTML + num;
	}
	checkresult = false;
	autoCalculator();
	checkAuto();
}
function plus(){
	if (text.innerHTML.indexOf("+") < 0 && text.innerHTML.indexOf("—") < 0 && text.innerHTML.indexOf("*") < 0 && text.innerHTML.indexOf("/") < 0 && text.innerHTML != "" && text.innerHTML != "." && text.innerHTML != "-" && text.innerHTML.length < 17){
		text.innerHTML = text.innerHTML + "+";
		autoCalculate = true;
	}
	if (checkresult){
		checkresult = false;
	}
}
function minus(){
	if (text.innerHTML.indexOf("+") < 0 && text.innerHTML.indexOf("—") < 0 && text.innerHTML.indexOf("*") < 0 && text.innerHTML.indexOf("/") < 0 && text.innerHTML != "" && text.innerHTML != "." && text.innerHTML != "-" && text.innerHTML.length < 17){
		text.innerHTML = text.innerHTML + "—";
		autoCalculate = true;
	}
	if (checkresult){
		checkresult = false;
	}
}
function multiply(){
	if (text.innerHTML.indexOf("+") < 0 && text.innerHTML.indexOf("—") < 0 && text.innerHTML.indexOf("*") < 0 && text.innerHTML.indexOf("/") < 0 && text.innerHTML != "" && text.innerHTML != "." && text.innerHTML != "-" && text.innerHTML.length < 17){
		text.innerHTML = text.innerHTML + "*";
		autoCalculate = true;
	}
	if (checkresult){
		checkresult = false;
	}
}
function divide(){
	if (text.innerHTML.indexOf("+") < 0 && text.innerHTML.indexOf("—") < 0 && text.innerHTML.indexOf("*") < 0 && text.innerHTML.indexOf("/") < 0 && text.innerHTML != "" && text.innerHTML != "." && text.innerHTML != "-" && text.innerHTML.length < 17){
		text.innerHTML = text.innerHTML + "/";
		autoCalculate = true;
	}
	if (checkresult){
		checkresult = false;
	}
}
function dot(){
	checkResult();
	if (text.innerHTML.length < 17) {
		text.innerHTML = text.innerHTML + ".";
	}
	checkresult = false;
	autoCalculator();
	checkAuto();
}
function plus_minus(){
	if (checkresult){
		checkresult = false;
	}
	if (text.innerHTML.substr(0,1) != "-" && text.innerHTML.length < 17){
		text.innerHTML = "-" + text.innerHTML;
	}
	else if (text.innerHTML.substr(0,1) == "-") {
		text.innerHTML = text.innerHTML.substring(1);
	}
	checkresult = false;
	autoCalculator();
	checkAuto();
}
function clean(){
	text.innerHTML = "";
	result.innerHTML = "";
}
function back(){
	checkAuto();
	text.innerHTML = text.innerHTML.substring(0,text.innerHTML.length-1);
	checkAuto();
	autoCalculator();
}
function resultion(){
	if (text.innerHTML.indexOf("+") > 0){
		var arr = text.innerHTML.split("+");
		if (arr[0].substr(0,1) == "."){
			arr[0] = "0" + arr[0];
		}
		else if (arr[1].substr(0,1) == "."){
			arr[1] = "0" + arr[1];
		}
		var equal = parseFloat(arr[0]) + parseFloat(arr[1]);
		result.innerHTML = equal;
	}
	else if (text.innerHTML.indexOf("—") > 0){
		var arr = text.innerHTML.split("—");
		if (arr[0].substr(0,1) == "."){
			arr[0] = "0" + arr[0];
		}
		else if (arr[1].substr(0,1) == "."){
			arr[1] = "0" + arr[1];
		}
		var equal = parseFloat(arr[0]) - parseFloat(arr[1]);
		result.innerHTML = equal;
	}
	else if (text.innerHTML.indexOf("*") > 0){
		var arr = text.innerHTML.split("*");
		if (arr[0].substr(0,1) == "."){
			arr[0] = "0" + arr[0];
		}
		else if (arr[1].substr(0,1) == "."){
			arr[1] = "0" + arr[1];
		}
		var equal = parseFloat(arr[0]) * parseFloat(arr[1]);
		result.innerHTML = equal;
	}
	else if (text.innerHTML.indexOf("/") > 0){
		var arr = text.innerHTML.split("/");
		if (arr[0].substr(0,1) == "."){
			arr[0] = "0" + arr[0];
		}
		else if (arr[1].substr(0,1) == "."){
			arr[1] = "0" + arr[1];
		}
		if (arr[1] == 0){
			result.innerHTML = "你的小学数学是我教的吗？0不能做除数。";
		}
		else{
			var equal = parseFloat(arr[0]) / parseFloat(arr[1]);
			result.innerHTML = equal;
		}
	}
	else{
		result.innerHTML = text.innerHTML;
	}
}
function equal(){
	if (result.innerHTML != ""){
		text.innerHTML = result.innerHTML;
		result.innerHTML = "";
		checkresult = true;
		checkAuto();
	}
}