const pass = document.querySelector('#pass');
const newPass = document.querySelector('#newPassword');
function generatePass(){

    newPass.value = '';
    if(pass.value === ''){
        alert('Digite o tamanho da sua senha!');
        return;
    }

    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';

    for(var i = 0, n = charset.length; i < pass.value; ++i){
        password += charset.charAt(Math.floor(Math.random() * n));
    }

    let result = document.createTextNode(password);
    return newPass.appendChild(result);   
}