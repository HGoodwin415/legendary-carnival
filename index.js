const colorBtn = document.getElementById("color-btn")
let colorScheme = document.getElementById("color-scheme")

colorBtn.addEventListener("click", getColor)

function getColor() {
    const colorSeed = document.getElementById('colorSeed').value.replace('#', '')
    const colorMode = document.getElementById('colorMode').value;

    if (!colorSeed || !colorMode) {
        alert('Please select both a color and a mode.')
        return
    }

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorSeed}&mode=${colorMode}&count=5`)
        .then(res => res.json())
        .then(data => {
            const colors = data.colors
            colorScheme.innerHTML = ''
            colors.forEach(color => {
                const colorContainer = document.createElement('div')
                colorContainer.className = 'color-container'

                const colorDiv = document.createElement('div')
                colorDiv.className = 'scheme-color'
                colorDiv.style.backgroundColor = color.hex.value

                const colorText = document.createElement('div')
                colorText.className = 'color-text'
                colorText.innerText = color.hex.value

                colorContainer.appendChild(colorDiv)
                colorContainer.appendChild(colorText)
                colorScheme.appendChild(colorContainer)
            });
        })
       
}
