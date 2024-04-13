const hide = (item) => {
    gsap.set(item, {autoAlpha: 0});
}

gsap.utils.toArray(".fadeIn").forEach(item => {
    hide(item);
    gsap.to(item, {
        autoAlpha:1,
        duration: 3
    });
})

gsap.utils.toArray(".section").forEach((item) => {
    let color = item.getAttribute("data-bgcolor");

    ScrollTrigger.create({
        trigger: item,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => gsap.to("body", {
            backgroundColor:  color,
        }),
        onEnterBack: () => gsap.to("body", {
            backgroundColor:  color,
        }),
    })
})

const animate = (item) => {
    gsap.fromTo(item, 
        {autoAlpha: 0, y:30}, 
        {autoAlpha: 1, y:0, duration: 1.25, overwrite: "auto", ease: "expo"}
    );
}

gsap.utils.toArray(".works ul li").forEach(item => {
    hide(item);

    ScrollTrigger.create({
        trigger: item,
        start:"top bottom",
        end: "bottom top",
        //markers: true,
        onEnter: () => {animate(item)}
    })
})