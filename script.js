document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); 
});

const links = {
    "when": "https://en.wikipedia.org/wiki/December_12",
    "where": "https://en.wikipedia.org/wiki/Hongik_University",
    "who": "https://en.wikipedia.org/wiki/hanyeonsu",
    "what": "https://en.wikipedia.org/wiki/Solo_exhibition",
    "why": "https://en.wikipedia.org/wiki/Hyperlink"
};

function openOverlay(link) {
    document.getElementById('external-iframe').src = links[link];

    setTimeout(() => {
        document.getElementById('overlay').style.display = 'block'; 
    }, 300); 
}

document.getElementById('when-link').addEventListener('click', function(event) {
    event.preventDefault();
    openOverlay('when');
});
document.getElementById('where-link').addEventListener('click', function(event) {
    event.preventDefault();
    openOverlay('where');
});
document.getElementById('who-link').addEventListener('click', function(event) {
    event.preventDefault();
    openOverlay('who');
});
document.getElementById('what-link').addEventListener('click', function(event) {
    event.preventDefault();
    openOverlay('what');
});
document.getElementById('why-link').addEventListener('click', function(event) {
    event.preventDefault();
    openOverlay('why');
});

document.getElementById('back-button').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none'; 
    document.getElementById('external-iframe').src = ''; 
});
const box = document.querySelector('.box');
let isDragging = false;
let offsetX, offsetY;

box.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - box.offsetLeft;
    offsetY = e.clientY - box.offsetTop;
    box.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        box.style.left = `${e.clientX - offsetX}px`;
        box.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    box.style.cursor = 'grab';
});


window.addEventListener('load', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('external-iframe').src = '';
});

document.getElementById('back-button').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('external-iframe').src = ''; 
});

