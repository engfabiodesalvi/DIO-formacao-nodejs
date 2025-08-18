<!--START_SECTION:header-->
<div align="center">
  <p align="center">
    <img 
      alt="DIO Education" 
      src="https://raw.githubusercontent.com/digitalinnovationone/template-github-trilha/main/.github/assets/logo.webp" 
      width="100px" 
    />
    <h1>Gerador de QRcode para e-commerce</h1>
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
        <p align="center">Expert</p>
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
</thead>
</table>
<!--  -->

<br/>
<br/>

## 💻 Sobre o Projeto

Vamos construir um kit de utilidades para um e-commerce, o projeto deve ser escalável para ter adição de novas features.

## 📚 Pré-requisitos de Habilidades e Níveis de Conhecimento

Antes de ingressar neste conteúdo, é necessário possuir conhecimento prévio nas seguintes áreas:

- Lógica de programação
- Javascript | Básico
- NodeJS | Básico
- Node Modules
- NPM, Packages, Dependencies
- Variáveis ambiente (.env)

## 🛠️ Habilidades e Sub-habilidades que vamos aprender neste conteúdo

- Como gerar qrcode com node
- Como lidar com várias dependências de um projeto
- Como pensar em projetos por camadas

## 🎯 Objetivos e Resultados Esperados

Após a conclusão do curso/projeto, os estudantes estarão aptos a:

- Criar projetos nodejs que gerem multiplas dependências

## 💪 Modificações realizadas por Fabio Toledo Bonemer De Salvi

# Menu principal

O menu principal foi incluído em um loop para que a aplicação não encerre, esperando que cada aplicação execute sua tarefa, sendo possível sair da aplicação escolhendo a "opção sair" digitando o valor 0.\
Foi utilizado a função assincrona para acessar o prompt.

Exemplo:

    Antes:\
      prompt.get(promptSchemaMain, promptSelectMenu);  

    Depois:\
      inputPrompt = await prompt.get(promptSchemaMain);\
      await selectMenu(inputPrompt['select']);

# Módulo Gerador de PASSWORD

Este módulo utiliza as configurações do arquivo .env para gerar um password aleatório a cada acesso.\
Foram realizadas modificações nas variáveis dentro do arquivo .env e realizadas chamadas à função que gera um novo password para ver o resultado.

* Exemplo 1.\
  - UPPERCASE_LETTERS=true
  - LOWERCASE_LETTERS=true
  - NUMBERS=true
  - SPECIAL_CHARACTERS=true
  - PASSWORD_LENGTH=24

  > Password 1 gerado: %DMAIcNuY4fBE*)tT74$w#*%
  > Password 2 gerado: WAOZ*H^9WkO!KH4I@f5O9Hz&

# Módulo Gerador QRCode

O acesso ao prompt foi modificado para a forma assincrona:\
    const promptInput = await prompt.get(promptSchemaQRCode);\
    await handle(promptInput);    

Exemplo: 
  - Texto: https://www.dio.me/
  - QRCode (opção 2 - terminal):
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄\
█ ▄▄▄▄▄ █   █▄ ▄▄ █ ▄▄▄▄▄ █\
█ █   █ █ ▀▄ █▀▄▄▀█ █   █ █\
█ █▄▄▄█ █▀██▀▀█▄▄▄█ █▄▄▄█ █\
█▄▄▄▄▄▄▄█▄▀▄█ █ █▄█▄▄▄▄▄▄▄█\
█▄ ▀▀▄▄▄▀█▀▀▄▀▄  █▀█▄▀ ▄ ▄█\
█ ▀ █▀ ▄▀▄█▀ ▄ ▄▄██▀ ▄▄ ▀██\
█ ▄▀▀▀ ▄▄▄▀▄█▄ ▀ ▀ ▄█▀▄▄ ▄█\
███████▄█▀  █▀█▀ ▀█▀  ▄ ▀██\
█▄▄▄██▄▄█▀▀█▄▀▄▄▄ ▄▄▄ ▄▄███\
█ ▄▄▄▄▄ █▀▄▄ ▄ ▄█ █▄█ ▀▀█▀█\
█ █   █ █▄▀▄█▄ ▀█▄▄  ▄▄ ▀ █\
█ █▄▄▄█ █▀▄ █▀█▀▀▄▄ ▀▀ ▀ ██\
█▄▄▄▄▄▄▄█▄█▄▄█▄▄▄██████▄▄▄█\

