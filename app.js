let min = 1;
let max = 10;
let winningnum = Random(min, max);
let guessesleft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
    
    if(e.target.className === 'play-again') {
        window.location.reload();
    }

});

guessBtn.addEventListener('click', function(){

  let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < min || guess > max) {
        setMessage('enter correct value', 'red');
    } else {

    if(guess === winningnum) {
        gameOver(true, 'Congrats!');
    } else {

        guessesleft -= 1;

    if(guessesleft === 0) {

        gameOver(false, `You lose, try again!, correct number was ${winningnum}`);

    } else {
        guessInput.style.borderColor = 'red';
        guessInput.value = '';
        setMessage(`${guess} is not correct, ${guessesleft} guesses left`, 'red');
    }
  }
}

});

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}  

function gameOver(win, msg) {
    let color;
    win === true ? color = 'green' : color = 'red';

    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);

    guessBtn.className += 'play-again';
    guessBtn.value = 'Play Again';
}

function Random(min, max) {

    return (Math.floor(Math.random()*(max-min+1)+min))

}