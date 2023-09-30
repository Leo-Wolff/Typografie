const text = document.querySelector(".circle div p")
const textLength = text.innerText.length

text.innerHTML = text.innerText
    .split("")
    .map(
        (char, i) =>
            `<span style="transform: rotate(${
                (i * 360) / textLength
            }deg);" >${char}</span>`
    )
    .join("")
