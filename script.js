
let visiblePassword = document.getElementById('password-visible');
let invisiblePassword = document.getElementById('password-invisible');


visiblePassword.addEventListener( 'click', function(){
   
    let passwordInput = visiblePassword.parentElement.parentElement.children[0];
    
    if(passwordInput.type == "password"){
        passwordInput.type = "text";
        invisiblePassword.style.display = "inline";
        visiblePassword.style.display = "none";
    }
})


invisiblePassword.addEventListener( 'click', function(){
    let passwordInput = visiblePassword.parentElement.parentElement.children[0];
    
    if(passwordInput.type == "text"){
        passwordInput.type = "password";
        visiblePassword.style.display = "inline";
        invisiblePassword.style.display = "none";

    }
})

//Check Box Code
let uncheckedBox = document.getElementById( 'unchecked');
let checkedBox = document.getElementById( 'checked');

uncheckedBox.addEventListener( 'click', function(){
    uncheckedBox.style.display = "none";
    checkedBox.style.display = "inline";
})

checkedBox.addEventListener('click', function(){
    checkedBox.style.display = "none";
    uncheckedBox.style.display = "inline";
})

//Login Button
let loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener( 'click', function(){
    
})