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

    //get expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    //check matched or not
    if (playerPressed === expectedAlphabet) {


        //update score
        // 1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        // 2.increase the score
        const newScore = currentScore + 1;
        // 3.show the updated score
        currentScoreElement.innerText = newScore;

        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()//3
    personlChanges()
}//Step: 1


//Mouseover function in home section title
let hoverTimeout;
function mouseOverFunction() {
    hoverTimeout = setTimeout(() => {
        setBackgroundColorById('alpha-text');
    }, 300); // Change delay time as per your requirement (in milliseconds)
}
function mouseOutFunction() {
    clearTimeout(hoverTimeout);
    // Reset the background color when the mouse moves out
    const element = document.getElementById('alpha-text');
    element.classList.remove('bg-yellow-500');
}

