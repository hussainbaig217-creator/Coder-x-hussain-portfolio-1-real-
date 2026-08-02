// Grab the HTML element box where the text changes
const dynamicText = document.getElementById("dynamic-text");

// Put your target portfolio keywords right inside this array string box!
const words = ["website developer.", "UI/UX layout designer .", "digital solution creator."];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Remove characters one by one
        dynamicText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add characters one by one
        dynamicText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Dynamic speeds for typing vs deleting actions
    let typeSpeed = isDeleting ? 50 : 100;

    // If word is fully typed out, pause at the end
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500; // Stand still for 1.5 seconds so users can read it
        isDeleting = true;
    } 
    // If word is completely wiped out, snap to the next word in line
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Loops back to start automatically
        typeSpeed = 400; // Small rest gap before typing the new phrase
    }

    setTimeout(typeEffect, typeSpeed);
}

// Fire off the script loop when your web page finishes initializing
document.addEventListener("DOMContentLoaded", typeEffect);