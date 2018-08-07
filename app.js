/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

-Math.floor = remove as casas decimais
-Math.random = coloca numeros aleatorios entre 0 e 1
-document.querySelector () = seleciona elementos no html para fazer DOM manipulation
-textContent = altera o texto do html. Se colocar <em> vai ficar <em> e não italico
-innerHTML = altera tudo (texto e negrito, italico, etc). Se colocar <em>, o texto vai ficar italico
-querySelector serve para modificar arquivo de CSS também.
-document.querySelector('.btn-roll').addEventListener('click') - esse addEventListener sao gatilhos que executam eventos
com base nos argugmentos. Nesse caso ao clicar vc inicia uma ação. developer.mozilla.org - events
-document.querySelector('.btn-roll').addEventListener('click', btn) - ao lado do 'click' tem que escrever a função  que  vai ser executada.
Ela  pode ser anonima (e pra  isso  vc diggita function(){do somethingg;} ou pode  ser especifica "btn"  -  desde que na linha de codigog ja tenha  definido a  funçao btn:  function btn(){do somethingg}btn();)
block mostra  o elemento
none esconde o elemento
!== does not perform type conversion (===)
!= performs type  covnersion (semelhante  ao ==)
togle muda  a classe (remove se estiver ligada e ativa se estiver desligada)
*/

var scores, roundScore, activePlayer, dice;

scores=[0,0];
roundScore=0;
activePlayer=0;

document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){
	//1. random number
	dice = Math.floor(Math.random() * 6) +1;
	//2. Display  de result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display='block';
	diceDOM.src = 'dice-'+dice+'.png'

	//3.Update the round score IF the rolled number was NOT a 1

	if(dice !==1){
		roundScore  +=  dice;
		document.querySelector('#current-'+  activePlayer).textContent=roundScore;
	} else  {
		
		nextPlayer();

	}
});  

document.querySelector('.btn-hold').addEventListener('click', function(){
	//Add current score to Global score
	scores[activePlayer] += roundScore;
	//update user the  interface (UI)
	document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
	//check if player won the  game
	nextPlayer();
});

function nextPlayer(){
		activePlayer === 0 ? activePlayer =  1 : activePlayer = 0/*if activePlayer equals to 0 then activePlayer change to 1 else activePlayer change to  0 isso se chama ternary operator*/
		roundScore=0;
		document.getElementById('current-0').textContent='0';
		document.getElementById('current-1').textContent='0';
		/*document.querySelector('.player-0-panel').classList.remove('active');
		document.querySelector('.player-1-panel').classList.add('active');*/
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.querySelector('.dice').style.display='none';
}
/*document.querySelector('#current-'+activePlayer).innerHTML= <em> + dice + <'/em'>;
*/
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

