$('body').click(function() { //so that the program starts at the click of a button.

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //+1 so that 6 can also appear as an outcome.
var randomImageSource = "images/dice" + randomNumber1 +".png";//link an image to a number.
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);//So that image changes with each click.


var randomNumber2=Math.floor(Math.random()*6)+1;//same thing for second dice
var randomImageSource2="images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


 if(randomNumber1 > randomNumber2){ //reasoning to change header text.
   document.querySelector("h1").innerHTML="player1 wins";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player2 wins";
}else{
document.querySelector("h1").innerHTML="Draw";
}
history.go(100); //part of the body.click function
});