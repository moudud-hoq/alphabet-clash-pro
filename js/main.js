// function play() {
//     //step-1; hide the home screen. To hide the screen and the class hidden to the home section

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')

//     //show the play ground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')

//     // console.log(homeSection.classList)
// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key

    //Stop Game If Do not want play

    //get expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    //check matched or not
    if (playerPressed === expectedAlphabet) {
        const currentScore = getTextElementValueById('current-score');//score updating
        // console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // ---------------------------------------------------------
        // //update score
        // // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // // 2.increase the score
        const newScore = currentScore + 1;

        // // 3.show the updated score
        // currentScoreElement.innerText = newScore;

        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            gameOver();
        } else {

        }


        // -------------------------------------
        // // 1. get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // 2.decrease the  life
        // const newLife = currentLife - 1;
        // //3. display the update life count
        // currentLifeElement.innerText = newLife;

    }
}

//capture keyboard keypress
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() /*3*/ {
    const alphabet = getARandomAlphabet();/*Step-1: generate a random alphabet*/
    const currentAlphabetElement = document.getElementById('current-alphabet')/*set randomly generated alphabets to the screen*/
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}

function personlChanges() {
    setTextSizeById('playground-text-size');
}//Function Personal Changes


function play() {
    //Hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    //Reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame()//3
}//Step: 1

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    //Update the last score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore)
    setTextElementValueById('last-score', lastScore)

    //clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}