# Módulo Gerador de Faturas (Módulo incluído)

O módulo gerador de faturas foi inclído ao kit de ferramentas de e-commerce.

Como funcionalidade ele permite gerar uma fatura no formato pdf contendo as seguintes informações inseridas via prompt:

- Dados comerciais: nome, endereço, CPF/CNPJ, logotipo da empresa.
- Dados do consumidor: nome e endereço.
- Metadados do pedido: número e data do pedido.
- Itens do pedido: descrição, quantidade e preço.
- Dados de pagamento: método de pagamento e link da fatura com o qrcode.
- Percentual de imposto sobre a fatura.

Após a inserção destes dados o aplicativo calcula o valor parcial da compra, o valor do imposto da compra e o valor total da compra.

Com essas informações ele gera um qrcode utilizando um link fictício do pagamento.

Todas essas informações são utilizadas em uma função que gera uma fatura em formato pdf utilizando o pacote pdfkit.

O arquivo pdf de exemplo esta dentro da pasta download.

# Estrutura do projeto

O projeto gerador de faturas foi estruturado para atender à organização e separação de funções proposta pelo instrutor Felipe, ficando da seguinte forma:

          |-> .env (arquivo com as configuações de ambiente(environment))
          |-> downloas
          |       |-> logo  (pasta com os logos das empresas)
          |       |-> pdf   (pasta com s pdfs gerados)
          |-> node_modules (pasta com os arquivos do node.js)
          |->src
            |-> prompts-schema (configuração dos prompts)
            |     |-> prompt-schema-invoice.js (prompts da aplicação gerador de faturas)
            |     |-> prompt-schema-main.js (prompts da aplicação principal)
            |     |-> prompt-schema-qrcode.js (prompts do gerador de qrcode)
            |
            |-> service (pasta das aplicações)
                |-> invoice (pasta do projeto gerador de faturas)
                |     |-> inputs (entrada de dados via prompt)
                |     |     |-> businessInfo.js (informações comerciais)
                |     |     |-> customerInfo.js (informações do cliente)
                |     |     |-> metadataInfo.js (metadados da compra)
                |     |     |-> orderDetails.js (itens da compra)
                |     |     |-> paymentInfo.js (informações de pagamento)
                |     |     |-> taxRate.js (taxa de imposto)
                |     |-> outputs (saída de dados)
                |     |     |-> pdfExporter.js (gera a fatura em forma de pdf)
                |     |     |-> qrCodeGenerator.js (Gera o QRCode)
                |     |-> utils (funções utilizadas durante o processamento dos dados)
                |     |     |-> calculations.js (cálculo do total, subtotal e total das taxas)
                |     |     |-> data.js         (contém as estuturas de dados utilizads no projeto)
                |     |     |-> dateGenerator.js (gerador de data)
                |     |     |-> nameInvoicePDF.js (gerador de nome de arquivo)
                |     |     |-> numberGenerator.js (gerador de número da fatura)
                |     |     |-> pathInvoicePDF.js (obtém o diretório para salvar o pdf)
                |     |-> index.js (arquivo principal do gerador de faturas)
                |
                |-> menu (pasta do menu do projeto)
                |     |-> utils (rotinas de uso recorrente)
                |     |      |-> format-msg.js (formata a cor do texto de uma msg)
                |     |-> handle.js (contém funções chamadas pelo aquivo principal)
                |     |-> menu.js (menu principal do projeto)
                |-> password (pasta do projeto password)
                |     |-> utils (rotinas de uso recorrente)
                |     |      |-> permitted-characters.js (caracters permitidos para gerar o qrcodec)
                |     |-> handle.js (contém funções chamadas pelo arquivo principal)
                |     |-> create.js (arquivo principal) 
                |-> qrcode (pasta do projeto qrcode)
                |     |-> handle.js (contém funções chamadas pelo arquivo principal)
                |     |-> create.js (arquivo principal)       
                |-> index.js (arquivo inicial do projeto)
    

<!--START_SECTION:footer-->

<br />
<br />

<p align="center">
  <a href="https://www.dio.me/" target="_blank">
    <img align="center" src="https://raw.githubusercontent.com/digitalinnovationone/template-github-trilha/main/.github/assets/footer.png" alt="banner"/>
  </a>
</p>
