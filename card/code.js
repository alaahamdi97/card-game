//start page
var startt = document.getElementById("startGame");
var startGame = document.getElementById("btnOne");
var container = document.querySelectorAll(".container");
var audioOne = document.getElementById("audioOne")
var gamerName = document.getElementById("gamerName");
var audioTwo = document.getElementById("audioTwo");
var audioThree = document.getElementById("audioThree");
var audioFour = document.getElementById("audioFour");
var exitt = document.getElementsByClassName("exit");
var winner = document.getElementsByClassName("winner");
var out = document.getElementsByClassName("exittt");
var startAgain = document.getElementsByClassName("startAgain");
var endGame = document.getElementsByClassName("endGame");
var score = document.getElementById("score");
var audioFive = document.getElementById("audioFive");


startGame.addEventListener("click", startGamee)

function startGamee() {

    namee = prompt("Enter your name, gamer");
    gamerName.innerHTML = namee;
    audioOne.play()

    setTimeout(function () {
        startt.style.display = "none";
        container[0].style.display = "block";
        startTimer();

    }, 3000);
    minTimer();
};





// TIMER:...
function startTimer(duration, display) {
    var timer = duration, seconds;
    var timee = setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = "Timer: " + seconds;

        if (--timer < 0) {
            timer = duration;
        }


        if (timer == 00) {
            clearInterval(timee);
            container[0].style.display = "none";
            endGame[0].style.display = "block";
            audioFour.play();
        }
    }, 1000);
}


var minTimer = function () {
    var fiveMinutes = 61,
        display = document.querySelector('.timer');
    startTimer(fiveMinutes, display);
};



//photo tap game...


var curr = [];


var gameBlock = Array.from(document.getElementsByClassName("gameBlock"));
for (let i = 0; i < gameBlock.length; i++) {
    if (curr.length <= 2) {
        gameBlock[i].addEventListener("click", function () {
            curr.push(gameBlock[i]);
            curr.length <= 2 ? (gameBlock[i].style.transform = "rotatey(180deg)") : null;

            if (curr.length === 2) {
                setTimeout(() => {
                    if (curr[0].dataset.technology === curr[1].dataset.technology) {
                        curr.map((el) => (el.style.visibility = "hidden"));
                        audioTwo.play();
                    } else {
                        curr.map((el) => {
                            el.style.transform = "rotatey(0deg)";
                            audioThree.play();
                        });
                    }
                    curr = [];
                }, 2000);
            }

        });
    }
}

///buttons ...

startAgain[0].addEventListener("click", function () {
    container[0].style.display = "block";
    winner[0].style.display = "none";


    location.reload();


})



startAgain[1].addEventListener("click", function () {
    container[0].style.display = "block";
    endGame[0].style.display = "none";


    location.reload();


})


startAgain[2].addEventListener("click", function () {
    container[0].style.display = "block";
    exitt[0].style.display = "none";

    location.reload();



})


out[0].addEventListener("click", function () {
    exitt[0].style.display = "block";
    endGame[0].style.display = "none";
    audioFour.pause();
    audioFive.play();

})













