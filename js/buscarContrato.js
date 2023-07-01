// Função para capturar os dados do formulário
function capturarDados() {
    // Capturar os valores dos campos do formulário
    var nomeCliente = document.getElementById('nomeCliente').value;
    var numeroContrato = document.getElementById('numeroContrato').value;
    var valorContrato = document.getElementById('valorContrato').value;
    var dataAssinatura = document.getElementById('dataAssinatura').value;
  
    // Criar um objeto com os dados capturados
    var contrato = {
      nomeCliente: nomeCliente,
      numeroContrato: numeroContrato,
      valorContrato: valorContrato,
      dataAssinatura: dataAssinatura
    };
  
    // Chamar uma função para processar ou armazenar os dados do contrato
    processarDados(contrato);
  }
  
  // Função para processar ou armazenar os dados do contrato
  function processarDados(contrato) {
    // Lógica para processar ou armazenar os dados do contrato
    // Por exemplo, você pode enviar os dados para um servidor, salvar em um banco de dados, etc.
  
    // Exemplo de exibição dos dados no console
    console.log('Dados do contrato:', contrato);
  
    // Limpar os campos do formulário
    document.getElementById('nomeCliente').value = '';
    document.getElementById('numeroContrato').value = '';
    document.getElementById('valorContrato').value = '';
    document.getElementById('dataAssinatura').value = '';
  
    // Exibir uma mensagem de sucesso ao usuário
    alert('Contrato cadastrado com sucesso!');
  }
  
  // Capturar o evento de envio do formulário
var formContrato = document.getElementById('formContrato');
if (formContrato !== null) {
  formContrato.addEventListener('submit', function(event) {
    event.preventDefault(); // Impedir o envio do formulário
    capturarDados(); // Chamar a função para capturar os dados
  });
}

  