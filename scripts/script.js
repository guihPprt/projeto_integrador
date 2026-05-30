// Armazena a posição atual do slider (começa em -200px igual ao seu CSS)
let posicaoAtual = -200; 




const users = [
    {
        "cpf": 12345678910,
        "password": 123,
        "username": "Produtor X",
        "type": "prod"
    },
    {
        "cpf": 45678912345,
        "password": 456,
        "username": "Interessado Y",
        "type": "int"
    }
];


localStorage.setItem("users", JSON.stringify(users));

function next() {
    const imgs = document.querySelectorAll(".images img");
    
    // Se não chegou no limite final (-1200px), avança 200px (ajuste o valor se precisar)
    if (posicaoAtual > -900) {
        posicaoAtual -= 900; // Move para a esquerda
        for(var i = 0; i < imgs.length; i++)
            imgs[i].style.transform = `translateX(${posicaoAtual}px)`;
    }
}

function back() {
    const imgs = document.querySelectorAll(".images img");
    
    // Se não está no início (-200px), volta 200px
    if (posicaoAtual < -200) {
        posicaoAtual += 900; // Move para a direita
        for(var i = 0; i < imgs.length; i++)
            imgs[i].style.transform = `translateX(${posicaoAtual}px)`;
    }
}
