var calculation = "";
$(".btn").mouseup(function() {
  $(this).blur();
});
$("#decimal").click(function() {
  checkLength();
  if (checkPreceding()){
    calculation += ".";
    $("#output").html(calculation);
  };
});
$("#left-bracket").click(function() {
  checkLength();
  calculation += "(";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#right-bracket").click(function() {
  checkLength();
  calculation += ")";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#zero").click(function() {
  checkLength();
  if (calculation[0] === "0" && calculation[1] !== ".") {
    alert("Can't add anymore zeroes in front");
  } else {
    calculation += "0";
    console.log(calculation);
  }
  $("#output").html(calculation);
});
$("#one").click(function() {
  checkLength();
  calculation += "1";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#two").click(function() {
  checkLength();
  calculation += "2";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#three").click(function() {
  checkLength();
  calculation += "3";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#four").click(function() {
  checkLength();
  calculation += "4";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#five").click(function() {
  checkLength();
  calculation += "5";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#six").click(function() {
  checkLength();
  calculation += "6";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#seven").click(function() {
  checkLength();
  calculation += "7";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#eight").click(function() {
  checkLength();
  calculation += "8";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#nine").click(function() {
  checkLength();
  calculation += "9";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#AC").click(function() {
  calculation = "";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#CE").click(function() {
  calculation = calculation.substring(0, calculation.length - 1);
  console.log(calculation);
  $("#output").html(calculation);
});
$("#plus").click(function() {
  checkLength();
  if (checkPreceding("+")){
  calculation += "+";
  console.log(calculation);
  $("#output").html(calculation);
  }
});
$("#times").click(function() {
  checkLength();
  if (checkPreceding("*")){
  calculation += "*";
  console.log(calculation);
  $("#output").html(calculation);
  }
});
$("#divide").click(function() {
  checkLength();
  if (checkPreceding("/")){
  calculation += "/";
  console.log(calculation);
  $("#output").html(calculation);
  }
});
$("#subtract").click(function() {
  checkLength();
  if (calculation[calculation.length-1] === "-"){
    alert("Stop trying to break my calculator!");
  }
  else{
  calculation += "-";
  console.log(calculation);
  $("#output").html(calculation);
  }
});
$("#equals").click(function compute() {
  checkLength();
  if (calculation[0] === "0" && calculation[1] !== ".") {
    calculation = calculation.substring(1);
  }
  var final = eval(calculation);
  console.log(final)
  if (calculation == final){
    console.log("error");
    $("#output").html("Math error");
  }
  else{
  $("#output").html(final); 
  calculation = "";
  }
});
function checkLength(){
  if (calculation.length > 21){
    compute();
  }
}
function checkPreceding(operator){
  if (calculation === "" && operator === "+" || calculation === "" && operator === "*"  || calculation === "" && operator === "/" || calculation === "" && operator === "+"){
    alert("Stop trying to break my calculator!");
    return false
  }
  if (calculation[calculation.length-1] === "/" || calculation[calculation.length-1] === "*" || calculation[calculation.length-1] === "-" || calculation[calculation.length-1] === "+" || calculation[calculation.length-1] === "."){
      alert("Stop trying to break my calculator!");
    return false
    
      }
  else {
    return true
  }
}