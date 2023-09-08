const naoButton = document.getElementById('naoButton');

naoButton.addEventListener('mouseenter', () => {
    moveButtonRandomly();
});

function moveButtonRandomly() {
    const maxX = window.innerWidth - naoButton.clientWidth;
    const maxY = window.innerHeight - naoButton.clientHeight;

    naoButton.style.transition = 'none';

    const jumpX = Math.random() * maxX;
    const jumpY = Math.random() * maxY;

    naoButton.style.transform = `translate(${jumpX}px, ${jumpY}px)`;

    setTimeout(() => {
        moveButtonRandomly();
    }, 100);
}

naoButton.addEventListener('mouseleave', () => {
    naoButton.style.transition = 'transform 0.5s ease-in-out';
});

