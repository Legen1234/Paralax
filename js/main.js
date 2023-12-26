const clouds = [...document.querySelectorAll(".header__cloud")]
const boat = document.querySelector(".header__boat")
// console.log(clouds)

window.addEventListener("scroll", () => {
    clouds.forEach(cloud => {
        let speed = cloud.getAttribute("data-speed")
        let speedBoat = boat.getAttribute("speed")

        cloud.style.transform= `translateX(${this.scrollY * speed}px)`
        boat.style.transform= `translateX(${this.scrollY * speedBoat}px)`
    });
})


const parallaxBox = document.querySelector(".parallax-box")
const parallaxBall = [...document.querySelectorAll('.parallax-ball')]

parallaxBox.addEventListener('mousemove',(event) =>{
    // console.log(event.clientX);
    parallaxBall.forEach(balls =>{
        const x = (window.innerWidth - event.pageX) / 10
        const y = (window.innerHeight - event.pageY) / 10
        balls.style.transform = `translate(${x}px, ${y}px)`
        // console.log(x);
    })
})
const timerCardNum =[...document.querySelectorAll(".timer-card__num")]
function noldan(){
    for (let i = 0; i < timerCardNum.length; i++) {
    }
    if (i > timerCardNum) {
        stop
    }
    noldan()
}