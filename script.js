    function getComputerChoice(){
        var randomNumber = Math.floor(Math.random() * 3) + 1;

        switch(randomNumber){
            case 1:
                return "rock";
            case 2:
                return "paper";
            case 3:    
                return "scissors";
        }
        }

    function singleRound(playerSelection, computerSelection){
        console.log("Rock Paper Scissors!");

        playerSelection = prompt("Choose: Rock, paper or scissors?");
        playerSelection = playerSelection.toLowerCase();
        
        computerSelection = getComputerChoice();
        switch (true){
            case playerSelection === 'rock' && computerSelection === 'paper':
                console.log("User = Rock || Computer = Paper")
                return "You lose!"
            case playerSelection === 'paper' && computerSelection === 'rock':
                console.log("User = Paper || Computer = Rock")
                return "You win!"
            case playerSelection === 'paper' && computerSelection === 'scissors':
                console.log("User = Paper || Computer = Scissors")
                return "You lose!"
            case playerSelection === 'scissors' && computerSelection === 'paper':
                console.log("User = Scissors || Computer = Paper")
                return "You win!"
            case playerSelection === 'rock' && computerSelection === 'scissors':
                console.log("User = Rock || Computer = Scissors")
                return "You win!"
            case playerSelection === 'scissors' && computerSelection === 'rock':
                console.log("User = Scissors || Computer = Rock")
                return "You lose!"
            default:
               console.log(`User = ${playerSelection} || Computer = ${computerSelection}`);
               console.log("Draw") 
           }
     
    }

    function game(){
        let scorePlayer = 0;
        let scoreComputer = 0;
        for(var i = 0; i<5; i++){
            var result = singleRound();
            if(result === "You lose!"){
                scoreComputer += 1;
            }else if(result === "You win!"){
                scorePlayer += 1;
            }else{
                i--;
            }

            console.log(`Score: Player - ${scorePlayer} Computer - ${scoreComputer}`);

            if(scorePlayer === 3 || scoreComputer === 3){
                break;
            }
        }

        if(scorePlayer > scoreComputer){
          console.log("User Wins!")      
        }else{
          console.log("Computer Wins!")
        }
    }
    
    game()






  

