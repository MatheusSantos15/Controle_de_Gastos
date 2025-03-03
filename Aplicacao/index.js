function onChangeEmail(){
    toggleButtonsDisable();
    toggleEmailErrors();
}
function onChangePassword(){
    toggleButtonsDisable();
    togglePasswordErrors();
}

function isEmailValid(){
    const email = form.email().value;
    if (!email){
        return false;
    }
    return validateEmail(email);
}

function toggleEmailErrors(){
    const email = form.email().value;
    if (!email){
        form.emailRequiredError().style.display = "block";
    }else{
        form.emailRequiredError().style.display = "none";
    }

    if(validateEmail(email)){
        form.emailInvalidError().style.display = "none";
    }else {
        form.emailInvalidError().style.display = "block";
    }

}

function togglePasswordErrors(){
    const password = form.password().value;
    if(!password){
        document.getElementById('password-required-error').style.display = "block";
    }else{
        document.getElementById('password-required-error').style.display = "none";
    }
}

function toggleButtonsDisable(){
    const emailValid = isEmailValid();
    document.getElementById('recover-password-button').disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
}

function isPasswordValid(){
    const password = document.getElementById('password').value;
    if (!password){
        return false;
    }
    return true;
}

function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}

const form = {
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    loginButton: () => document.getElementById('login-button'),
    password: () => document.getElementById('password')
}