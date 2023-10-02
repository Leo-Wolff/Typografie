const text = document.querySelector("article > section:first-of-type div p")
const textLength = text.innerText.length

text.innerHTML = text.innerText
    .split("")
    .map(
        (letter, i) =>
            `<span style="transform: rotate(${
                (i * 360) / textLength
            }deg);" >${letter}</span>`
    )
    .join("")

const container = document.querySelector("body > div:first-of-type")
const fireflyTotal = 300

createFirefly = () => {
    const firefly = document.createElement("div")
    firefly.classList.add("firefly")
    container.appendChild(firefly)
    console.log("firefly created")

    positionFirefly(firefly)
    animateFirefly(firefly)
}

positionFirefly = (element) => {
    const randomX = Math.random() * window.innerWidth
    const randomY = Math.random() * document.body.clientHeight
    const randomSize = Math.random() * 10

    element.style.left = randomX + "px"
    element.style.top = randomY + "px"
    element.style.width = randomSize + "px"
    element.style.height = randomSize + "px"
}

animateFirefly = (firefly) => {
    const randomX = Math.random() * window.innerWidth
    const randomY = Math.random() * document.body.clientHeight
    const duration = Math.random() * 10000 + 5000

    firefly.style.transition = `transform ${duration}ms linear`

    firefly.style.transform = `translate(${
        randomX - parseInt(firefly.style.left)
    }px, ${randomY - parseInt(firefly.style.top)}px)`

    setTimeout(() => {
        container.removeChild(firefly)
        createFirefly()
    }, duration)
}

for (i = 0; i < fireflyTotal; i++) {
    createFirefly()
}
