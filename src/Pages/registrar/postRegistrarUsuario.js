function postRegistrarUsuario(){

    let campoUsuario = document.getElementById("Usuario").Value
    let campoEmail = document.getElementById("Email").Value
    let campoSenha = document.getElementById("Senha").Value

    fetch('', {
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