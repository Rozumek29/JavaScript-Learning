var a = 0;
var b = 101;
document.write("<table>")
for (i = 0; i <=101; i++){
    let c = a+b
    document.write("<tr>" +
        "<td>"+a+" + "+b+" = "+c+"<br></td>")
    //document.write(a+" + "+b+" = "+c+"<br>");
    a++;
    b--;
}
document.write("</table>")