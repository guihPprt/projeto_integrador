

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
        <a href="index.html">
            <img src="Assets/logo.svg">
        </a>
        <nav>
            <a onclick="alert('EM CONSTRUÇÂO')">PRODUTORES</a>
            <a href="produto.html">PRODUTOS</a>
            <div id="right">
                <a href="register.html">CADASTRE-SE</a>
                <a href="login.html">
                    <button type="button">LOGIN</button>
                </a>
            </div>
        </nav>
    </header>
    <main>
        <div class="Header">
            <div class="Left-A Arrow" onclick="back()">
                <p>
                    < </p>
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
                        <img class="down-arrow" src="Assets/Vector.svg">
                    </div>
                </div>
                <div class="cards card-morango hide">
                    <div class="card">
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
            </div>

            <!-- Caqui -->
            <div class="item" id="caqui">
                <div class="Name">
                    <div class="top" onclick="esconder('caqui')">
                        <p>Caqui</p>
                        <img class="down-arrow" src="Assets/Vector.svg">
                    </div>
                </div>
                <div class="cards card-caqui hide">
                    <div class="card">
                        <img width="30" src="https://placehold.co/32x32">
                        <p class="nome">Produtor Z</p>
                        <p class="disp">10.000</p>
                        <p class="est">Inverno</p>
                        <p class="tel">(12) 93456-7890</p>
                        <button type="button">RESERVAR</button>
                    </div>
                </div>
            </div>

            <!-- Figo -->
            <div class="item" id="figo">
                <div class="Name-d">
                    <div class="top" onclick="esconder('figo')">
                        <p>Figo</p>
                        <img class="down-arrow" src="Assets/Vector.svg">
                    </div>
                </div>
                <div class="cards card-figo hide">
                    <div class="card">
                        <img width="30" src="https://placehold.co/32x32">
                        <p class="nome">Produtor A</p>
                        <p class="disp">10.000</p>
                        <p class="est">Inverno</p>
                        <p class="tel">(12) 93456-7890</p>
                        <button type="button">RESERVAR</button>
                    </div>
                </div>
            </div>
            <div class="bot">
                <a href="produto.html">
                    <button type="button" id="vmais" onclick="">VER MAIS</button>
                </a>
            </div>
    </main>
</body>
<script src="scripts/script.js"></script>
<script src="scripts/colapse.js"></script>

</html>
```

## interessado.html

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MicroConnect</title>
    <link rel="shortcut icon" href="Assets/logo.svg" type="image/x-icon">
    <link rel="stylesheet" href="styles/interessado.css">
</head>

<body>
    <aside>
        <a href="index.html">
            <img src="Assets/logo2.svg">
        </a>
        <nav>
            <a class="selected" href="interessado.html">CLIENTES</a>
            <a class="" href="produtor.html">PRODUTORES</a>
        </nav>
        <div>
            <a href="index.html"><button type="button">SAIR</button></a>
        </div>
    </aside>
    <main>
        <h2 id="ds">ÁREA DO CLIENTE</h2>

        <div class="panel">
            <div class="toppanel">
                <div class="left">
                    <div class="campo">
                        <h3>Cliente</h3>
                        <h2 id="username">CLIENTE LTDA</h2>
                    </div>
                    <div class="campo">
                        <h3>CPF/CNPJ</h3>
                        <h2 id="cpf">00.000.000.000/0001</h2>
                    </div>
                    <div class="campo-horizontal">
                        <div class="campo">
                            <h4>Email:</h4>
                            <h5 id="email">email@cliente.com</h5>
                        </div>
                        <div class="campo">
                            <h4>Senha:</h4>
                            <h5 id="senha">***********</h5>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <button id="ad">ALTERAR DADOS</button>
                    <button id="stp">SE TORNAR PRODUTOR</button>
                </div>
            </div>

            <div class="table">

            </div>
        </div>

    </main>
</body>
<script src="scripts/interessado.js"></script>

</html>
```

## login.html

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MicroConnect</title>
    <link rel="shortcut icon" href="Assets/logo.svg" type="image/x-icon">
    <link rel="stylesheet" href="styles/Login.css">
</head>

<body>
    <header>
        <a href="index.html">
            <img src="Assets/logo.svg">
        </a>
        <nav>
            <a onclick="alert('EM CONSTRUÇÂO')">PRODUTORES</a>
            <a href="produto.html">PRODUTOS</a>
            <div id="right">
                <a href="register.html">CADASTRE-SE</a>
                <a href="login.html">
                    <button type="button">LOGIN</button>
                </a>
            </div>
        </nav>
    </header>
    <main>
        <h2 id="ds">ACESSAR SUA CONTA</h2>
        <div class="panel">
            <form>
                <div class="inp">
                    <label for="cpf">CPF/CNPJ</label>
                    <input id="cpf" name="cpf" type="number">
                </div>
                <div class="inp">
                    <label for="senha">Senha</label>
                    <input id="pwd" type="password">
                </div>
                <div class="actions">
                    <a>ESQUECI MINHA SENHA</a>
                    <button id="login" type="button">ENTRAR</button>
                </div>
            </form>
        </div>
    </main>
</body>
<script src="scripts/login.js"></script>

