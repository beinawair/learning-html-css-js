// 1. Grab items from our HTML stage
const powerButton = document.getElementById('power-btn');
const levelNum = document.getElementById('level-num');
const coinNum = document.getElementById('coin-num');
const statusText = document.getElementById('status-text');

// 2. Set starting values (Variables, just like Scratch!)
let level = 1;
let coins = 100;

// 3. Like Scratch: "When [Level Up] button clicked"
powerButton.addEventListener('click', function() {
    // Increase level by 1
    level = level + 1;
    levelNum.innerText = level;

    // Add 50 coins
    coins = coins + 50;
    coinNum.innerText = coins;

    // Change status message based on level
    if (level === 5) {
        statusText.innerText = "🔥 Unstoppable!";
    } else if (level === 10) {
        statusText.innerText = "👑 Roblox Legend!";
    } else {
        statusText.innerText = "Level boosted!";
    }
});