let clickCount = 0;
const phrases = [
    "Oops 🤭",
    "What? 🤨",
    "Aa try again maybe? 👀",
    "EGHHHHHH 😡",
    "There we go! ✅"
];
const colors = [
    "#26001b", 
    "#3a001c", 
    "#120024", 
    "#4a0000", 
    "#002b16"  
];

function moveGift() {
    clickCount++;
    const gift = document.getElementById('gift');
    const giftHint = document.getElementById('gift-hint');
    
    if (clickCount <= 4) {
        if (giftHint) giftHint.innerText = phrases[clickCount - 1];
        document.body.style.backgroundColor = colors[clickCount - 1];
        
        const randomX = Math.floor(Math.random() * (window.innerWidth - 120));
        const randomY = Math.floor(Math.random() * (window.innerHeight - 120));
        
        if (gift) {
            gift.style.position = 'fixed';
            gift.style.left = randomX + 'px';
            gift.style.top = randomY + 'px';
        }
        
    } else if (clickCount === 5) {
        if (giftHint) giftHint.innerText = phrases[4];
        document.body.style.backgroundColor = colors[4];
        
        if (gift) {
            gift.style.position = 'static';
            gift.innerHTML = <br><button class="btn" onclick="nextStep(2)">my gift 🎁</button>;
            gift.removeAttribute('onclick');
            gift.style.cursor = 'default';
        }
    }
}

function nextStep(stepNumber) {
    for (let i = 1; i <= 6; i++) {
        const step = document.getElementById('step' + i);
        if (step) step.classList.add('hidden');
    }
    const nextTarget = document.getElementById('step' + stepNumber);
    if (nextTarget) nextTarget.classList.remove('hidden');
    
    if (stepNumber > 2) {
        document.body.style.backgroundColor = "#1a000d";
    }
}
