function postRegistrarUsuario(){

    let campoUsuario = document.getElementById("Usuario").value
    let campoEmail = document.getElementById("Email").value
    let campoSenha = document.getElementById("Senha").value

    fetch('http://localhost:8080/novoCadastro', {
        method: 'POST',
        body: JSON.stringify({
            usuario: campoUsuario,
            email: campoEmail,
            senha: campoSenha,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((response) => response.json())
.then((json) => console.log(json));
}

export default postRegistrarUsuario;