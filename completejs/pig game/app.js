// ? !!! DRY

/*eslint null:0*/
let scores, roundScore, activePlayer, gamePlaying;
init();

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    //Random number
    let dice = Math.floor(Math.random() * 6) + 1;
    // Display the result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'; // * change image

//  Update the round score IF the rolled number
    if (dice !== 1) {
      //  Add score
      roundScore += dice;
      document.querySelector(
          '#current-' + activePlayer).textContent = roundScore;
    } else {
      //Next player
      nextPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    //add Current score to Global score
    scores[activePlayer] += roundScore;

// update the UI
    document.querySelector(
        '#score-' + activePlayer).textContent = scores[activePlayer];
//  Check if player won the game
    if (scores[activePlayer] >= 20) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none!';
      document.querySelector('.player-' + activePlayer + '-panel').
          classList.
          add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').
          classList.
          remove('active');
      gamePlaying = false;
    } else {
      //Next Player
      nextPlayer();
    }
  }
});

function nextPlayer() {
  // Next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // document.querySelector('.player-0-panel').classList.remove('active');

  // document.querySelector('.player-1-panel').classList.add('active');
  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';

  // document.getElementById('scope-0').textContent = '0';
  // document.getElementById('scope-1').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1!';
  document.getElementById('name-1').textContent = 'Player 2!';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}