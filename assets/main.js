const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

let currentScore = 0;

function selectOption(step, points) {
    currentScore += points;
    document.getElementById(`step${step}`).classList.add('hidden');
    
    if (step < 3) {
        document.getElementById(`step${step + 1}`).classList.remove('hidden');
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    document.getElementById('resultStep').classList.remove('hidden');
    const scoreVal = document.getElementById('scoreValue');
    const scoreBar = document.getElementById('scoreBar');
    const resultText = document.getElementById('resultText');

    let finalPercent = Math.min(Math.round((currentScore / 100) * 100), 100);
    
    setTimeout(() => {
        scoreVal.textContent = `${finalPercent}%`;
        scoreBar.style.width = `${finalPercent}%`;
    }, 100);

    if (finalPercent < 40) {
        resultText.textContent = "Tu empresa tiene un alto potencial desaprovechado. La incorporación de automatizaciones básicas e IA puede reducir tus costos operativos en hasta un 40% en los primeros meses.";
    } else if (finalPercent < 75) {
        resultText.textContent = "Tienes bases digitales sólidas. El siguiente paso es estructurar Agentes de IA y optimizar el pipeline comercial para lograr un crecimiento verdaderamente escalable.";
    } else {
        resultText.textContent = "¡Excelente nivel tecnológico! Estás listo para integrar analítica predictiva avanzada y campañas de expansión de alto rendimiento con VOX.";
    }
}

function resetQuiz() {
    currentScore = 0;
    document.getElementById('resultStep').classList.add('hidden');
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('step1').classList.remove('hidden');
    document.getElementById('scoreBar').style.width = '0%';
}

function handleFormSubmit(e) {
    e.preventDefault();
    document.getElementById('formSuccess').classList.remove('hidden');
    document.getElementById('contactForm').reset();
}