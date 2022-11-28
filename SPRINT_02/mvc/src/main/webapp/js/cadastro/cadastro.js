const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const nascimento = document.getElementById("nascimento");
const serie = document.getElementById("serie");
const cidade = document.getElementById("cidade");
const email = document.getElementById("email");
const uf = document.getElementById("uf");
const senha = document.getElementById("password");
const textAlertSenha = document.querySelector(".textAlertSenha");
const form = document.getElementById("form");

function exibirSenha() {
    // EXIBIR SENHA

    let senhaValue = senha;
    if (senhaValue.type == "password") {
        senha.type = "text";
    } else {
        senha.type = "password";
    }
}