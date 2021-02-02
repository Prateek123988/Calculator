var allButtons = document.querySelectorAll("button");
document.querySelector(".div1").innerText = 0;
for (var i = 0; i < allButtons.length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    console.log(this.innerHTML);
    display(this.innerHTML);
  });
}

var pressedPattern = "";
var pattern = [];

function calculate(ans) {
  ans = parseInt(pattern[0]);

  for (var i = 1; i < pattern.length - 1; i += 2) {
    var sign = pattern[i];
    var x = parseInt(pattern[i + 1]);
    if (sign === "+") {
      ans = ans + x;
    } else if (sign === "-") {
      ans = ans - x;
    } else if (sign === "X") {
      ans = ans * x;
    }
    if (sign === "%") {
      ans = ans / x;
    }
  }
  return ans;
}


function display(pressedKey) {
  if (pressedKey === "=") {
    var result = calculate(0);
    document.querySelector(".div1").innerText = result;
    pressedPattern = "";
    pattern = [];
  } else if (pressedKey === "Clr") {
    document.querySelector(".div1").innerText = 0;
  } else {
    pattern.push(pressedKey);
    pressedPattern += pressedKey;
    document.querySelector(".div1").innerText = pressedPattern;
  }
}
