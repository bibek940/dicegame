const button = document.getElementById('button');
button.addEventListener('click', function() {
  // Generate random numbers for each dice
  const dice1Value = Math.floor(Math.random() * 6) + 1;
  const dice2Value = Math.floor(Math.random() * 6) + 1;

  // Update the src attribute of the dice images
  const dice1Image = document.querySelector('.img1');
  const dice2Image = document.querySelector('.img2');
  const h1 = document.querySelector('h1');

  dice1Image.src = `./images/dice${dice1Value}.png`;
  dice2Image.src = `./images/dice${dice2Value}.png`;
  if (dice1Value > dice2Value) {
    h1.textContent = 'Player 1 Wins!';
  } else if (dice1Value < dice2Value) {
    h1.textContent = 'Player 2 Wins!';
  } else {
    h1.textContent = 'It\'s a Tie!';
  }
});