document.getElementById('multiplicationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const value = parseInt(document.getElementById('multiplicationValue').value);
  let tableContent = '';

  for (let i = 1; i <= 12; i++) {
    tableContent += i + " x " + value + " = " + (i * value) + "<br>";
  }

  document.getElementById('multiplicationTable').innerHTML = tableContent;
  $('#multiplicationModal').modal('show');
});
