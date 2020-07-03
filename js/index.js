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


var fxOnePath = 
{
    entry : {
        curviness: 1.25,
        autoRotate: true,
        values: [
                {x: 100,	y: -20},
                {x: 300,	y: 10}
            ]
    },
    looping : {
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
.add(TweenMax.to(document.querySelector(".fxOne"), 12.2, {css:{bezier:fxOnePath.looping}, ease:Power1.easeInOut}));


new ScrollMagic.Scene({triggerElement: "#trigger", duration: 800, offset: 200})
.setTween(tween)
.addTo(controller);