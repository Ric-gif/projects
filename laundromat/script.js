document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {

        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'none';

        const closing = question.previousElementSibling;
        closing.style.display = closing.style.display === 'block' ? 'none' : 'block';

    });
});