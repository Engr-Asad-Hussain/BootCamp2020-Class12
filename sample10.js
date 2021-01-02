var element1 = document.querySelector('.clouds-div-1');
var animation1 = element1.animate([
    { transform: 'translate(100%, 0)' },
    { transform: 'translate(-100%, 0)' }
], {
    duration: 9000,
    iterations: Infinity
});

var element2 = document.querySelector('.cloud-div-2');
var animation2 = element2.animate([
    { opacity: 0 },
    { opacity: 0 }
], {
    duration: 1000,
    iterations: 5
});

var element2 = document.querySelector('.cloud-div-2');
var animation2 = element2.animate([
    { transform: 'translate(100%, 0)' },
    { transform: 'translate(-1210px, 0)' }
], {
    duration: 9000,
    iterations: Infinity
});
animation2.startTime = 5000;


var elementPlane = document.querySelector('.plane');
var animationPlane = elementPlane.animate([
    { transform: 'translate(-200px,0)' },
    { transform: 'translate(100px,100px)' },
    { transform: 'translate(400px, 300px)' },
    { transform: 'translate(700px, 450px) rotate(-10deg)' },
    { transform: 'translate(800px, 500px)' }
], {
    duration: 15000,
    iterations: Infinity
});
animationPlane.startTime = 000;