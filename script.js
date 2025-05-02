function validateForm(event){
    event.preventDefault()

    let isValid = true

    const firstName = document.getElementById('first-name')
    const lastName = document.getElementById('last-name')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const telephone = document.getElementById('telephone')
    const bio = document.getElementById('bio')
    const submitBtn = document.getElementById('submit')

    const firstNameRegex = /^[a-zA-Z0-9]{3,16}$/
    const lastNameRegex = /^[a-zA-Z0-9]{3,16}$/
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegex = /^[a-zA-Z0-9@_-]{6,20}$/
    const telephoneRegex = /^\d{3}-\d{3}-\d{4}$/
    const bioRegex = /^[a-z_-]{8,50}$/

    if(!firstNameRegex.test(firstName.value)){
        firstName.classList.add("invalid");
        firstName.classList.remove("valid");
        isValid = false;
    }else{
        firstName.classList.add("valid");
        firstName.classList.remove("invalid");
    }

    if(!lastNameRegex.test(lastName.value)){
        lastName.classList.add("invalid");
        lastName.classList.remove("valid");
        isValid = false;
    }else{
        lastName.classList.add("valid");
        lastName.classList.remove("invalid");
    }

    if(!emailRegex.test(email.value)){
        email.classList.add("invalid");
        email.classList.remove("valid");
        isValid = false;
    }else{
        email.classList.add("valid");
        email.classList.remove("invalid");
    }

    
    if(!passwordRegex.test(password.value)){
        password.classList.add("invalid");
        password.classList.remove("valid");
        isValid = false;
    }else{
        password.classList.add("valid");
        password.classList.remove("invalid");
    }

    
    if(!telephoneRegex.test(telephone.value)){
        telephone.classList.add("invalid");
        telephone.classList.remove("valid");
        isValid = false;
    }else{
        telephone.classList.add("valid");
        telephone.classList.remove("invalid");
    }

    
    if(!bioRegex.test(bio.value)){
        bio.classList.add("invalid");
        bio.classList.remove("valid");
        isValid = false;
    }else{
        bio.classList.add("valid");
        bio.classList.remove("invalid");
    }

    if (isValid) {
        submitBtn.classList.add("valid-btn");
        alert("Form başarıyla gönderildi!"); 
    } else {
        submitBtn.classList.remove("valid-btn");
    }
}