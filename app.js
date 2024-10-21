var currentIndex = 0;
var slides = document.querySelectorAll('.slide');
function changeSlide(direction) {
    slides[currentIndex].classList.remove('active');
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    slides[currentIndex].classList.add('active');
}
// Initialize the first slide as active
slides[currentIndex].classList.add('active');
