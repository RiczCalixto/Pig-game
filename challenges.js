/*
3 CODING CHALLENGES:
1 - A PLAYER LOOSES HIS ENTIRE SCORE WHEN HE ROLLS TWO 6 IN A ROW.
AFTER THAT, IT'S THE NEXT PLAYER'S TURN.(hint: always save the previous dice roll in a var)
2 - ADD AN INPUT FIELD TO THE HTML WHERE PLAYERS CAN SET THE WINNING SCORE, SO THAT THEY CAN
CHANGE THE PREDEFINED SCORE OF 100. (hint: you can read that value with the .value property in javascript.)
3 - ADD ANOTHER DICE TO THE GAME, SO THAT THERE ARE TWO DICES NOW. THE PLAYER LOOSES HIS CURRENT
SCORE WHEN ONE OF THEM IS A 1. (hint: you will need CSS to position the second dice, so take a look
at the CSS code for the first one.)
*/

init();

var scores, roundScore, activePlayer, dice, gamePlaying, lastDice;

document.querySelector('.btn-roll').addEventListener('click', function(){
	if(gamePlaying){
		//1. random number
			dice1 = Math.floor(Math.random() * 6) +1;
			dice2 = Math.floor(Math.random() * 6) +1;
		//2. Display  de result
			document.getElementById('dice-1').style.display='block';
			document.getElementById('dice-2').style.display='block';

			document.getElementById('dice-1').src = 'dice-'+dice1+'.png'
			document.getElementById('dice-2').src = 'dice-'+dice2+'.png'

		//3.Update the round score IF the rolled number was NOT a 1
		if(dice1 !==1 && dice2 !==1){
			roundScore  +=  dice1 + dice2;
			document.querySelector('#current-'+  activePlayer).textContent=roundScore;
			} else  {
			
			nextPlayer();
			}
		/*	if (dice ===6 && lastDice === 6){
		//Player looses score
			scores[activePlayer] = 0;
			document.querySelector('#score-'+activePlayer).textContent='0';
			nextPlayer();
			} else if(dice !==1){
			roundScore  +=  dice;
			document.querySelector('#current-'+  activePlayer).textContent=roundScore;
			} else  {
		
			nextPlayer();

	}
	 lastDice = dice;*/

	}
	
});

document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gamePlaying){
	//Add current score to Global score
		scores[activePlayer] += roundScore;
	//update user the  interface (UI)
		document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];

		var input = document.querySelector('.final-score').value;
		var winningScore;
	// Undefined, 0, null or "" are COERCED to false
	//Anything else is COERCED to true
		if(input) {
			winningScore = input;
		} else {
			winningScore = 100;
		}
	//check if player won the  game
		if (scores[activePlayer] >= winningScore){
			document.querySelector('#name-'+activePlayer).textContent='Winner';
			document.getElementById('dice-1').style.display='none';
			document.getElementById('dice-2').style.display='none';
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
			gamePlaying = false;
		} else {
	//Next player	
		nextPlayer();
		}
		
	}		
});

document.querySelector('.btn-new').addEventListener('click', init); 

function nextPlayer(){
		activePlayer === 0 ? activePlayer =  1 : activePlayer = 0
		roundScore=0;
		document.getElementById('current-0').textContent='0';
		document.getElementById('current-1').textContent='0';
	
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.getElementById('dice-1').style.display='none';
		document.getElementById('dice-2').style.display='none';
};

function init (){
	scores=[0,0];
	roundScore=0;
	activePlayer=0;
	gamePlaying = true;
	document.getElementById('dice-1').style.display='none';
	document.getElementById('dice-2').style.display='none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('#name-0').textContent='Player 1';
	document.querySelector('#name-1').textContent='Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	
};



