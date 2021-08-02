
console.log('Travel Agency Registration From:');

// Intialize the constants
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const error = document.getElementById('errorMsg');
const success = document.getElementById('successMsg');

// setting flags
let validUser = false;
let validEmail = false;
let validPhone = false;


// Username Event Listener
userName.addEventListener('blur', ()=>{
    //  validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){3,15}$/;
    // username should not start with number
    // username should be from 3 to 15 
    // usernamr should not have special characters
    let str = userName.value;
    if(regex.test(str)){
        userName.classList.remove('is-invalid')
        userName.classList.add('is-valid');
        validUser = true;
    }
    else{
        userName.classList.remove('is-valid');
        userName.classList.add('is-invalid');
        validUser = false;
    }
    
});

// Email Event Listener
email.addEventListener('blur', ()=>{
    //  validate email 
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+).([a-zA-Z]{2,7}$)/;
    let str = email.value;
    if(regex.test(str)){
        email.classList.remove('is-invalid')
        email.classList.add('is-valid');
        validEmail = true;
    }
    else{
        email.classList.remove('is-valid');
        email.classList.add('is-invalid')
        validEmail = false;
    }

});

// phone event listener
phone.addEventListener('blur', ()=>{
    //  validate phone number here
    let regex = /^[0-9]{10}$/;
    // phone number can have only numbers from 1 to 10 digits only
    let str = phone.value;
    console.log(str)
    if(regex.test(str)){
        phone.classList.remove('is-invalid')
        phone.classList.add('is-valid');
        validPhone = true;
    }
    else{
        phone.classList.remove('is-valid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }

    
});

// Submit Button Event listener
let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    if(validEmail && validPhone && validUser){
        error.style.display = 'none';
        success.style.display = 'Block';
        // console.log('Phone, email and user are valid. Submitting the form');
    }
    else{
        success.style.display = 'none';
        error.style.display = 'Block';
        // console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
    }
})