function sound() {
    let btn = document.getElementsByClassName('btn-paused');
    let audio = document.getElementsByClassName('sounds');
    
    let i;
    for (i = 0; i < btn.length; i++) {
        let x = i;
        btn[i].addEventListener('click', function() {
            audio[x].currentTime = 0;
            audio[x].play();
        });
        
        audio[i].addEventListener('play', function() {
            btn[x].classList.add('btn-playing');
        });
        
        audio[i].addEventListener('pause', function () {
            btn[x].classList.remove('btn-playing'); 
        });
        
    }
}
        
sound();