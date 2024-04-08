window.onload = function() {

    gsap.registerPlugin(ScrollTrigger);

    let listBox = document.querySelectorAll('.listBox > li');
    let imgBox = document.querySelector('.imgBox');
    let img = document.querySelector('.imgBox img');

    for( let i = 0; i < listBox.length; i++) {
        listBox[i].addEventListener('mouseover', () => {
            img.src = `images/img${i}.jpg`;
            gsap.set(imgBox, {scale: 0, opacity: 0, duration: .3}),
            gsap.to(imgBox, {scale:1, opacity: 1, duration: .3})
        })
        listBox[i].addEventListener('mousemove', (e) => {
            let imgBoxX = e.pageX + 20;
            let imgBoxY = e.pageY - 20;
            imgBox.style.left = `${imgBoxX}px`;
            imgBox.style.top = `${imgBoxY}px`;
        })
        listBox[i].addEventListener('mouseout',() => {
            gsap.to(imgBox, {scale:0, opacity:0, duration: .3})
        })
    }
}


let rotate = document.querySelectorAll('.rotate');

setTimeout(() => rotate.forEach(rotate => {rotate.classList.add('on')}), 0)