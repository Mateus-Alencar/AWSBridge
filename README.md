# Projeto ConectaAWS

## Descrição
O **ConectaAWS** é um projeto que cria um servidor Node.js capaz de consumir uma API da AWS e invocar funções **AWS Lambda**. Este projeto serve como uma demonstração de como integrar serviços da AWS em um servidor web, utilizando **Express**, **Axios** e o **AWS SDK** para JavaScript.

## Funcionalidades

- **Consumir API da AWS**: O servidor realiza requisições HTTP para uma API exposta via **API Gateway** da AWS, utilizando a chave de API para autenticação.
- **Invocar funções Lambda**: O servidor também pode invocar funções **Lambda** diretamente utilizando o **AWS SDK**, passando parâmetros para processamento em nuvem.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework minimalista para criar o servidor web.
- **Axios**: Biblioteca para fazer requisições HTTP para consumir APIs.
- **AWS SDK**: Biblioteca oficial da AWS para interagir com serviços da AWS, como Lambda.

## Substitua as variáveis:

Abra o arquivo `index.js` e substitua as seguintes variáveis com as suas credenciais e dados específicos:

- **'SUA_ACCESS_KEY'** e **'SUA_SECRET_KEY'** com suas credenciais da AWS.
- **'SUA_API_KEY'** com a chave da API, se sua API no API Gateway estiver protegida por uma chave.
- **'nome-da-sua-funcao-lambda'** com o nome da sua função Lambda.
- **'urlDaApi'** com a URL da sua API no API Gateway.

## Rodar o servidor:

Após configurar o arquivo, execute o servidor com o seguinte comando:

```bash
node index.js
```


