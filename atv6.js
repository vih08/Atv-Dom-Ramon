const backgrounds = [
    'nascer.jpg', 
    'imagem2.jpg',
    'noite.jpg',
    'sunset.jpg',
    'nuvem.jpg',
    'tarde.jpg',
];

let currentIndex = 0

document.getElementById('changeBackground').addEventListener('click', function() {
    
    currentIndex = (currentIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url('${backgrounds[currentIndex]}')`
})
