let t1 = gsap.timeline();
t1.from("#vignesh-img", {
    opacity: 0,
    x: -500,
    scale: 0.2,
    duration: 1,
})
t1.from("#title", {
    opacity: 0,
    y: -500,
    scale: 0.2,
    duration: 0.5,
})
t1.from(".searchBox", {
    opacity: 0,
    y: -500,
    scale: 0.2,
    duration: 0.5,
})
t1.from("#socials", {
    opacity: 0,
    scale: 0.2,
    duration: 0.5,
})
t1.from("#footer", {
    opacity: 0,
    scale: 0.2,
    duration: 0.5,
})
t1.to("#vignesh-img", {
    delay: 1,
    duration:0.5,
    opacity: 0.8,
    scale: 0.9,
    yoyo:true,
    repeat:-1,
})
t1.to("#footer span", {
    duration: 0.8,
    yoyo:true,
    repeat:-1,
    color: "#fff",
})