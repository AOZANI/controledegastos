function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

// Salvar gasto
function salvarGasto(dados) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('📋 Gastos Diários');
  
  sheet.appendRow([
    new Date(),
    dados.categoria,
    dados.descricao,
    dados.valor,
    dados.pagamento,
    '',
    ''
  ]);
}

// Buscar total
function getTotalGastos() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('📋 Gastos Diários');
  var valores = sheet.getRange('D2:D').getValues().flat();
  
  var total = valores.reduce((soma, v) => soma + (v || 0), 0);
  return total;
}
