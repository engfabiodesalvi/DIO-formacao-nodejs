<!--START_SECTION:header-->
<div align="center">
  <p align="center">
    <img 
      alt="DIO Education" 
      src="https://raw.githubusercontent.com/digitalinnovationone/template-github-trilha/main/.github/assets/logo.webp" 
      width="100px" 
    />
    <h1>Recriando a lógica do carrinho de compras da Shopee</h1>
  </p>
</div>
<!--END_SECTION:header-->

<p align="center">
  <img src="https://img.shields.io/static/v1?label=DIO&message=Education&color=E94D5F&labelColor=202024" alt="DIO Project" />
  <a href="NIVEL"><img  src="https://img.shields.io/static/v1?label=Nivel&message=Basico&color=E94D5F&labelColor=202024" alt="Nivel"></a>

</p>

<!--  -->
<table align="center">
<thead>
  <tr>
    <td>
        <p align="center">Felipe Aguiar</p>
        <a href="https://github.com/felipeAguiarCode">
        <img src="https://avatars0.githubusercontent.com/u/37452836?v=3&s=115" alt="@felipeAguiarCode"><br>
      </a>
    </td>
    <td colspan="3">
    <p>🎉 10y+ em sistemas comerciais com .NET C# e NODE.JS.
      <br/>
     🌟 Desenvolvedor fullstack - Coordenador de educação na DIO
      <br/>
    👨‍💻 Foco em front-ends SPA com React, Angular e Vue.js
    </p>
      <a 
      href="https://www.linkedin.com/in/felipe-me/" 
      align="center">
           <img 
            align="center" 
            alt="Material de Apoio" 
            src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
            >
        </a>
        <a href="https://www.instagram.com/felipeaguiar.exe/" target="_blank">
            <img 
              align="center" 
              alt="Instagram" 
              src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
            >
        </a>
    </td>
  </tr>  
  <tr>
    
  </tr>
</thead>
</table>
<!--  -->

<br/>
<br/>

## 💻 Descrição Do Projeto

Vamos criar a lógica por trás do carrinho de compras da shopee, aonde o carrinho armazene itens e faça o cálculo total e de sub-itens automaticamente.

## 📚 Pré-requisitos de Habilidades e Níveis de Conhecimento

Antes de ingressar neste conteúdo, é necessário possuir conhecimento prévio nas seguintes áreas:

- [habilidades ou conhecimentos prévios necessários]

  - Javascript | Intermediário
  - Node | Básico
  - Modularização | Básica

- [Outros pré-requisitos]

  - Lógica de Programação | Intermediário

## 🛠️ Habilidades e Sub-habilidades que vamos aprender neste conteúdo

- Modularização | Intermediária

## 🎯 Objetivos e Resultados Esperados

Após a conclusão do curso/projeto, os estudantes estarão aptos a:

- Modularizar projetos com maior propriedade
- Como organizar pensamento lógico e funcional
- Base para organizar projetos

## 💪 Modificações Realizadas por Fabio Toledo Bonemer De Salvi
- Foi adicionado uma função que gera uma lista de produtos.
    
  Função 'getProducts()' no arquivo './services/products.js'.

- Foi adicionado os campos 'code' e 'category' ao objeto 'item'.

  Utilize a função 'createItem(code, name, category, price, quantity)' no arquivo './services/item.js'.\ 
  Desta forma é possível identificar os produtos de forma única entre a lista de produto, a lista do carrinho de compras e da lista de desejos utilizando um filtro por categoria.\
  O campo categoria aceita mais de uma categoria.\
  Crie um item da seguinte forma:\
    let item1 = await createItem(0,"hotwheels ferrari",["toys", "miniature"], 20.99, 5);
  
- A função de adicionar item ao carrinho de compras foi modificada.
  
  A função verifica se um item já foi adicionado ao carrinho de compras.\
  Se o item já foi adicionado ao carrinho de compras, ele adicionará mais um item caso possua este item em estoque.\
  Ao adicionar um item ao carrinho de compras é removido um item do estoque.\
  Foi adicionado uma função que adiciona 'n' itens de uma única vez. Esta função só adicionará os itens caso possua unidades em estoque.\
  Adicione um item da seguinte forma:\
      import * as cartService from "./services/cart.js";\
      await cartService.addOneItem(myCart, findItemByCode(myProducts, 10));\
  Adicione 'n' itens da seguinte forma:\
      import * as cartService from "./services/cart.js";\
      await cartService.addItems(myCart, findItemByCode(myProducts, 10), 6);  
  
- A função de remover item do carrinho de compras foi modificada.

  A função busca um produto no carrinho de compras para realizar a remoção de um item.\
  Caso o item fique com quantidade igual a zero, ele será removido do carrinho de compras.\
  Cada item removido da lista de compras retornará á lista de produtos.\
  Foi adicionado uma função que remove 'n' itens de uma única vez. Esta função só removerá os itens caso possua unidades na lista de compras.\
  Remova um item da seguinte forma:\
      import * as cartService from "./services/cart.js";\
      await cartService.removeOneItem(myCart, findItemByCode(myProducts, 16));\
  Remova 'n' itens da seguinte forma:\
      import * as cartService from "./services/cart.js";\
      await cartService.removeItems(myCart, findItemByCode(myProducts, 16), 4);

- A função de adicionar item á lista de desejos foi adicionada.

  A função verifica se um item já foi adicionado á lista de desejos.\
  O item será adicionado á lista de desejos caso não seja encontrado.\
  Adicine um item da seguinte forma:\
      import * as wishService from "./services/wishlist.js";\
      await wishService.addItem(myWishList, findItemByCode(myProducts, 10));
  
- A função de remover item á lista de desejos foi adicinada.

  A função busca um produto na lista de desejos.\
  O item será removido da lista de desejos caso seja encontrado.\
  Remova um item da seguinte forma:\
      import * as wishService from "./services/wishlist.js";\
      await wishService.removeItem(myWishList, findItemByCode(myProducts, 10));
    
- Os produtos podem ser ordenados utilizando qualquer um dos atributos do objeto item.

   Deve ser defino o atributo do item a ser ordenado e a ordem ascendente ou descendente dos dados na lista.\
   Mostrando a lista de produtos, ordenada pelo campo 'nome' de forma cescente:\
      import { getProducts, showAllProducts } from "./services/products.js";\
      const myProducts = await getProducts();\
      await showAllProducts(myProducts, "name", "asc");

- Foi adicinado a função buscar por código.

  A função utiliza o código do item na busca deste item nas listas: de produtos, do carrinho de compras e de desejos.\
  Busque um produto da seguinte forma:\
      import * as cartService from "./services/cart.js";\
      await cartService.addOneItem(myCart, findItemByCode(myProducts, 10));

  
<!--START_SECTION:footer-->

<br />
<br />

<p align="center">
  <a href="https://www.dio.me/" target="_blank">
    <img align="center" src="https://raw.githubusercontent.com/digitalinnovationone/template-github-trilha/main/.github/assets/footer.png" alt="banner"/>
  </a>
</p>
