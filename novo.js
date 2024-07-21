const endpoint = "http://127.0.0.1:1880/contatos"
fetch(endpoint)
.then(res => res.json())
.then(res => {
    console.log(res)
})