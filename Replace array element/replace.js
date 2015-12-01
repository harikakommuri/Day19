var str = "Hel*lo* W*orl*d";
var arr = new Array();
for (var i = 0; i < str.length; i++) {
  if (str.charAt(i) === "*")
  arr.push("@");
  else {
    arr.push(str.charAt(i));
  }
}
document.write(arr.join(""));
