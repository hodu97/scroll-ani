let stageEle = document.querySelector('.stage'),
    houseEle = document.querySelector('.house'),
    maxScrollValue, //실제로 스크롤이 움직이는 높이값
    mousePos = {
        x: 0,
        y: 0
    };








function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
}
window.addEventListener('scroll', function () {
    let scrollPer = pageYOffset / maxScrollValue;
    //console.log(scrollPer)
    let zMove = scrollPer * 1970 - 990 ;
    houseEle.style.transform = `translateZ(${zMove}vw)`;
})

window.addEventListener('mousemove', function (e) {
    mousePos.x=(e.clientX / window.innerWidth) * 5; //client --> 화면에 보이는것
    mousePos.y=-(e.clientY / window.innerHeight) * 5; //client --> 화면에 보이는것
    stageEle.style.transform=`rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`;
})


window.addEventListener("resize",resizeHandler())
resizeHandler()