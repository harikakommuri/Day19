var arr = ["abc", "cbd", "bbc", "ccd", "aac", "caa", "zya"];
document.write(arr);
for (var i = 0; i < arr.length; i++) {
  for (var j = i; j < arr.length - 1; j++) {
    if(arr[j] > arr[j+1]) {
      temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
}
document.write("<br>");
document.write("after sorting");
document.write("<br>");
document.write(arr);
