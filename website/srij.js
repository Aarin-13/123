var slideInImages = document.querySelectorAll('.bot');

function checkSlide() {
  slideInImages.forEach(function(img) {
 
	if (window.scrollY==window.innerHeight) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', checkSlide); 