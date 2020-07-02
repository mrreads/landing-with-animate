var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  duration: 1600,
  offset: 50,
})
.setPin(".link")
.addTo(controller); 
