document.addEventListener('DOMContentLoaded', function () {

  // Función para alternar la visibilidad del contenido oculto
  function toggleContent(element) {
      var hiddenContent = element.nextElementSibling;
      if (hiddenContent.style.display === "block") {
          // Si el contenido está visible, ocultarlo
          hiddenContent.style.display = "none";
          element.textContent = "Leer más";
      } else {
          // Si el contenido está oculto, hacerlo visible y hacer scroll hasta él
          hiddenContent.style.display = "block";
          hiddenContent.scrollIntoView({ behavior: "smooth" });
          element.textContent = "Leer menos";
      }
  }
  // Manejar el envío del formulario de contacto
  var contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var nameInput = document.getElementById('nombre');
      var emailInput = document.getElementById('email');
      var messageInput = document.getElementById('message');
      // Validar que se haya ingresado el nombre
      if (nameInput.value.trim() === '') {
          alert('Por favor, ingresa tu nombre.');
          return;
      }
      // Validar que se haya ingresado un correo electrónico válido
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
          alert('Por favor, ingresa un correo electrónico válido.');
          return;
      }
      // Validar que se haya ingresado un mensaje
      if (messageInput.value.trim() === '') {
          alert('Por favor, ingresa un mensaje.');
          return;
      }
      // Mostrar un mensaje de éxito y restablecer el formulario
      alert('Formulario enviado con éxito.');
      contactForm.reset();
  });
});

 
