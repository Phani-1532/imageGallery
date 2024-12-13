let images = document.querySelectorAll('.image-gallery img');
let popup = document.querySelector('.popup');
let span = document.querySelector('.popup span');
let popupImg = document.querySelector('.popup img');

for (img of images) {
    img.onclick = function() {
        popup.style.display = 'block';
        popupImg.src = this.getAttribute('src'); // `this` refers to the clicked img element
    };
}

span.onclick = function() {
    popup.style.display = 'none';
};
