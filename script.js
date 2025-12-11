// Options
let hands = ["rock", "paper", "scissor"];

// Score tracking
let yourScore = 0;
let botScore = 0;
let drawScore = 0;
let totalPlays = 0;

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
        return;
    }

    if (
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
}

// Event listeners
document.querySelector(".rock").addEventListener("click", () => playRound("rock"));
document.querySelector(".paper").addEventListener("click", () => playRound("paper"));
document.querySelector(".scissor").addEventListener("click", () => playRound("scissor"));
