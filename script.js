// Exemplo de cardápio com categorias
const menuItems = [
    { nome: "Batata Frita", preco: 5.00, categoria: "Petiscos" },
    { nome: "Caldo de Feijão", preco: 6.00, categoria: "Caldo" },
    { nome: "Hambúrguer", preco: 10.00, categoria: "Lanche" },
    { nome: "Refrigerante", preco: 3.50, categoria: "Bebidas" },
    { nome: "Caldo Verde", preco: 6.50, categoria: "Caldo" },
    { nome: "Suco de Laranja", preco: 4.00, categoria: "Bebidas" },
    { nome: "Onion Rings", preco: 4.50, categoria: "Petiscos" },
    { nome: "Cheeseburger", preco: 11.00, categoria: "Lanche" }
];

const pedido = {};

// Função para exibir itens do menu com base na categoria selecionada
function exibirMenu(categoria = "") {
    const menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = ""; // Limpa os itens existentes

    // Filtra os itens com base na categoria, se uma for selecionada
    const itensFiltrados = categoria ? menuItems.filter(item => item.categoria === categoria) : menuItems;

    // Exibe os itens filtrados
    itensFiltrados.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = "col-md-4 mb-3";
        itemDiv.innerHTML = `
            <div class="card">
                <div class="card-body text-center">
                    <h5 class="card-title">${item.nome}</h5>
                    <p class="card-text">R$ ${item.preco.toFixed(2)}</p>
                    <button class="btn btn-secondary btn-sm" onclick="alterarQuantidade('${item.nome}', -1)">-</button>
                    <span id="quantidade-${index}">1</span>
                    <button class="btn btn-secondary btn-sm" onclick="alterarQuantidade('${item.nome}', 1)">+</button>
                    <button class="btn btn-primary mt-2" onclick="adicionarAoPedido('${item.nome}', ${index})">Adicionar ao Pedido</button>
                </div>
            </div>
        `;
        menuContainer.appendChild(itemDiv);
    });
}

// Função para filtrar o cardápio por categoria
function filtrarCategoria(categoria) {
    exibirMenu(categoria);
}

// As demais funções permanecem as mesmas...
function alterarQuantidade(nome, delta) {
    const quantidadeSpan = document.getElementById(`quantidade-${menuItems.findIndex(item => item.nome === nome)}`);
    let quantidade = parseInt(quantidadeSpan.innerText);
    quantidade = Math.max(1, quantidade + delta); // impede de ser menor que 1
    quantidadeSpan.innerText = quantidade;
}

function adicionarAoPedido(nome, index) {
    const quantidade = parseInt(document.getElementById(`quantidade-${index}`).innerText);
    if (pedido[nome]) {
        pedido[nome].quantidade += quantidade;
    } else {
        pedido[nome] = {
            quantidade: quantidade,
            preco: menuItems.find(item => item.nome === nome).preco
        };
    }
    atualizarPedido();
}

function atualizarPedido() {
    const listaPedido = document.getElementById('lista-pedido');
    listaPedido.innerHTML = '';

    let valorTotal = 0;
    Object.keys(pedido).forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        
        const valorItem = pedido[item].quantidade * pedido[item].preco;
        valorTotal += valorItem;

        listItem.innerHTML = `
            <span>${pedido[item].quantidade} x ${item} - R$ ${valorItem.toFixed(2)}</span>
            <button class="btn btn-danger btn-sm ml-2" onclick="removerDoPedido('${item}')">Remover</button>
        `;
        
        listaPedido.appendChild(listItem);
    });

    const totalItem = document.createElement('li');
    totalItem.className = "list-group-item d-flex justify-content-between align-items-center font-weight-bold";
    totalItem.innerHTML = `<span>Total</span><span>R$ ${valorTotal.toFixed(2)}</span>`;
    listaPedido.appendChild(totalItem);
}

function removerDoPedido(nome) {
    delete pedido[nome];
    atualizarPedido();
}

function enviarPedido() {
    const nomeCliente = document.getElementById('nomeCliente').value;
    const numeroMesa = document.getElementById('numeroMesa').value;

    if (!nomeCliente || !numeroMesa) {
        alert('Por favor, preencha o nome e o número da mesa.');
        return;
    }

    let mensagem = `Pedido para o cliente ${nomeCliente}, Mesa ${numeroMesa}:%0A`;
    Object.keys(pedido).forEach(item => {
        mensagem += `${pedido[item].quantidade} x ${item} - R$ ${(pedido[item].quantidade * pedido[item].preco).toFixed(2)}%0A`;
    });

    const numeroWhatsApp = "5584991164038"; // Substitua pelo número real do WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
    window.open(url, '_blank');
}

// Exibe todos os itens inicialmente
exibirMenu();
