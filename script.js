function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const btn = document.querySelector(`.btn-paused[data-key="${e.keyCode}"]`)
    
    if(!audio) return;
    
    audio.currentTime = 0;
    audio.play();
    btn.classList.add('btn-playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'background-color') return;
    this.classList.remove('btn-playing');
}

const buttons = document.querySelectorAll('.btn-paused');
buttons.forEach(btn => btn.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

// look up ES6 template strings