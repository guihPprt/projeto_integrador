

## index.html

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MicroConnect</title>
    <link rel="shortcut icon" href="Assets/logo.svg" type="image/x-icon">
    <link rel="stylesheet" href="styles/Home.css">
</head>

<body>
    <header>
        <img src="Assets/logo.svg">
        <nav>
            <a>PRODUTORES</a>
            <a>PRODUTOS</a>
            <div id="right">
                <a>CADASTRE-SE</a>
                <button type="button">LOGIN</button>
            </div>
        </nav>
    </header>
    <main>
        <div class="Header">
            <div class="Left-A Arrow" onclick="back()">
                <p><</p>
            </div>
            <div class="images">
                <img src="Assets/capa_morango.jpeg">
                <img src="Assets/Foto Destaque.png">
            </div>
            <div class="Right-A Arrow" onclick="next()">
                <p>></p>
            </div>
        </div>

        <h2 id="ds">DESTAQUES DA ESTAÇÃO</h2>

        <div class="itens">
            <!-- Morango -->
            <div class="item" id="morango">
                <div class="Name-d">
                    <div class="top" onclick="esconder('morango')">
                        <p>Morango</p>
                        <img src="Assets/Vector.svg">
                    </div>                    
                </div>
                <div class="card card-morango">
                    <img width="30" src="https://placehold.co/32x32">
                    <p class="nome">Produtor X</p>
                    <p class="disp">10.000</p>
                    <p class="est">Inverno</p>
                    <p class="tel">(12) 93456-7890</p>
                    <button type="button">RESERVAR</button>
                </div>
                <div class="card card-morango">
                    <img width="30" src="https://placehold.co/32x32">
                    <p class="nome">Produtor Y</p>
                    <p class="disp">10.000</p>
                    <p class="est">Inverno</p>
                    <p class="tel">(12) 93456-7890</p>
                    <button type="button">RESERVAR</button>
                </div>
            </div>

            <!-- Caqui -->
            <div class="item" id="caqui">
                <div class="Name">
                    <div class="top" onclick="esconder_caqui()">
                        <p>Caqui</p>
                        <img src="Assets/Vector.svg">
                    </div>                    
                </div>
                <div class="card card-caqui">
                    <img width="30" src="https://placehold.co/32x32">
                    <p class="nome">Produtor Z</p>
                    <p class="disp">10.000</p>
                    <p class="est">Inverno</p>
                    <p class="tel">(12) 93456-7890</p>
                    <button type="button">RESERVAR</button>
                </div>
            </div>

            <!-- Figo -->
            <div class="item" id="figo">
                <div class="Name-d">
                    <div class="top" onclick="esconder_figo()">
                        <p>Figo</p>
                        <img src="Assets/Vector.svg">
                    </div>                    
                </div>
                <div class="card card-figo">
                    <img width="30" src="https://placehold.co/32x32">
                    <p class="nome">Produtor A</p>
                    <p class="disp">10.000</p>
                    <p class="est">Inverno</p>
                    <p class="tel">(12) 93456-7890</p>
                    <button type="button">RESERVAR</button>
                </div>
            </div>
        </div>

        <button type="button" id="vmais">VER MAIS</button>
    </main>
</body>
<script src="scripts/script.js"></script>
<script src="scripts/colapse.js"></script>

</html>

```

## scripts\colapse.js

```js
var morango_height = 100;
var caqui_height = 50;
var figo_height = 50;

var hidden = [
    false,
    false,
    false
]
function esconder_morango() {
    const cards = document.querySelectorAll(".card-morango");
    if (!hidden[0]) {
        cards.forEach(el => el.classList.add("hide"));
    } else {
        cards.forEach(el => el.classList.remove("hide"));
    }
    hidden[0] = !hidden[0];
}

function esconder_caqui() {
    const cards = document.querySelectorAll(".card-caqui");
    if (!hidden[1]) {
        cards.forEach(el => el.classList.add("hide"));
    } else {
        cards.forEach(el => el.classList.remove("hide"));
    }
    hidden[1] = !hidden[1];
}

