
# 🎮 Rock Paper Scissors — JavaScript Game

A simple and interactive **Rock Paper Scissors** game built using **HTML, CSS, and JavaScript**.
Includes **score tracking, button sound effects, background music toggle, and best-of-3 match logic**.

---

## 📌 Features

### ✅ Game Mechanics

* Player chooses **Rock / Paper / Scissor**
* Bot (computer) picks a random hand
* Proper game rules applied
* Score tracking:

  * **Your Score**
  * **Bot Score**
  * **Draws**
  * **Total Plays**
* Game automatically **resets after 5 rounds**
* Final result shown via popup alert

### 🎵 Audio Features

* Background music that:

  * Loops
  * Has fixed 0.2 volume
  * Can be muted/unmuted using speaker icon (JS icon change included)
* Button click sound for:

  * Rock
  * Paper
  * Scissor
* Each sound stops after a fixed duration (using `setTimeout`)

### 🎨 UI Features

* Responsive layout
* Clean buttons with hover/active effects
* Scoreboard + Play display
* Speaker icon positioned at bottom-right of the main section

---

## 📁 Folder Structure

```
Project Folder
│── index.html
│── styles.css
│── script.js
└── assets/
     │── bgMusic.mp3
     │── rock.mp3
     │── paper.mp3
     │── scissor.mp3
     │── speaker.png
     │── mute.png
```

---

## 🚀 How to Play

1. Open `index.html` in your browser
2. Click:

   * ✊ for Rock
   * 🤚 for Paper
   * ✌️ for Scissor
3. See scores update in real-time
4. After **3 rounds**, game declares a winner & resets automatically
5. Use the **speaker icon** to toggle background music ON/OFF

---

## 🧠 JavaScript Concepts Used

* `Math.random()` for bot choice
* DOM manipulation with:

  * `querySelector()`
  * `textContent`
  * `addEventListener()`
* Audio handling with:

  * `new Audio()`
  * `play()`
  * `pause()`
  * `volume`
  * dynamic sound duration using `setTimeout`
* Conditional logic
* Game state management

---

## 🔊 Mute / Unmute Logic (Summary)

```js
let isMuted = false;

if(isMuted) {
    bgMusic.play();
    soundIcon.src = "assets/speaker.png";
    isMuted = false;
} else {
    bgMusic.pause();
    soundIcon.src = "assets/mute.png";
    isMuted = true;
}
```

---

## 📷 Screenshot (Optional)

*Add your game screenshot here (if you want).*

---

## 💡 Future Improvements (Optional)

* Add animated popup for final result
* Add score history
* Add dark mode
* Add selection animations
* Add difficulty levels

---

## 👨‍💻 Author

**Aditya Vaishya**
Rock–Paper–Scissor Project
Made using basic HTML, CSS, and JavaScript

---

