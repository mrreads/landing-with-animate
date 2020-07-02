var controller = new ScrollMagic.Controller();

var imageNumber = 1;
var walkImages = 
[
  "./img/link_walk1.png",
  "./img/link_walk2.png",
  "./img/link_walk3.png",
  "./img/link_walk4.png",
  "./img/link_walk5.png",
  "./img/link_walk6.png",
  "./img/link_walk7.png",
  "./img/link_walk8.png"
];

new ScrollMagic.Scene({
  duration: 2000,
  offset: 50,
})
.setPin(".link")
.addTo(controller)
.on("progress", function (e) 
{
  if (Math.round(e.progress * 10) < 7)
  {
    imageNumber = Math.round(e.progress * 10) + 1;
  }
  else
  {
    imageNumber = Math.round(e.progress * 10) - 3;
  }

  document.querySelector('.link').style.backgroundImage = `url('${walkImages[imageNumber]}')`;
});