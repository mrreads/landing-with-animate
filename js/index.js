function SoftScroll () {
    var _this = this;
    window.onmousewheel = function () { return _this.catchScroll(window.event) };
    this.speed = 0;
    this.current = 0;
    this.time = 100;
    this.direction;
    this.timer = false;
  }
  SoftScroll.prototype = {
    catchScroll: function (e) {
      this.speed += 100;
      if(e.wheelDelta > 0) this.direction = 'up';
      else this.direction = 'down';
      this.timerScroll();
      return false;
    },
    timerScroll: function () {
      _this = this;
      if(_this.timer == true) return;
      _this.timer = true;
      _this.timerId = setInterval(function () {
        var increment = Math.sqrt(_this.speed) / 2.5;
        _this.current += increment;
        if(_this.current > _this.speed) _this.current = _this.speed;
        var y = -Math.pow(_this.current - _this.speed / 2, 2) / Math.pow(_this.speed / 2, 2) * increment + increment;
        if(_this.direction == 'up') y = -y;
        _this.doScroll(Math.floor(y));
        if(y == 0) {
          _this.timer = false;
          _this.speed = 0;
          _this.current = 0;
          clearInterval(_this.timerId);
        }
      }, 10);
    },
    doScroll: function (scroll) {
      document.body.scrollTop = document.body.scrollTop + scroll;
      document.documentElement.scrollTop = document.documentElement.scrollTop + scroll;
    }
  }
SoftScroll();

var controller = new ScrollMagic.Controller();

var imageNumber = 1;
var images = 
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

var obj = { curImg: 0 };

var tweenWalkAnimation = TweenMax.to(obj, 0.5,
    {
        curImg: images.length - 1,
        roundProps: "curImg",
        repeat: 3,									
        immediateRender: true,			
        ease: Linear.easeNone,			
        onUpdate: function () {
            document.querySelector(".link").style.backgroundImage = `url('${images[obj.curImg]}')`;
        }
    }
)

new ScrollMagic.Scene(
{
    duration: 2000,
    offset: 50,
})
.setPin(".link")
.setTween(tweenWalkAnimation)
.addTo(controller);


var fxPath = 
{
    one : {
        curviness: 1.25,
        autoRotate: true,
        values: [
                {x: 510,	y: 60},
                {x: 620,	y: -60},
                {x: 500,	y: -100},
                {x: 380,	y: 20},
                {x: 500,	y: 60},
                {x: 880,	y: 20},
                {x: 1320,	y: 15}
            ]
    },
    two : {
        curviness: 1.25,
        autoRotate: true,
        values: [
                {x: 100,	y: -20},
                {x: 400,	y: 10}
            ]
    },
    leave : {
        curviness: 1.25,
        autoRotate: true,
        values: [
                {x: 660,	y: 20},
                {x: 800,	y: 130},
                {x: 1500,	y: -300},
            ]
    }
};

var tween = new TimelineMax()
.add(TweenMax.to(document.querySelector(".fxOne"), 22.2, {css:{bezier:fxPath.one}, ease:Power1.easeInOut}))

new ScrollMagic.Scene({triggerElement: "#trigger", duration: 800, offset: 200})
.setTween(tween)
.addTo(controller);


var tween = new TimelineMax()
.add(TweenMax.to(document.querySelector(".fxTwo"), 5, {css:{bezier:fxPath.two}, ease:Power1.easeInOut}));


var tween = new TimelineMax()
    .add([
        TweenMax.fromTo(".fog", 1, {scale: 1, autoAlpha: 1, top: -550}, {top: 2500, ease: Linear.easeNone}),
    ]);

    var parallaxScene = new ScrollMagic.Scene({
        triggerElement: "#trigger",
        duration: 2500
    })
    .setTween(tween)
    .addTo(controller);