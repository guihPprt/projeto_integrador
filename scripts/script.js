// Controla o índice da imagem ativa (0 para a primeira, 1 para a segunda...)
let slideIndex = 0; 

function next() {
    const imgs = document.querySelectorAll(".images img");
    // Só avança se não estiver na última imagem
    if (slideIndex < imgs.length - 1) {
        slideIndex++;
        atualizarCarrossel(imgs);
    }
}

function back() {
    const imgs = document.querySelectorAll(".images img");
    // Só recua se não estiver na primeira imagem
    if (slideIndex > 0) {
        slideIndex--;
        atualizarCarrossel(imgs);
    }
}

function atualizarCarrossel(imgs) {
    for (let i = 0; i < imgs.length; i++) {
        // Move as fotos de forma limpa baseando-se no índice atual
        imgs[i].style.transform = `translateX(${-slideIndex * 100}%)`;
    }
}