function foobar(){
var name= document.getElementById("car").value;
var splitted= name.split("");
splitted.length+=1;
splitted.splice((splitted.length-1),0,1);
alert(splitted);

}
foobar();
