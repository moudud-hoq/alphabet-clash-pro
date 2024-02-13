// function play() {
//     //step-1; hide the home screen. To hide the screen and the class hidden to the home section

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')

//     //show the play ground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')

//     // console.log(homeSection.classList)
// }

function continueGame() {
    //Step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();

    //set randomly generated alphabets to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet')

    currentAlphabetElement.innerText = alphabet;
}



//Step: 1
function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}

