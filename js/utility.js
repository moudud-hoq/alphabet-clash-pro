//STep-1
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-yellow-500');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('bg-yellow-500');
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}//ok

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}//ok


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