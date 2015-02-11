'use strict';
$(document).ready(init);
var notCheating = '0';
var operator = '0';
var x = 0;
function init() {
  $('.round').click(changeDisplay);
  $('#clear').click(clearDisplay);
  $('#equals').click(equals);
  $('.symbol').click(operatorAssignment);
  $('#rootOp').click(root);
}
$(document).keypress(function(e) {
  if (e.shiftKey && e.keyCode === 43) { // run on +
    x = String.fromCharCode(e.keyCode);
    keyOperatorAssignment(x);
  }
  if (e.keyCode >= 48 && e.keyCode <= 57) { // run on 0-9
    x = String.fromCharCode(e.keyCode);
    keyChangeDisplay(x);
  }
  if (e.shiftKey && e.keyCode === 42) { // run on *
    x = String.fromCharCode(e.keyCode);
    keyOperatorAssignment(x);
  }
  if (e.keyCode === 45) { // run on -
    x = String.fromCharCode(e.keyCode);
    keyOperatorAssignment(x);
  }
  if (e.keyCode === 47) { // run on /
    x = String.fromCharCode(e.keyCode);
    keyOperatorAssignment(x);
  }
  if (e.keyCode === 61) { // run on =
    equals(x);
  }
  if (e.shiftKey && e.keyCode === 94) { // run on ^
    x = String.fromCharCode(e.keyCode);
    keyOperatorAssignment(x);
  }
  if (e.shiftKey && e.keyCode === 67) { // run on C
    clearDisplay();
  }
  if (e.keyCode === 46) { // run on .
    x = String.fromCharCode(e.keyCode);
    keyChangeDisplay(x);
  }
});
function changeDisplay() { // Runs on circle button press
  var oldText = $('#display').text();
  if (this.textContent === '.') { //<= Special case for .
    if ($('#display').text().indexOf('.') === -1) {
      $('#display').text(oldText + this.textContent);
    } return;
  }
  if (this.textContent === '±') { // Special +- case
    $('#display').text(oldText * -1);
  } else if ($('#display').text() === '0') { //
    $('#display').text(this.textContent);
  } else {
    $('#display').text(oldText + this.textContent);
  }
}
function clearDisplay() {
  $('#display').text('0');
}
function equals() {
  var num1 = parseFloat(notCheating);
  var num2 = parseFloat($('#display').text());
  if (operator === '^') {
    $('#display').text(Math.pow(num1, num2));
  } else if (operator !== '0') {
    $('#display').text(eval(num1 + operator + num2));
  } else {
    $('#display').text('0');
  }
}
function root() {
  var oldText = parseFloat($('#display').text());
  $('#display').text(Math.sqrt(oldText).toFixed(2));
}
function operatorAssignment() {
  operator = this.textContent;
  notCheating = $('#display').text();
  $('#display').text('0');
}
function keyOperatorAssignment(keyDownOperator) {
  operator = keyDownOperator;
  notCheating = $('#display').text();
  $('#display').text('0');
}
function keyChangeDisplay(keyDownButton) {
    // Runs on round keypress
    var oldText = $('#display').text();
    var input = keyDownButton;
    if (input === '.') { //<= Special case for .
      if ($('#display').text().indexOf('.') === -1) {
        $('#display').text(oldText + input);
      } return;
    }
    if (input === '-') { // Special +- case
      $('#display').text(oldText * -1);
    } else if ($('#display').text() === '0') { //
      $('#display').text(input);
    } else {
      $('#display').text(oldText + input);
    }
}
