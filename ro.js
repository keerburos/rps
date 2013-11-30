var userchoice = prompt("chose rock paper or scissors");
//console.log ("So you chose " + userchoice);

var computerChoice = Math.random();

if(computerChoice< 0.33){
    computerChoice = "rock";
}
else if (0.34<computerChoice<0.66){
	computerChoice = "paper";
}
else if(0.67<computerChoice<1){
	computerChoice = "scissors";
}

var compare = function(choice1, choice2){

	var choice2,choice1;

	if(choice1 === choice2){
			return "Its a tie! Nobody wins";
			
	}
	else if (choice1 === "rock"){

			if(choice2 === "paper"){
				return "paper winns. Sorry mate! Computer won!";
			
			}
			else if (choice2 === "scissors"){
				return "rock winns. Cool bro! You won! party time";
				
			}
	}
	else if(choice1 === "paper"){
		if(choice2 === "rock"){
			return "paper wins. Cool bro! You won! party time ";
			

		}
		else if (choice2 === "scissors"){
			return "scissors wins. Sorry mate! Computer won!";
			
		}
	}
	else if (choice1 === "scissors") {
		if (choice2 === "rock") {
			return "rock wins. Sorry!! mate! Computer won";
			
		}
		else if (choice2 === "paper") {
			return "scissors wins. Cool bro! You won! paparty time ";
			
		}
	}
}
compare(userchoice, computerChoice);