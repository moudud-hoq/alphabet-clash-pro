// function play() {
//     //step-1; hide the home screen. To hide the screen and the class hidden to the home section

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')

//     //show the play ground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')

//     // console.log(homeSection.classList)
// }

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
}

