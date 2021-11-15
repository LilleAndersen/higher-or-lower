upScores() // Updates scores

// Sets number 1 and 2 for use in higher or lower guess and answer. 1 is the number you're going to guess on, 2 is the correct answer.
let rndInt1 = randomIntFromInterval(1, 13)
let rndInt2 = randomIntFromInterval(1, 13)

// Sets global variables: default profile, score, and loads highscore from localStorage.
let usr = "localUsr1"
let customUsr = localStorage[''];
customUsr = localStorage['localUsr4'] || '';
let score = 0
let highscore = localStorage[usr] || '0'; // Loads variable from localStorage via name of item in localStorage (profile) || means or.
console.log(highscore)

// Updates values on page
document.querySelector("#score").textContent=score;
document.querySelector("#highscore").textContent=highscore;
document.querySelector("#default-profile").textContent=usr;
document.querySelector("#profile4").textContent=customUsr;
document.querySelector("#number1").textContent=rndInt1;
document.querySelector("#name").value = localStorage['localUsr4'] || '';

console.log("Number one is " + rndInt1, "and Number two is " + rndInt2) // Logs the two numbers for testing

// Random number generator
function randomIntFromInterval (min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Function which generates the new number where rndInt1 uses the old rndInt2 as its base. Updates rndInt1 on page.
function numbers() {
    rndInt1 = rndInt2
    rndInt2 = randomIntFromInterval(1, 13)
    console.log(rndInt1, rndInt2)
    document.querySelector("#number1").textContent=rndInt1;

    // Updates highscores if the score is higher or equal to the highscore. Writes highscore to localStorage.
    if (highscore <= score) {
        highscore = score;
        document.querySelector("#highscore").textContent=highscore;
        localStorage[usr] = highscore; // only strings
        upScores()
    }
}

// Function which changes the user and its associated data. Updates scores and highscores including the values in localStorage
function changeProfile(whichUser) {
    if (whichUser !== "localUsr4") {
        document.querySelector("#default-profile").textContent = whichUser;
        usr = whichUser;
    } else {
        document.querySelector("#default-profile").textContent = customUsr;
        usr = customUsr;
    }
    highscore = localStorage[usr] || '0';
    document.querySelector("#score").textContent = "0";
    document.querySelector("#highscore").textContent = highscore;
}

// If new usr length is over 2 ch, then it accepts the username, if not then no. Function to set custom name.
function newUsr() {
    customUsr = document.querySelector("#name").value
    if (customUsr.length >= 1) {
        document.querySelector("#profile4").textContent = customUsr;
        localStorage['localUsr4'] = customUsr;
    }
}

// Load highscore from localStorage with for i loop and functions.
function upScores() {
    for (let i = 1; i < 4; i++) {
        document.querySelector(`#highscore-profile${i}`).textContent = localStorage[`localUsr${i}`] || "0";
    }
}

// Checks if the guess given is the right answer, compares result with right or wrong. Uses function statements.
function resolve(result) {
    if (result) right();
    else wrong();
}

// Function which runs if you guess right, updates scores and adds to scores.
function right() {
    document.querySelector("#result").textContent="you're right";
    score++
    document.querySelector("#score").textContent=score;
    numbers()
}

// Function which runs if you guess wrong, resets score and updates on page.
function wrong() {
    document.querySelector("#result").textContent="you're wrong";
    score = 0
    document.querySelector("#score").textContent=score;
    numbers()
}

//============================================ Game shit

//============================================ Game Dev Commands


// Logs numbers
function log() {
    console.log("Number one is " + rndInt1, "and Number two is " + rndInt2)
}

// Resets scores in and out of localStorage
function resetScore() {
    localStorage.clear()
    document.querySelector("#highscore").textContent=highscore;
    document.querySelector("#score").textContent=score;
}

// Adds number to score
function cheat() {
    score++;
}

//============================================ Game Dev Commands

//============================================ Other JS shit

// Loads defaultState of dontShow in rules popup
console.log(localStorage['dontShowState'] || false)
localStorage['dontShowState'] = localStorage['dontShowState'] || false;

// Checks what dontShowState is and executes according action.
if (localStorage['dontShowState'] === 'true') {
    document.querySelector("#popup-wrapper").style.display="none";
    document.querySelector("#dontShow").checked = true;
} else {
    document.querySelector("#popup-wrapper").style.display="initial";
    document.querySelector("#dontShow").checked = false;
}

// Hides popup
function popup() {
    document.querySelector("#popup-wrapper").style.display="none";
    newUsr();
}

//============================================ Other JS Shit

//============================================ Other JS Dev Commands

// Show rules function
function showRules() {
    document.querySelector("#popup-wrapper").style.display="initial";
}


// Changes and stores checked state
function changeShowState() {
    localStorage['dontShowState'] = document.querySelector("#dontShow").checked; // only strings
    console.log(localStorage['dontShowState'] || 'fail')
}

// Unchecks dontShowState
function change() {
    document.querySelector("#dontShow").checked = false;
}
