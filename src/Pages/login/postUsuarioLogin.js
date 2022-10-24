function postUsuarioLogin(){

    let campoEmail = document.getElementById("Email").value
    let campoSenha = document.getElementById("Senha").value

    fetch('http://localhost:8080/loginUsuario', {
        method: 'POST',
        body: JSON.stringify({
            email: campoEmail,
            senha: campoSenha,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    .then((response) => 
        response.json[0]["token"][0]
    )

}

export default postUsuarioLogin;