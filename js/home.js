/** 
 * LÓGICA DE PROGRAMAÇÃO DA HOME PAGE DO PROJETO DO SITE MUSICAL EVOLUTION
 * Atividade da Conclusão de curso JAVASCRIPT
 * Prof. Claudio Junior Nascimento
 * 
 *  **/




/*** DEFININDO OBJETO PRODUTO ***/
const objetoProduto = [
    {"prdID":1, "prdPrecoUnit":20000.00, "prdCategoria":"Cordas", "prdImg":"/assets/images/bass1.jpg", "prdTitulo":"Baixo TRB 6P JP2", "prdDescr":"Excelente contrabaixo de 6 cordas com sonoridade incrivel"},
    {"prdID":2, "prdPrecoUnit":15000.00, "prdCategoria":"Cordas", "prdImg":"/assets/images/guitarra2.jpg", "prdTitulo":"Guitarra Fender Stratocaster", "prdDescr":"Esta guitarra não tem palavras, ferragens e madeiras de altissima qualidade"},
    {"prdID":3, "prdPrecoUnit":25000.00, "prdCategoria":"Acusticos", "prdImg":"/assets/images/sanfona1.jpg", "prdTitulo":"Acordeon Scandali", "prdDescr":"Lindo acordeon, torne sua musicalidade expetacular"},
    {"prdID":4, "prdPrecoUnit":500.00, "prdCategoria":"Cordas", "prdImg":"/assets/images/bass1.jpg", "prdTitulo":"Baixo TRB 6P JP2", "prdDescr":"Excelente contrabaixo de 6 cordas com sonoridade incrivel"},
    {"prdID":5, "prdPrecoUnit":2350.50, "prdCategoria":"Cordas", "prdImg":"/assets/images/guitarra2.jpg", "prdTitulo":"Guitarra Fender Stratocaster", "prdDescr":"Esta guitarra não tem palavras, ferragens e madeiras de altissima qualidade"},
    {"prdID":6, "prdPrecoUnit":125.70, "prdCategoria":"Acusticos", "prdImg":"/assets/images/planodefundo.jpg", "prdTitulo":"Acordeon Scandali", "prdDescr":"Lindo acordeon, torne sua musicalidade expetacular"},
    {"prdID":7, "prdPrecoUnit":125.70, "prdCategoria":"Acusticos", "prdImg":"/assets/images/sanfona1.jpg", "prdTitulo":"Acordeon Scandali", "prdDescr":"Lindo acordeon, torne sua musicalidade expetacular"},
    {"prdID":8, "prdPrecoUnit":125.70, "prdCategoria":"Acusticos", "prdImg":"/assets/images/planodefundo.jpg", "prdTitulo":"Acordeon Scandali", "prdDescr":"Lindo acordeon, torne sua musicalidade expetacular"},
    {"prdID":9, "prdPrecoUnit":125.70, "prdCategoria":"Acusticos", "prdImg":"/assets/images/sanfona1.jpg", "prdTitulo":"Acordeon Scandali", "prdDescr":"Lindo acordeon, torne sua musicalidade expetacular"},
    {"prdID":10, "prdPrecoUnit":125.70, "prdCategoria":"Acusticos", "prdImg":"/assets/images/planodefundo.jpg", "prdTitulo":"Acordeon Scandali", "prdDescr":"Lindo acordeon, torne sua musicalidade expetacular"}
];


/*** DEFININDO OBJETO CARRINHO DE COMPRAS VAZIO ***/
var carrinhoCodigo = 0;
const objetoCarrinho = [{"carCodigo":null, "carData":null, "carStatus":null, "carProdutos":[]}];


/** CAHAMANDO FUNÇÃO QUE CRIA A NAVBAR */
criarNavBar();


listarTodosOsProdutosNaHomePage();





/*** FUNCAO PARA LIMPAR TUDO QUE ESTIVER NA DIV CORPO DINÂMICO */
function limparCorpoDinamico(){
    const corpoDinamico = document.getElementById("corpoDinamico");

    corpoDinamico.remove();

    const novoCorpoDinamico = document.createElement("div");
    novoCorpoDinamico.setAttribute("class","container-flex");
    novoCorpoDinamico.setAttribute("id", "corpoDinamico");

    document.body.appendChild(novoCorpoDinamico);

    //<div class="container" id="corpoDinamico">
}


