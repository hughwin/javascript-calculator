var calculation = "";
$(".btn").mouseup(function() {
  $(this).blur();
});
$("#decimal").click(function() {
  checkLength()
  calculation += ".";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#left-bracket").click(function() {
  checkLength()
  calculation += "(";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#right-bracket").click(function() {
  checkLength()
  calculation += ")";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#zero").click(function() {
  checkLength()
  if (calculation[0] === "0" && calculation[1] !== ".") {
    alert("Can't add anymore zeroes in front")
  } else {
    calculation += "0";
    console.log(calculation);
  }
  $("#output").html(calculation);
});
$("#one").click(function() {
  checkLength()
  calculation += "1";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#two").click(function() {
  checkLength()
  calculation += "2";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#three").click(function() {
  checkLength()
  calculation += "3";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#four").click(function() {
  checkLength()
  calculation += "4";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#five").click(function() {
  checkLength()
  calculation += "5";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#six").click(function() {
  checkLength()
  calculation += "6";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#seven").click(function() {
  checkLength()
  calculation += "7";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#eight").click(function() {
  checkLength()
  calculation += "8";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#nine").click(function() {
  checkLength()
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
  checkLength()
  calculation += "+";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#times").click(function() {
  checkLength()
  calculation += "*";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#divide").click(function() {
  checkLength()
  calculation += "/";
  console.log(calculation);
  $("#output").html(calculation);
});
$("#equals").click(function compute() {
  checkLength()
  if (calculation[0] === "0" && calculation[1] !== ".") {
    calculation = calculation.substring(1);
  }
  var final = eval(calculation);
  calculation = final
  $("#output").html(final); 
});
function checkLength(){
  if (calculation.length > 21){
    compute()
  }
}