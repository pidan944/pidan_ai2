const cursorGlow = document.querySelector('.cursor-glow');

if (cursorGlow) {
window.addEventListener('pointermove', (event) => {
const x = event.clientX;
const y = event.clientY;
cursorGlow.style.transform = `translate(${x - 140}px, ${y - 140}px)`;
});
}

const signalLines = document.querySelectorAll('.signal-lines span');
signalLines.forEach((line, index) => {
line.style.animationDelay = `${index * 0.6}s`;
});

const typingText = document.getElementById('typing-text');
const typingPhrases = [
'NOVA 电子竞技俱乐部 / Former Pro Player',
'AI Tool Workflow / Efficiency Operator',
'Token & Cross-border Compliance Flow'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function tickTyping() {
if (!typingText) return;

const current = typingPhrases[phraseIndex];

if (isDeleting) {
charIndex -= 1;
} else {
charIndex += 1;
}

typingText.textContent = current.slice(0, charIndex);

let timeout = isDeleting ? 40 : 75;

if (!isDeleting && charIndex === current.length) {
timeout = 1400;
isDeleting = true;
} else if (isDeleting && charIndex === 0) {
isDeleting = false;
phraseIndex = (phraseIndex + 1) % typingPhrases.length;
timeout = 260;
}

window.setTimeout(tickTyping, timeout);
}

tickTyping();

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealElements.length) {
const revealObserver = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add('is-visible');
revealObserver.unobserve(entry.target);
}
});
},
{
threshold: 0.16,
rootMargin: '0px 0px -40px 0px'
}
);

revealElements.forEach((element) => revealObserver.observe(element));
} else {
revealElements.forEach((element) => element.classList.add('is-visible'));
}

window.addEventListener('scroll', () => {
const heroVisual = document.querySelector('.hero-visual');
if (!heroVisual) return;
const offset = window.scrollY * 0.08;
heroVisual.style.transform = `translateY(${offset}px)`;
});