/**** CRIANDO NAVBAR DINÂMICA */
function criarNavBar(){

    /**Criando lista de objetos da nav bar */
    const objetoNavbar = [
        {"itemId":"1", "itemDescricao":"Homepage", "itemCategoria":"homepageId", "icone":""},
        {"itemId":"2", "itemDescricao":"Quem somos", "itemCategoria":"quemsomosId", "icone":""},
        {"itemId":"3", "itemDescricao":"Cordas", "itemCategoria":"cordasId", "icone":""},
        {"itemId":"4", "itemDescricao":"Sopro", "itemCategoria":"soproId", "icone":""},
        {"itemId":"5", "itemDescricao":"Acusticos", "itemCategoria":"acusticosId", "icone":""},
        {"itemId":"6", "itemDescricao":"Eletrônicos", "itemCategoria":"eletronicosId", "icone":""},
        {"itemId":"7", "itemDescricao":"Acessorios", "itemCategoria":"acessoriosId", "icone":""}
    ]

    /** Obtendo o ID da Div da Navbar ja existente na pagina home */
    const divNav = document.getElementById("divNavBar");

    /** criando elementos da lista da navbar */
    const navUl = document.createElement("ul");
    

    for(let it of objetoNavbar){
        const navLi = document.createElement("li");
        const navLink = document.createElement("a");
        const navIcone = document.createElement("i");
        

        navLink.setAttribute("href", "home.html");
        navLink.id = it.itemCategoria.toLowerCase().trim().replace(" ","");
        navIcone.setAttribute("class", it.icone);


        navLink.textContent = " "+it.itemDescricao+" ";
        
        navLink.appendChild(navIcone);
        navLi.appendChild(navLink);
        navUl.appendChild(navLi);   

    }
    

    
   

    const btnSpanMsg = document.createElement("span");
    btnSpanMsg.id = "numPedBadgeId";
    btnSpanMsg.setAttribute("class","position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger");   
    btnSpanMsg.textContent = 0;
    btnSpanMsg.hidden = true;

    const btnSpanVisible = document.createElement("span");
    btnSpanVisible.setAttribute("class","visually-hidden");
    btnSpanVisible.textContent = " itens no carrinho";
    

    const navIcone = document.createElement("i");
    navIcone.setAttribute("class","bi bi-cart");

    const navLi = document.createElement("li");

    const btnCarrinho = document.createElement("button");
    btnCarrinho.setAttribute("type","button");
    btnCarrinho.setAttribute("class","btn btn-primary position-relative");
    btnCarrinho.textContent = " Carrinho de Compras ";
    btnCarrinho.id = "carrinhocomprasid";
    btnCarrinho.value = "carrinhocomprasid";

    btnCarrinho.appendChild(navIcone);
    btnCarrinho.appendChild(btnSpanMsg);
    btnCarrinho.appendChild(btnSpanVisible);
    navLi.appendChild(btnCarrinho);
    navUl.appendChild(navLi);

    divNav.appendChild(navUl);

}




function quemsomos(){
    limparCorpoDinamico();
    const corpo = document.getElementById("corpoDinamico");

    const messagemQuemSomos = document.createElement("h2");
    messagemQuemSomos.textContent = "Nossa missão é satisfazer nossos clientes, fornecendo produtos de alta qualidade e que sejam fabricados por nossos parceiros de maneira responsável e sustentável"    

    corpo.appendChild(messagemQuemSomos);

    
}






function listarTodosOsProdutosNaHomePage(origem = ""){
    cardsTamanho()

    limparCorpoDinamico();
    const corpo = document.getElementById("corpoDinamico");    

    
   
    if(origem != ""){
        var novaLista =  objetoProduto.filter(objetoProduto => objetoProduto.prdCategoria === origem);

    }else{
        var novaLista =  objetoProduto;
    }

    if(novaLista.length == 0){
        alert(`Não existem produtos a serem exibidos para a categoria ${origem}`);
    }
    
    for(item of novaLista){

    

    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const imgCard = document.createElement("img");
    imgCard.setAttribute("src", item.prdImg);
    imgCard.setAttribute("class", "card-img-top");
    imgCard.setAttribute("alt", `img${item.prdID}`);


    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    

    const cardTitulo = document.createElement("h6");
    cardTitulo.setAttribute("class", "card-title");
    cardTitulo.textContent = item.prdTitulo;
    

    const cardParagrafo = document.createElement("p");
    cardParagrafo.setAttribute("class", "card-text");
    cardParagrafo.textContent = item.prdDescr;

    const cardFooter = document.createElement("div");
    cardFooter.setAttribute("class", "card-footer");

    const ulFooter = document.createElement("ul");
    const liPreco = document.createElement("li");
    liPreco.textContent = `Preço: R$ ${item.prdPrecoUnit}`;

    const liBtn = document.createElement("li");

    
    const cardBtnCarrinho = document.createElement("button");
    cardBtnCarrinho.id = "btnAddCarrinho";
    cardBtnCarrinho.setAttribute("class", "btn btn-primary");
    cardBtnCarrinho.setAttribute("type", "button");
    cardBtnCarrinho.setAttribute("onClick",`carrinhoAdd(${item.prdID})`);
    cardBtnCarrinho.textContent = "Add ";
    cardBtnCarrinho.value = item.prdID;


    const cardBtnIcon = document.createElement("i");
    cardBtnIcon.setAttribute("class", "bi bi-cart-plus");


    corpo.appendChild(card);
    card.appendChild(imgCard);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    cardBody.appendChild(cardTitulo);
    cardBody.appendChild(cardParagrafo);


    cardFooter.appendChild(ulFooter);
    ulFooter.appendChild(liPreco);
    ulFooter.appendChild(liBtn);    
    liBtn.appendChild(cardBtnCarrinho);

    cardBtnCarrinho.appendChild(cardBtnIcon);

    }
    
}



