document.getElementById('ageForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const visitorAge = parseInt(document.getElementById('visitorAge').value);
  let welcomeMessage; 

  if (visitorAge >= 18) {
    welcomeMessage = "Usted tiene acceso a todos nuestros servicios.";
  } else {
    welcomeMessage = "Usted tiene acceso a servicios limitados.";
  }

  document.getElementById('welcomeMessage').textContent = welcomeMessage;
});