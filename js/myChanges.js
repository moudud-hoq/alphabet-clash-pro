//STep-1
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-yellow-500');
}

//Step-2: Get a Random Alphabet
//get or create an alphabets
function getARandomAlphabet() {
    //Create an alphabets and store in a variable
    const alphabetString = 'abcdefghijklmnopqrstuvwxy';

    //create an empty array
    const alphabets = alphabetString.split('');

    //Get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const indexOfNumber = Math.round(randomNumber);

    //send the index to alphabet
    const alphabet = alphabets[indexOfNumber];
    return alphabet;
}

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
    setBackgroundColorById(alphabet);

    // Change the text color
    setTextColorById('playground-text');

    //Chnage playground-text-size
    setTextSizeById('playground-text-size');
}

//set background color
//Step: 1
function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}


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
