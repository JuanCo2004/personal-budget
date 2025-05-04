let totalIngresos = 0;
let totalEgresos = 0;
let contador = 0;
let movimientos = [];
let continuar = "si";

console.log("Registro de Gastos");
console.log("-----------------------");

while (continuar.toLowerCase() === 'si') {
    registrarMovimiento();
    continuar = prompt("¿Registrar otro movimiento? (si/no):");
    console.log(`¿Registrar otro movimiento? (si/no): ${continuar}`);
    console.log("");
}

calcularTotalSaldo();
mostrarResumen();

//Funciones imperativas:
function registrarMovimiento(){
    let nombre_gasto = '';  
    let tipo = '';
    let monto_gastado = 0;
    //Validar nombre de gasto:
    while (true) {
        nombre_gasto = prompt("Ingrese el nombre del gasto: ");
        if (nombre_gasto && nombre_gasto.trim() !== '') {
            break;
        } else {
            alert("Error: El nombre no puede estar vacío.");
        }
    }
    //Validar tipo:
    while (true) {
        tipo = prompt("Ingrese el tipo (Ingreso / Egreso): ");
        if (tipo) {
            tipo = tipo.trim().toLowerCase();
            if (tipo === 'ingreso' || tipo === 'egreso') {
                break;
            }
        }
        alert("Error: El tipo debe ser 'Ingreso' o 'Egreso'.");
    }
    //Validar monto:
    while (true) {
        let input = prompt("Ingrese el monto:");
        monto_gastado = parseFloat(input);
        if (!isNaN(monto_gastado) && monto_gastado > 0) {
            break;
        } else {
            alert("Error: El monto debe ser un número mayor a 0.");
        }
    }
    //Guardar movimiento en el array:
    movimientos.push({nombre_gasto, tipo, monto_gastado});

    // Mostrar movimiento en consola
    console.log("Nombre del movimiento:", nombre_gasto);
    console.log("Tipo:", tipo.charAt(0).toUpperCase() + tipo.slice(1));
    console.log("Monto:", monto_gastado.toFixed(2));
    console.log("");
}
function calcularTotalSaldo() {
    totalIngresos = 0;
    totalEgresos = 0;

    for (let i = 0; i < movimientos.length; i++) {
        if (movimientos[i].tipo === 'ingreso') {
        totalIngresos += movimientos[i].monto_gastado;
        } else {
        totalEgresos += movimientos[i].monto_gastado;
        }
    }
}
function mostrarResumen() {
    let saldo = totalIngresos - totalEgresos;

    console.log("Resumen Final");
    console.log("-----------------------");
    console.log("Total de movimientos registrados:", movimientos.length);
    console.log("Saldo total: $" + saldo.toFixed(2));
    console.log("");
    console.log("Desglose por tipo:");
    console.log("- Egresos: $" + totalEgresos.toFixed(2));
    console.log("- Ingresos: $" + totalIngresos.toFixed(2));
}
//Listar nombres de movimientos:
const nombres = movimientos.map(mov => mov.nombre_gasto);
console.log("Nombres de movimientos registrados: ");
console.log(nombres);

//Filtrar egresos mayores a $100:
const egresosMayores100 = movimientos.filter(mov =>
    mov.tipo === 'egreso' && mov.monto_gastado > 100
);
  
// Convertir tipo a "Egreso" con mayúscula:
const egresosFormateados = egresosMayores100.map(mov => ({
    nombre_gasto: mov.nombre_gasto,
    tipo: 'Egreso',
    monto_gastado: mov.monto_gastado.toFixed(2)
}));

console.log("Egresos mayores a $100:");
console.log(egresosFormateados);

//Buscar movimiento por nombre:
const nombreBuscado = prompt("Ingrese el nombre del movimiento a buscar:");
const resultado = movimientos.find(mov => mov.nombre_gasto.toLowerCase() === nombreBuscado.toLowerCase());

console.log(`Buscar movimiento por nombre: '${nombreBuscado}'`);
if (resultado) {
    console.log("Resultado encontrado:");
    console.log({
        nombre_gasto: resultado.nombre_gasto,
        tipo: resultado.tipo.charAt(0).toUpperCase() + resultado.tipo.slice(1),
        monto_gastado: resultado.monto_gastado.toFixed(2)
    });
} else {
    console.log("No se encontró un movimiento con ese nombre.");
}