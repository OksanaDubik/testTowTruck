const typeText = document.querySelectorAll("input[type='text']")
const typeTel = document.querySelectorAll("input[type='tel']")
const typeEmail = document.querySelectorAll("input[type='email']")
const typeNumber = document.querySelectorAll("input[type='number']")
const inpAgree = document.querySelector("#agree")
const labelAgree = document.querySelector('label[for="agree"]')

const inputArr = Array.from(document.querySelectorAll('[data-type = "input"]'))
const checkboxArr = Array.from(document.querySelectorAll('[data-type="checkbox"]'))

//если checkbox отмечен, то в input ставим 0 рублей
for (let i = 0; i < checkboxArr.length; i++) {
    checkboxArr[i].addEventListener('click', function () {
        if (checkboxArr[i].checked) {
            inputArr[i].value = 0
        } else inputArr[i].value = ''
    })
}

let valid = 0

function validation(inp) {
    inp.forEach(elem => {
        elem.addEventListener('input', function () {
            if (elem !== '') {
                elem.style.borderColor = "#0297D4"
            }
        })
    })

    inp.forEach(el => {
        if (el.value === "") {
            el.style.borderColor = "red"
            el.style.cssText = 'border: 0.50px solid #b80101;'
            valid += 1
        }
        if (el.value !== "") {
            valid -= 1
        }
    })
}


document.querySelector("form").addEventListener('submit', function (event) {
    valid = 0
    validation(typeText)
    validation(typeTel)
    validation(typeEmail)
    validation(typeNumber)
    if (!inpAgree.checked) {
        labelAgree.style.textDecoration = "underline"
    }
    if (valid >= 0 || !inpAgree.checked) {
        alert("форма не отправлена")
        event.preventDefault()
    }

})