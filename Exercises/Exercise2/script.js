function Guess_name() {
    let guess = prompt("Enter any one of the following Snake , Water , Gun").toLowerCase();
    let random = Math.floor( 1 + Math.random()*3);
    let word;
    console.log(random);
    if (random==1) {
        word="snake";
    }
    else if(random==2){
        word="water";
    }
    else if(random==3){
        word="gun";
    }
    
    if (guess==word) {
        alert("Congratulations 🎉 You won 😁");
    }
    else{
        alert("Oops! Better luck Next Time");
    }
}
Guess_name();
while (true) {
    if(confirm("Do you wanna play again? ")){
        Guess_name();
    }
    else{
        break;
    };
}