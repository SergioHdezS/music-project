function validarNombre() {
    var nombre = document.getElementById("nombre");
    // Validar que el nombre no esté vacío
    if (nombre.value === "") {
        document.getElementById("nombreError").innerText = "Ingresa un nombre.";
        nombre.style.border = "4px solid red"
        return false
    } else {
        document.getElementById("nombreError").innerText = "";
        nombre.style.border = "4px solid green"
    }
}
function validarApellido() {
    var apellido = document.getElementById("apellido");
    // Validar que el nombre no esté vacío
    if (apellido.value === "") {
        document.getElementById("apellidoError").innerText = "Ingresa un apellido.";
        apellido.style.border = "4px solid red"
        return false
    } else {
        document.getElementById("apellidoError").innerText = "";
        apellido.style.border = "4px solid green"
    }
}
function validarEmail() {
    var email = document.getElementById("email");
    // Validar que el correo electrónico tenga un formato válido
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.match(emailRegex)) {
        document.getElementById("emailError").innerText = "Ingresa un correo electrónico válido.";
        email.style.border = "4px solid red"
        return false
    } else {
        document.getElementById("emailError").innerText = "";
        email.style.border = "4px solid green"
    }
}
function validarContrasena(contrasena) {
    var contrasenaValor = document.getElementById("password").value;
    var contrasena = document.getElementById("contrasena");
    if (contrasenaValor.length < 6) {
        document.getElementById("contrasenaError").innerText = "Ingresa al menos 6 caracteres";
        contrasena.style.border = "4px solid red"
        return false
    } else {
        document.getElementById("contrasenaError").innerText = "";
        contrasena.style.border = "2px solid green"
    }
}
function validarCiudad() {
    var ciudad = document.getElementById("ciudad");
    if (ciudad.value === "") {
        document.getElementById("ciudadError").innerText = "Ingresa una ciudad";
        ciudad.style.border = "2px solid red"
        return false
    } else {
        document.getElementById("ciudadError").innerText = "";
        ciudad.style.border = "2px solid green"
    }
}
const formulario = document.querySelector("form");
formulario.addEventListener("submit", async (eventoSubmit) => {
    eventoSubmit.preventDefault();
    const formElement = eventoSubmit.currentTarget;
    const formData = new FormData(formElement);
    const email = formData.get("email");
    const contrasena = formData.get("contrasena");
    const nuevoUsuario = {
        email,
        contrasena
    };
    console.log(nuevoUsuario);

    const baseUrl = getBaseUrl();
    const url = baseUrl + "/registro";
    const fetchConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoUsuario)
    };
    try {
        const respuesta = await fetch(url, fetchConfig);
        if (!respuesta.ok) {
            console.error("La respuesta no está OK");
            return;
        }
        const objetoJson = await respuesta.json();
        console.dir(objetoJson);

    } catch (error) {
        // gestion errores 
        console.error(error.code);
        console.error(error.message);
    }
});