let clickCount = 0;
const gift = document.getElementById('gift');

// كود تحريك الهدية أو الانتقال للمرحلة التالية
gift.addEventListener('click', function() {
    clickCount++;
    
    if (clickCount === 1 || clickCount === 2) {
        // توليد إحداثيات عشوائية لتهرب الهدية داخل الشاشة
        const randomX = Math.floor(Math.random() * (window.innerWidth - 150));
        const randomY = Math.floor(Math.random() * (window.innerHeight - 150));
        
        // تحويل الهدية إلى وضعية مطلقة لتتحرك بحرية
        gift.style.position = 'fixed';
        gift.style.left = randomX + 'px';
        gift.style.top = randomY + 'px';
    } else if (clickCount === 3) {
        // في الضغطة الثالثة، ننتقل للمرحلة الثانية مباشرة
        nextStep(2);
    }
});

// دالة التنقل بين المراحل
function nextStep(stepNumber) {
    // إخفاء جميع الكروت أولاً
    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('step4').classList.add('hidden');
    document.getElementById('step5').classList.add('hidden');

    // إظهار الكرت المطلوب فقط
    document.getElementById('step' + stepNumber).classList.remove('hidden');
}
