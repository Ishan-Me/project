var arr = [
    {wallpaper:'./images/akali-wall.jpg', person:'./images/Akali-person.png', logo:'./images/Logo.png'},
    {wallpaper:'./images/zed-wallpaper.jpg', person:'./images/zed-person.png', logo:'./images/Logo.png'},
    {wallpaper:'./images/wallpaper.jpg', person:'./images/person.png', logo:'./images/Logo.png'},
]


function loading(){
    var tl=gsap.timeline()

    tl.to("#yellow1",{
    top:"-100%",
    delay:0.5,
    duration:0.8,
    ease:"expo.out",
})

tl.from("#yellow2",{
    top:"100%",
    delay:1,
    duration:0.8,
    ease:"expo.out",
},"anim")

tl.to("#loader h1",{
    delay:0.6,
    duration:0.7,
    color:"black"
},"anim")
tl.to("#loader",{
    opacity:0
})
tl.to("#loader",{
    display:"none"
})
}

loading()

function loco(){
    
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.querySelector("#footer h2").addEventListener("click",()=>{
    scroll.scrollTo(0)
})
document.querySelector(".f i").addEventListener("click",()=>{
    scroll.scrollTo(0)
})

var elems=document.querySelectorAll(".elem")
var main=document.querySelector("#page2")

elems.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        var bgimg=ele.getAttribute("data-img")
        main.style.backgroundImage=`url(${bgimg})`
    })
})
}
loco()


// var clutter = ""

// arr.forEach(function(elem, idx){
//     clutter += `      <div class="card">
//     <div class="wrapper">
//         <img src="${elem.wallpaper}" alt="" class="wallpaper">
//      </div>
//     <img src="${elem.logo}" alt="" class="logo">

//     <img src="${elem.person}" alt="" class="person">

// </div>`
// })
// document.querySelector(".card-container").innerHTML = clutter;