</html>
```

## PI-code.json

```json
{
  "metadata": {
    "exportedAt": "2026-05-29T00:54:55.311Z",
    "sourceFolder": "PI",
    "totalFiles": 4,
    "totalSize": 9789,
    "totalLines": 420,
    "estimatedTokens": 2449,
    "extensions": [
      "css",
      "html",
      "js"
    ],
    "version": "1.0",
    "dependencies": {
      "index.html": [],
      "scripts\\colapse.js": [],
      "scripts\\script.js": [],
      "styles\\Home.css": []
    }
  },
  "files": [
    {
      "path": "index.html",
      "extension": "html",
      "content": "<!DOCTYPE html>\r\n<html lang=\"pt-BR\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>MicroConnect</title>\r\n    <link rel=\"shortcut icon\" href=\"Assets/logo.svg\" type=\"image/x-icon\">\r\n    <link rel=\"stylesheet\" href=\"styles/Home.css\">\r\n</head>\r\n\r\n<body>\r\n    <header>\r\n        <img src=\"Assets/logo.svg\">\r\n        <nav>\r\n            <a>PRODUTORES</a>\r\n            <a>PRODUTOS</a>\r\n            <div id=\"right\">\r\n                <a>CADASTRE-SE</a>\r\n                <button type=\"button\">LOGIN</button>\r\n            </div>\r\n        </nav>\r\n    </header>\r\n    <main>\r\n        <div class=\"Header\">\r\n            <div class=\"Left-A Arrow\" onclick=\"back()\">\r\n                <p><</p>\r\n            </div>\r\n            <div class=\"images\">\r\n                <img src=\"Assets/capa_morango.jpeg\">\r\n                <img src=\"Assets/Foto Destaque.png\">\r\n            </div>\r\n            <div class=\"Right-A Arrow\" onclick=\"next()\">\r\n                <p>></p>\r\n            </div>\r\n        </div>\r\n\r\n        <h2 id=\"ds\">DESTAQUES DA ESTAÇÃO</h2>\r\n\r\n        <div class=\"itens\">\r\n            <!-- Morango -->\r\n            <div class=\"item\" id=\"morango\">\r\n                <div class=\"Name-d\">\r\n                    <div class=\"top\" onclick=\"esconder('morango')\">\r\n                        <p>Morango</p>\r\n                        <img src=\"Assets/Vector.svg\">\r\n                    </div>                    \r\n                </div>\r\n                <div class=\"cards card-morango\">\r\n                    <div class=\"card\">\r\n                        <img width=\"30\" src=\"https://placehold.co/32x32\">\r\n                        <p class=\"nome\">Produtor X</p>\r\n                        <p class=\"disp\">10.000</p>\r\n                        <p class=\"est\">Inverno</p>\r\n                        <p class=\"tel\">(12) 93456-7890</p>\r\n                        <button type=\"button\">RESERVAR</button>\r\n                    </div>\r\n                    <div class=\"card card-morango\">\r\n                        <img width=\"30\" src=\"https://placehold.co/32x32\">\r\n                        <p class=\"nome\">Produtor Y</p>\r\n                        <p class=\"disp\">10.000</p>\r\n                        <p class=\"est\">Inverno</p>\r\n                        <p class=\"tel\">(12) 93456-7890</p>\r\n                        <button type=\"button\">RESERVAR</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Caqui -->\r\n            <div class=\"item\" id=\"caqui\">\r\n                <div class=\"Name\">\r\n                    <div class=\"top\" onclick=\"esconder('caqui')\">\r\n                        <p>Caqui</p>\r\n                        <img src=\"Assets/Vector.svg\">\r\n                    </div>                    \r\n                </div>\r\n                <div class=\"cards card-caqui\">\r\n                <div class=\"card\">\r\n                    <img width=\"30\" src=\"https://placehold.co/32x32\">\r\n                    <p class=\"nome\">Produtor Z</p>\r\n                    <p class=\"disp\">10.000</p>\r\n                    <p class=\"est\">Inverno</p>\r\n                    <p class=\"tel\">(12) 93456-7890</p>\r\n                    <button type=\"button\">RESERVAR</button>\r\n                </div>\r\n                <div>\r\n            </div>\r\n\r\n            <!-- Figo -->\r\n            <div class=\"item\" id=\"figo\">\r\n                <div class=\"Name-d\">\r\n                    <div class=\"top\" onclick=\"esconder('figo')\">\r\n                        <p>Figo</p>\r\n                        <img src=\"Assets/Vector.svg\">\r\n                    </div>                    \r\n                </div>\r\n                <div class=\"cards card-figo\">\r\n                <div class=\"card\">\r\n                    <img width=\"30\" src=\"https://placehold.co/32x32\">\r\n                    <p class=\"nome\">Produtor A</p>\r\n                    <p class=\"disp\">10.000</p>\r\n                    <p class=\"est\">Inverno</p>\r\n                    <p class=\"tel\">(12) 93456-7890</p>\r\n                    <button type=\"button\">RESERVAR</button>\r\n                </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <button type=\"button\" id=\"vmais\">VER MAIS</button>\r\n    </main>\r\n</body>\r\n<script src=\"scripts/script.js\"></script>\r\n<script src=\"scripts/colapse.js\"></script>\r\n\r\n</html>\r\n",
      "size": 4299,
      "lines": 117,
      "tokens": 1075,
      "modified": "2026-05-29T00:53:31.126Z"
    },
    {
      "path": "scripts\\colapse.js",
      "extension": "js",
      "content": "function esconder(produto) {\r\n    const item = document.getElementById(produto);\r\n    const cards = document.querySelector(`.card-${produto}`);\r\n    cards.classList.toggle('hide');\r\n    \r\n}",
      "size": 189,
      "lines": 6,
      "tokens": 48,
      "modified": "2026-05-29T00:54:02.633Z"
    },
    {
      "path": "scripts\\script.js",
      "extension": "js",
      "content": "// Armazena a posição atual do slider (começa em -200px igual ao seu CSS)\r\nlet posicaoAtual = -200; \r\n\r\nfunction next() {\r\n    const imgs = document.querySelectorAll(\".images img\");\r\n    \r\n    // Se não chegou no limite final (-1200px), avança 200px (ajuste o valor se precisar)\r\n    if (posicaoAtual > -900) {\r\n        posicaoAtual -= 900; // Move para a esquerda\r\n        for(var i = 0; i < imgs.length; i++)\r\n            imgs[i].style.transform = `translateX(${posicaoAtual}px)`;\r\n    }\r\n}\r\n\r\nfunction back() {\r\n    const imgs = document.querySelectorAll(\".images img\");\r\n    \r\n    // Se não está no início (-200px), volta 200px\r\n    if (posicaoAtual < -200) {\r\n        posicaoAtual += 900; // Move para a direita\r\n        for(var i = 0; i < imgs.length; i++)\r\n            imgs[i].style.transform = `translateX(${posicaoAtual}px)`;\r\n    }\r\n}\r\n",
      "size": 846,
      "lines": 25,
      "tokens": 212,
      "modified": "2026-05-28T14:10:50.000Z"
    },
    {
      "path": "styles\\Home.css",
      "extension": "css",
      "content": "/* =========================\r\n   Fontes\r\n========================= */\r\n@font-face {\r\n    font-family: \"Avenir\";\r\n    src: url(\"../Assets/Fonts/Avenir Regular.ttf\") format(\"truetype\");\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n/* =========================\r\n   Reset & Base\r\n========================= */\r\n* {\r\n    margin: 0;\r\n    font-family: \"Avenir\", sans-serif;\r\n}\r\n\r\nbody {\r\n    background-color: #EFFFC4;\r\n}\r\n\r\n/* =========================\r\n   Header\r\n========================= */\r\nheader {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: rgba(25, 53, 12, 0.5);\r\n}\r\n\r\nheader img {\r\n    width: 72px;\r\n    padding: 10px 0 10px 64px;\r\n}\r\n\r\nheader nav {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: end;\r\n    align-items: center;\r\n    gap: 256px;\r\n    padding: 0 64px;\r\n    font-size: 16px;\r\n    color: #fff;\r\n}\r\n\r\n#right {\r\n    gap: 16px;\r\n}\r\n\r\n#right button {\r\n    width: 147px;\r\n    height: 41px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    background-color: #B98A25;\r\n    font-size: 16px;\r\n    color: #fff;\r\n}\r\n\r\n/* =========================\r\n   Main\r\n========================= */\r\nmain {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n/* =========================\r\n   Name Blocks\r\n========================= */\r\n.Name,\r\n.Name-d {\r\n    width: 1000px;\r\n    height: 48px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0 16px;\r\n    color: white;\r\n}\r\n\r\n.Name p,\r\n.Name-d p {\r\n    flex: 01;\r\n    margin-left: 32px;\r\n}\r\n\r\n.Name img,\r\n.Name-d img {\r\n    width: 16px;\r\n    margin-right: 32px;\r\n}\r\n\r\n.item{\r\n    overflow: hidden;\r\n    width: 60rem;\r\n    height: auto;\r\n}\r\n\r\n.itens {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n/* =========================\r\n   Top Bars\r\n========================= */\r\n.top {\r\n    width: 100%;\r\n    height: 64px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0px 0px 0px 0px;\r\n    cursor: pointer;\r\n}\r\n\r\n.card {\r\n    background: rgba(104, 125, 49, 0.25);\r\n    padding: 10px;\r\n    display: flex;\r\n    width: 97%;\r\n    transform: translateX(16px);\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.card .nome {\r\n    margin-left: 16px;\r\n    flex: 1;\r\n}\r\n\r\n.card .disp {\r\n    flex: 1;\r\n}\r\n\r\n.card .est {\r\n    flex: 1;\r\n}\r\n\r\n.card .tel {\r\n    flex: 1;\r\n    text-align: end;\r\n}\r\n\r\n.card button {\r\n    border: none;\r\n    color: white;\r\n    padding: 4px 24px;\r\n    margin-left: 16px;\r\n    margin-right: 10px;\r\n\r\n    border-radius: 4px;\r\n    background: var(--02, #687D31);\r\n}\r\n\r\n.Name .top {\r\n    background-color: #687D31;\r\n}\r\n\r\n.Name-d .top {\r\n    background-color: #19350C;\r\n}\r\n\r\n/* =========================\r\n   Header Images & Arrows\r\n========================= */\r\n.Header {\r\n    display: flex;\r\n    margin: 32px;\r\n}\r\n\r\n.Header .images {\r\n    width: 640px;\r\n    display: flex;\r\n    overflow: hidden;\r\n}\r\n\r\n.Header .images img {\r\n    height: 316px;\r\n    z-index: 0;\r\n    transition: 200ms;\r\n}\r\n\r\n.Header .Right-A {\r\n    background-color: #B98A25;\r\n    border-radius: 0 4px 4px 0;\r\n}\r\n\r\n.Header .Left-A {\r\n    background-color: #B98A25;\r\n    border-radius: 4px 0 0 4px;\r\n}\r\n\r\n.Arrow {\r\n    width: 32px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    z-index: 1;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: 800;\r\n    font-size: 22px;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    transition: 100ms ease-out;\r\n}\r\n\r\n.Arrow:hover {\r\n    font-size: 28px;\r\n    background-color: #946e1d;\r\n    transition: 100ms ease-in;\r\n}\r\n\r\n/* =========================\r\n   Animations\r\n========================= */\r\n@keyframes next {\r\n    from {\r\n        transform: translateX(-200px);\r\n    }\r\n\r\n    to {\r\n        transform: translateX(-1200px);\r\n    }\r\n}\r\n\r\n@keyframes back {\r\n    from {\r\n        transform: translateX(-1200px);\r\n    }\r\n\r\n    to {\r\n        transform: translateX(-200px);\r\n    }\r\n}\r\n\r\n.Next {\r\n    animation: next 200ms;\r\n}\r\n\r\n.back {\r\n    animation: back 200ms;\r\n}\r\n\r\n/* =========================\r\n   Extras\r\n========================= */\r\n#ds {\r\n    margin-bottom: 32px;\r\n    font-weight: 100;\r\n}\r\n\r\n#vmais {\r\n    margin: 32px;\r\n    padding: 8px 64px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    color: white;\r\n    background: var(--04, #B98A25);\r\n}",
      "size": 4455,
      "lines": 272,
      "tokens": 1114,
      "modified": "2026-05-29T00:54:33.816Z"
    }
  ],
  "dependencyGraph": {
    "nodes": [
      "index.html",
      "scripts\\colapse.js",
      "scripts\\script.js",
      "styles\\Home.css"
    ],
    "edges": []
  }
}
```

## PI-code.md

```md


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
```

## produto.html

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MicroConnect - Produtos</title>
    <link rel="shortcut icon" href="Assets/logo.svg" type="image/x-icon">
    <link rel="stylesheet" href="styles/produtos.css">
</head>

<body>
    <header>
        <a href="index.html">
            <img src="Assets/logo.svg">
        </a>
        <nav>
            <a onclick="alert('EM CONSTRUÇÂO')">PRODUTORES</a>
            <a href="produto.html">PRODUTOS</a>
            <div id="right">
                <a href="register.html">CADASTRE-SE</a>
                <a href="login.html">
                    <button type="button">LOGIN</button>
                </a>
            </div>
        </nav>
    </header>
    <main>
       

        <h2 id="ds">LISTA COMPLETA DE PRODUTOS</h2>

        <div class="itens">
            <!-- Morango -->
            <div class="item" id="morango">
                <div class="Name-d">
                    <div class="top" onclick="esconder('morango')">
                        <p>Morango</p>
                        <img class="down-arrow" src="Assets/Vector.svg">
                    </div>
                </div>
                <div class="cards card-morango hide">
                    <div class="card">
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
            </div>

            <!-- Caqui -->
            <div class="item" id="caqui">
                <div class="Name">
                    <div class="top" onclick="esconder('caqui')">
                        <p>Caqui</p>
                        <img class="down-arrow" src="Assets/Vector.svg">
                    </div>
                </div>
                <div class="cards card-caqui hide">
                    <div class="card">
                        <img width="30" src="https://placehold.co/32x32">
                        <p class="nome">Produtor Z</p>
                        <p class="disp">10.000</p>
                        <p class="est">Inverno</p>
                        <p class="tel">(12) 93456-7890</p>
                        <button type="button">RESERVAR</button>
                    </div>
                </div>
            </div>

            <!-- Figo -->
            <div class="item" id="figo">
                <div class="Name-d">
                    <div class="top" onclick="esconder('figo')">
                        <p>Figo</p>
                        <img class="down-arrow" src="Assets/Vector.svg">
                    </div>
                </div>
                <div class="cards card-figo hide">
                    <div class="card">
                        <img width="30" src="https://placehold.co/32x32">
                        <p class="nome">Produtor A</p>
                        <p class="disp">10.000</p>
                        <p class="est">Inverno</p>
                        <p class="tel">(12) 93456-7890</p>
                        <button type="button">RESERVAR</button>
                    </div>
                </div>
            </div>
            <div class="item" id="kiwi">
                <div class="Name">
                    <div class="top" onclick="esconder('kiwi')">
                        <p>Kiwi</p>
                        <img class="down-arrow" src="Assets/Vector.svg">
                    </div>
                </div>
                <div class="cards card-kiwi hide">
                    <div class="card">
                        <img width="30" src="https://placehold.co/32x32">
                        <p class="nome">Produtor A</p>
                        <p class="disp">10.000</p>
                        <p class="est">Inverno</p>
                        <p class="tel">(12) 93456-7890</p>
                        <button type="button">RESERVAR</button>
                    </div>
                </div>
            </div>
            <div class="item" id="goiaba">
                <div class="Name-d">
                    <div class="top" onclick="esconder('goiaba')">
                        <p>Goiaba</p>
                        <img class="down-arrow" src="Assets/Vector.svg">
                    </div>
                </div>
                <div class="cards card-goiaba hide">
                    <div class="card">
                        <img width="30" src="https://placehold.co/32x32">
                        <p class="nome">Produtor A</p>
                        <p class="disp">10.000</p>
                        <p class="est">Inverno</p>
                        <p class="tel">(12) 93456-7890</p>
                        <button type="button">RESERVAR</button>
                    </div>
                </div>
            </div>
            <div class="item" id="abacaxi">
                <div class="Name">
                    <div class="top" onclick="esconder('abacaxi')">
                        <p>Abacaxi</p>
                        <img class="down-arrow" src="Assets/Vector.svg">
                    </div>
                </div>
                <div class="cards card-abacaxi hide">
                    <div class="card">
                        <img width="30" src="https://placehold.co/32x32">
                        <p class="nome">Produtor A</p>
                        <p class="disp">10.000</p>
                        <p class="est">Inverno</p>
                        <p class="tel">(12) 93456-7890</p>
                        <button type="button">RESERVAR</button>
                    </div>
                </div>
            </div>
            <div class="bot">
                
            </div>
    </main>
</body>
<script src="scripts/script.js"></script>
<script src="scripts/colapse.js"></script>

</html>
```

