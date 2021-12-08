const dechet = document.getElementsByClassName('dechet')
const tabDechet = [].slice.call(dechet)
console.log(tabDechet)

const number = document.getElementById('number')
console.log(number)

const popup = new bootstrap.Modal(document.getElementById('popup'), {
	keyboard: false
})

const jul = new Audio('./sounds/jul.mp3')
const clickSound = new Audio('./sounds/switch-sound.mp3')

let counter = 0

tabDechet.forEach(element => {
	element.addEventListener('click', () => {
		counter++
		number.innerHTML = counter
		element.classList.add('hidden')
		clickSound.play()

		if (counter == tabDechet.length) {
			setTimeout(() => {
				popup.show()
				jul.play()
			}, 1000)
		}
	})
})