document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    register();
})

function register() {

    let users = JSON.parse(localStorage.getItem("users")) || [];
    

    let cadastrado = false;
    users.forEach(element => {
        if(element.cpf === Number(document.getElementById("cpf").value)) {
            alert("USUARIO JA CADASTRADO");
            cadastrado = true;
        }
    });

    if(cadastrado){
        return;
    }

    const usuario = {
        "cpf": Number(document.getElementById("cpf").value),
        "password": document.getElementById("pwd").value,
        "username": document.getElementById("name").value,
        "email": document.getElementById("email").value,
        "type": "int"
    }
    alert("USUARIO CADASTRADO")
    users.push(usuario);
    localStorage.setItem("users",JSON.stringify(users));
    
    
}