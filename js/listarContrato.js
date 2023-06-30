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
  
  // Função para buscar e listar contratos com base nos critérios
  function buscarContratos(nomeCliente, numeroContrato) {
    // Filtrar os contratos com base nos critérios
    const contratosFiltrados = contratos.filter(contrato => {
      return (
        contrato.nomeCliente.toLowerCase().includes(nomeCliente.toLowerCase()) &&
        contrato.numeroContrato.includes(numeroContrato)
      );
    });
  
    // Exibir os contratos encontrados
    if (contratosFiltrados.length > 0) {
      console.log('Contratos encontrados:');
      contratosFiltrados.forEach(contrato => {
        console.log('Nome do Cliente:', contrato.nomeCliente);
        console.log('Número do Contrato:', contrato.numeroContrato);
        console.log('Valor do Contrato:', contrato.valorContrato);
        console.log('Data de Assinatura:', contrato.dataAssinatura);
        console.log('---');
      });
    } else {
      console.log('Nenhum contrato encontrado com os critérios informados.');
    }
  }
  
  // Exemplo de utilização da função buscarContratos()
  buscarContratos('João', '001'); // Busca contratos do cliente "João" com número de contrato "001"
  