## produtor.html

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MicroConnect</title>
    <link rel="shortcut icon" href="Assets/logo.svg" type="image/x-icon">
    <link rel="stylesheet" href="styles/produtor.css">
</head>

<body>
    <aside>
        <a href="index.html">
            <img src="Assets/logo2.svg">
        </a>
        <nav>
            <a href="interessado.html">CLIENTES</a>
            <a class="selected" href="produtor.html">PRODUTORES</a>
        </nav>
        <div>
            <a href="index.html"><button type="button">SAIR</button></a>
        </div>
    </aside>
    <main>
        <h2 id="ds">ÁREA DO PRODUTOR</h2>
        <div class="panel">
            <div class="topform">
                <div class="inp">
                    <label for="prod">Produto</label>
                    <input name="prod" type="text" id="prod">
                </div>
                <div class="inp">
                    <label for="safras">Época de Safra</label>
                    <select name="safras" id="safras">
                        <option value="verao">Verão</option>
                        <option value="outono">Outono</option>
                        <option value="inverno">Inverno</option>
                        <option value="primavera">Primavera</option>
                    </select>
                </div>
                <div class="inp">
                    <label for="qtd">Quantidade Disponível</label>
                    <input name="qtd" id="qtd" type="number">
                </div>
            </div>
            <div class="botform">
                <label for="endereco">Endereço</label>
                <input type="text" id="endereco" name="endereco">
            </div>
            <button id="criar" type="button">ADICIONAR</button>

            <div>
                <table id="tabelaprodutos">
                    <thead>
                        <tr class="toprow">
                            <th>Produto</th>
                            <th>Época de Safra</th>
                            <th>Quantidade Disponivel</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="tpbody">

                    </tbody>
                </table>
            </div>
        </div>
    </main>
</body>
<script src="scripts/produtor.js"></script>

</html>
```

## projeto_integrador-code.md

```md


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
        <a href="index.html">
            <img src="Assets/logo.svg">
        </a>
        <nav>
            <a onclick="alert('EM CONSTRUÇÂO')">PRODUTORES</a>
            <a href="produto.html">PRODUTOS</a>
            <div id="right">
                <a href="register.html">CADASTRE-SE</a>
                <a href="login.html">
                    <button type="button">LOGIN</button>
                </a>
            </div>
        </nav>
    </header>
    <main>
        <div class="Header">
            <div class="Left-A Arrow" onclick="back()">
                <p>
                    < </p>
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
                        <img class="down-arrow" src="Assets/Vector.svg">
                    </div>
                </div>
                <div class="cards card-morango hide">
                    <div class="card">
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
            </div>

            <!-- Caqui -->
            <div class="item" id="caqui">
                <div class="Name">
                    <div class="top" onclick="esconder('caqui')">
                        <p>Caqui</p>
                        <img class="down-arrow" src="Assets/Vector.svg">
                    </div>
                </div>
                <div class="cards card-caqui hide">
                    <div class="card">
                        <img width="30" src="https://placehold.co/32x32">
                        <p class="nome">Produtor Z</p>
                        <p class="disp">10.000</p>
                        <p class="est">Inverno</p>
                        <p class="tel">(12) 93456-7890</p>
                        <button type="button">RESERVAR</button>
                    </div>
                </div>
            </div>

            <!-- Figo -->
            <div class="item" id="figo">
                <div class="Name-d">
                    <div class="top" onclick="esconder('figo')">
                        <p>Figo</p>
                        <img class="down-arrow" src="Assets/Vector.svg">
                    </div>
                </div>
                <div class="cards card-figo hide">
                    <div class="card">
                        <img width="30" src="https://placehold.co/32x32">
                        <p class="nome">Produtor A</p>
                        <p class="disp">10.000</p>
                        <p class="est">Inverno</p>
                        <p class="tel">(12) 93456-7890</p>
                        <button type="button">RESERVAR</button>
                    </div>
                </div>
            </div>
            <div class="bot">
                <a href="produto.html">
                    <button type="button" id="vmais" onclick="">VER MAIS</button>
                </a>
            </div>
    </main>
</body>
<script src="scripts/script.js"></script>
<script src="scripts/colapse.js"></script>

</html>
```

## interessado.html

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MicroConnect</title>
    <link rel="shortcut icon" href="Assets/logo.svg" type="image/x-icon">
    <link rel="stylesheet" href="styles/interessado.css">
</head>

<body>
    <aside>
        <a href="index.html">
            <img src="Assets/logo2.svg">
        </a>
        <nav>
            <a class="selected" href="interessado.html">CLIENTES</a>
            <a class="" href="produtor.html">PRODUTORES</a>
        </nav>
        <div>
            <a href="index.html"><button type="button">SAIR</button></a>
        </div>
    </aside>
    <main>
        <h2 id="ds">ÁREA DO CLIENTE</h2>

        <div class="panel">
            <div class="toppanel">
                <div class="left">
                    <div class="campo">
                        <h3>Cliente</h3>
                        <h2 id="username">CLIENTE LTDA</h2>
                    </div>
                    <div class="campo">
                        <h3>CPF/CNPJ</h3>
                        <h2 id="cpf">00.000.000.000/0001</h2>
                    </div>
                    <div class="campo-horizontal">
                        <div class="campo">
                            <h4>Email:</h4>
                            <h5 id="email">email@cliente.com</h5>
                        </div>
                        <div class="campo">
                            <h4>Senha:</h4>
                            <h5 id="senha">***********</h5>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <button id="ad">ALTERAR DADOS</button>
                    <button id="stp">SE TORNAR PRODUTOR</button>
                </div>
            </div>

            <div class="table">

            </div>
        </div>

    </main>
</body>
<script src="scripts/interessado.js"></script>

</html>
```

## login.html

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MicroConnect</title>
    <link rel="shortcut icon" href="Assets/logo.svg" type="image/x-icon">
    <link rel="stylesheet" href="styles/Login.css">
</head>

<body>
    <header>
        <a href="index.html">
            <img src="Assets/logo.svg">
        </a>
        <nav>
            <a onclick="alert('EM CONSTRUÇÂO')">PRODUTORES</a>
            <a href="produto.html">PRODUTOS</a>
            <div id="right">
                <a href="register.html">CADASTRE-SE</a>
                <a href="login.html">
                    <button type="button">LOGIN</button>
                </a>
            </div>
        </nav>
    </header>
    <main>
        <h2 id="ds">ACESSAR SUA CONTA</h2>
        <div class="panel">
            <form>
                <div class="inp">
                    <label for="cpf">CPF/CNPJ</label>
                    <input id="cpf" name="cpf" type="number">
                </div>
                <div class="inp">
                    <label for="senha">Senha</label>
                    <input id="pwd" type="password">
                </div>
                <div class="actions">
                    <a>ESQUECI MINHA SENHA</a>
                    <button id="login" type="button">ENTRAR</button>
                </div>
            </form>
        </div>
    </main>