function carrinhoAdd(btnPrdId){
    carrinhoCodigo++;
    var botaoID = btnPrdId;
    
    /*** OBJETO CARRINHO RECEBE OS DADOS DA SUA ENTIDADE */
    var existeCarrinhoAberto = objetoCarrinho.filter(x => x.carStatus === "aberto");
    
    if(existeCarrinhoAberto.length > 0){
        let carCodigo = objetoCarrinho.filter(x => x.carStatus === "aberto")[0];
        
        inserirProdutoCarrinho(objetoCarrinho, botaoID);
        
        
    }else{
        var objCar = {"carCodigo":carrinhoCodigo, "carData":new Date(), "carStatus":"aberto", "carProdutos":[]}; 
        objetoCarrinho.push(objCar);

        let carCodigo = objetoCarrinho.filter(x => x.carStatus === "aberto")[0];

        inserirProdutoCarrinho(objetoCarrinho, botaoID);
    }
    

  
}

function inserirProdutoCarrinho(carrinho, btnPrdId){
    var prdFindById = objetoProduto.filter(prd => prd.prdID === btnPrdId);

    var listaDeCarrinho = carrinho.filter(car => car.carStatus === "aberto");
    var carrinhoid = listaDeCarrinho[0].carCodigo;
    
    /*** TESTANDO SE EXISTE UM CARRINHO CRIADO E QUE ESTA EM ABERTO */
    if(carrinhoid > 0){
        
        /*** TESTANDO SE JA EXSITE ALGUM ITEM NA LISTA DO CARRINHO.... */
        let existeAlgumItem = objetoCarrinho.filter(id => id.carCodigo === carrinhoid)[0].carProdutos.length;
        if(existeAlgumItem > 0){         

           
            /**** DESCOBRINDO SE O PRODUTO CLICADO É O MESMO PRODUTO QUE JA EXISTE NA LISTA */
            let produtoExisteNoCarrinho = objetoCarrinho.filter(id => id.carCodigo === carrinhoid)[0].carProdutos.filter(pd => pd.prdID === btnPrdId);
            if(produtoExisteNoCarrinho.length > 0){
                alert(`O produto ${produtoExisteNoCarrinho[0].prdTitulo.toUpperCase()} já existe neste carrinho de compras em aberto!`);

            }else{
                objetoCarrinho.filter(id => id.carCodigo === carrinhoid)[0].carProdutos.push(prdFindById[0]);

            };


        }else{
            /*** SE NAO EXISTE NENHUM ITEM VOU INSERIR O PRODUTO CLICADO */           
            objetoCarrinho.filter(id => id.carCodigo === carrinhoid)[0].carProdutos.push(prdFindById[0]);
        }


    }

    
    atualizaBadge();
    

}

function atualizaBadge(){
    /*** VERIFICANDO COMO ESTÁ O CARRINHO DE COMPRAS */
    var qtdePedidos = objetoCarrinho.filter(b => b.carStatus === "aberto")[0].carProdutos.length;

    

    /*** ATUALIZANDO QUANTIDADE DE PEDIDO NA BADGE DO BOTÃO DE CARRINHO DE COMPRAS */    
    const badgeMsg = document.getElementById("numPedBadgeId");
    if(qtdePedidos > 0){
        badgeMsg.hidden = false;
    }else{
        badgeMsg.hidden = true;

    }
      
    badgeMsg.textContent = qtdePedidos;

}




