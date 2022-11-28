var login;
var senha;

senha = document.getElementById("password");
var olho = document.getElementById("olho");
let btn = document.querySelector('#olho');
btn.addEventListener('click', function() {
    let input = document.querySelector('#password');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        btn.setAttribute("src", "./assets/img/login/olho.png");
    } else {
        input.setAttribute('type', 'password');
        btn.setAttribute("src", "./assets/img/login/invisivel.png");
    }
});
