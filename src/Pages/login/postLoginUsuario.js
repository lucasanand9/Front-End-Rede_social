function postLoginUsuario(){

    let campoEmail = document.getElementById("Email").value
    let campoSenha = document.getElementById("Senha").value

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
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

export default postLoginUsuario;

