var slideInImages = document.querySelectorAll('.bot');

function checkSlide() {
  slideInImages.forEach(function(img) {
    /*var slideInAt = window.scrollY + window.innerHeight - img.height / 2;
    var imageBottom = img.offsetTop + img.height- 200;
    var isHalfShown = slideInAt > img.offsetTop;
    var isNotScrolledPast = window.scrollY = imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }*/
	if (window.scrollY==window.innerHeight) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', checkSlide); 