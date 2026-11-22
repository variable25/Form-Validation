let nameError = document.querySelector("#name-error")
let emailError = document.querySelector("#email-error")
let phoneError = document.querySelector("#phone-error")
let submitError = document.querySelector("#submit-error")

let validateName = () => {
    let name = document.querySelector("#name-input").value
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required'
        nameError.style.color = 'red'
        return false
    }
    if (!name.match(/^[A-Za-z]+\s([A-Za-z]*\s)*[A-Za-z]+$/)) {
        nameError.innerHTML = 'Not a valid name'
        nameError.style.color = 'red'
        return false
    }
    nameError.innerHTML = 'Valid'
    nameError.style.color = 'green'
    return true
}

let validateEmail = () => {
    let email = document.querySelector('#email-input').value
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required'
        emailError.style.color = 'red'
        return false
    }
    if (!email.match(/^[\w.+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = 'Not a valid email format'
        emailError.style.color = 'red'
        return false
    }
    emailError.innerHTML = 'Valid'
    emailError.style.color = 'green'
    return true
}

let validatePhone = () => {
    let phone = document.querySelector('#phone-input').value
    if (phone.length == 0) {
        phoneError.innerHTML = 'Enter a phone number'
        phoneError.style.color = 'red'
        return false
    }
    if (!phone.match(/^[0-9]{10,11}$/)) {
        phoneError.innerHTML = 'Enter a VALID phone number'
        phoneError.style.color = 'red'
        return false        
    }
    phoneError.innerHTML = 'Valid'
    phoneError.style.color = 'green'
    return true
}

let validateSubmit = () => {
    let nameCheck = validateName()
    let emailCheck = validateEmail()
    let phoneCheck = validatePhone()

    if (nameCheck && emailCheck && phoneCheck) {
        submitError.innerHTML = 'Successfully Submitted'
        submitError.style.color = 'green'
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
    else{
        submitError.innerHTML = 'Please enter the details'
        submitError.style.color = 'red'
    }
}

