const cButton = document.getElementById("criar");
const tabela = document.getElementById("tpbody");

cButton.addEventListener("click", () => add());

// Carrega produtos salvos ao abrir a página
window.addEventListener("DOMContentLoaded", () => {
    const produtos = getProdutos();
    produtos.forEach(p => addTable(p.nome, p.safra, p.qtd, false));
});

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

    if (!nome || !qtd || !end) {
        alert("Preencha todos os campos!");
        return;
    }

    const produtos = getProdutos();
    const jaExiste = produtos.some(p => p.nome.toLowerCase() === nome.toLowerCase());

    if (jaExiste) {
        alert("Produto já cadastrado!");
        return;
    }

    const item = { nome, safra, qtd, endereco: end };
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
        <td><button class="btn-alterar" type="button">ALTERAR</button></td>
    `;

    // Botão ALTERAR
    tr.querySelector(".btn-alterar").addEventListener("click", () => alterar(tr, nome));

    tabela.appendChild(tr);
}

function alterar(tr, nomeOriginal) {
    const produtos = getProdutos();
    const produto = produtos.find(p => p.nome === nomeOriginal);
    if (!produto) return;

    // Vira campos editáveis inline
    tr.innerHTML = `
        <td><input class="edit-input" value="${produto.nome}" /></td>
        <td>
            <select class="edit-input">
                <option value="verao" ${produto.safra === "verao" ? "selected" : ""}>Verão</option>
                <option value="outono" ${produto.safra === "outono" ? "selected" : ""}>Outono</option>
                <option value="inverno" ${produto.safra === "inverno" ? "selected" : ""}>Inverno</option>
                <option value="primavera" ${produto.safra === "primavera" ? "selected" : ""}>Primavera</option>
            </select>
        </td>
        <td><input class="edit-input" type="number" value="${produto.qtd}" /></td>
        <td>
            <button class="btn-salvar" type="button">SALVAR</button>
            <button class="btn-cancelar" type="button">✕</button>
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

        // Atualiza no localStorage
        const index = produtos.findIndex(p => p.nome === nomeOriginal);
        produtos[index] = { ...produtos[index], nome: novoNome, safra: novaSafra, qtd: novaQtd };
        saveProdutos(produtos);

        // Recarrega a linha
        tr.innerHTML = `
            <td>${novoNome}</td>
            <td>${novaSafra}</td>
            <td>${novaQtd} unidades</td>
            <td><button class="btn-alterar" type="button">ALTERAR</button></td>
        `;
        tr.querySelector(".btn-alterar").addEventListener("click", () => alterar(tr, novoNome));
    });

    tr.querySelector(".btn-cancelar").addEventListener("click", () => {
        // Cancela e volta ao estado original
        tr.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.safra}</td>
            <td>${produto.qtd} unidades</td>
            <td><button class="btn-alterar" type="button">ALTERAR</button></td>
        `;
        tr.querySelector(".btn-alterar").addEventListener("click", () => alterar(tr, produto.nome));
    });
}

function limparCampos() {
    document.getElementById("prod").value = "";
    document.getElementById("qtd").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("safras").selectedIndex = 0;
}