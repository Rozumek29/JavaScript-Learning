function colorGenerator(){
    let znaki = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++){
        color += znaki[Math.floor(Math.random() * 16)];
    }
    return color;
}
document.write("<table>")
    for (let i = 0; i < 120; i ++){
        document.write("<tr>");
            for (let i = 0; i < 100; i++){
                document.write("<td style='width: 10px; height: 10px; background-color: "+colorGenerator()+"'>"+"</td>");
            }
        document.write("</tr>");
    }
document.write("</table>")