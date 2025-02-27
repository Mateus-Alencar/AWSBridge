// Importando as bibliotecas necessárias
const express = require('express');
const axios = require('axios');
const AWS = require('aws-sdk');

// Configuração do servidor Express
const app = express();
const porta = 3000;  // Definindo a porta para o servidor

// Configuração das credenciais da AWS
AWS.config.update({
  accessKeyId: 'SUA_ACCESS_KEY',        // Substitua com suas credenciais AWS
  secretAccessKey: 'SUA_SECRET_KEY',    // Substitua com suas credenciais AWS
  region: 'us-east-1'                    // Substitua com a sua região da AWS
});

// URL da API criada no API Gateway
const urlDaApi = 'https://seu-api-id.execute-api.us-east-1.amazonaws.com/stage/seu-endpoint';

// Função para consumir a API da AWS usando Axios
async function consumirApi() {
  try {
    // Fazendo a requisição GET para a API
    const resposta = await axios.get(urlDaApi, {
      headers: {
        'x-api-key': 'SUA_API_KEY'  // Substitua com sua chave da API, se necessário
      }
    });
    console.log('Resposta da API:', resposta.data);
    return resposta.data;
  } catch (erro) {
    console.error('Erro ao consumir a API:', erro);
    return null;
  }
}

// Função para invocar uma função Lambda diretamente
async function invocarLambda() {
  const lambda = new AWS.Lambda();
  const parametros = {
    FunctionName: 'nome-da-sua-funcao-lambda',  // Nome da sua função Lambda
    InvocationType: 'RequestResponse',          // Tipo de invocação
    Payload: JSON.stringify({ chave: 'valor' })  // Dados que você quer enviar para o Lambda
  };

  try {
    const resultado = await lambda.invoke(parametros).promise();
    console.log('Resposta do Lambda:', JSON.parse(resultado.Payload));
    return JSON.parse(resultado.Payload);
  } catch (erro) {
    console.error('Erro ao invocar a função Lambda:', erro);
    return null;
  }
}

// Rota para consumir a API da AWS
app.get('/consumir-api', async (req, res) => {
  const respostaApi = await consumirApi();
  if (respostaApi) {
    res.json(respostaApi);
  } else {
    res.status(500).send('Erro ao consumir a API da AWS');
  }
});

// Rota para invocar a função Lambda
app.get('/invocar-lambda', async (req, res) => {
  const respostaLambda = await invocarLambda();
  if (respostaLambda) {
    res.json(respostaLambda);
  } else {
    res.status(500).send('Erro ao invocar a função Lambda');
  }
});

// Iniciando o servidor Express
app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