</body>
<script src="scripts/login.js"></script>

</html>
```

## produto.html

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MicroConnect - Produtos</title>
    <link rel="shortcut icon" href="Assets/logo.svg" type="image/x-icon">
    <link rel="stylesheet" href="styles/produtos.css">
</head>

<body>
    <header>
        <a href="index.html">
            <img src="Assets/logo.svg">
        </a>
        <nav>
            <a onclick="alert('EM CONSTRUÇÂO')">PRODUTORES</a>
            <a href="produto.html">PRODUTOS</a>
            <div id="right">
                <a href="register.html">CADASTRE-SE</a>
                <a href="login.html">
                    <button type="button">LOGIN</button>
                </a>
            </div>
        </nav>
    </header>
    <main>
       

        <h2 id="ds">LISTA COMPLETA DE PRODUTOS</h2>

        <div class="itens">
            <!-- Morango -->
            <div class="item" id="morango">
                <div class="Name-d">
                    <div class="top" onclick="esconder('morango')">
                        <p>Morango</p>
                        <img class="down-arrow" src="Assets/Vector.svg">
                    </div>
                </div>
                <div class="cards card-morango hide">
                    <div class="card">
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
            </div>

            <!-- Caqui -->
            <div class="item" id="caqui">
                <div class="Name">
                    <div class="top" onclick="esconder('caqui')">
                        <p>Caqui</p>
                        <img class="down-arrow" src="Assets/Vector.svg">
                    </div>
                </div>
                <div class="cards card-caqui hide">
                    <div class="card">
                        <img width="30" src="https://placehold.co/32x32">
                        <p class="nome">Produtor Z</p>
                        <p class="disp">10.000</p>
                        <p class="est">Inverno</p>
                        <p class="tel">(12) 93456-7890</p>
                        <button type="button">RESERVAR</button>
                    </div>
                </div>
            </div>

            <!-- Figo -->
            <div class="item" id="figo">
                <div class="Name-d">
                    <div class="top" onclick="esconder('figo')">
                        <p>Figo</p>
                        <img class="down-arrow" src="Assets/Vector.svg">
                    </div>
                </div>
                <div class="cards card-figo hide">
                    <div class="card">
                        <img width="30" src="https://placehold.co/32x32">
                        <p class="nome">Produtor A</p>
                        <p class="disp">10.000</p>
                        <p class="est">Inverno</p>
                        <p class="tel">(12) 93456-7890</p>
                        <button type="button">RESERVAR</button>
                    </div>
                </div>
            </div>
            <div class="item" id="kiwi">
                <div class="Name">
                    <div class="top" onclick="esconder('kiwi')">
                        <p>Kiwi</p>
                        <img class="down-arrow" src="Assets/Vector.svg">
                    </div>
                </div>
                <div class="cards card-kiwi hide">
                    <div class="card">
                        <img width="30" src="https://placehold.co/32x32">
                        <p class="nome">Produtor A</p>
                        <p class="disp">10.000</p>
                        <p class="est">Inverno</p>
                        <p class="tel">(12) 93456-7890</p>
                        <button type="button">RESERVAR</button>
                    </div>
                </div>
            </div>
            <div class="item" id="goiaba">
                <div class="Name-d">
                    <div class="top" onclick="esconder('goiaba')">
                        <p>Goiaba</p>
                        <img class="down-arrow" src="Assets/Vector.svg">
                    </div>
                </div>
                <div class="cards card-goiaba hide">
                    <div class="card">
                        <img width="30" src="https://placehold.co/32x32">
                        <p class="nome">Produtor A</p>
                        <p class="disp">10.000</p>
                        <p class="est">Inverno</p>
                        <p class="tel">(12) 93456-7890</p>
                        <button type="button">RESERVAR</button>
                    </div>
                </div>
            </div>
            <div class="item" id="abacaxi">
                <div class="Name">
                    <div class="top" onclick="esconder('abacaxi')">
                        <p>Abacaxi</p>
                        <img class="down-arrow" src="Assets/Vector.svg">
                    </div>
                </div>
                <div class="cards card-abacaxi hide">
                    <div class="card">
                        <img width="30" src="https://placehold.co/32x32">
                        <p class="nome">Produtor A</p>
                        <p class="disp">10.000</p>
                        <p class="est">Inverno</p>
                        <p class="tel">(12) 93456-7890</p>
                        <button type="button">RESERVAR</button>
                    </div>
                </div>
            </div>
            <div class="bot">
                
            </div>
    </main>
</body>
<script src="scripts/script.js"></script>
<script src="scripts/colapse.js"></script>

</html>
```

## produtor.html

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MicroConnect</title>
    <link rel="shortcut icon" href="Assets/logo.svg" type="image/x-icon">
    <link rel="stylesheet" href="styles/produtor.css">
</head>

<body>
    <aside>
        <a href="index.html">
            <img src="Assets/logo2.svg">
        </a>
        <nav>
            <a href="interessado.html">CLIENTES</a>
            <a class="selected" href="produtor.html">PRODUTORES</a>
        </nav>
        <div>
            <a href="index.html"><button type="button">SAIR</button></a>
        </div>
    </aside>
    <main>
        <h2 id="ds">ÁREA DO PRODUTOR</h2>
        <div class="panel">
            <div class="topform">
                <div class="inp">
                    <label for="prod">Produto</label>
                    <input name="prod" type="text" id="prod">
                </div>
                <div class="inp">
                    <label for="safras">Época de Safra</label>
                    <select name="safras" id="safras">
                        <option value="verao">Verão</option>
                        <option value="outono">Outono</option>
                        <option value="inverno">Inverno</option>
                        <option value="primavera">Primavera</option>
                    </select>
                </div>
                <div class="inp">
                    <label for="qtd">Quantidade Disponível</label>
                    <input name="qtd" id="qtd" type="number">
                </div>
            </div>
            <div class="botform">
                <label for="endereco">Endereço</label>
                <input type="text" id="endereco" name="endereco">
            </div>
            <button id="criar" type="button">ADICIONAR</button>

            <div>
                <table id="tabelaprodutos">
                    <thead>
                        <tr class="toprow">
                            <th>Produto</th>
                            <th>Época de Safra</th>
                            <th>Quantidade Disponivel</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="tpbody">

                    </tbody>
                </table>
            </div>
        </div>
    </main>
</body>
<script src="scripts/produtor.js"></script>

</html>
```

## register.html

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MicroConnect</title>
    <link rel="shortcut icon" href="Assets/logo.svg" type="image/x-icon">
    <link rel="stylesheet" href="styles/register.css">
</head>

<body>
    <header>
        <a href="index.html">
            <img src="Assets/logo.svg">
        </a>
        <nav>
            <a onclick="alert('EM CONSTRUÇÂO')">PRODUTORES</a>
            <a href="produto.html">PRODUTOS</a>
            <div id="right">
                <a href="register.html">CADASTRE-SE</a>
                <a href="login.html">
                    <button type="button">LOGIN</button>
                </a>
            </div>
        </nav>
    </header>
    <main>
        <h2 id="ds">CADASTRE-SE</h2>
        <div class="panel">
            <form id="registerForm">
                <div class="inp">
                    <label for="name">Nome</label>
                    <input id="name" name="name" type="text" required>
                </div>
                <div class="inp">
                    <label for="cpf">CPF/CNPJ</label>
                    <input id="cpf" name="cpf" type="number" required>
                </div>
                <div class="section">
                    <div class="inp">
                        <label for="email">E-mail</label>
                        <input id="email" type="email" required>
                    </div>
                    <div class="inp">
                        <label for="pwd">Senha</label>
                        <input id="pwd" type="password" required>
                    </div>
                </div>
                <div class="actions">
                    <a>ESQUECI MINHA SENHA</a>
                    <button id="login" type="submit">ENTRAR</button>
                </div>
            </form>
        </div>
    </main>
</body>
<script src="scripts/register.js"></script>

</html>
```

## scripts\colapse.js

```js


function esconder(produto) {
    
    const cards = document.querySelector(`.card-${produto}`);
    cards.classList.toggle('hide');
    
    const item = document.getElementById(produto);
    const downa = item.querySelector(".down-arrow");

    if(downa)
        downa.classList.toggle("up");
}
```

## scripts\interessado.js

```js
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
```

## scripts\produtor.js

