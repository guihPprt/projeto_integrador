const nome = document.getElementById("username");
const cpf = document.getElementById("cpf");
const email = document.getElementById("email");
const stpButton = document.getElementById("stp");

const user = JSON.parse(localStorage.getItem("usuario_logado"));

nome.innerHTML = user.username;
cpf.innerHTML = user.cpf;
email.innerHTML = user.email;


stpButton.addEventListener("click",()=>{
    var users = JSON.parse(localStorage.getItem("users"));
    user.type = "prod";

    for(var i = 0; i < users.length; i++){
        if(users[i].cpf == user.cpf){
            users[i].type=user.type;
            break;
        }
    }

    localStorage.setItem("users",JSON.stringify(users));
    localStorage.setItem("usuario_logado",JSON.stringify(user));
    window.location.href = "produtor.html" 
});