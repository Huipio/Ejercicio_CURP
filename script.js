function validarFormulario() {
    var curpInput = document.getElementById("inputCURP");
    var rfcInput = document.getElementById("inputRFC");
    var emailInput = document.getElementById("inputEMAIL");
    var telefonoInput = document.getElementById("inputTELEFONO");
    var nssInput = document.getElementById("inputNSS");

    // Validar si todos los campos están llenos correctamente
    if (curpInput.checkValidity() && rfcInput.checkValidity() && emailInput.checkValidity() && telefonoInput.checkValidity() && nssInput.checkValidity()) {
        alert("Todos los campos han sido llenados correctamente.");
        return true;  // Permite el envío del formulario
    } else {
        alert("Por favor, llena todos los campos correctamente.");
        return false; // Evita el envío del formulario
    }
}