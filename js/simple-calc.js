$(function(){

  var aNum = $("#number1 .number"), bNum = $("#number2 .number"), resultNode = $('#result');
  var equals = $("#equals"), plus = $("#add"), sub = $("#sub"), mult = $("#mult"), div = $("#div");

  var add = function (a, b) { return a + b; }
  var subtract = function (a, b) { return a - b; }
  var multiply = function (a, b) { return a * b; }
  var divide = function (a, b) { return a / b; }  
  
  function calculate(a, b, operation) { return operation(a, b); }  

  var a = parseInt(aNum.text());
  var b = parseInt(bNum.text());
  var result = parseInt(resultNode.text());
  var operation = add;

  $("#number1 .incr").click(function() {
    a += 1;
    aNum.text(a);
  });

  $("#number1 .decr").click(function() {
    a -= 1;
    aNum.text(a);
  });  

  $("#number2 .incr").click(function() {
    b += 1;
    bNum.text(b);
  });

  $("#number2 .decr").click(function() {
    b -= 1;
    bNum.text(b);
  });  

  plus.click(function() {
    operation = add;
    $("#operation").text("+");
  });

  sub.click(function() {
    operation = subtract;
    $("#operation").text("-");
  });

  mult.click(function() {
    operation = multiply;
    $("#operation").text("*");
  });  

  div.click(function() {
    operation = divide;
    $("#operation").text("/");
  });

  equals.click(function() {
    result = calculate(a, b, operation);
    resultNode.text(result);
  });


});