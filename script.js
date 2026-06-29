let clickCount = 0;
const gift = document.getElementById('gift');
const giftHint = document.getElementById('gift-hint');

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

if (gift && giftHint) {
    gift.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount <= 4) {
            giftHint.innerText = phrases[clickCount - 1];
            document.body.style.backgroundColor = colors[clickCount - 1];
            
            const randomX = Math.floor(Math.random() * (window.innerWidth - 150));
            const randomY = Math.floor(Math.random() * (window.innerHeight - 150));
            gift.style.position = 'fixed';
            gift.style.left = randomX + 'px';
            gift.style.top = randomY + 'px';
            
        } else if (clickCount === 5) {
            giftHint.innerText = phrases[4];
            document.body.style.backgroundColor = colors[4];
            
            gift.style.position = 'static';
            gift.innerHTML = <br><button class="btn" onclick="nextStep(2)">my gift 🎁</button>;
        }
    });
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
