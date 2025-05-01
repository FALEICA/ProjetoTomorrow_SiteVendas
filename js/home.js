/**
 * LÓGICA DE PROGRAMAÇÃO DA HOME PAGE DO PROJETO DO SITE MUSICAL EVOLUTION
 * Atividade da Conclusão de curso JAVASCRIPT
 * Prof. Claudio Junior Nascimento
 *
 *  **/

/*** DEFININDO OBJETO PRODUTO ***/
const objetoProduto = [
  {
    prdID: 1,
    prdPrecoUnit: 20000.0,
    prdCategoria: "Cordas",
    prdImg: "/assets/images/bass1.jpg",
    prdTitulo: "Baixo TRB 6P JP2",
    prdDescr: "Excelente contrabaixo de 6 cordas com sonoridade incrivel",
  },
  {
    prdID: 2,
    prdPrecoUnit: 15000.0,
    prdCategoria: "Cordas",
    prdImg: "/assets/images/guitarra2.jpg",
    prdTitulo: "Guitarra Fender Stratocaster",
    prdDescr:
      "Esta guitarra não tem palavras, ferragens e madeiras de altissima qualidade",
  },
  {
    prdID: 3,
    prdPrecoUnit: 25000.0,
    prdCategoria: "Acusticos",
    prdImg: "/assets/images/sanfona1.jpg",
    prdTitulo: "Acordeon Scandali",
    prdDescr: "Lindo acordeon, torne sua musicalidade expetacular",
  },
  {
    prdID: 4,
    prdPrecoUnit: 500.0,
    prdCategoria: "Cordas",
    prdImg: "/assets/images/bass1.jpg",
    prdTitulo: "Baixo TRB 6P JP2",
    prdDescr: "Excelente contrabaixo de 6 cordas com sonoridade incrivel",
  },
  {
    prdID: 5,
    prdPrecoUnit: 2350.5,
    prdCategoria: "Cordas",
    prdImg: "/assets/images/guitarra2.jpg",
    prdTitulo: "Guitarra Fender Stratocaster",
    prdDescr:
      "Esta guitarra não tem palavras, ferragens e madeiras de altissima qualidade",
  },
  {
    prdID: 6,
    prdPrecoUnit: 125.7,
    prdCategoria: "Acusticos",
    prdImg: "/assets/images/planodefundo.jpg",
    prdTitulo: "Acordeon Scandali",
    prdDescr: "Lindo acordeon, torne sua musicalidade expetacular",
  },
  {
    prdID: 7,
    prdPrecoUnit: 125.7,
    prdCategoria: "Acusticos",
    prdImg: "/assets/images/sanfona1.jpg",
    prdTitulo: "Acordeon Scandali",
    prdDescr: "Lindo acordeon, torne sua musicalidade expetacular",
  },
  {
    prdID: 8,
    prdPrecoUnit: 125.7,
    prdCategoria: "Acusticos",
    prdImg: "/assets/images/planodefundo.jpg",
    prdTitulo: "Acordeon Scandali",
    prdDescr: "Lindo acordeon, torne sua musicalidade expetacular",
  },
  {
    prdID: 9,
    prdPrecoUnit: 125.7,
    prdCategoria: "Acusticos",
    prdImg: "/assets/images/sanfona1.jpg",
    prdTitulo: "Acordeon Scandali",
    prdDescr: "Lindo acordeon, torne sua musicalidade expetacular",
  },
  {
    prdID: 10,
    prdPrecoUnit: 125.7,
    prdCategoria: "Acusticos",
    prdImg: "/assets/images/planodefundo.jpg",
    prdTitulo: "Acordeon Scandali",
    prdDescr: "Lindo acordeon, torne sua musicalidade expetacular",
  },
];

/*** DEFININDO OBJETO CARRINHO DE COMPRAS VAZIO ***/
var carrinhoCodigoInicial = 0;
var carrinhoCodigoAtual = 0;
const objetoCarrinho = [
  { carCodigo: null, carData: null, carStatus: null, carProdutos: [] },
];

