function Button(){
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    let passwordRepeat = document.getElementById('passwordRepeat').value;
    if (login==password){
        alert("Логін та пароль не можуть бути однаковими")
    }
    if (passwordRepeat!==password){
        alert("Пароль та підтвердження пароля повинні збігатись")
    }
    if(login =="administrator"){
        alert("Логін не може бути «administrator»")
    }
}