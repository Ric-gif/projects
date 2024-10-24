const testimonials = document.querySelector('.testimonials');
const dotsContainer = document.querySelector('.dots');
const prevButton = document.getElementById('left');
const nextButton = document.getElementById('right');

const testimonialsCards = document.querySelectorAll('.t___card');
const totalCards = testimonialsCards.length;
let currentCardIndex = 0;

for (let i = 0; i < totalCards; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showCard(i));
    dotsContainer.appendChild(dot);
}

showCard(currentCardIndex);

function showCard(index) {
    testimonialsCards.forEach((card, i) => {
        card.classList.remove('active', 'exiting');
        if (i === index) {
            card.classList.add('active');
        }
        else {
            card.classList.remove('active', 'exiting');
        }
    });

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    currentCardIndex = index;
}

function transitionCard(nextIndex) {
    if (nextIndex === currentCardIndex) return;

    const currentCard = testimonialsCards[currentCardIndex];
    const nextCard = testimonialsCards[nextIndex];

    currentCard.classList.add('exiting');

    setTimeout(() => {
        currentCard.classList.remove('active', 'exiting');
        showCard(nextIndex);
    }, 500);
}

prevButton.addEventListener('click', () => {
    const prevIndex = (currentCardIndex - 1 + totalCards) % totalCards;
    transitionCard(prevIndex);
});

nextButton.addEventListener('click', () => {
    const nextIndex = (currentCardIndex + 1) % totalCards;
    transitionCard(nextIndex);
});