const button = document.getElementById("login")




button.addEventListener("click", (event) => {
    const users = JSON.parse(localStorage.getItem("users"));
    event.preventDefault();
    console.log(users);
    const cpf = document.getElementById("cpf").value;
    const pwd = document.getElementById("pwd").value;

    
    //alert(pwd)
    for(var i = 0; i < users.length; i++){
        if(cpf == users[i].cpf) {
            if(pwd == users[i].password){
                localStorage.setItem("usuario_logado",JSON.stringify(users[i]))
                if(users[i].type == "prod"){
                    window.location.href = "produtor.html"
                } else if(users[i].type == "int") {
                    window.location.href = "interessado.html"
                }
            }

            
        }
        alert("CPF/CNPJ e/ou senha incorretos");
    }
});