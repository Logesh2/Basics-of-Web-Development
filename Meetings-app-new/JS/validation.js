const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const PasswordEl = document.querySelector("#password");





function validateUsername() {
    // for event listeners, this -> element where event happens (usernameEl)
    console.log( 'this = ', this );

    const username = nameEl.value.trim();
    const formGroupEl = nameEl.closest( '.form-group' );
    const messageEl = formGroupEl.querySelector( '.message' );

    let error = '';

    if( username>=/{8}/ )
     {
        error += '<div>Username must be at least 8 characters long</div>';
    }

    messageEl.innerHTML = error;

    return error === ''; // true for no error / false if input has errors
}

function validatePassword(){
    const password = PasswordEl.value.trim();
    const formGroupEl = password.closest(".form-group");
    const messageEl = formGroupEl.querySelector(".message");


    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;


    let error="";

        if(!password){
        error += `<div>Password cannot be empty </div>`;
        }
    
        if(password.length < minNumberofChars || password.length > maxNumberofChars){
            error+=`<div>Length of password should be minimum 6 and maximum 16`;
        }

        if(!regularExpression.test(password)) {
            error+=`password should contain atleast one number and one special character`;
            error+=`password should contain atleast one Lowercase and one Uppercase character`;
        }

    


messageEl.innerHTML = error;

return error === "";
    }

function validateEmail(){
    console.log("this = ", this);

    const email = emailEl.value.rim();
    const formGroupEl= emailEl.closest(".form-group");
    const messageEl = formGroupEl.querySelector(".message");

    let error = "";

    if(!email){
        error+=`<div>Email cannot be empty</div>`;


    }

    messageEl.innerHTML = error;
    return error === "";
}


// fires when we move away from an input
usernameEl.addEventListener( 'focus', function() {
    console.log( 'start typing within username field' );
});


// fires when we move away from an input
usernameEl.addEventListener( 'focus', function()
 {
    console.log( 'start typing within username field' );
});


nameEl.addEventListener("blur",Username);
nameEl.addEventListener('input',Username);


emailEl.addEventListener("blur",validateEmail);
emailEl.addEventListener('input',validateEmail);

PasswordEl.addEventListener("blur",validatePassword);
PasswordEl.addEventListener('input',validatePassword);


function validate(){
     let isValid = true;

     isValid = validateEmail() && isValid;
     isValid = validatePassword() && isValid;
     isValid = validatePassword() && isValid;

     return isValid;
}

const form = document.querySelector("#myform");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validate()) {
    this.submit();
    this.reset();
  }
});