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