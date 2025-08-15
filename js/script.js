const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const errors = document.getElementById('errors')

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const checkErrors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value);

    errors.innerHTML = "";
    if (checkErrors.length > 0) {
        checkErrors.forEach(error => {
        errors.innerHTML += `<li>${error}</li>`
        })
    } else {
        alert('Registration successful')
        e.target.reset()
    }

})

function getSignupFormErrors(firstname, email, password,repeatpassword){
    let errors = []

    console.log("fma", firstname)
    if(firstname === '' || firstname == null){
        errors.push('firstname is required')
        firstname_input.parentElement.classList.add("incorrect")
    } else {
        firstname_input.parentElement.classList.remove("incorrect")
    }
    if(email === '' || email == null){
        errors.push('email is required')
        email_input.parentElement.classList.add("incorrect")
    } else {
        email_input.parentElement.classList.remove("incorrect")
    }
    if(password === '' || password == null){
        errors.push('password is required')
        password_input.parentElement.classList.add("incorrect")
    } else {
        password_input.parentElement.classList.remove("incorrect")
    }

    if (repeatpassword !== password) {
        errors.push('Passwords do not match')
        repeat_password_input.parentElement.classList.add("incorrect")
    } else {
        repeat_password_input.parentElement.classList.remove("incorrect")
    }

    return errors;
}

