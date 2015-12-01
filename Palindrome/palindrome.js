document.getElementById("buttoncheck").onclick = function() {
  var textbox = document.getElementById("textbox");
  var num = parseInt(textbox.value);
  var num1 = num;
  var i = 10;
  var temp = 0;
  while (num !== 0) {
    var n = num%10;
    temp = temp * i + n;
    num = Math.floor(num / 10);
  }
  if (temp === num1)
    alert("is a palindrome");
    else {
      alert("not a palindrome");
    }
};
