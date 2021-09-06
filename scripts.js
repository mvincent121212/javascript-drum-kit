const crashRide = document.getElementById("crash-ride");
const hiHatTop = document.getElementById("hihat-top");

function playSound (drum) {
    const keyCode = drum.keyCode;
    const keyDrum = document.querySelector(`div[data-key="${keyCode}"]`);

    if(!keyDrum) return;

    const audioForDrum = document.querySelector(`audio[data-key="${keyCode}"]`);
    audioForDrum.currentTime = 0;
    audioForDrum.play();

    switch(keyCode) {
        case 69:
        case 82:
            animateCrashOrRide();
            break;
        case 75:
            animateHiHatClose();
            break;
    }

    keyDrum.classList.add('playing');
};

function animateCrashOrRide () {
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';   
};

function animateHiHatClose () {
    hiHatTop.style.top = '171px';
};

function removeRideTransition (drum) {
    if(drum.propertyName !== 'transform') return;

    drum.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
};

function removeHiHatTransition (drum) {
    if(drum.propertyName !== 'transform') return;

    drum.target.style.top = '166px';
};

function removeKeyTransition (drum) {
    if(drum.propertyName !== 'transform') return;

    drum.target.classList.remove('playing');
};

const drumKeys = Array.from(document.querySelectorAll('.key'));

drumKeys.forEach(key => {
    key.addEventListener('transitionend', removeKeyTransition);
});

crashRide.addEventListener('transitionend', removeRideTransition);
hiHatTop.addEventListener('transitionend', removeHiHatTransition);

window.addEventListener('keydown', playSound);