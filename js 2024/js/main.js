// Función para calcular el IVA
function calcularIVA(precio, tasaIVA) {
    return precio * tasaIVA;
}

// Función principal del programa
function programaIVA() {
    const mensajeInicial = "Este programa calcula el IVA sobre un precio ingresado por el usuario.";
    const mensajeIngresoPrecio = "Por favor, ingresa el precio del producto:";
    const mensajeIngresoTasaIVA = "Por favor, ingresa la tasa de IVA (%):";
    
    alert(mensajeInicial);
    
    let inputPrecio = prompt(mensajeIngresoPrecio);
    let precio = parseFloat(inputPrecio);

    if (!isNaN(precio)) {
        let inputTasaIVA = prompt(mensajeIngresoTasaIVA);
        let tasaIVA = parseFloat(inputTasaIVA) / 100; // Convertir a porcentaje
        
        if (!isNaN(tasaIVA)) {
            let iva = calcularIVA(precio, tasaIVA);
            let precioConIVA = precio + iva;
            
            alert("El IVA es: " + iva.toFixed(2) + "\nEl precio con IVA incluido es: " + precioConIVA.toFixed(2));
        } else {
            alert("Por favor, ingresa una tasa de IVA válida.");
        }
    } else {
        alert("Por favor, ingresa un precio válido.");
    }
}

// Ejecutar el programa principal
programaIVA();




