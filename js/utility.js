

//STep-1
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId)
    element.classList.add('bg-yellow-500');
}

//Step-2: Get a Random Alphabet
//get or create an alphabets
function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxy';    //Create an alphabets and store in a variable
    const alphabets = alphabetString.split(''); //create an empty array

    //Get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const indexOfNumber = Math.round(randomNumber);

    //send the index to alphabet
    const alphabet = alphabets[indexOfNumber];
    return alphabet;



}