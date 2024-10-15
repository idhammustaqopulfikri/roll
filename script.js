const dice = document.getElementById('dice');
const diceFaces = [
  [4],                 // 1 dot in the center
  [0, 8],              // 2 dots (top-left, bottom-right)
  [0, 4, 8],           // 3 dots (top-left, center, bottom-right)
  [0, 2, 6, 8],        // 4 dots (all corners)
  [0, 2, 4, 6, 8],     // 5 dots (all corners, center)
  [0, 1, 2, 6, 7, 8]   // 6 dots (three left, three right)
];

function createDots(faces) {
  dice.innerHTML = '';  // Clear previous dots
  for (let i = 0; i < 9; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');  // Add the dot class to each dot
    if (faces.includes(i)) {
      dot.classList.add('active');  // Add 'active' class for visible dots
    }
    dice.appendChild(dot);
  }
}

function rollDice() {
  // Reset all dots to be hidden initially
  const dots = dice.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active')); // Hide dots during the roll
  
  dice.style.transform = 'rotate(720deg)'; // Rotate the dice

  // Delay the dice face update until after the rotation animation finishes
  setTimeout(() => {
    const randomFace = Math.floor(Math.random() * 6); // Get a random dice face
    createDots(diceFaces[randomFace]); // Update the dice face
    dice.style.transform = 'rotate(0)'; // Reset the rotation
  }, 1000); // Match the delay to the rotation duration (1 second)
}
