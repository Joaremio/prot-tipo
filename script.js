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
// Função para enviar o pedido para a "cozinha"
function enviarPedido() {
    // Obtém o nome do cliente e o número da mesa
    const nomeCliente = document.getElementById("nomeCliente").value;
    const numeroMesa = document.getElementById("numeroMesa").value;

    // Criação da comanda com um ID único
    const comanda = {
        id: new Date().getTime(),
        nomeCliente: nomeCliente,
        numeroMesa: numeroMesa,
        itens: pedido.map(item => ({
            nome: item.nome,
            preco: item.preco
        }))
    };

    // Formatação da mensagem para WhatsApp
    let mensagem = `*Comanda ID:* ${comanda.id}\n`;
    mensagem += `*Nome do Cliente:* ${comanda.nomeCliente}\n`;
    mensagem += `*Número da Mesa:* ${comanda.numeroMesa}\n`;
    comanda.itens.forEach(item => {
        mensagem += `${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
    });

    // Adicione o número de telefone do cozinheiro
    const numeroCozinha = "5584991164038"; // Substitua pelo número de telefone do cozinheiro
    const mensagemCodificada = encodeURIComponent(mensagem);
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroCozinha}&text=${mensagemCodificada}`;

    // Abre o link do WhatsApp em uma nova aba
    window.open(linkWhatsApp, "_blank");

    // Alerta de confirmação e limpeza do pedido atual
    alert("Pedido enviado para a cozinha via WhatsApp!");
    pedido = [];
    atualizarResumoPedido(); // Limpa o resumo do pedido
}