function listarTodoProdutosCarrinhoDeCompras(carrinhoCode){   

    var existeCarrinhoSetado = objetoCarrinho.filter(x => x.carCodigo === carrinhoCode);
    if(existeCarrinhoSetado.length > 0){
        var listaDeProdutosInCarrinho = objetoCarrinho.filter(x => x.carCodigo === carrinhoCode)[0].carProdutos;
        if(listaDeProdutosInCarrinho.length > 0){
    
            /** LIMPANDO CORPO DINÂMICO DA PAGINA */
            limparCorpoDinamico();
            const corpo = document.getElementById("corpoDinamico");

            const carrinhoDivContainer = document.createElement("div");
            carrinhoDivContainer.setAttribute("class","div-container-listacarrinho");
            carrinhoDivContainer.id = "divContainerListacarrinho";
            
            const carrinhoUL = document.createElement("ul"); 


            console.clear();

            listaDeProdutosInCarrinho.forEach(prod => {
                const carrinhoPrdImg = document.createElement("img");
                carrinhoPrdImg.setAttribute("src", prod.prdImg);
                carrinhoPrdImg.setAttribute("class", "img-prd-carrinho");

                const carrinhoPrdTitulo = document.createElement("h5");
                carrinhoPrdTitulo.textContent = `Código: ${prod.prdID}   >   Título: ${prod.prdTitulo}  >  Preço Unitário: ${prod.prdPrecoUnit}`;

                const carrinhoDivInfo = document.createElement("div");
                carrinhoDivInfo.setAttribute("class","carrinho-info");

                const carrinhoDivInput = document.createElement("div");
                carrinhoDivInput.setAttribute("class","container-flex carrinho-inputs");

                const carrinhoQtde = document.createElement("input");
                carrinhoQtde.setAttribute("id",`inputQtdeId_prd_${prod.prdID}`);
                carrinhoQtde.setAttribute("class","inputs-carrinho inputs-qtdes");
                carrinhoQtde.setAttribute("type","number");
                carrinhoQtde.setAttribute("onClick","calculaTotaisdoCarrinho()");
                carrinhoQtde.setAttribute("min", 1);
                carrinhoQtde.setAttribute("max", 9999);
                carrinhoQtde.setAttribute("placeholder","qtde");

                const carrinhoPrecoUnitario = document.createElement("input");
                carrinhoPrecoUnitario.setAttribute("id",`inputPrecoUnit_prd_${prod.prdID}`);
                carrinhoPrecoUnitario.setAttribute("class","inputs-carrinho");
                carrinhoPrecoUnitario.setAttribute("type","number");
                carrinhoPrecoUnitario.value = prod.prdPrecoUnit;
                carrinhoPrecoUnitario.disabled = true;

                                

                const carrinhoValorTotalItem = document.createElement("input");
                carrinhoValorTotalItem.setAttribute("id",`inputValTotal_item_prd_${prod.prdID}`);
                carrinhoValorTotalItem.setAttribute("class","inputs-carrinho");
                carrinhoValorTotalItem.setAttribute("type","number");
                carrinhoValorTotalItem.value = prod.prdPrecoUnit;
                carrinhoValorTotalItem.disabled = true;

                

                const carrinhoBtnRemove = document.createElement("button");
                carrinhoBtnRemove.setAttribute("type","button");    
                carrinhoBtnRemove.id = "btnRemoverCarrinhoId";
                carrinhoBtnRemove.setAttribute("onClick",`removeItemCarrinhoCompras(${prod.prdID})`);

                


                carrinhoBtnRemove.setAttribute("class","btn btn-danger");                                            
                carrinhoBtnRemove.textContent = " Remover ";

                const iconeBtnRemover = document.createElement("i");
                iconeBtnRemover.setAttribute("class","bi bi-trash-fill");
                carrinhoBtnRemove.appendChild(iconeBtnRemover);


                const carrinhoLI = document.createElement("li");

                carrinhoDivInput.appendChild(carrinhoQtde);
                carrinhoDivInput.appendChild(carrinhoPrecoUnitario);
                carrinhoDivInput.appendChild(carrinhoValorTotalItem);
                carrinhoDivInput.appendChild(carrinhoBtnRemove);

                carrinhoDivInfo.appendChild(carrinhoPrdImg);
                carrinhoDivInfo.appendChild(carrinhoPrdTitulo);
                carrinhoDivInfo.appendChild(carrinhoDivInput);

                carrinhoLI.appendChild(carrinhoDivInfo);

                carrinhoUL.appendChild(carrinhoLI);
                
                
                
                
            })
             

            
            carrinhoDivContainer.appendChild(carrinhoUL);
            corpo.appendChild(carrinhoDivContainer);
            

        }else{
            alert('Não existem dados para serem exibidos no carrinho');

        }

    }else{
        alert('Não existem dados para serem exibidos no carrinho');
    }   

}

