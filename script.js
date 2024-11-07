
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
    { nome: "Cachorro quente", preco: 6.00, categoria: "Lanche", imagem: "css/cachorro quente.jpeg" },
    { nome: "Galo quente", preco: 6.00, categoria: "Lanche", imagem: "css/logo.jpeg" },
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


const pedidos = {};  // Objeto que vai armazenar os pedidos por cliente

// Função para adicionar um item ao pedido
function adicionarAoPedido(nome) {

    if (pedidos[nome]) {
        pedidos[nome].quantidade += 1;
    } else {
        pedidos[nome] = {
            quantidade: 1,
            preco: menuItems.find(item => item.nome === nome).preco
        };
    }

    atualizarPedido();
}

// Função para atualizar o pedido e exibir a lista
function atualizarPedido(chaveComanda) {
    const listaPedido = document.getElementById('lista-pedido');
    listaPedido.innerHTML = '';

    let valorTotal = 0;

    Object.keys(pedidos).forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";

        const valorItem = pedidos[item].quantidade * pedidos[item].preco;
        valorTotal += valorItem;

        listItem.innerHTML = `
            <div class="d-flex justify-content-between align-items-center w-100">
                <input type="number" value="${pedidos[item].quantidade}" onchange="atualizarQuantidade('${item}', this.value)" style="width: 50px;" min="1" class="mr-2">
                <span>${item} - R$ ${pedidos[item].preco.toFixed(2)} unidade</span>
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

// Função para atualizar a quantidade de um item no pedido
function atualizarQuantidade(nome, novaQuantidade) {
    novaQuantidade = parseInt(novaQuantidade);
    if (novaQuantidade < 1) {
        removerDoPedido(nome); // Remove o item se a quantidade for menor que 1
    } else {
        pedidos[nome].quantidade = novaQuantidade;
    }
    atualizarPedido();
}

// Função para remover um item do pedido
function removerDoPedido(nome) {
    delete pedidos[nome];
    atualizarPedido();
}


// Função para enviar o pedido via WhatsApp
function enviarPedido() {
    const nomeCliente = document.getElementById('nomeCliente').value;
    const numeroMesa = document.getElementById('numeroMesa').value;
    const pedidoEmCasa = document.getElementById('pedidoEmCasa').checked;
    const enderecoCliente = document.getElementById('ruaCliente');
    const numeroCliente =  number(document.getElementById('numeroEndereco').value);

    if (Object.keys(pedidos).length === 0) {
        alert("Adicione pelo menos um item ao pedido.");
        return;
    }

    // Criar um resumo do pedido
    let resumoPedido = `*Cliente:* ${nomeCliente}\n`;

    if (pedidoEmCasa) {
        resumoPedido += `*Endereço:* ${enderecoCliente}, Numero: ${numeroCliente}\n*Pedido para entrega:* Sim\n\nItens:\n`;
    } else {
        resumoPedido += `*Mesa:* ${numeroMesa}\n`;
    }

    let valorTotal = 0;
    Object.keys(pedidos).forEach(item => {
        const itemInfo = pedidos[item];
        const valorItem = itemInfo.quantidade * itemInfo.preco;
        resumoPedido += `- ${item} - ${itemInfo.quantidade} x R$ ${itemInfo.preco.toFixed(2)} = R$ ${valorItem.toFixed(2)}\n`;
        valorTotal += valorItem;
    });

    resumoPedido += `\n*Total: R$ ${valorTotal.toFixed(2)}*`;

    // Formatar a mensagem para o WhatsApp
    const mensagem = encodeURIComponent(resumoPedido);
    const numeroWhatsApp = "5584991164038"; 
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
    
    window.open(url, '_blank');
}

// Exibe todos os itens inicialmente
exibirMenu();

function filtrarCategoria(categoria) {
    exibirMenu(categoria); // Passa a categoria para exibirMenu
}


// Função para exibir itens do menu como carrossel com base na categoria selecionada
function exibirMenu(categoria = "") {
    const menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = ""; // Limpa os itens existentes

    const itensFiltrados = categoria ? menuItems.filter(item => item.categoria === categoria) : menuItems;
    let activeClass = 'active';

    // Divide os itens em slides para o carrossel
    for (let i = 0; i < itensFiltrados.length; i += 4) {
        const slide = document.createElement('div');
        slide.className = `carousel-item ${activeClass}`;
        activeClass = ''; // Apenas o primeiro slide é ativo

        // Cria uma linha para conter até 4 cartões
        const row = document.createElement('div');
        row.className = "row justify-content-center";

        itensFiltrados.slice(i, i + 3).forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = "col-3 col-sm-3 col-md-3 mb-3"; // Mantenha col-3 para todos os tamanhos
            itemDiv.innerHTML = `
                <div class="card">
                    <img src="${item.imagem}" class="card-img-top" alt="${item.nome}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${item.nome}</h5>
                        <p class="card-text">R$ ${item.preco.toFixed(2)}</p>
                        <button class="btn btn-primary btn-sm" id="boti" onclick="adicionarAoPedido('${item.nome}')">Adicionar</button>
                    </div>
                </div>
            `;
            row.appendChild(itemDiv);
        });
        slide.appendChild(row);
        menuContainer.appendChild(slide);
    }
}

   
// Função para alternar a exibição dos campos de endereço
function toggleEndereco() {
    const checkbox = document.getElementById("pedidoEmCasa");
    const enderecoDiv = document.getElementById("enderecoCliente");

    if (checkbox.checked) {
        enderecoDiv.style.display = "block";
    } else {
        enderecoDiv.style.display = "none";
    }
}



