const tl = gsap.timeline({defaults:{ ease: 'power4.out', duration: .7}})


gsap.set('.key', {
  yPercent:-1500,
}, '+=7')
tl.to('.key', {
  yPercent: 0,
  stagger:0.03,
  autoAlpha:1,
  
})

const audio = new Audio("notec.mp3");
const buttons = document.querySelectorAll(".C");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

//https://soundboardguy.com/sounds/c-note-mp3/
