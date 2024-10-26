// Itens de exemplo no cardápio
const itensMenu = [
    { id: 1, nome: "Hambúrguer", descricao: "Delicioso hambúrguer artesanal", preco: 15.00 },
    { id: 2, nome: "Batata Frita", descricao: "Porção de batatas crocantes", preco: 8.00 },
    { id: 3, nome: "Refrigerante", descricao: "Refrigerante 350ml", preco: 5.00 }
];

// Função para exibir itens do cardápio
function exibirMenu() {
    const menuContainer = document.getElementById("menu");
    itensMenu.forEach(item => {
        const card = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${item.nome}</h5>
                        <p class="card-text">${item.descricao}</p>
                        <p class="card-text"><strong>R$ ${item.preco.toFixed(2)}</strong></p>
                        <button class="btn btn-success" onclick="adicionarAoPedido(${item.id})">Adicionar</button>
                    </div>
                </div>
            </div>
        `;
        menuContainer.innerHTML += card;
    });
}

// Array para armazenar o pedido do cliente
let pedido = [];

// Função para adicionar item ao pedido
function adicionarAoPedido(id) {
    const item = itensMenu.find(i => i.id === id);
    pedido.push(item);
    atualizarResumoPedido();
}

// Função para exibir o resumo do pedido
function atualizarResumoPedido() {
    const listaPedido = document.getElementById("lista-pedido");
    listaPedido.innerHTML = "";
    pedido.forEach(item => {
        const listItem = `<li class="list-group-item">${item.nome} - R$ ${item.preco.toFixed(2)}</li>`;
        listaPedido.innerHTML += listItem;
    });
}

// Chama a função para exibir o cardápio
exibirMenu();


// Função para enviar o pedido para a "cozinha"
// Função para enviar o pedido para a "cozinha"
function enviarPedido() {
    const comanda = {
        id: new Date().getTime(), // Gera um ID único com base no timestamp
        itens: pedido.map(item => ({
            nome: item.nome,
            preco: item.preco
        }))
    };

    // Recupera o array de pedidos atuais no Local Storage ou inicia um novo array
    let pedidosCozinha = JSON.parse(localStorage.getItem("pedidosCozinha")) || [];
    pedidosCozinha.push(comanda); // Adiciona a nova comanda ao array
    localStorage.setItem("pedidosCozinha", JSON.stringify(pedidosCozinha));

    // Alerta de confirmação e limpeza do pedido atual
    alert("Pedido enviado para a cozinha!");
    pedido = [];
    atualizarResumoPedido();
}


