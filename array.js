
//for github
document.write("Seperate two digits numbers<br>");
document.write("---------------------<br>");
document.write("var a=[2,3,44,5,6,22,3,44,56,200]<br>");
document.write("--------------<br>");
document.write("output:<br>");
document.write("44<br>22<br>44<br>56");

var a=[2,3,44,5,6,22,3,44,56,200];

for(let i=0;i<a.length;i++){
	if(a[i]>9 && a[i]<100){
		console.log(a[i]);
	}
}