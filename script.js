function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}



function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}

loadingAnimation()

function page2animation(){
    var rightElems  = document.querySelectorAll(".right-elem")

rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3], {
            opacity:1,
            scale: 1
        })
    })

    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3], {
            opacity:0,
            scale: 0
        })
    })

    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x,
            y:dets.y - elem.getBoundingClientRect().y - 150
        })
    })
})
}
page2animation()

function page3animation(){
    var page3center = document.querySelector("#page3 .icon")
var video = document.querySelector("#page3 video")

page3center.addEventListener("click",function(){

    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius:0  
    })

})
video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0.3)",
        opacity: 0,
        borderRadius: "4vh" 
    })
})

var page3center = document.querySelector("#page3 h5")
var video = document.querySelector("#page3 video")

page3center.addEventListener("click",function(){

    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius:0  
    })

})
video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0.3)",
        opacity: 0,
        borderRadius: "4vh" 
    })
})
}
page3animation()

function page7videoanimation(){
    var sections = document.querySelectorAll(".page7-right")

sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave", function () {
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })
})
}
page7videoanimation()


locomotiveAnimation()