setInterval(() => {
  atualizaVariavelGlobalCarrinho();
  atualizaBadge();
  calculaTotaisdoCarrinho();
}, 2000);

function atualizaVariavelGlobalCarrinho() {
  const existeCodigoCarrinhoCompras = objetoCarrinho.filter(
    (car) => car.carStatus === "aberto"
  );

  if (existeCodigoCarrinhoCompras.length > 0) {
    carrinhoCodigoAtual = existeCodigoCarrinhoCompras[0].carCodigo;
  }
}

/** CAHAMANDO FUNÇÃO QUE CRIA A NAVBAR */
criarNavBar();

listarTodosOsProdutosNaHomePage();

/*** FUNCAO PARA LIMPAR TUDO QUE ESTIVER NA DIV CORPO DINÂMICO */
function limparCorpoDinamico() {
  const corpoDinamico = document.getElementById("corpoDinamico");

  corpoDinamico.remove();

  const novoCorpoDinamico = document.createElement("div");
  novoCorpoDinamico.setAttribute("class", "container-flex");
  novoCorpoDinamico.setAttribute("id", "corpoDinamico");

  document.body.appendChild(novoCorpoDinamico);

  //<div class="container" id="corpoDinamico">
}

/**** CRIANDO NAVBAR DINÂMICA */
function criarNavBar() {
  /**Criando lista de objetos da nav bar */
  const objetoNavbar = [
    {
      itemId: "1",
      itemDescricao: "Homepage",
      itemCategoria: "homepageId",
      icone: "",
    },
    {
      itemId: "2",
      itemDescricao: "Quem somos",
      itemCategoria: "quemsomosId",
      icone: "",
    },
    {
      itemId: "3",
      itemDescricao: "Cordas",
      itemCategoria: "cordasId",
      icone: "",
    },
    {
      itemId: "4",
      itemDescricao: "Sopro",
      itemCategoria: "soproId",
      icone: "",
    },
    {
      itemId: "5",
      itemDescricao: "Acusticos",
      itemCategoria: "acusticosId",
      icone: "",
    },
    {
      itemId: "6",
      itemDescricao: "Eletrônicos",
      itemCategoria: "eletronicosId",
      icone: "",
    },
    {
      itemId: "7",
      itemDescricao: "Acessorios",
      itemCategoria: "acessoriosId",
      icone: "",
    },
  ];

  /** Obtendo o ID da Div da Navbar ja existente na pagina home */
  const divNav = document.getElementById("divNavBar");

  /** criando elementos da lista da navbar */
  const navUl = document.createElement("ul");

  for (let it of objetoNavbar) {
    const navLi = document.createElement("li");
    const navLink = document.createElement("a");
    const navIcone = document.createElement("i");

    navLink.setAttribute("href", "home.html");
    navLink.id = it.itemCategoria.toLowerCase().trim().replace(" ", "");
    navIcone.setAttribute("class", it.icone);

    navLink.textContent = " " + it.itemDescricao + " ";

    navLink.appendChild(navIcone);
    navLi.appendChild(navLink);
    navUl.appendChild(navLi);
  }

  const btnSpanMsg = document.createElement("span");
  btnSpanMsg.id = "numPedBadgeId";
  btnSpanMsg.setAttribute(
    "class",
    "car-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
  );
  btnSpanMsg.textContent = 0;
  btnSpanMsg.hidden = true;

  const btnSpanVisible = document.createElement("span");
  btnSpanVisible.setAttribute("class", "visually-hidden");
  btnSpanVisible.textContent = " itens no carrinho";

  const navIcone = document.createElement("i");
  navIcone.setAttribute("class", "bi bi-cart");

  const navLi = document.createElement("li");

  const btnCarrinho = document.createElement("button");
  btnCarrinho.setAttribute("type", "button");
  btnCarrinho.setAttribute("class", "btn btn-primary position-relative");
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

function quemsomos() {
  limparCorpoDinamico();
  const corpo = document.getElementById("corpoDinamico");

  const messagemQuemSomos = document.createElement("h2");
  messagemQuemSomos.textContent =
    "Nossa missão é satisfazer nossos clientes, fornecendo produtos de alta qualidade e que sejam fabricados por nossos parceiros de maneira responsável e sustentável";

  corpo.appendChild(messagemQuemSomos);
}

function listarTodosOsProdutosNaHomePage(origem = "") {
  cardsTamanho();

  limparCorpoDinamico();
  const corpo = document.getElementById("corpoDinamico");

  if (origem != "") {
    var novaLista = objetoProduto.filter(
      (objetoProduto) => objetoProduto.prdCategoria === origem
    );
  } else {
    var novaLista = objetoProduto;
  }

  if (novaLista.length == 0) {
    alert(`Não existem produtos a serem exibidos para a categoria ${origem}`);
  }

  for (item of novaLista) {
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
    liPreco.textContent = `Preço: R$ ${parseFloat(item.prdPrecoUnit).toFixed(
      2
    )}`;

    const liBtn = document.createElement("li");

    const cardBtnCarrinho = document.createElement("button");
    cardBtnCarrinho.id = "btnAddCarrinho";
    cardBtnCarrinho.setAttribute("class", "btn btn-primary");
    cardBtnCarrinho.setAttribute("type", "button");
    cardBtnCarrinho.setAttribute("onClick", `carrinhoAdd(${item.prdID})`);
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

function carrinhoAdd(btnPrdId) {
  carrinhoCodigoInicial++;
  var botaoID = btnPrdId;

  /*** OBJETO CARRINHO RECEBE OS DADOS DA SUA ENTIDADE */
  var existeCarrinhoAberto = objetoCarrinho.filter(
    (x) => x.carStatus === "aberto"
  );

  if (existeCarrinhoAberto.length > 0) {
    let carCodigo = objetoCarrinho.filter((x) => x.carStatus === "aberto")[0];

    inserirProdutoCarrinho(objetoCarrinho, botaoID);
  } else {
    var objCar = {
      carCodigo: carrinhoCodigoInicial,
      carData: new Date(),
      carStatus: "aberto",
      carProdutos: [],
    };
    objetoCarrinho.push(objCar);

    let carCodigo = objetoCarrinho.filter((x) => x.carStatus === "aberto")[0];

    inserirProdutoCarrinho(objetoCarrinho, botaoID);
  }
}

function inserirProdutoCarrinho(carrinho, btnPrdId) {
  var prdFindById = objetoProduto.filter((prd) => prd.prdID === btnPrdId);

  var listaDeCarrinho = carrinho.filter((car) => car.carStatus === "aberto");
  var carrinhoid = listaDeCarrinho[0].carCodigo;

  /*** TESTANDO SE EXISTE UM CARRINHO CRIADO E QUE ESTA EM ABERTO */
  if (carrinhoid > 0) {
    /*** TESTANDO SE JA EXSITE ALGUM ITEM NA LISTA DO CARRINHO.... */
    let existeAlgumItem = objetoCarrinho.filter(
      (id) => id.carCodigo === carrinhoid
    )[0].carProdutos.length;
    if (existeAlgumItem > 0) {
      /**** DESCOBRINDO SE O PRODUTO CLICADO É O MESMO PRODUTO QUE JA EXISTE NA LISTA */
      let produtoExisteNoCarrinho = objetoCarrinho
        .filter((id) => id.carCodigo === carrinhoid)[0]
        .carProdutos.filter((pd) => pd.prdID === btnPrdId);
      if (produtoExisteNoCarrinho.length > 0) {
        alert(
          `O produto ${produtoExisteNoCarrinho[0].prdTitulo.toUpperCase()} já existe neste carrinho de compras em aberto!`
        );
      } else {
        objetoCarrinho
          .filter((id) => id.carCodigo === carrinhoid)[0]
          .carProdutos.push(prdFindById[0]);
      }
    } else {
      /*** SE NAO EXISTE NENHUM ITEM VOU INSERIR O PRODUTO CLICADO */
      objetoCarrinho
        .filter((id) => id.carCodigo === carrinhoid)[0]
        .carProdutos.push(prdFindById[0]);
    }
  }

  atualizaVariavelGlobalCarrinho();
  atualizaBadge();
}

function atualizaBadge() {
  /*** VERIFICANDO COMO ESTÁ O CARRINHO DE COMPRAS */
  if (objetoCarrinho.filter((b) => b.carStatus === "aberto").length > 0) {
    var qtdePedidos = objetoCarrinho.filter((b) => b.carStatus === "aberto")[0]
      .carProdutos.length;
  }

  /*** ATUALIZANDO QUANTIDADE DE PEDIDO NA BADGE DO BOTÃO DE CARRINHO DE COMPRAS */
  const badgeExists = document.querySelectorAll("car-badge");

  const badgeMsg = document.getElementById("numPedBadgeId");
  if (qtdePedidos > 0) {
    badgeMsg.hidden = false;
  } else {
    badgeMsg.hidden = true;
  }

  badgeMsg.textContent = qtdePedidos;
}

function listarTodoProdutosCarrinhoDeCompras(carrinhoCode) {
  var existeCarrinhoSetado = objetoCarrinho.filter(
    (x) => x.carCodigo === carrinhoCode
  );
  if (existeCarrinhoSetado.length > 0) {
    var listaDeProdutosInCarrinho = objetoCarrinho.filter(
      (x) => x.carCodigo === carrinhoCode
    )[0].carProdutos;
    if (listaDeProdutosInCarrinho.length > 0) {
      /** LIMPANDO CORPO DINÂMICO DA PAGINA */
      limparCorpoDinamico();
      const corpo = document.getElementById("corpoDinamico");

      const carrinhoDivContainer = document.createElement("div");
      carrinhoDivContainer.setAttribute("class", "div-container-listacarrinho");
      carrinhoDivContainer.id = "divContainerListacarrinho";
      
      var corFundoTotais = "#333";
      var corDaFonteTotais = "#FFF";
      
      const carrinhoUL = document.createElement("ul");
      carrinhoUL.setAttribute("class", "totais-background-geral");

      const carrinhoTotalLi = document.createElement("li");
      carrinhoTotalLi.setAttribute("class", "totais-background-geral");
      carrinhoTotalLi.setAttribute("style", `background-color: ${corFundoTotais}; color: ${corDaFonteTotais}`);

      const divCarrinhoTotais = document.createElement("div");
      divCarrinhoTotais.setAttribute("class", "div-carrinho-totais totais-background-geral");
      divCarrinhoTotais.setAttribute("style", `background-color: ${corFundoTotais}; color: ${corDaFonteTotais}`);

      const infoTotalUl = document.createElement("ul");
      infoTotalUl.setAttribute("class", "totais-background-geral");
      infoTotalUl.setAttribute("style", `background-color: ${corFundoTotais}; color: ${corDaFonteTotais}`);

      const infoTotalLi = document.createElement("li");
      infoTotalLi.setAttribute("class", "totais-background-geral");
      infoTotalLi.setAttribute("style", `background-color: ${corFundoTotais}; color: ${corDaFonteTotais}`);

      const labelTotalItens = document.createElement("label");
      labelTotalItens.setAttribute("class","labels-totais");
      labelTotalItens.textContent = "Total de Produtos: ";

      const labelTotalVolumes = document.createElement("label");
      labelTotalVolumes.setAttribute("class","labels-totais");
      labelTotalVolumes.textContent = "Total de Volumes: ";

      const labelTotalVista = document.createElement("label");
      labelTotalVista.setAttribute("class","labels-totais");
      labelTotalVista.textContent = "Total a Pagar (R$) a Vista: ";

      carrinhoTotalLi.appendChild(divCarrinhoTotais);
      divCarrinhoTotais.appendChild(infoTotalUl);
      infoTotalUl.appendChild(infoTotalLi);
      infoTotalLi.appendChild(labelTotalItens);
      infoTotalLi.appendChild(labelTotalVolumes);
      infoTotalLi.appendChild(labelTotalVista);


      

      /** ITERANDO E GERANDO DIVS DA LISTAGEM DO CARRINHO DE COMPRAS */
      listaDeProdutosInCarrinho.forEach((prod) => {
        const carrinhoPrdImg = document.createElement("img");
        carrinhoPrdImg.setAttribute("src", prod.prdImg);
        carrinhoPrdImg.setAttribute("class", "img-prd-carrinho");

        const carrinhoPrdTitulo = document.createElement("h5");
        carrinhoPrdTitulo.textContent = `${prod.prdTitulo}`;

        const carrinhoDivInfo = document.createElement("div");
        carrinhoDivInfo.setAttribute("class", "carrinho-info");

        const carrinhoDivInput = document.createElement("div");
        carrinhoDivInput.setAttribute(
          "class",
          "container-flex carrinho-inputs"
        );

        const labelQuantidade = document.createElement("label");
        labelQuantidade.setAttribute("for", "nameQtde");
        labelQuantidade.setAttribute("class", "carrinho-labels");
        labelQuantidade.textContent = "Qtde: ";

        const carrinhoQtde = document.createElement("input");
        carrinhoQtde.setAttribute("id", `itemCarrinhoQtdeId_${prod.prdID}`);
        carrinhoQtde.setAttribute("class", "inputs-carrinho inputs-qtdes");
        carrinhoQtde.setAttribute("name", "nameQtde");
        carrinhoQtde.setAttribute("type", "number");
        carrinhoQtde.setAttribute("onClick", "calculaTotaisdoCarrinho()");
        carrinhoQtde.setAttribute("min", 1);
        carrinhoQtde.setAttribute("max", 9999);
        carrinhoQtde.setAttribute("placeholder", "qtde");
        carrinhoQtde.value = 1;

        const labelPreco = document.createElement("label");
        labelPreco.setAttribute("for", "namePreco");
        labelPreco.setAttribute("class", "carrinho-labels");
        labelPreco.textContent = "Preço: ";

        const carrinhoPrecoUnitario = document.createElement("input");
        carrinhoPrecoUnitario.setAttribute(
          "id",
          `inputPrecoUnit_prd_${prod.prdID}`
        );
        var precoUnitarioFormatado = formatNumero(prod.prdPrecoUnit);
        carrinhoPrecoUnitario.setAttribute("name", "namePreco");
        carrinhoPrecoUnitario.setAttribute("class", "inputs-carrinho");
        carrinhoPrecoUnitario.setAttribute("type", "text");
        carrinhoPrecoUnitario.value = precoUnitarioFormatado;
        carrinhoPrecoUnitario.disabled = true;

        const labelValorTotal = document.createElement("label");
        labelValorTotal.setAttribute("for", "nameValorTotal");
        labelValorTotal.setAttribute("class", "carrinho-labels");
        labelValorTotal.textContent = "Total: ";

        const carrinhoValorTotalItem = document.createElement("input");
        carrinhoValorTotalItem.setAttribute(
          "id",
          `inputValTotal_item_prd_${prod.prdID}`
        );
        carrinhoValorTotalItem.setAttribute("name", "nameValorTotal");
        carrinhoValorTotalItem.setAttribute("class", "inputs-carrinho");
        carrinhoValorTotalItem.setAttribute("type", "text");
        carrinhoValorTotalItem.value = 0;
        carrinhoValorTotalItem.disabled = true;

        const carrinhoBtnRemove = document.createElement("button");
        carrinhoBtnRemove.setAttribute("type", "button");
        carrinhoBtnRemove.id = "btnRemoverCarrinhoId";
        carrinhoBtnRemove.setAttribute(
          "onClick",
          `removeItemCarrinhoCompras(${prod.prdID})`
        );

        carrinhoBtnRemove.setAttribute("class", "btn btn-danger");
        carrinhoBtnRemove.textContent = " Remover ";

        const iconeBtnRemover = document.createElement("i");
        iconeBtnRemover.setAttribute("class", "bi bi-trash-fill");
        carrinhoBtnRemove.appendChild(iconeBtnRemover);

        const carrinhoLI = document.createElement("li");

        carrinhoDivInput.appendChild(labelQuantidade);
        carrinhoDivInput.appendChild(carrinhoQtde);
        carrinhoDivInput.appendChild(labelPreco);
        carrinhoDivInput.appendChild(carrinhoPrecoUnitario);
        carrinhoDivInput.appendChild(labelValorTotal);
        carrinhoDivInput.appendChild(carrinhoValorTotalItem);
        carrinhoDivInput.appendChild(carrinhoBtnRemove);

        carrinhoDivInfo.appendChild(carrinhoPrdImg);
        carrinhoDivInfo.appendChild(carrinhoPrdTitulo);
        carrinhoDivInfo.appendChild(carrinhoDivInput);

        carrinhoLI.appendChild(carrinhoDivInfo);

        carrinhoUL.appendChild(carrinhoLI);
      }); //FIM DO FOREACH GERANDO O ITENS DA LISTA DE CARRINHO DE COMPRAS....

      carrinhoUL.appendChild(carrinhoTotalLi);
      carrinhoDivContainer.appendChild(carrinhoUL);
      corpo.appendChild(carrinhoDivContainer);
    } else {
      alert("Não existem dados para serem exibidos no carrinho");
    }
  } else {
    alert("Não existem dados para serem exibidos no carrinho");
  }
}

function calculaTotaisdoCarrinho() {
  if (document.querySelectorAll(".inputs-qtdes").length) {
    const itemDigitadoNaQuantidade = document.querySelectorAll(".inputs-qtdes");
    var contagemTotalDeProdutosNoCarrinho = 0;
    var somaQtdeTotal = 0;
    var somaValorTotal = 0;
    
    
    console.clear();

    itemDigitadoNaQuantidade.forEach((it) => {
      var id = parseInt(it.id.replace(/\D+/g, ""), 10);

      var findProd = objetoProduto.filter((p) => p.prdID === parseInt(id));

      if (findProd.length > 0) {
        var valorTotalItem = findProd[0].prdPrecoUnit * it.value;
        var inputTotalItem = document.getElementById(
          `inputValTotal_item_prd_${id}`
        );
        inputTotalItem.value =formatNumero(parseFloat(
            valorTotalItem          
        ).toFixed(2));

        console.log(
          `
          INDEX: ${id},
          QTDE: ${it.value}, 
          PRECO: ${findProd[0].prdPrecoUnit}, 
          TOTAL: ${valorTotalItem}
           
          `
        );
        contagemTotalDeProdutosNoCarrinho++;
        somaQtdeTotal += parseInt(it.value);
        somaValorTotal += valorTotalItem;
        
      }
    });

    var numberValorFormatado = formatNumero(parseFloat(somaValorTotal).toFixed(2));

   
    const labelTotais = document.querySelectorAll(".labels-totais");
    if(labelTotais.length > 0){
        labelTotais[0].textContent = `Produtos: ${parseFloat(contagemTotalDeProdutosNoCarrinho).toFixed(2)}`;
        labelTotais[1].textContent = `Volumes: ${parseFloat(somaQtdeTotal).toFixed(2)}`;
        labelTotais[2].textContent = `Valor: ${numberValorFormatado}`;
    }

    console.log(parseFloat(contagemTotalDeProdutosNoCarrinho).toFixed(2));
    console.log(parseFloat(somaQtdeTotal).toFixed(2));
    console.log(parseFloat(somaValorTotal).toFixed(2));
  } else {
    console.log("inputQtdeAindaNaoExiste");
  }
}

function formatNumero(number){    
    const numberFormatted = parseFloat(number).toLocaleString('pt-BR', { style: "currency", currency: "BRL" });  
    return numberFormatted;

}

/*** FUNCAO PARA O BOTAO REMOVER PARA REMOVER O ITEM DO CARRINHO DE COMPRAS */
function removeItemCarrinhoCompras(produtoID) {
  let carrinhoExiste = objetoCarrinho.filter((cr) => cr.carStatus === "aberto");

  if (carrinhoExiste.length > 0) {
    let prdExiste = carrinhoExiste[0].carProdutos.filter(
      (p) => p.prdID === produtoID
    );
    if (prdExiste.length > 0) {
      if (confirm("Voçê deseja realmente excluir ")) {
        objetoCarrinho
          .filter((cr) => cr.carStatus === "aberto")[0]
          .carProdutos.splice((p) => p.prdID === produtoID, 1);
        listarTodoProdutosCarrinhoDeCompras(carrinhoCodigoAtual);
        atualizaBadge();
      }
    }
  }
}

/*** EVENTOS DOS COMPONENTES NA PAGINA HTML */

document
  .getElementById("quemsomosid")
  .addEventListener("click", function (event) {
    quemsomos();
    event.preventDefault();
  });

document
  .getElementById("homepageid")
  .addEventListener("click", function (event) {
    listarTodosOsProdutosNaHomePage();
    event.preventDefault();
  });

document.getElementById("cordasid").addEventListener("click", function (event) {
  var origem = document.getElementById("cordasid").textContent;
  listarTodosOsProdutosNaHomePage(origem.toString().trim());
  event.preventDefault();
});

document.getElementById("soproid").addEventListener("click", function (event) {
  var origem = document.getElementById("soproid").textContent;
  listarTodosOsProdutosNaHomePage(origem.toString().trim());
  event.preventDefault();
});

document
  .getElementById("acusticosid")
  .addEventListener("click", function (event) {
    var origem = document.getElementById("acusticosid").textContent;
    listarTodosOsProdutosNaHomePage(origem.toString().trim());
    event.preventDefault();
  });

document
  .getElementById("eletronicosid")
  .addEventListener("click", function (event) {
    var origem = document.getElementById("eletronicosid").textContent;
    listarTodosOsProdutosNaHomePage(origem.toString().trim());
    event.preventDefault();
  });

document
  .getElementById("acessoriosid")
  .addEventListener("click", function (event) {
    var origem = document.getElementById("acessoriosid").textContent;
    listarTodosOsProdutosNaHomePage(origem.toString().trim());
    event.preventDefault();
  });

document
  .getElementById("carrinhocomprasid")
  .addEventListener("click", function (event) {
    var origem = document.getElementById("carrinhocomprasid").value;

    listarTodoProdutosCarrinhoDeCompras(carrinhoCodigoAtual);

    event.preventDefault();
  });

function cardsTamanho() {
  const cards = document.querySelectorAll(".card");
  var maxHeight = 0;

  cards.forEach((card) => {
    if (card.offsetHeight > maxHeight) {
      maxHeight = card.offsetHeight;
      console.log(maxHeight);
    }
  });

  cards.forEach((card) => {
    card.style.maxHeight = maxHeight + "px";
  });
}

///** CRIANDO O RODAPÉ DA PAGINA E INCLUINDO TAG FOOTER APOS O CORPO DA PAGINA */
const pageBody = document.getElementById("body");
const footer = document.createElement("footer");

const msgFooter = document.createElement("p");
msgFooter.textContent =
  "@Este Site é um PROJETO dos Alunos(as) Fábio Leite Cardoso, Antonio ,Jonata, Natan  do Curso Programação de Computadores com Javascript ofertado pela TOMORROW, sob a orientação do professor Claudio Silva";
footer.appendChild(msgFooter);

pageBody.after(footer);
