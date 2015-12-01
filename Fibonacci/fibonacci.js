var thrdnum = 0;
var fstnum = 1;
var secnum = 1;
document.write(fstnum);
document.write("," + secnum);
fibonacci();
function fibonacci()
{
    var thrdnum = fstnum + secnum;
    fstnum = secnum;
    secnum = thrdnum;
    if(thrdnum <= 1000) {
      document.write("," + thrdnum);
      fibonacci();
    } 
}
