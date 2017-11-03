$(document).ready(function() {
  // Variables to hold all the information and states in.
  var log = "",
    current = "",
    ans = "",
    revertToNormal = false,
    locked = false;

  $("button").click(function() {
    entry = $(this).attr("value");
    console.log("entry: " + entry);
    

    // Allows the use of a decimal point after using an operator.
    if (locked === true && entry === ".") {
      locked = false;
      current = "";
    }
    // Checks whether numbers being supplied are valid I.e. not something like 000015

    // If "locked" after an operator has been added, the calculator will not accept any entries apart from numbers.
    if (locked === true && isNaN(entry) === true) {
      log += "";
      $("#output").html(current);
      $("#log").html(log);
      console.log("test current: " + current);
    }

    // Clear all operations
    if (entry === "AC") {
      current = "";
      log = "";
      ans = "";
      $("#output").html(current);
      $("#log").html(current);
    }

    // Clear last operation
    if (entry === "CE") {
      if (revertToNormal === true) {
        current = "";
        log = "";
        ans = "";
        $("#output").html(current);
        $("#log").html(current);
      }
      current = "";
      $("#output").html(current);

      // computes an answer.
    } else if (entry === "=" && isNaN(entry) === true && current !== ans) {
      log += current;
      ans = eval(log);
      console.log("ans: " + ans);
      console.log(typeof ans);
      //let arr = ans.split("")
      if (ans % 1 !== 0) {
        ans = Math.round(ans * 100) / 100;
        console.log("New ans: " + ans);
        $("#output").html(ans);
        $("#log").html(log + "=");
        current = ans;
        log = "";
        revertToNormal = true;
      }
      $("#output").html(ans);
      $("#log").html(log + "=");
      current = ans;
      log = "";
      revertToNormal = true;
    }
    if (entry === "*" && current.length !== 0 && locked === false) {
      //multiplication
      locked = true;
      log += current + "*";
      current = "*";
      $("#output").html(current);
      $("#log").html(log);
    }

    if (entry === "/" && current.length !== 0 && locked === false) {
      //division
      locked = true;
      log += current + "/";
      current = "/";
      $("#output").html(current);
      $("#log").html(log);
    }

    if (entry === "-" && current.length !== 0 && locked === false) {
      //subtraction
      locked = true;
      log += current + "-";
      current = "-";
      $("#output").html(current);
      $("#log").html(log);
    }

    if (entry === "+" && current.length !== 0 && locked === false) {
      //addition
      locked = true;
      log += current + "+";
      current = "+";
      $("#output").html(current);
      $("#log").html(log);
    } else if (validNum(entry) === false) {
      // Check valid numbers
      entry += "";
      current += "";
      console.log("alternative current: " + current);

      // Only way to unlock after an operator.
    } else if (locked === true && isNaN(entry) === false) {
      locked = false;
      current = "";
      current += entry;
      $("#output").html(current);
    } else if (isNaN(entry) === false || entry === ".") {
      if (revertToNormal === true) {
        current = "";
        log = "";
        ans = "";
        $("#output").html(current);
        $("#log").html(log);
        revertToNormal = false;
      } else if (current.length < 16) {
        current += entry;
        $("#output").html(current);
        console.log(current);
      }
      else {alert("You've entered too many numbers. Please use an operator.")}
    }
  });
  // detects if number being entered is valid
  function validNum(item) {
    if (
      (current === "0" && item !== ".") ||
      (current.length === 0 && isNaN(entry) && entry !== ".") ||
      (current[current.length - 1] === "." && entry === ".")
    ) {
      return false;
    }
  }
});