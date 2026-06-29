// دالة التنقل البسيطة والمضمونة بين الصفحات ليوسف
function nextStep(stepNumber) {
    // إخفاء جميع الصفحات أولاً
    for (let i = 1; i <= 4; i++) {
        const step = document.getElementById('step' + i);
        if (step) {
            step.classList.add('hidden');
        }
    }
    // إظهار الصفحة المطلوبة حالياً
    const nextTarget = document.getElementById('step' + stepNumber);
    if (nextTarget) {
        nextTarget.classList.remove('hidden');
    }
}
