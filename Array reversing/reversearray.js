var arr = ["abc", "cbd", "bbc", "ccd", "xyz"];
var reversearr = new Array();
for (var i = arr.length - 1; i >= 0; i--) {
  var strelement = arr[i];
  var str = strelement.split("");
  reversearr.push(str.reverse().join(""));
}
document.write(reversearr);
