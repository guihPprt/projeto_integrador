const button = document.getElementById("login")

const users = JSON.parse(localStorage.getItem("users"));


button.addEventListener("click", (event) => {
    event.preventDefault();

    const cpf = document.getElementById("cpf").value;
    const pwd = document.getElementById("pwd").value;

    //alert(pwd)
    for(var i = 0; i < 2; i++){
        if(cpf == users[i].cpf) {
            if(pwd == users[i].password){
                if(users[i].type == "prod"){
                    window.location.href = "produtor.html"
                } else if(users[i].type == "int") {
                    window.location.href = "interessado.html"
                }
            }
        }
    }
});