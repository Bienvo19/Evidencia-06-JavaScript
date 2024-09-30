document.getElementById('welcomeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const visitorName = document.getElementById('visitorName').value;
  const welcomeMessage = 'Bienvenido, ' + visitorName + ' al sistema de consulta';

  document.getElementById('welcomeMessage').textContent = welcomeMessage;
});