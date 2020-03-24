// variables
const email = document.getElementById('email')
const asunto = document.getElementById('asunto')
const mensaje = document.getElementById('mensaje')
const sendBtn = document.getElementById('enviar')
const form = document.getElementById('enviar-mail')
const resetBtn = document.getElementById('resetBtn')

eventListeners();

// event listeners

function eventListeners() {
    document.addEventListener('DOMContentLoaded', initialize)
    email.addEventListener('blur', validateDocument)
    asunto.addEventListener('blur', validateDocument)
    mensaje.addEventListener('blur', validateDocument)
    sendBtn.addEventListener('click', sendEmail)
    resetBtn.addEventListener('click', resetForm)
}

//funciones
function sendEmail(e) {
    e.preventDefault()
    const spinnerGif = document.querySelector('#spinner')
    spinnerGif.style.display = 'block'

    const sent = document.createElement('img')
    sent.src = 'img/mail.gif'
    sent.style.display = 'block'

    setTimeout(function() {
        spinnerGif.style.display = 'none'
        document.querySelector('#loaders').appendChild(sent)
        setTimeout(function() {
            sent.remove()
            resetForm()
        }, 5000)
    }, 3000)
}

function resetForm() {
    form.reset();
}

function validateDocument() {
    if(this.type === 'email')
        validateEmail(this)
    else {
    validateText(this)
    }
    let errors = document.querySelectorAll('.error')
    console.log(errors.length)
    if(errors.length == 0)
        sendBtn.disabled = false
    else sendBtn.disabled = true        
}

function initialize() {
    sendBtn.disabled = true
}

function validateEmail(field) {
    if (isEmpty(field.value) || field.value.indexOf('@') == -1) {
        field.style.borderBottomColor = 'red'
        field.classList.add('error')
    } else {
        field.style.borderBottomColor = 'green'
        field.classList.remove('error')
    } 
}

function validateText(field) {
    if(!isEmpty(field.value)) {
        field.style.borderBottomColor = 'green'
        field.classList.remove('error')
    } else {
        field.style.borderBottomColor = 'red'
        field.classList.add('error')
    }
}

function isEmpty(value) {
    return value.length == 0
}