```js
const cButton = document.getElementById("criar");
const tabela = document.getElementById("tpbody");

cButton.addEventListener("click", () => add());

window.addEventListener("DOMContentLoaded", () => {
    const produtos = getProdutos();
    const usuarioLogado = getUsuario();
    
    produtos
        .filter(p => p.criador === usuarioLogado.cpf)
        .forEach(p => addTable(p.nome, p.safra, p.qtd, false));
});

function getUsuario() {
    return JSON.parse(localStorage.getItem("usuario_logado"));
}

function getProdutos() {
    return JSON.parse(localStorage.getItem("produtos")) || [];
}

function saveProdutos(produtos) {
    localStorage.setItem("produtos", JSON.stringify(produtos));
}

function add() {
    const nome = document.getElementById("prod").value.trim();
    const safra = document.getElementById("safras").value;
    const qtd = document.getElementById("qtd").value;
    const end = document.getElementById("endereco").value.trim();
    const usuarioLogado = getUsuario();

    if (!nome || !qtd || !end) {
        alert("Preencha todos os campos!");
        return;
    }

    const produtos = getProdutos();

    const jaExiste = produtos.some(
        p => p.nome.toLowerCase() === nome.toLowerCase() && p.criador === usuarioLogado.cpf
    );

    if (jaExiste) {
        alert("Você já cadastrou esse produto!");
        return;
    }

    const item = { nome, safra, qtd, endereco: end, criador: usuarioLogado.cpf };
    produtos.push(item);
    saveProdutos(produtos);

    addTable(nome, safra, qtd, true);
    limparCampos();
}

function addTable(nome, safra, qtd, animado = false) {
    const tr = document.createElement("tr");
    if (animado) tr.classList.add("linha-nova");

    tr.innerHTML = `
        <td>${nome}</td>
        <td>${safra}</td>
        <td>${qtd} unidades</td>
        <td>
            <button class="btn-alterar" type="button">ALTERAR</button>
            <button class="btn-apagar" type="button">APAGAR</button>
        </td>
    `;

    tr.querySelector(".btn-alterar").addEventListener("click", () => alterar(tr, nome));
    tr.querySelector(".btn-apagar").addEventListener("click", () => apagar(tr, nome));
    tabela.appendChild(tr);
}

// ✅ Nova função de apagar
function apagar(tr, nome) {
    if (!confirm(`Deseja apagar o produto "${nome}"?`)) return;

    const usuarioLogado = getUsuario();
    let produtos = getProdutos();

    produtos = produtos.filter(
        p => !(p.nome === nome && p.criador === usuarioLogado.cpf)
    );

    saveProdutos(produtos);
    tr.remove();
}

function alterar(tr, nomeOriginal) {
    const produtos = getProdutos();
    const usuarioLogado = getUsuario();

    const produto = produtos.find(
        p => p.nome === nomeOriginal && p.criador === usuarioLogado.cpf
    );
    if (!produto) return;

    tr.innerHTML = `
        <td><input class="edit-input" value="${produto.nome}" /></td>
        <td>
            <select class="edit-input">
                <option value="verao"     ${produto.safra === "verao"     ? "selected" : ""}>Verão</option>
                <option value="outono"    ${produto.safra === "outono"    ? "selected" : ""}>Outono</option>
                <option value="inverno"   ${produto.safra === "inverno"   ? "selected" : ""}>Inverno</option>
                <option value="primavera" ${produto.safra === "primavera" ? "selected" : ""}>Primavera</option>
            </select>
        </td>
        <td><input class="edit-input" type="number" value="${produto.qtd}" /></td>
        <td>
            <button class="btn-salvar" type="button">SALVAR</button>
            <button class="btn-cancelar" type="button">✕</button>
            <button class="btn-apagar" type="button">APAGAR</button>
        </td>
    `;

    tr.querySelector(".btn-salvar").addEventListener("click", () => {
        const inputs = tr.querySelectorAll(".edit-input");
        const novoNome = inputs[0].value.trim();
        const novaSafra = inputs[1].value;
        const novaQtd = inputs[2].value;

        if (!novoNome || !novaQtd) {
            alert("Preencha todos os campos!");
            return;
        }

        const index = produtos.findIndex(
            p => p.nome === nomeOriginal && p.criador === usuarioLogado.cpf
        );
        produtos[index] = { ...produtos[index], nome: novoNome, safra: novaSafra, qtd: novaQtd };
        saveProdutos(produtos);

        tr.innerHTML = `
            <td>${novoNome}</td>
            <td>${novaSafra}</td>
            <td>${novaQtd} unidades</td>
            <td>
                <button class="btn-alterar" type="button">ALTERAR</button>
                <button class="btn-apagar" type="button">APAGAR</button>
            </td>
        `;
        tr.querySelector(".btn-alterar").addEventListener("click", () => alterar(tr, novoNome));
        tr.querySelector(".btn-apagar").addEventListener("click", () => apagar(tr, novoNome));
    });

    tr.querySelector(".btn-cancelar").addEventListener("click", () => {
        tr.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.safra}</td>
            <td>${produto.qtd} unidades</td>
            <td>
                <button class="btn-alterar" type="button">ALTERAR</button>
                <button class="btn-apagar" type="button">APAGAR</button>
            </td>
        `;
        tr.querySelector(".btn-alterar").addEventListener("click", () => alterar(tr, produto.nome));
        tr.querySelector(".btn-apagar").addEventListener("click", () => apagar(tr, produto.nome));
    });

    tr.querySelector(".btn-apagar").addEventListener("click", () => apagar(tr, nomeOriginal));
}

function limparCampos() {
    document.getElementById("prod").value = "";
    document.getElementById("qtd").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("safras").selectedIndex = 0;
}
```

## scripts\register.js

```js
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

    users.push(usuario);
    localStorage.setItem("users",JSON.stringify(users));
    alert("USUARIO CADASTRADO")
    
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
    margin: 8px;
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
    transform: translateX(-2.5%);
    width: 60rem;
    height: auto;
}

