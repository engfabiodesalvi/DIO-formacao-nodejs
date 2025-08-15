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

- Foi adicionado o campo 'code' ao objeto 'item'.

  Desta forma é possível identificar os produtos de forma única entre a lista de produto, a lista do carrinho de compras e da lista de desejos.
  
- Foi adicionado o campo 'category' ao objeto 'item'.

  Desta forma é possível utilizar uma função que filtra os itens utilizando campo categoria para o cliente pder escolher o produto.
  Este campo aceita mais de um item, podendo cada item ser adicionado em mais de uma categoria.
  
- A função adicionar item ao carrinho de compras foi modificada.

  A função verifica se um item já foi adicionado ao carrinho de compras.
  Se o item já foi adicionado ao carrinho de compras, ele adicionará mais um item caso possua este item em estoque.
  Ao adicionar um item ao carrinho de compras é removido um item do estoque.
  Foi adicionado uma função que adiciona 'n' itens de uma única vez. Esta função só adicionará os itens caso possua unidades em estoque.
  
- A função remover item do carrinho de compras foi modifica.

  A função busca um produto no carrinho de compras realizando a remoção de um item.
  Caso o item fique com quantidade nula ele será removido do carrinho de compras.
  Cada item removido da lista de compras retrnará á lista de prdutos.
  Foi adicionado uma função que remove 'n' itens de uma única vez. Esta função só removerá os itens caso possua unidades na lista de compras.

- A função adicionar item á lista de desejos foi adicionada.

  A função verifica se um item já foi adicionado á lista de desejos.
  O item será adicionado á lista de desejos caso não seja encntrado.
  
- A função remover item á lista de desejos foi adicinada.

  A função busca um produto na lista de desejos.
  O item será removido da lista de desejos caso seja encontrado.
    
- Os produtos podem ser ordenados utilizando qualquer um dos atributos do objeto item.

   Deve ser defino o atributo do item a ser ordenado e a ordem ascendente ou descendente dos dados na lista.

- A foi adicinado a função busca por código.

  A função utiliza o código d item na busca deste item nas listas: de produtos, do carrinho de compras e de desejos.

  
<!--START_SECTION:footer-->

<br />
<br />

<p align="center">
  <a href="https://www.dio.me/" target="_blank">
    <img align="center" src="https://raw.githubusercontent.com/digitalinnovationone/template-github-trilha/main/.github/assets/footer.png" alt="banner"/>
  </a>
</p>
