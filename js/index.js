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

// FX ANIMATION
var tween = new TimelineMax()
.add(TweenMax.to(document.querySelector(".fxOne"), 22.2, {css:{bezier:fxPath.one}, ease:Power1.easeInOut}))

new ScrollMagic.Scene({triggerElement: "#wrapper", duration: 1300, offset: 600})
.setTween(tween)
.addTo(controller);


var tween = new TimelineMax()
.add(TweenMax.to(document.querySelector(".fxTwo"), 5, {css:{bezier:fxPath.two}, ease:Power1.easeInOut}));
new ScrollMagic.Scene({triggerElement: "#wrapper", duration: 800, offset: 400})
.setTween(tween)
.addTo(controller);

// ТУМАН
var tween = new TimelineMax()
.add([TweenMax.fromTo(".fog", 1, {scale: 1, autoAlpha: 1, top: -550}, {top: 2500, ease: Linear.easeNone}),]);

var parallaxScene = new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: 2500
})
.setTween(tween)
.addTo(controller);


// БЕЛЫЙ ТЕКСТ
var tween = new TimelineMax()
.add([TweenMax.fromTo(".text", 1, {scale: 1, autoAlpha: 1, top: 200}, {top: 900, ease: Linear.easeNone}),])
var parallaxScene = new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: 500
})
.setTween(tween)
.addTo(controller);

// ЧЕРНЫЙ ТЕКСТ
var tween = new TimelineMax()
.add([TweenMax.fromTo(".textBlack", 1, {scale: 1, autoAlpha: 1, top: -200}, {top: 910, ease: Linear.easeNone}),])
var parallaxScene = new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: 500
})
.setTween(tween)
.addTo(controller);



// TEXT SCALE
var tween = TweenMax.to(".textAnim", 1, {scale: 2, ease: Linear.easeNone})
var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300})
.setTween(tween)
.addTo(controller);
tween.progress(0)
tween.updateTo(params, true);
scene.setTween(tween);
