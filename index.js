var randomNumber1= Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;

var randomimages= "dice" + randomNumber1 + ".png";

var randomsource= "images/" + randomimages;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomsource);

var randomNumber2= Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;

var randomimages2= "dice" + randomNumber2 + ".png";

var randomsource2= "images/" + randomimages2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomsource2);

if(randomNumber1 > randomNumber2){

  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomNumber2>randomNumber1){

  document.querySelector("h1").innerHTML= "Player 2 wins!";
}
else{
document.querySelector("h1").innerHTML= "its a draw!";
}
