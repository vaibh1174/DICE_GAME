var a=Math.floor((Math.random() * 6)+ 1);
var b=Math.floor((Math.random() * 6)+ 1);
var aimg="images/dice"+a+".png";
var bimg="images/dice"+b+".png";
var img1=document.querySelectorAll("img")[0];
var img2=document.querySelectorAll("img")[1];
img1.setAttribute("src",aimg);
img2.setAttribute("src",bimg);
var head1=document.querySelector("h1");
if(a>b)
head1.innerHTML="PLAYER 1 WINSSSSSS";
if(a<b)
head1.innerHTML="PLAYER 2 WINERRRRRRRR";
if(a==b)
head1.innerHTML="DRAWWW -.-";
