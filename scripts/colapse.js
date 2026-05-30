

function esconder(produto) {
    
    const cards = document.querySelector(`.card-${produto}`);
    cards.classList.toggle('hide');
    
    const item = document.getElementById(produto);
    const downa = item.querySelector(".down-arrow");

    if(downa)
        downa.classList.toggle("up");
}