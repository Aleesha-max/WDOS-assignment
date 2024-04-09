
let images = [["./images/sinharaja1.png", "./images/sinharaja2.jpg"], ["./images/minneriya1.jpeg", "./images/minneriya2.jpg"], ["./images/udawalawe1.jpeg", "./images/udawalawe2.jpeg"]]


document.querySelectorAll(".card").forEach((element, index) => {
    console.log(element)
    let array = images[index]
    let imageIndex = 0
    setInterval(() => {
        if (imageIndex > array.length - 1) {
            imageIndex = 0
        }
        element.querySelector(".img-container").style.backgroundImage = `url(${array[imageIndex]})`
        imageIndex++
    }, 4000)
})
try {
    document.querySelector(".hamburg").addEventListener("click", () => {
        document.querySelector(".hamburg-menu").classList.toggle('active')
        console.log("hfffrf")
    })

} catch (error) {

}


document.registerNewsletter = ()=>{
    const email = window.prompt("Please enter your email address")
    if (email){
        const currentValue = JSON.parse(localStorage.getItem("newsletter")) || []
        const newValue = [...currentValue, {email}]
        localStorage.setItem("newsletter",JSON.stringify(newValue))
    }
}