function esconder_figo() {
    const cards = document.querySelectorAll(".card-figo");
    if (!hidden[2]) {
        cards.forEach(el => el.classList.add("hide"));
    } else {
        cards.forEach(el => el.classList.remove("hide"));
    }
    hidden[2] = !hidden[2];
}

```

## scripts\script.js

```js
// Armazena a posição atual do slider (começa em -200px igual ao seu CSS)
let posicaoAtual = -200; 

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

```

## styles\Home.css

```css
/* =========================
   Fontes
========================= */
@font-face {
    font-family: "Avenir";
    src: url("../Assets/Fonts/Avenir Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
}

/* =========================
   Reset & Base
========================= */
* {
    margin: 0;
    font-family: "Avenir", sans-serif;
}

body {
    background-color: #EFFFC4;
}

/* =========================
   Header
========================= */
header {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: rgba(25, 53, 12, 0.5);
}

header img {
    width: 72px;
    padding: 10px 0 10px 64px;
}

header nav {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 256px;
    padding: 0 64px;
    font-size: 16px;
    color: #fff;
}

#right {
    gap: 16px;
}

#right button {
    width: 147px;
    height: 41px;
    border: none;
    border-radius: 4px;
    background-color: #B98A25;
    font-size: 16px;
    color: #fff;
}

/* =========================
   Main
========================= */
main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* =========================
   Name Blocks
========================= */
.Name,
.Name-d {
    width: 1000px;
    height: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    color: white;
}

.Name p,
.Name-d p {
    flex: 01;
    margin-left: 32px;
}

.Name img,
.Name-d img {
    width: 16px;
    margin-right: 32px;
}

.item{
    overflow: hidden;
    width: 60rem;
    height: auto;
}

.itens {
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.hide {
    display: none;
}

/* =========================
   Top Bars
========================= */
.top {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 0px 0px 0px;
    cursor: pointer;
}

.card {
    background: rgba(104, 125, 49, 0.25);
    padding: 10px;
    display: flex;
    width: 97%;
    transform: translateX(16px);
    justify-content: center;
    align-items: center;
}

.card .nome {
    margin-left: 16px;
    flex: 1;
}

.card .disp {
    flex: 1;
}

.card .est {
    flex: 1;
}

.card .tel {
    flex: 1;
    text-align: end;
}

.card button {
    border: none;
    color: white;
    padding: 4px 24px;
    margin-left: 16px;
    margin-right: 10px;

    border-radius: 4px;
    background: var(--02, #687D31);
}

.Name .top {
    background-color: #687D31;
}

.Name-d .top {
    background-color: #19350C;
}

/* =========================
   Header Images & Arrows
========================= */
.Header {
    display: flex;
    margin: 32px;
}

.Header .images {
    width: 640px;
    display: flex;
    overflow: hidden;
}

.Header .images img {
    height: 316px;
    z-index: 0;
    transition: 200ms;
}

.Header .Right-A {
    background-color: #B98A25;
    border-radius: 0 4px 4px 0;
}

.Header .Left-A {
    background-color: #B98A25;
    border-radius: 4px 0 0 4px;
}

.Arrow {
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-size: 22px;
    color: #fff;
    cursor: pointer;
    transition: 100ms ease-out;
}

.Arrow:hover {
    font-size: 28px;
    background-color: #946e1d;
    transition: 100ms ease-in;
}

/* =========================
   Animations
========================= */
@keyframes next {
    from {
        transform: translateX(-200px);
    }

    to {
        transform: translateX(-1200px);
    }
}

@keyframes back {
    from {
        transform: translateX(-1200px);
    }

    to {
        transform: translateX(-200px);
    }
}

.Next {
    animation: next 200ms;
}

.back {
    animation: back 200ms;
}

/* =========================
   Extras
========================= */
#ds {
    margin-bottom: 32px;
    font-weight: 100;
}

#vmais {
    margin: 32px;
    padding: 8px 64px;
    border: none;
    border-radius: 4px;
    color: white;
    background: var(--04, #B98A25);
}
```