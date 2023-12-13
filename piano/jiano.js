const tl = gsap.timeline({defaults:{ ease: 'power4.out', duration: .7}})


gsap.set('.key', {
  yPercent:-1500,
}, '+=7')
tl.to('.key', {
  yPercent: 0,
  stagger:0.03,
  autoAlpha:1,
  
})
