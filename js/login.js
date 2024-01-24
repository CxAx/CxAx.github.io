document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.login-form');
    var usuarioInput = document.getElementById('Usuario');
    var passwordInput = document.getElementById('password');

    form.addEventListener('submit', function (event) {
        
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(usuarioInput.value)) {
            alert('El usuario no tiene un formato de correo electrónico válido.');
            event.preventDefault(); // Evitar el envío del formulario
            return;
        }

        if (passwordInput.value.length >= 8) {
            alert('La contraseña debe tener menos de 8 caracteres.');
            event.preventDefault(); // Evitar el envío del formulario
            return;
        }

    });
});
