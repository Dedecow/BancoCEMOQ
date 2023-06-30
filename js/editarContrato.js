// Contratos armazenados na memória
const contratos = [
    {
      nomeCliente: 'João',
      numeroContrato: '001',
      valorContrato: 1000,
      dataAssinatura: '2023-01-01'
    },
    {
      nomeCliente: 'Maria',
      numeroContrato: '002',
      valorContrato: 2000,
      dataAssinatura: '2023-02-01'
    },
    {
      nomeCliente: 'Pedro',
      numeroContrato: '003',
      valorContrato: 3000,
      dataAssinatura: '2023-03-01'
    }
  ];
  
  // Função para editar os dados de um contrato
  function editarContrato(numeroContrato, novoValorContrato, novaDataAssinatura) {
    // Encontrar o contrato com o número fornecido
    const contrato = contratos.find(contrato => contrato.numeroContrato === numeroContrato);
  
    // Verificar se o contrato foi encontrado
    if (contrato) {
      // Atualizar os dados do contrato
      contrato.valorContrato = novoValorContrato;
      contrato.dataAssinatura = novaDataAssinatura;
  
      console.log('Contrato atualizado com sucesso:');
      console.log('Nome do Cliente:', contrato.nomeCliente);
      console.log('Número do Contrato:', contrato.numeroContrato);
      console.log('Valor do Contrato:', contrato.valorContrato);
      console.log('Data de Assinatura:', contrato.dataAssinatura);
    } else {
      console.log('Contrato não encontrado com o número informado.');
    }
  }
  
  // Exemplo de utilização da função editarContrato()
  editarContrato('001', 1500, '2023-04-01'); // Edita o contrato com número "001" alterando o valor para 1500 e a data de assinatura para "2023-04-01"
  