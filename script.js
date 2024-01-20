let buttons = document.getElementsByTagName('button');
let message = document.getElementById('messagedisplay');
let myscore = document.getElementById('myScore');
let computerscore = document.getElementById('computerScore');
let moveByComputer = '';
let result ='';
let arr = Array.from(buttons);
let playerscore = 0;
let compscore =0;


arr.forEach(button => {
    button.addEventListener('click', (e)=>{
        let computerMove = computerMoves();
        if(e.target==document.getElementById('rock')){
            if(computerMove == 'rock'){
                result = 'Its a Tie';
                message.innerHTML = result;
                myscore.innerHTML = playerscore;
                computerscore.innerHTML = compscore;
            }else if(computerMove == 'paper'){
                result = 'You Lose!';
                compscore = compscore + 1;
                message.innerHTML = result;
                myscore.innerHTML = playerscore;
                computerscore.innerHTML = compscore;

            }else if(computerMove == 'scissors'){
                result = 'You Win!';
                playerscore = playerscore + 1;
                message.innerHTML = result;
                myscore.innerHTML = playerscore;
                computerscore.innerHTML = compscore;
            }
        }else if(e.target==document.getElementById('paper')){
            if(computerMove == 'rock'){
                result = 'You Win!';
                playerscore = playerscore + 1;
                message.innerHTML = result;
                myscore.innerHTML = playerscore;
                computerscore.innerHTML = compscore;
            }else if(computerMove == 'paper'){
                result = 'Its a Tie';
                message.innerHTML = result;
                myscore.innerHTML = playerscore;
                computerscore.innerHTML = compscore;
            }else if(computerMove == 'scissors'){
                result = 'You Lose!';
                compscore = compscore + 1;
                message.innerHTML = result;
                myscore.innerHTML = playerscore;
                computerscore.innerHTML = compscore;
            }
        }else if(e.target==document.getElementById('scissors')){
            if(computerMove == 'rock'){
                result = 'You Lose!';
                compscore = compscore + 1;
                message.innerHTML = result;
                myscore.innerHTML = playerscore;
                computerscore.innerHTML = compscore;
            }else if(computerMove == 'paper'){
                result = 'You Win!';
                playerscore = playerscore + 1;
                message.innerHTML = result;
                myscore.innerHTML = playerscore;
                computerscore.innerHTML = compscore;
            }else if(computerMove == 'scissors'){
                result = 'Its a Tie';
                message.innerHTML = result;
                myscore.innerHTML = playerscore;
                computerscore.innerHTML = compscore;
            }
        }else if(e.target==document.getElementById('reset')){
            playerscore = 0;
            compscore = 0;
            myscore.innerHTML = playerscore;
            computerscore.innerHTML = compscore;
            message.innerHTML = 'Start a New Game';
        }
    
    })
    
})



function computerMoves(){
    let computerMove = Math.floor(Math.random()*10);
    if(computerMove>=0 && computerMove<= 3){
        moveByComputer = 'rock';
        console.log(moveByComputer);
    }else if(computerMove>=4 && computerMove<= 6){
        moveByComputer = 'paper';
        console.log(moveByComputer);
    }else if(computerMove>=7 && computerMove<=9){
        moveByComputer = 'scissors';
        console.log(moveByComputer);
    }
    return moveByComputer;

}