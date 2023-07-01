$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos do formulário
    var cliente = $('#cliente').val();
    var numeroContrato = $('#numeroContrato').val();
    var dataAssinatura = $('#dataAssinatura').val();
    var valorContrato = $('#valorContrato').val();
    var vencimento = $('#vencimento').val();

    // Cria um objeto com os valores do formulário
    var contrato = createContrato(cliente, numeroContrato, dataAssinatura, valorContrato, vencimento);

    // Exibe o objeto no console
    console.log(contrato);

    // Limpa os campos do formulário
    $('form')[0].reset();
  });

  // Função para criar um objeto contrato
  function createContrato(cliente, numeroContrato, dataAssinatura, valorContrato, vencimento) {
    var id = generateId();
    return {
      id: id,
      cliente: cliente,
      numeroContrato: numeroContrato,
      dataAssinatura: dataAssinatura,
      valorContrato: valorContrato,
      vencimento: vencimento
    };
  }

  // Função para gerar um ID único
  function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
});
