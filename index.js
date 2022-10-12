function firstDice(){
  var randomNumber = Math.floor(Math.random() * 6) + 1;

  var randomImageSource = "images/dice" + randomNumber + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "Player One Wins!!";
  }else if (randomNumber2 > randomNumber) {
    document.querySelector("h1").innerHTML = "Player Two Wins!!";
  }else if (randomNumber === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!!";
  }
}

firstDice();

// if(randomNumber === 1){
//   document.querySelector(".img1").setAttribute("src", "Images/dice1.png");
// }else if(randomNumber === 2){
//   document.querySelector(".img1").setAttribute("src", "Images/dice2.png");
// }else if (randomNumber === 3) {
//   document.querySelector(".img1").setAttribute("src", "Images/dice3.png");
// }
// else if (randomNumber === 4) {
//   document.querySelector(".img1").setAttribute("src", "Images/dice4.png");
// }
// else if (randomNumber === 5) {
//   document.querySelector(".img1").setAttribute("src", "Images/dice5.png");
// }
// else if (randomNumber === 6) {
//   document.querySelector(".img1").setAttribute("src", "Images/dice6.png");
// }


 // function secondDice(){


  // if(randomNumber1 === 1){
  //   document.querySelector(".img2").setAttribute("src","Images/dice1.png");
  // }else if(randomNumber1 === 2){
  //   document.querySelector(".img2").setAttribute("src","Images/dice2.png");
  // }else if (randomNumber1 === 3) {
  //   document.querySelector(".img2").setAttribute("src","Images/dice3.png");
  // }
  // else if (randomNumber1 === 4) {
  //   document.querySelector(".img2").setAttribute("src","Images/dice4.png");
  // }
  // else if (randomNumber1 === 5) {
  //   document.querySelector(".img2").setAttribute("src","Images/dice5.png");
  // }
  // else if (randomNumber1 === 6) {
  //   document.querySelector(".img2").setAttribute("src","Images/dice6.png");
  // }


// }
// secondDice();

// function check(){

// }
// check();