function calculaTotaisdoCarrinho(){
    if(document.querySelectorAll(".inputs-qtdes").length){
        const itemDigitadoNaQuantidade = document.querySelectorAll(".inputs-qtdes");
        console.clear();
        console.log(itemDigitadoNaQuantidade);
        itemDigitadoNaQuantidade.forEach(it => {
            console.log(`INDEX: ${it.id} VALOR QTDE: ${it.value} `);

            

        })

    }else{
        console.log("inputQtdeAindaNaoExiste");
    }
}


/*** FUNCAO PARA O BOTAO REMOVER PARA REMOVER O ITEM DO CARRINHO DE COMPRAS */
function removeItemCarrinhoCompras(produtoID){
    let carrinhoExiste = objetoCarrinho.filter(cr => cr.carStatus === "aberto");

    if(carrinhoExiste.length > 0){
        let prdExiste = carrinhoExiste[0].carProdutos.filter(p => p.prdID === produtoID);
        if(prdExiste.length > 0){
            if(confirm("Voçê deseja realmente excluir ")){
                objetoCarrinho.filter(cr => cr.carStatus === "aberto")[0].carProdutos.splice(p => p.prdID === produtoID, 1);
                listarTodoProdutosCarrinhoDeCompras(1);
                atualizaBadge();
            }
        }        
    }    
}





/*** EVENTOS DOS COMPONENTES NA PAGINA HTML */

document.getElementById("quemsomosid").addEventListener("click", function(event){
    quemsomos();
    event.preventDefault();
});

document.getElementById("homepageid").addEventListener("click", function(event){
    listarTodosOsProdutosNaHomePage();
    event.preventDefault();
});

document.getElementById("cordasid").addEventListener("click", function(event){
    var origem = document.getElementById("cordasid").textContent;
    listarTodosOsProdutosNaHomePage(origem.toString().trim());
    event.preventDefault();
});

document.getElementById("soproid").addEventListener("click", function(event){
    var origem = document.getElementById("soproid").textContent;
    listarTodosOsProdutosNaHomePage(origem.toString().trim());
    event.preventDefault();
});

document.getElementById("acusticosid").addEventListener("click", function(event){
    var origem = document.getElementById("acusticosid").textContent;
    listarTodosOsProdutosNaHomePage(origem.toString().trim());
    event.preventDefault();
});

document.getElementById("eletronicosid").addEventListener("click", function(event){
    var origem = document.getElementById("eletronicosid").textContent;
    listarTodosOsProdutosNaHomePage(origem.toString().trim());
    event.preventDefault();
});

document.getElementById("acessoriosid").addEventListener("click", function(event){
    var origem = document.getElementById("acessoriosid").textContent;
    listarTodosOsProdutosNaHomePage(origem.toString().trim());
    event.preventDefault();
});


document.getElementById("carrinhocomprasid").addEventListener("click", function(event){
    var origem = document.getElementById("carrinhocomprasid").value;

    listarTodoProdutosCarrinhoDeCompras(1); ///LEMBRAR DE IMPLMENTAR UMA FORMA DE PASSAR O CODIGO DO CARRINHO PELO BOTÃO.....

    event.preventDefault();
});











function cardsTamanho(){
const cards = document.querySelectorAll('.card');
var maxHeight = 0;

cards.forEach(card => {
    if (card.offsetHeight > maxHeight) {
        maxHeight = card.offsetHeight;
        console.log(maxHeight);
    }
});

cards.forEach(card => {   
    card.style.maxHeight = maxHeight + 'px';
    console.log(maxHeight);
});
}






///** CRIANDO O RODAPÉ DA PAGINA E INCLUINDO TAG FOOTER APOS O CORPO DA PAGINA */
const pageBody = document.getElementById("body");
const footer = document.createElement("footer");

const msgFooter = document.createElement("p");
msgFooter.textContent = "@Este Site é um PROJETO dos Alunos(as) Fábio Leite Cardos, Antonio ,Jonata, Natan  do Curso Programação de Computadores com Javascript ofertado pela TOMORROW, sob a orientação do professor Claudio Silva";
footer.appendChild(msgFooter);


pageBody.after(footer);