.itens {
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

a{
    cursor: pointer;
    text-decoration: none;
    color: white;
}

button {
    cursor: pointer;
}

button:hover{
    transform: scale(1.05);
}

.cards {
    transition: 100ms all;
}

.card {
    background: rgba(104, 125, 49, 0.25);
    padding: 10px;
    display: flex;
    width: 61.26rem;
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
}

.Arrow:hover {
    font-size: 28px;
    background-color: #E3B843;
}

.down-arrow {
    
}


.up {
    transform: rotateZ(180deg);
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

#vmais:hover {
    background-color: var(--04, #E3B843);
}

.bot{
    width: 98.4%;
    transform: translateX(16px);
    display: flex;
    justify-content: center;
}
```

## styles\interessado.css

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
    display: flex;
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
    margin: 8px;
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
    align-items: center;
    justify-content: center;
    padding: 32px;
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

.item {
    transform: translateX(-2.5%);
    width: 60rem;
    height: auto;
}

.itens {
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

a {
    cursor: pointer;
    text-decoration: none;
    color: white;
}

button {
    cursor: pointer;
}

button:hover {
    transform: scale(1.05);
}

.cards {
    transition: 100ms all;
}

.card {
    background: rgba(104, 125, 49, 0.25);
    padding: 10px;
    display: flex;
    width: 61.26rem;
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
}

.Arrow:hover {
    font-size: 28px;
    background-color: #E3B843;
}




.up {
    transform: rotateZ(180deg);
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
    transform: translateX(-195%) translateY(-0px);
    margin-bottom: 16px;
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

#vmais:hover {
    background-color: var(--04, #E3B843);
}

.bot {
    width: 98.4%;
    transform: translateX(16px);
    display: flex;
    justify-content: center;
}


aside {
    display: flex;
    width: 219.5px;
    flex-direction: column;
    height: 100vh;
    background: rgba(25, 53, 12, 0.50);
    align-items: center;
}

aside img {
    height: 117.5px;
    padding: 32px;
}

aside nav {
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(-15%);
    gap: 8px;
}

aside div {
    flex: 1;
}

aside div button {
    border-radius: 4px;
    background: var(--04, #B98A25);
    border: none;

    display: flex;
    padding: 8px 48px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
}

.selected {
    color: var(--01, #19350C);
    text-align: center;
    font-family: Avenir;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.topform {
    display: flex;
}

.inp {
    display: flex;
    flex-direction: column;
}

#prod {
    width: 336.5px;
}

#safras {
    width: 150px;
    height: 31px;
}

#qtd {
    width: 180px;
}

#qtd,
#prod {
    height: 25px;
}



.botform {
    display: flex;
    flex-direction: column;
}

.botform input {
    width: 675.5px;
    height: 25px;
}

.panel button {
    margin-top: 4px;
    background-color: #687D31;
    color: white;
    border: none;

    display: flex;
    padding: 4px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.panel {
    background-color: rgba(104, 125, 49, 0.25);
    width: 1000px;
    height: 490px;
    display: flex;
    flex-direction: column;
    padding: 16px;
}

table {
    width: 644.5px;
}

.toprow {
    color: #19350C;

}

th {
    font-weight: bold;
}

.left {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.left h3, .left h2, .left h5, .left h4 {
    font-weight: 400;
}

.left h3 {
    font-size: 24px;
}

.left h2{
    font-size: 30px;
}



.campo-horizontal {
    display: flex;
    gap: 256px
}

.right {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    width: 100%;
}

.right button {
    

    padding: 8px 48px;
    width: 256px;

}

.table {
    flex: 1;
}

.toppanel{
    display: flex;
    flex:1;
}
```

## styles\Login.css

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
    margin: 8px;
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

.item {
    transform: translateX(-2.5%);
    width: 60rem;
    height: auto;
}

.itens {
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

a {
    cursor: pointer;
    text-decoration: none;
    color: white;
}

button {
    cursor: pointer;
}

button:hover {
    transform: scale(1.05);
}

.cards {
    transition: 100ms all;
}

.card {
    background: rgba(104, 125, 49, 0.25);
    padding: 10px;
    display: flex;
    width: 61.26rem;
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
}

.Arrow:hover {
    font-size: 28px;
    background-color: #E3B843;
}




.up {
    transform: rotateZ(180deg);
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
    margin-top: 32px;
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

#vmais:hover {
    background-color: var(--04, #E3B843);
}

.bot {
    width: 98.4%;
    transform: translateX(16px);
    display: flex;
    justify-content: center;
}



.panel {
    border-radius: 4px;
    background: rgba(104, 125, 49, 0.25);
}

form {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
}

form .inp {
    display: flex;
    flex-direction: column;
}

label {
    color: var(--01, #19350C);
    font-family: Avenir;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.inp input {
    width: 365px;
    outline: none;
}

form .actions {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 8px;
}


.actions button {
    display: flex;
    padding: 4px 24px;
    justify-content: center;
    align-items: center;
    gap: 5px;


    color: #FFF;
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    border-radius: 4px;
    background: var(--02, #687D31);
    color: white;
    border: none;
}


.actions a {
    color: var(--02, #687D31);
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
```

## styles\produtor.css

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
    display: flex;
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
    margin: 8px;
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
    align-items: center;
    justify-content: center;
    padding: 32px;
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

.item {
    transform: translateX(-2.5%);
    width: 60rem;
    height: auto;
}

.itens {
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

a {
    cursor: pointer;
    text-decoration: none;
    color: white;
}

button {
    cursor: pointer;
}

button:hover {
    transform: scale(1.05);
}

.cards {
    transition: 100ms all;
}

.card {
    background: rgba(104, 125, 49, 0.25);
    padding: 10px;
    display: flex;
    width: 61.26rem;
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
}

.Arrow:hover {
    font-size: 28px;
    background-color: #E3B843;
}




.up {
    transform: rotateZ(180deg);
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
    transform: translateX(-95%) translateY(20px);
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

#vmais:hover {
    background-color: var(--04, #E3B843);
}

.bot {
    width: 98.4%;
    transform: translateX(16px);
    display: flex;
    justify-content: center;
}


aside {
    width: 219px;
    min-width: 219px;
    min-height: 100vh;      /* ← era height: 100vh */
    height: 100%;           /* ← acompanha o crescimento do main */
    position: sticky;
    top: 0;
    align-self: stretch;    /* ← estica para preencher a altura do body */
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(25, 53, 12, 0.50);
    flex-shrink: 0;
}

aside img {
    height: 117.5px;
    padding: 32px;
}

aside nav {
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(-15%);
    gap: 8px;
}

aside div {
    flex: 1;
}

aside div button {
    border-radius: 4px;
    background: var(--04, #B98A25);
    border: none;

    display: flex;
    padding: 8px 48px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
}

.selected {
    color: var(--01, #19350C);
    text-align: center;
    font-family: Avenir;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.topform {
    display: flex;
}

.inp {
    display: flex;
    flex-direction: column;
}

#prod {
    width: 336.5px;
}

#safras {
    width: 150px;
    height: 31px;
}

#qtd {
    width: 180px;
}

#qtd,
#prod {
    height: 25px;
}



.botform {
    display: flex;
    flex-direction: column;
}

.botform input {
    width: 675.5px;
    height: 25px;
}

.panel button {
    margin-top: 4px;
    background-color: #687D31;
    color: white;
    border: none;

    display: flex;
    padding: 4px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.panel {
    background-color: rgba(104, 125, 49, 0.25);
    padding: 16px;
}

/* Remove fundo verde que vaza para a tabela */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 32px;
    background-color: transparent;
}

/* Cabeçalho sem fundo colorido */
.toprow {
    background-color: transparent;
}

.toprow th {
    color: #19350C;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    padding: 12px 16px;
    border-bottom: 1.5px solid #19350C;
    background-color: transparent;
}

/* Linhas do corpo */
.tpbody tr {
    border-bottom: 1px solid rgba(25, 53, 12, 0.25);
    background-color: transparent;
}

td {
    padding: 14px 16px;
    color: #19350C;
    font-size: 14px;
    vertical-align: middle;
    text-align: center;
    background-color: transparent;
    

}

/* Última coluna com botão à direita */
.tpbody td:last-child {
    text-align: right;
    padding-right: 16px;
}

/* Larguras fixas para alinhar com os headers */
.tpbody td:nth-child(1),
.toprow th:nth-child(1) { width: 25%; }

.tpbody td:nth-child(2),
.toprow th:nth-child(2) { width: 30%; }

.tpbody td:nth-child(3),
.toprow th:nth-child(3) { width: 30%; }

.tpbody td:nth-child(4),
.toprow th:nth-child(4) { width: 15%; }

.btn-alterar, .btn-apagar {
    background-color: #687D31;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 6px 18px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    width: 100px;
    letter-spacing: 0.03em;
}

.btn-alterar:hover, .btn-apagar:hover {
    background-color: #4e5f24;
}

.edit-input {
    width: 90%;
    padding: 4px 8px;
    border: 1px solid #687D31;
    border-radius: 4px;
    font-size: 13px;
    color: #19350C;
    background-color: #f5fae8;
}

.btn-salvar {
    background-color: #19350C;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 6px 14px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 4px;
}

.btn-salvar:hover { background-color: #2a5214; }

.btn-cancelar {
    background-color: transparent;
    color: #19350C;
    border: 1px solid #19350C;
    border-radius: 4px;
    padding: 6px 10px;
    font-size: 12px;
    cursor: pointer;
}

.btn-cancelar:hover { background-color: rgba(25, 53, 12, 0.1); }

/* Animação na linha nova */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-6px); }
    to   { opacity: 1; transform: translateY(0); }
}

.linha-nova { animation: fadeIn 250ms ease; }
```

## styles\produtos.css

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
    margin: 8px;
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
    transform: translateX(-2.5%);
    width: 60rem;
    height: auto;
}

.itens {
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

a{
    cursor: pointer;
    text-decoration: none;
    color: white;
}

button {
    cursor: pointer;
}

button:hover{
    transform: scale(1.05);
}

.cards {
    transition: 100ms all;
}

.card {
    background: rgba(104, 125, 49, 0.25);
    padding: 10px;
    display: flex;
    width: 61.26rem;
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
}

.Arrow:hover {
    font-size: 28px;
    background-color: #E3B843;
}

.down-arrow {
    
}


.up {
    transform: rotateZ(180deg);
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
    margin-top: 32px;
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

#vmais:hover {
    background-color: var(--04, #E3B843);
}

.bot{
    width: 98.4%;
    transform: translateX(16px);
    display: flex;
    justify-content: center;
}
```

## styles\register.css

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
    margin: 8px;
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

.item {
    transform: translateX(-2.5%);
    width: 60rem;
    height: auto;
}

.itens {
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

a {
    cursor: pointer;
    text-decoration: none;
    color: white;
}

button {
    cursor: pointer;
}

button:hover {
    transform: scale(1.05);
}

.cards {
    transition: 100ms all;
}

.card {
    background: rgba(104, 125, 49, 0.25);
    padding: 10px;
    display: flex;
    width: 61.26rem;
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
}

.Arrow:hover {
    font-size: 28px;
    background-color: #E3B843;
}




.up {
    transform: rotateZ(180deg);
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
    margin-top: 32px;
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

#vmais:hover {
    background-color: var(--04, #E3B843);
}

.bot {
    width: 98.4%;
    transform: translateX(16px);
    display: flex;
    justify-content: center;
}



.panel {
    border-radius: 4px;
    background: rgba(104, 125, 49, 0.25);
}

form {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
}

form .inp {
    display: flex;
    flex-direction: column;
}

label {
    color: var(--01, #19350C);
    font-family: Avenir;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.inp input {
    width: 503.5px;
    outline: none;
}

form .actions {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 8px;
}


.actions button {
    display: flex;
    padding: 4px 24px;
    justify-content: center;
    align-items: center;
    gap: 5px;


    color: #FFF;
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    border-radius: 4px;
    background: var(--02, #687D31);
    color: white;
    border: none;
}


.actions a {
    color: var(--02, #687D31);
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.section {
    display: flex;
    gap: 8px;
}

.section .inp input {
    width: 248px;
}
```
```

## register.html

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MicroConnect</title>
    <link rel="shortcut icon" href="Assets/logo.svg" type="image/x-icon">
    <link rel="stylesheet" href="styles/register.css">
</head>

<body>
    <header>
        <a href="index.html">
            <img src="Assets/logo.svg">
        </a>
        <nav>
            <a onclick="alert('EM CONSTRUÇÂO')">PRODUTORES</a>
            <a href="produto.html">PRODUTOS</a>
            <div id="right">
                <a href="register.html">CADASTRE-SE</a>
                <a href="login.html">
                    <button type="button">LOGIN</button>
                </a>
            </div>
        </nav>
    </header>
    <main>
        <h2 id="ds">CADASTRE-SE</h2>
        <div class="panel">
            <form id="registerForm">
                <div class="inp">
                    <label for="name">Nome</label>
                    <input id="name" name="name" type="text" required>
                </div>
                <div class="inp">
                    <label for="cpf">CPF/CNPJ</label>
                    <input id="cpf" name="cpf" type="number" required>
                </div>
                <div class="section">
                    <div class="inp">
                        <label for="email">E-mail</label>
                        <input id="email" type="email" required>
                    </div>
                    <div class="inp">
                        <label for="pwd">Senha</label>
                        <input id="pwd" type="password" required>
                    </div>
                </div>
                <div class="actions">
                    <a>ESQUECI MINHA SENHA</a>
                    <button id="login" type="submit">ENTRAR</button>
                </div>
            </form>
        </div>
    </main>
</body>
<script src="scripts/register.js"></script>

</html>
```

## TODO.md

```md
## Area do Produtor:
- Cadastro
- Produtos
- Informações de retirada
- Exibição de pedidos

## Area do Interessado:
- Dados
- lista de produtos
- Solicitação de reserva

## Home
- Exibição
```

## Assets\Vector.svg

```svg
<svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.151655 1.23478C0.30305 0.869248 0.559444 0.556829 0.888409 0.337038C1.21737 0.117246 1.60413 -4.49006e-05 1.99976 1.2894e-08H34.0016C34.397 0.000347743 34.7833 0.117845 35.1119 0.337651C35.4405 0.557457 35.6966 0.869712 35.8479 1.23498C35.9991 1.60025 36.0387 2.00214 35.9617 2.38991C35.8846 2.77767 35.6944 3.13391 35.4151 3.41363L19.4141 19.415C19.0391 19.7896 18.5307 20 18.0007 20C17.4707 20 16.9623 19.7896 16.5873 19.415L0.586347 3.41363C0.306619 3.13411 0.116028 2.77793 0.0386573 2.39011C-0.0387137 2.0023 0.000608798 1.60025 0.151655 1.23478Z" fill="white"/>
</svg>

```

## scripts\colapse.js

```js


function esconder(produto) {
    
    const cards = document.querySelector(`.card-${produto}`);
    cards.classList.toggle('hide');
    
    const item = document.getElementById(produto);
    const downa = item.querySelector(".down-arrow");

    if(downa)
        downa.classList.toggle("up");
}
```

## scripts\interessado.js

```js
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
```

## scripts\produtor.js

```js
const cButton = document.getElementById("criar");
const tabela = document.getElementById("tpbody");

cButton.addEventListener("click", () => add());

window.addEventListener("DOMContentLoaded", () => {
    const produtos = getProdutos();
    const usuarioLogado = getUsuario();
    
    produtos
        .filter(p => p.criador === usuarioLogado.cpf)
        .forEach(p => addTable(p.nome, p.safra, p.qtd, false));
});

function getUsuario() {
    return JSON.parse(localStorage.getItem("usuario_logado"));
}

function getProdutos() {
    return JSON.parse(localStorage.getItem("produtos")) || [];
}

function saveProdutos(produtos) {
    localStorage.setItem("produtos", JSON.stringify(produtos));
}

function add() {
    const nome = document.getElementById("prod").value.trim();
    const safra = document.getElementById("safras").value;
    const qtd = document.getElementById("qtd").value;
    const end = document.getElementById("endereco").value.trim();
    const usuarioLogado = getUsuario();

    if (!nome || !qtd || !end) {
        alert("Preencha todos os campos!");
        return;
    }

    const produtos = getProdutos();

    const jaExiste = produtos.some(
        p => p.nome.toLowerCase() === nome.toLowerCase() && p.criador === usuarioLogado.cpf
    );

    if (jaExiste) {
        alert("Você já cadastrou esse produto!");
        return;
    }

    const item = { nome, safra, qtd, endereco: end, criador: usuarioLogado.cpf };
    produtos.push(item);
    saveProdutos(produtos);

    addTable(nome, safra, qtd, true);
    limparCampos();
}

function addTable(nome, safra, qtd, animado = false) {
    const tr = document.createElement("tr");
    if (animado) tr.classList.add("linha-nova");

    tr.innerHTML = `
        <td>${nome}</td>
        <td>${safra}</td>
        <td>${qtd} unidades</td>
        <td>
            <button class="btn-alterar" type="button">ALTERAR</button>
            <button class="btn-apagar" type="button">APAGAR</button>
        </td>
    `;

    tr.querySelector(".btn-alterar").addEventListener("click", () => alterar(tr, nome));
    tr.querySelector(".btn-apagar").addEventListener("click", () => apagar(tr, nome));
    tabela.appendChild(tr);
}

// ✅ Nova função de apagar
function apagar(tr, nome) {
    if (!confirm(`Deseja apagar o produto "${nome}"?`)) return;

    const usuarioLogado = getUsuario();
    let produtos = getProdutos();

    produtos = produtos.filter(
        p => !(p.nome === nome && p.criador === usuarioLogado.cpf)
    );

    saveProdutos(produtos);
    tr.remove();
}

function alterar(tr, nomeOriginal) {
    const produtos = getProdutos();
    const usuarioLogado = getUsuario();

    const produto = produtos.find(
        p => p.nome === nomeOriginal && p.criador === usuarioLogado.cpf
    );
    if (!produto) return;

    tr.innerHTML = `
        <td><input class="edit-input" value="${produto.nome}" /></td>
        <td>
            <select class="edit-input">
                <option value="verao"     ${produto.safra === "verao"     ? "selected" : ""}>Verão</option>
                <option value="outono"    ${produto.safra === "outono"    ? "selected" : ""}>Outono</option>
                <option value="inverno"   ${produto.safra === "inverno"   ? "selected" : ""}>Inverno</option>
                <option value="primavera" ${produto.safra === "primavera" ? "selected" : ""}>Primavera</option>
            </select>
        </td>
        <td><input class="edit-input" type="number" value="${produto.qtd}" /></td>
        <td>
            <button class="btn-salvar" type="button">SALVAR</button>
            <button class="btn-cancelar" type="button">✕</button>
            <button class="btn-apagar" type="button">APAGAR</button>
        </td>
    `;

    tr.querySelector(".btn-salvar").addEventListener("click", () => {
        const inputs = tr.querySelectorAll(".edit-input");
        const novoNome = inputs[0].value.trim();
        const novaSafra = inputs[1].value;
        const novaQtd = inputs[2].value;

        if (!novoNome || !novaQtd) {
            alert("Preencha todos os campos!");
            return;
        }

        const index = produtos.findIndex(
            p => p.nome === nomeOriginal && p.criador === usuarioLogado.cpf
        );
        produtos[index] = { ...produtos[index], nome: novoNome, safra: novaSafra, qtd: novaQtd };
        saveProdutos(produtos);

        tr.innerHTML = `
            <td>${novoNome}</td>
            <td>${novaSafra}</td>
            <td>${novaQtd} unidades</td>
            <td>
                <button class="btn-alterar" type="button">ALTERAR</button>
                <button class="btn-apagar" type="button">APAGAR</button>
            </td>
        `;
        tr.querySelector(".btn-alterar").addEventListener("click", () => alterar(tr, novoNome));
        tr.querySelector(".btn-apagar").addEventListener("click", () => apagar(tr, novoNome));
    });

    tr.querySelector(".btn-cancelar").addEventListener("click", () => {
        tr.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.safra}</td>
            <td>${produto.qtd} unidades</td>
            <td>
                <button class="btn-alterar" type="button">ALTERAR</button>
                <button class="btn-apagar" type="button">APAGAR</button>
            </td>
        `;
        tr.querySelector(".btn-alterar").addEventListener("click", () => alterar(tr, produto.nome));
        tr.querySelector(".btn-apagar").addEventListener("click", () => apagar(tr, produto.nome));
    });

    tr.querySelector(".btn-apagar").addEventListener("click", () => apagar(tr, nomeOriginal));
}

function limparCampos() {
    document.getElementById("prod").value = "";
    document.getElementById("qtd").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("safras").selectedIndex = 0;
}
```

## scripts\register.js

```js
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

    users.push(usuario);
    localStorage.setItem("users",JSON.stringify(users));
    alert("USUARIO CADASTRADO")
    
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
    margin: 8px;
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
    transform: translateX(-2.5%);
    width: 60rem;
    height: auto;
}

.itens {
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

a{
    cursor: pointer;
    text-decoration: none;
    color: white;
}

button {
    cursor: pointer;
}

button:hover{
    transform: scale(1.05);
}

.cards {
    transition: 100ms all;
}

.card {
    background: rgba(104, 125, 49, 0.25);
    padding: 10px;
    display: flex;
    width: 61.26rem;
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
}

.Arrow:hover {
    font-size: 28px;
    background-color: #E3B843;
}

.down-arrow {
    
}


.up {
    transform: rotateZ(180deg);
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

#vmais:hover {
    background-color: var(--04, #E3B843);
}

.bot{
    width: 98.4%;
    transform: translateX(16px);
    display: flex;
    justify-content: center;
}
```

## styles\interessado.css

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
    display: flex;
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
    margin: 8px;
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
    align-items: center;
    justify-content: center;
    padding: 32px;
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

.item {
    transform: translateX(-2.5%);
    width: 60rem;
    height: auto;
}

.itens {
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

a {
    cursor: pointer;
    text-decoration: none;
    color: white;
}

button {
    cursor: pointer;
}

button:hover {
    transform: scale(1.05);
}

.cards {
    transition: 100ms all;
}

.card {
    background: rgba(104, 125, 49, 0.25);
    padding: 10px;
    display: flex;
    width: 61.26rem;
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
}

.Arrow:hover {
    font-size: 28px;
    background-color: #E3B843;
}




.up {
    transform: rotateZ(180deg);
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
    transform: translateX(-195%) translateY(-0px);
    margin-bottom: 16px;
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

#vmais:hover {
    background-color: var(--04, #E3B843);
}

.bot {
    width: 98.4%;
    transform: translateX(16px);
    display: flex;
    justify-content: center;
}


aside {
    display: flex;
    width: 219.5px;
    flex-direction: column;
    height: 100vh;
    background: rgba(25, 53, 12, 0.50);
    align-items: center;
}

aside img {
    height: 117.5px;
    padding: 32px;
}

aside nav {
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(-15%);
    gap: 8px;
}

aside div {
    flex: 1;
}

aside div button {
    border-radius: 4px;
    background: var(--04, #B98A25);
    border: none;

    display: flex;
    padding: 8px 48px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
}

.selected {
    color: var(--01, #19350C);
    text-align: center;
    font-family: Avenir;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.topform {
    display: flex;
}

.inp {
    display: flex;
    flex-direction: column;
}

#prod {
    width: 336.5px;
}

#safras {
    width: 150px;
    height: 31px;
}

#qtd {
    width: 180px;
}

#qtd,
#prod {
    height: 25px;
}



.botform {
    display: flex;
    flex-direction: column;
}

.botform input {
    width: 675.5px;
    height: 25px;
}

.panel button {
    margin-top: 4px;
    background-color: #687D31;
    color: white;
    border: none;

    display: flex;
    padding: 4px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.panel {
    background-color: rgba(104, 125, 49, 0.25);
    width: 1000px;
    height: 490px;
    display: flex;
    flex-direction: column;
    padding: 16px;
}

table {
    width: 644.5px;
}

.toprow {
    color: #19350C;

}

th {
    font-weight: bold;
}

.left {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.left h3, .left h2, .left h5, .left h4 {
    font-weight: 400;
}

.left h3 {
    font-size: 24px;
}

.left h2{
    font-size: 30px;
}



.campo-horizontal {
    display: flex;
    gap: 256px
}

.right {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    width: 100%;
}

.right button {
    

    padding: 8px 48px;
    width: 256px;

}

.table {
    flex: 1;
}

.toppanel{
    display: flex;
    flex:1;
}
```

## styles\Login.css

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
    margin: 8px;
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

.item {
    transform: translateX(-2.5%);
    width: 60rem;
    height: auto;
}

.itens {
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

a {
    cursor: pointer;
    text-decoration: none;
    color: white;
}

button {
    cursor: pointer;
}

button:hover {
    transform: scale(1.05);
}

.cards {
    transition: 100ms all;
}

.card {
    background: rgba(104, 125, 49, 0.25);
    padding: 10px;
    display: flex;
    width: 61.26rem;
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
}

.Arrow:hover {
    font-size: 28px;
    background-color: #E3B843;
}




.up {
    transform: rotateZ(180deg);
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
    margin-top: 32px;
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

#vmais:hover {
    background-color: var(--04, #E3B843);
}

.bot {
    width: 98.4%;
    transform: translateX(16px);
    display: flex;
    justify-content: center;
}



.panel {
    border-radius: 4px;
    background: rgba(104, 125, 49, 0.25);
}

form {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
}

form .inp {
    display: flex;
    flex-direction: column;
}

label {
    color: var(--01, #19350C);
    font-family: Avenir;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.inp input {
    width: 365px;
    outline: none;
}

form .actions {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 8px;
}


.actions button {
    display: flex;
    padding: 4px 24px;
    justify-content: center;
    align-items: center;
    gap: 5px;


    color: #FFF;
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    border-radius: 4px;
    background: var(--02, #687D31);
    color: white;
    border: none;
}


.actions a {
    color: var(--02, #687D31);
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
```

## styles\produtor.css

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
    display: flex;
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
    margin: 8px;
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
    align-items: center;
    justify-content: center;
    padding: 32px;
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

.item {
    transform: translateX(-2.5%);
    width: 60rem;
    height: auto;
}

.itens {
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

a {
    cursor: pointer;
    text-decoration: none;
    color: white;
}

button {
    cursor: pointer;
}

button:hover {
    transform: scale(1.05);
}

.cards {
    transition: 100ms all;
}

.card {
    background: rgba(104, 125, 49, 0.25);
    padding: 10px;
    display: flex;
    width: 61.26rem;
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
}

.Arrow:hover {
    font-size: 28px;
    background-color: #E3B843;
}




.up {
    transform: rotateZ(180deg);
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
    transform: translateX(-95%) translateY(20px);
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

#vmais:hover {
    background-color: var(--04, #E3B843);
}

.bot {
    width: 98.4%;
    transform: translateX(16px);
    display: flex;
    justify-content: center;
}


aside {
    width: 219px;
    min-width: 219px;
    min-height: 100vh;      /* ← era height: 100vh */
    height: 100%;           /* ← acompanha o crescimento do main */
    position: sticky;
    top: 0;
    align-self: stretch;    /* ← estica para preencher a altura do body */
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(25, 53, 12, 0.50);
    flex-shrink: 0;
}

aside img {
    height: 117.5px;
    padding: 32px;
}

aside nav {
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(-15%);
    gap: 8px;
}

aside div {
    flex: 1;
}

aside div button {
    border-radius: 4px;
    background: var(--04, #B98A25);
    border: none;

    display: flex;
    padding: 8px 48px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
}

.selected {
    color: var(--01, #19350C);
    text-align: center;
    font-family: Avenir;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.topform {
    display: flex;
}

.inp {
    display: flex;
    flex-direction: column;
}

#prod {
    width: 336.5px;
}

#safras {
    width: 150px;
    height: 31px;
}

#qtd {
    width: 180px;
}

#qtd,
#prod {
    height: 25px;
}



.botform {
    display: flex;
    flex-direction: column;
}

.botform input {
    width: 675.5px;
    height: 25px;
}

.panel button {
    margin-top: 4px;
    background-color: #687D31;
    color: white;
    border: none;

    display: flex;
    padding: 4px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.panel {
    background-color: rgba(104, 125, 49, 0.25);
    padding: 16px;
}

/* Remove fundo verde que vaza para a tabela */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 32px;
    background-color: transparent;
}

/* Cabeçalho sem fundo colorido */
.toprow {
    background-color: transparent;
}

.toprow th {
    color: #19350C;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    padding: 12px 16px;
    border-bottom: 1.5px solid #19350C;
    background-color: transparent;
}

/* Linhas do corpo */
.tpbody tr {
    border-bottom: 1px solid rgba(25, 53, 12, 0.25);
    background-color: transparent;
}

td {
    padding: 14px 16px;
    color: #19350C;
    font-size: 14px;
    vertical-align: middle;
    text-align: center;
    background-color: transparent;
    

}

/* Última coluna com botão à direita */
.tpbody td:last-child {
    text-align: right;
    padding-right: 16px;
}

/* Larguras fixas para alinhar com os headers */
.tpbody td:nth-child(1),
.toprow th:nth-child(1) { width: 25%; }

.tpbody td:nth-child(2),
.toprow th:nth-child(2) { width: 30%; }

.tpbody td:nth-child(3),
.toprow th:nth-child(3) { width: 30%; }

.tpbody td:nth-child(4),
.toprow th:nth-child(4) { width: 15%; }

.btn-alterar, .btn-apagar {
    background-color: #687D31;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 6px 18px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    width: 100px;
    letter-spacing: 0.03em;
}

.btn-alterar:hover, .btn-apagar:hover {
    background-color: #4e5f24;
}

.edit-input {
    width: 90%;
    padding: 4px 8px;
    border: 1px solid #687D31;
    border-radius: 4px;
    font-size: 13px;
    color: #19350C;
    background-color: #f5fae8;
}

.btn-salvar {
    background-color: #19350C;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 6px 14px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 4px;
}

.btn-salvar:hover { background-color: #2a5214; }

.btn-cancelar {
    background-color: transparent;
    color: #19350C;
    border: 1px solid #19350C;
    border-radius: 4px;
    padding: 6px 10px;
    font-size: 12px;
    cursor: pointer;
}

.btn-cancelar:hover { background-color: rgba(25, 53, 12, 0.1); }

/* Animação na linha nova */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-6px); }
    to   { opacity: 1; transform: translateY(0); }
}

.linha-nova { animation: fadeIn 250ms ease; }
```

## styles\produtos.css

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
    margin: 8px;
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
    transform: translateX(-2.5%);
    width: 60rem;
    height: auto;
}

.itens {
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

a{
    cursor: pointer;
    text-decoration: none;
    color: white;
}

button {
    cursor: pointer;
}

button:hover{
    transform: scale(1.05);
}

.cards {
    transition: 100ms all;
}

.card {
    background: rgba(104, 125, 49, 0.25);
    padding: 10px;
    display: flex;
    width: 61.26rem;
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
}

.Arrow:hover {
    font-size: 28px;
    background-color: #E3B843;
}

.down-arrow {
    
}


.up {
    transform: rotateZ(180deg);
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
    margin-top: 32px;
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

#vmais:hover {
    background-color: var(--04, #E3B843);
}

.bot{
    width: 98.4%;
    transform: translateX(16px);
    display: flex;
    justify-content: center;
}
```

## styles\register.css

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
    margin: 8px;
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

.item {
    transform: translateX(-2.5%);
    width: 60rem;
    height: auto;
}

.itens {
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

a {
    cursor: pointer;
    text-decoration: none;
    color: white;
}

button {
    cursor: pointer;
}

button:hover {
    transform: scale(1.05);
}

.cards {
    transition: 100ms all;
}

.card {
    background: rgba(104, 125, 49, 0.25);
    padding: 10px;
    display: flex;
    width: 61.26rem;
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
}

.Arrow:hover {
    font-size: 28px;
    background-color: #E3B843;
}




.up {
    transform: rotateZ(180deg);
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
    margin-top: 32px;
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

#vmais:hover {
    background-color: var(--04, #E3B843);
}

.bot {
    width: 98.4%;
    transform: translateX(16px);
    display: flex;
    justify-content: center;
}



.panel {
    border-radius: 4px;
    background: rgba(104, 125, 49, 0.25);
}

form {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
}

form .inp {
    display: flex;
    flex-direction: column;
}

label {
    color: var(--01, #19350C);
    font-family: Avenir;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.inp input {
    width: 503.5px;
    outline: none;
}

form .actions {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 8px;
}


.actions button {
    display: flex;
    padding: 4px 24px;
    justify-content: center;
    align-items: center;
    gap: 5px;


    color: #FFF;
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    border-radius: 4px;
    background: var(--02, #687D31);
    color: white;
    border: none;
}


.actions a {
    color: var(--02, #687D31);
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.section {
    display: flex;
    gap: 8px;
}

.section .inp input {
    width: 248px;
}
```