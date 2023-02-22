var random_number_left=Math.floor(Math.random()*6)+1;

if(random_number_left===1){
    document.querySelector(".img1",).setAttribute("src","images/dice1.png");
}
else if (random_number_left===2){
    document.querySelector(".img1",).setAttribute("src","images/dice2.png");
}
else if (random_number_left===3){
    document.querySelector(".img1",).setAttribute("src","images/dice3.png");
}
else if (random_number_left===4){
    document.querySelector(".img1",).setAttribute("src","images/dice4.png");
}
else if (random_number_left===5){
    document.querySelector(".img1",).setAttribute("src","images/dice5.png");
}
else if (random_number_left===6){
    document.querySelector(".img1",).setAttribute("src","images/dice6.png");
}


var random_number_right=Math.floor(Math.random()*6)+1;
if(random_number_right===1){
    document.querySelector(".img2",).setAttribute("src","images/dice1.png");
}
else if (random_number_right===2){
    document.querySelector(".img2",).setAttribute("src","images/dice2.png");
}
else if (random_number_right===3){
    document.querySelector(".img2",).setAttribute("src","images/dice3.png");
}
else if (random_number_right===4){
   
    document.querySelector(".img2",).setAttribute("src","images/dice4.png");
}
else if (random_number_right===5){
    document.querySelector(".img2",).setAttribute("src","images/dice5.png");
}
else if (random_number_right===6){
    document.querySelector(".img2",).setAttribute("src","images/dice6.png");
}

if (random_number_left>random_number_right){
  document.querySelector("h1").innerHTML=" 🚩 Player 1 Wins ";
}
else if (random_number_right>random_number_left){
    document.querySelector("h1").innerHTML=" 🚩 Player 2 Wins ";
}
else{
    document.querySelector("h1").innerHTML=" 🚩 Draw! "
}



