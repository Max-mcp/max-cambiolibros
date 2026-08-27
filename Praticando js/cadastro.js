const BANCO_USUARIO ="UsuariosCadastrados";

document.getElementById("btn-cadastrar").addEventListener('click',
() => {

    const novoUsuario = {
        nome:getElementById("nome").value,
        usuario:getElementById("usuario").value,
        email:getElementById("email").value,
        senha:getElementById("senha").value,
        confirmarsenha:getElementById("confirmar-senha").value
    };



    if(novoUsuario.senha != novoUsuario.confirmarsenha ){
        const msgErro = document.getElementById("Erro"); 
        msgErro.textContent="As senhas precisam ser iguais";
        msgErro.style.color = "red";

        return;

    }

    localStorage.setItem(BANCO_USUARIO, JSON.stringify(novoUsuario));
    alert("Usuário criado com sucesso ");
    location.href = "login.html";
});