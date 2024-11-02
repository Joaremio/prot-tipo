// Exemplo de cardápio com categorias
const menuItems = [
    { nome: "Batata Frita", preco: 5.00, categoria: "Petiscos", imagem:"css/batata.jpeg" }, 
    { nome: "Caldo de Camarão", preco: 15.00, categoria: "Caldo", imagem: "css/refrigerante-guarana-antarctica-garrafa-2l-1.webp" },
    { nome: "Hambúrguer", preco: 10.00, categoria: "Lanche", imagem: "css/logo.jpeg" },
    { nome: "Caldo de Quenga", preco: 12.00, categoria: "Caldo", imagem: "css/caldo-quenga.jpeg" },
    { nome: "Filé com fritas", preco: 40.00, categoria: "Petiscos", imagem: "css/file.jpeg" },
    { nome: "Carne de sol com queijo e fritas", preco: 45.00, categoria: "Petiscos", imagem: "css/logo.jpeg" },
    { nome: "Camarão no alho e oléo com fritas", preco: 45.00, categoria: "Petiscos", imagem: "css/camaraão.jpeg" },
    { nome: "Calabresa acebolada com fritas", preco: 35.00, categoria: "Petiscos", imagem: "css/logo.jpeg" },
    { nome: "Frango a passarinho com fritas", preco: 38.00, categoria: "Petiscos", imagem: "css/logo.jpeg" },
    { nome: "Petisco misto", preco: 50.00, categoria: "Petiscos", imagem: "css/logo.jpeg" },
    { nome: "Caldo de Mocotó", preco: 10.00, categoria: "Caldo", imagem: "css/logo.jpeg" },
    { nome: "Caldo de Costela", preco: 12.00, categoria: "Caldo", imagem: "css/caldo-carne.jpeg" },
    { nome: "Cachorro quente", preco: 6.00, categoria: "Lanche", imagem: "css/logo.jpeg" },
    { nome: "Galo quente", preco: 6.00, categoria: "Lanche", imagem: "css/cachorro quente.jpeg" },
    { nome: "Misto", preco: 6.00, categoria: "Lanche", imagem: "css/logo.jpeg" },
    { nome: "Carne", preco: 4.00, categoria: "Espetinhos", imagem: "css/logo.jpeg"},
    { nome: "Frango", preco: 4.00, categoria: "Espetinhos", imagem: "css/logo.jpeg" },
    { nome: "Lingua", preco: 4.00, categoria: "Espetinhos", imagem: "css/logo.jpeg" },
    { nome: "Coração", preco: 4.00, categoria: "Espetinhos", imagem: "css/logo.jpeg" },
    { nome: "Carne de Charque", preco: 5.00, categoria: "Espetinhos", imagem: "css/logo.jpeg" },
    { nome: "Asinha de Frango", preco: 5.00, categoria: "Espetinhos", imagem: "css/logo.jpeg" },
    { nome: "Devassa Litrão", preco: 10.00, categoria: "Bebidas", imagem: "css/devassa.litrao.png" },
    { nome: "AMSTEL Litrão", preco: 12.00, categoria: "Bebidas", imagem: "css/amstel.litrao.jpeg" },
    { nome: "Skol Litrão", preco: 10.00, categoria: "Bebidas", imagem: "css/skol.litrao.jpg" },
    { nome: "Budweiser Litrão", preco: 12.00, categoria: "Bebidas", imagem: "css/budweiser.litrao.jpg" },
    { nome: "Heineken 600ML", preco: 15.00, categoria: "Bebidas", imagem: "css/heineken.600ml.webp" },
    { nome: "Heineken Long Neck", preco: 10.00, categoria: "Bebidas", imagem: "css/heineken.longneck.webp" },
    { nome: "Budweiser Long Neck", preco: 9.00, categoria: "Bebidas", imagem: "css/Cerveja-Budweiser-American-Lager-330ml--Long-Neck-.webp" },
    { nome: "Cabaré Ice", preco: 10.00, categoria: "Bebidas", imagem: "css/cabareice.webp" },
    { nome: "Cerveja Preta", preco: 8.00, categoria: "Bebidas", imagem:"css/logo.jpeg" },
    { nome: "Pepsi(1 Litro)", preco: 8.00, categoria: "Refrigerantes", imagem: "css/pepsi.jpeg" },
    { nome: "Guaraná(1 Litro)", preco: 8.00, categoria: "Refrigerantes", imagem: "css/guarana.jpeg" },
    { nome: "Coca Cola(1 Litro", preco: 9.00, categoria: "Refrigerantes", imagem: "css/coca-cola.jpeg" },
    { nome: "Refrigerante Lata", preco: 5.00, categoria: "Refrigerantes", imagem: "css/logo.jpeg" },
    { nome: "Refrigerante Caçulinha", preco: 3.00, categoria: "Refrigerantes", imagem: "css/logo.jpeg" },
    { nome: "Limoneto", preco: 7.00, categoria: "Refrigerantes", imagem: "css/limoneto.jpeg" },
    { nome: "Agua sem gás", preco: 2.00, categoria: "Refrigerantes", imagem:"css/logo.jpeg" },
    { nome: "Agua com gás", preco: 3.00, categoria: "Refrigerantes", imagem: "css/logo.jpeg"},
    { nome: "Torre de Chopp e Filé com Fritas", preco: 69.90, categoria: "Combos", imagem: "css/logo.jpeg" },
    { nome: "Vodka Smirnoff e 5 Fantas", preco: 80.00, categoria: "Combos", imagem: "css/combo-vodka.jpeg" },
    { nome: "Dose Dreher", preco: 4.00, categoria: "Destiladas", imagem: "css/logo.jpeg" },
    { nome: "Dose Black White", preco: 7.00, categoria: "Destiladas", imagem: "css/logo.jpeg" },
    { nome: "Dose Campari", preco: 8.00, categoria: "Destiladas", imagem: "css/logo.jpeg" },
    { nome: "Dose Cachaça", preco: 4.00, categoria: "Destiladas", imagem: "css/logo.jpeg" },
    { nome: "Cachaça Sagatiba 700ML", preco: 50.00, categoria: "Destiladas", imagem: "css/logo.jpeg" },
    { nome: "Caranguejo Prata lata", preco: 8.00, categoria: "Destiladas", imagem: "css/caranguejo-prata.jpeg" },
    { nome: "Caranguejo Limão lata", preco: 10.00, categoria: "Destiladas", imagem: "css/caranguejo-limao.png" },
    { nome: "Caranguejo Ouro lata", preco: 10.00, categoria: "Destiladas", imagem: "css/caranguejo-ouro.jpeg" },
    { nome: "Pitu lata", preco: 10.00, categoria: "Destiladas", imagem: "css/pitu.jpeg" },
    { nome: "Pitu Limão lata", preco: 10.00, categoria: "Destiladas", imagem: "css/pitu-limao.jpeg" },
    
    
]; 


