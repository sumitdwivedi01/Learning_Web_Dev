let randomNumber ;
let count =0;
function start_Game() {
    randomNumber=Guess_Random();
    console.log(randomNumber);
    let start= document.querySelector(".main");
    start.innerHTML=`<div class="heading"><b>Guess the number(integer) from 1-100</b></div>
         <input type="text" placeholder="Guess the number" class="getnum">
         <button class="submit" onclick="check_guessed_num()">Check</button>
         <p class="message"></p>`;
}
function Guess_Random() {
    return Math.floor(1 + Math.random() * 100);
}
function check_guessed_num() {
    let Gnum = document.querySelector(".getnum").value;
    let b=parseInt(Gnum);
    let message = document.querySelector(".message");
    if (isNaN(b)){
        message.innerHTML = `Please Enter a number`;
        return;
    }
    if(b<=0 || b>100){
        message.innerHTML=`Please Enter number between (1-100)`;
        return;
    }
    count++;
    console.log(count);
    if(b==randomNumber){
        document.querySelector(".main").innerHTML=`<div class="heading"><b>Guess the number(integer) from 1-100</b></div>
         <input type="text" placeholder="Guess the number" class="getnum">
         <p class="message">Congratulations 🎉 You guessed it right <br>Your Score is :${100-count}</br></p>
         <button class="submit" onclick="start_Game()">Start New Game</button>`;
    }
    else if(b<randomNumber){

        message.innerHTML=`You guessed so low try again`;
    }
    else{
        message.innerHTML=`You guessed so high try again`;
    }
}