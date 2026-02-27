
let datosUsuario = [];


function crearCuenta(nombre, saldoInicial) {
    datosUsuario[0] = nombre;
    datosUsuario[1] = saldoInicial;
    return datosUsuario;
}

function consultarSaldo(saldo) {
    alert("Tu saldo actual es: $" + saldo);
}

function depositar(saldo, monto) {
    saldo = saldo + monto;
    return saldo;
}

function retirar(saldo, monto) {
    if (monto > saldo) {
        alert("Fondos insuficientes");
        return saldo;
    } else {
        saldo = saldo - monto;
        return saldo;
    }
}

let nombre = prompt("Ingresa tu nombre:");
let saldoInicial = parseFloat(prompt("Ingresa tu saldo inicial:"));

crearCuenta(nombre, saldoInicial);

let saldo = datosUsuario[1];
let continuar = true;

while (continuar) {

    let opcion = prompt(
        "Hola " + datosUsuario[0] + "\n" +
        "1 - Consultar saldo\n" +
        "2 - Depositar\n" +
        "3 - Retirar\n" +
        "4 - Salir"
    );

    switch (opcion) {

        case "1":
            consultarSaldo(saldo);
            break;

        case "2":
            let montoDeposito = parseFloat(prompt("¿Cuánto deseas depositar?"));
            saldo = depositar(saldo, montoDeposito);
            break;

        case "3":
            let montoRetiro = parseFloat(prompt("¿Cuánto deseas retirar?"));
            saldo = retirar(saldo, montoRetiro);
            break;

        case "4":
            continuar = false;
            break;

        default:
            alert("Opción inválida");
    }
}

alert("Gracias por usar el cajero.");
