let listaProdutos = [
    produto = {
        nomeProduto: 'Pão Francês',
        imgProduto: 'img/pao-frances.jpg',
        descProduto: 'Tradicional pão feito com farinha refinada, água, sal e fermento.',
        precoProduto: 'R$8,99 Kg',
    },
    produto = {
        nomeProduto: 'Pão Doce',
        imgProduto: 'img/pao-doce.jpg',
        descProduto: 'Pãozinho doce, bem doce mesmo!',
        precoProduto: 'R$12,99 Kg',
    },
    produto = {
        nomeProduto: 'Pão Integral',
        imgProduto: 'img/pao-integral.jpg',
        descProduto: 'Pão rico em fibras para quem quer uma vida mais saudável.',
        precoProduto: 'R$15,99 Kg',
    },
    produto = {
        nomeProduto: 'Pão de Queijo',
        imgProduto: 'img/pao-queijo.jpg',
        descProduto: 'Pão de queijo quentinho',
        precoProduto: 'R$25,99 Kg',
    },
];

let divRow = document.createElement('div');

    for(let i = 0; i < listaProdutos.length; i++){
        let img = document.createElement('img');
        img.classList.add('img-produto');
        img.setAttribute('src', listaProdutos[i].imgProduto);
        img.setAttribute('alt', listaProdutos[i].nomeProduto);
        
        let divNome = document.createElement('div');
        divNome.classList.add('nome-produto');
        divNome.innerText = listaProdutos[i].nomeProduto;
        
        let divDescricao = document.createElement('div');
        divDescricao.classList.add('descricao');
        divDescricao.innerText = listaProdutos[i].descProduto;
        
        let divPreco = document.createElement('div');
        divPreco.classList.add('preco');
        divPreco.innerText = listaProdutos[i].precoProduto;
        
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-success');
        button.innerText = "Comprar >>>";
        
        
        let divCol = document.createElement('div');
        divCol.classList.add('col-3', 'produto');
        divCol.appendChild(img);
        divCol.appendChild(divNome);
        divCol.appendChild(divDescricao);
        divCol.appendChild(divPreco);
        divCol.appendChild(button);
        //criar elemento/incluir elemento em lista/tornar pai do elemento//
        
        divRow.classList.add('row');
        divRow.appendChild(divCol);
    }
let divProdutos = document.getElementById('produtos');
divProdutos.appendChild(divRow);
