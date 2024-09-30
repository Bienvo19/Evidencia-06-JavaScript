console.log("Script loaded successfully.");

document.getElementById('multiplicationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const value = parseInt(document.getElementById('multiplicationValue').value);
  let tableContent = '<table class="table table-striped"><thead><tr><th>Operación</th><th>Resultado</th></tr></thead><tbody>';

  for (let i = 1; i <= 12; i++) {
    tableContent += `<tr><td>${i} x ${value}</td><td>${i * value}</td></tr>`;
  }

  tableContent += '</tbody></table>';

  document.getElementById('multiplicationTable').innerHTML = tableContent;
});
