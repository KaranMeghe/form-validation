const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const button = document.querySelector('button');
const error = document.querySelectorAll('small');

// Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.textContent = message;
}

// Show sucess outline
function showSucess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control sucess';
}
// Check email is valid
function isValidEmail(email){
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// Check password Match
function checkPasswordMatch(input1, input2){
if(input1.value !== input2.value){
    showError(input2, 'Password do not match')
}
}

// Check required fields 
function checkRequired(inputArr){
inputArr.forEach((input) =>{
    if(input.value.trim() === ''){
        showError(input, `${input.id} is required` )
    } else {
        showSucess(input);
    }
})
}

// Check lengths
function checkLength(input,min,max){
    if(input.value.length < 3){
        showError(input, `${input.id} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${input.id} must be at least ${max} characters`);
    } else{
        showSucess(input);   
    }
}

// Event Listners
form.addEventListener('submit', (event) =>{
    event.preventDefault();

   checkRequired([userName,email,password,password2]);
   checkLength(userName, 3 ,15);
   checkLength(password,6,20);
   checkPasswordMatch(password,password2);
})