const pedido = {};

// Função para exibir itens do menu com base na categoria selecionada
function exibirMenu(categoria = "") {
    const menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = ""; // Limpa os itens existentes

    // Filtra os itens com base na categoria
    const itensFiltrados = categoria ? menuItems.filter(item => item.categoria === categoria) : menuItems;

    // Exibe os itens filtrados
    itensFiltrados.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = "col-md-3 mb-3"; // Ajuste a coluna se necessário
        itemDiv.innerHTML = `
            <div class="card">
                <img src="${item.imagem}" class="card-img-top" alt="${item.nome}">
                <div class="card-body text-center">
                    <h5 class="card-title">${item.nome}</h5>
                    <p class="card-text">R$ ${item.preco.toFixed(2)}</p>
                    <button class="btn btn-primary" onclick="adicionarAoPedido('${item.nome}', ${index})">Adicionar ao Pedido</button>
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

function adicionarAoPedido(nome) {
    if (pedido[nome]) {
        pedido[nome].quantidade += 1; // Aumenta a quantidade se o item já estiver no pedido
    } else {
        pedido[nome] = {
            quantidade: 1, // Começa com quantidade 1
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
            <div class="d-flex justify-content-between align-items-center w-100">
                <input type="number" value="${pedido[item].quantidade}" onchange="atualizarQuantidade('${item}', this.value)" style="width: 50px;" min="1" class="mr-2">
                <span>${item} - R$ ${pedido[item].preco.toFixed(2)} unidade</span>
                <button class="btn btn-danger btn-sm ml-2" onclick="removerDoPedido('${item}')">Remover</button>
            </div>
        `;

        listaPedido.appendChild(listItem);
    });

    const totalItem = document.createElement('li');
    totalItem.className = "list-group-item d-flex justify-content-between align-items-center font-weight-bold";
    totalItem.innerHTML = `<span>Total</span><span>R$ ${valorTotal.toFixed(2)}</span>`;
    listaPedido.appendChild(totalItem);
}


function atualizarQuantidade(nome, novaQuantidade) {
    if (novaQuantidade < 1) novaQuantidade = 1; // Impede de ser menor que 1
    pedido[nome].quantidade = parseInt(novaQuantidade);
    atualizarPedido();
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
