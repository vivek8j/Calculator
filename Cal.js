function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}

let b = 0;

function equal() {
  var exp = document.form.textview.value;

  try {
    // The eval() method evaluates or executes an argument.
    var result = eval(exp);
    if (Number.isInteger(result)) {
      document.form.textview.value = result;
    } else {
      // to fix the number in javascript we write the toFixed(2) function. I want to make a function for numbers when a number has a decimal like 12.326252 it will show 12.33
      document.form.textview.value = result.toFixed(2);
    }
  } catch (error) {
    alert("Invalid Input: " + error.message);
  }
  b = 1;
}

function clean() {
  document.form.textview.value = "";
}

function back() {
  if (b == 1) {
    document.form.textview.value = "";
  } else {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
  }

  b = 0;
}
