var p1DiceImage = document.querySelector(".img1");

var p1DiceValue = Math.floor(6 * Math.random() + 1);

p1DiceImage.setAttribute("src", "images/dice" + p1DiceValue + ".png");

var p2DiceImage = document.querySelector(".img2");

var p2DiceValue = Math.floor(6 * Math.random() + 1);

p2DiceImage.setAttribute("src", "images/dice" + p2DiceValue + ".png");

var heading = document.querySelector("h1");

if (p1DiceValue > p2DiceValue) {
    heading.textContent = "🚩Player 1 Wins!"
} else if (p1DiceValue < p2DiceValue) {
    heading.textContent = "Player 2 Wins!🚩"
} else {
    heading.textContent = "Draw! Refresh!"
}
