import axios from 'axios';

function getPostagens(){
    return axios.get('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'GET'
    })
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        alert(error)
    })
}

export default getPostagens;