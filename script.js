// Options
let hands = ["rock", "paper", "scissor"];

// Score tracking
let yourScore = 0;
let botScore = 0;
let drawScore = 0;
let totalPlays = 0;

// Music elements
let soundIcon = document.querySelector(".sound");
let speakerBttn = document.querySelector(".speaker");
let bgMusic = new Audio("assets/bgMusic.mp3");

bgMusic.volume = 0.2;
bgMusic.loop = true;
bgMusic.play();

let isMuted = false;

function bgMusicSound() {
    if (isMuted) {
        // Turn music ON
        bgMusic.play();
        soundIcon.src = "assets/speaker.png";
        isMuted = false;
    } else {
        // Turn music OFF
        bgMusic.pause();
        soundIcon.src = "assets/mute.png";
        isMuted = true;
    }
}

speakerBttn.addEventListener("click", bgMusicSound);

// UI Elements
const yourScoreEl = document.querySelector(".yourScore");
const botScoreEl = document.querySelector(".botScore");
const drawScoreEl = document.querySelector(".drawScore");
const playerEl = document.querySelector(".playerEl");
const botEl = document.querySelector(".botEl");
const totalEl = document.querySelector(".total");

// Random bot hand
function getBotHand() {
    return hands[Math.floor(Math.random() * 3)];
}

// Game result logic
function playRound(playerHand) {
    const botHand = getBotHand();

    playerEl.textContent = "You : " + playerHand;
    botEl.textContent = "Bot : " + botHand;

    totalPlays++;
    totalEl.textContent = "Total plays: " + totalPlays;

    if (playerHand === botHand) {
        drawScore++;
        drawScoreEl.textContent = "Draw : " + drawScore;
    } 
    else if (
        (playerHand === "rock" && botHand === "scissor") ||
        (playerHand === "paper" && botHand === "rock") ||
        (playerHand === "scissor" && botHand === "paper")
    ) {
        yourScore++;
        yourScoreEl.textContent = "Your Score : " + yourScore;
    } 
    else {
        botScore++;
        botScoreEl.textContent = "Bot's Score : " + botScore;
    }

    if (totalPlays === 5) {
        if (yourScore > botScore) {
            alert("You Won 🎊🎉");
        } else if (yourScore < botScore) {
            alert("Bot Won 😔😔");
        } else {
            alert("It's a Draw 😐");
        }

        // Reset game
        yourScore = 0;
        botScore = 0;
        drawScore = 0;
        totalPlays = 0;

        // Update UI
        yourScoreEl.textContent = "Your Score : 0";
        botScoreEl.textContent = "Bot's Score : 0";
        drawScoreEl.textContent = "Draw : 0";
        totalEl.textContent = "Total plays: 0";
        playerEl.textContent = "You : ";
        botEl.textContent = "Bot : ";
    }
}

// Sound effects
function rockSound() {
    let rock = new Audio("assets/rock.mp3");
    rock.play();
    setTimeout(() => {
        rock.pause();
        rock.currentTime = 0;
    }, 700);
}

function paperSound() {
    let paper = new Audio("assets/paper.mp3");
    paper.play();
    setTimeout(() => {
        paper.pause();
        paper.currentTime = 0;
    }, 700);
}

function scissorSound() {
    let scissor = new Audio("assets/scissor.mp3");
    scissor.play();
    setTimeout(() => {
        scissor.pause();
        scissor.currentTime = 0;
    }, 700);
}

// Event listeners
document.querySelector(".rock").addEventListener("click", () => {
    rockSound();
    playRound("rock");
});

document.querySelector(".paper").addEventListener("click", () => {
    paperSound();
    playRound("paper");
});

document.querySelector(".scissor").addEventListener("click", () => {
    scissorSound();
    playRound("scissor");
});
