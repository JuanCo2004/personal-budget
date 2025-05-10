/*VARIABLES GLOBALES*/
let totalIngresos = 0;
let totalEgresos = 0;
let movimientos = [];
let continuar = "si";

/*TÍTULO INCIAL*/
console.log("Registro de Gastos");
console.log("-----------------------");

/*DEFINICIÓN DE CLASES Y MÉTODOS*/
//Función constructora: Clase Base Movimiento
function Movimiento(tipo, monto, descripcion){
    if (!descripcion || descripcion.trim() === '') {
        throw new Error("La descripción no puede estar vacía.");
    }
    tipo = tipo.trim().toLowerCase();
    if (tipo !== 'ingreso' && tipo !== 'egreso') {
        throw new Error("El tipo debe ser 'ingreso' o 'egreso'.");
    }
    if (isNaN(monto) || monto <= 0) {
        throw new Error("El monto debe ser un número mayor a 0.");
    }

    this.nombre_gasto = descripcion;
    this.tipo = tipo;
    this.monto_gastado = monto;
}
//Método: Mostrar en consola:
Movimiento.prototype.mostrarEnConsola = function () {
    console.log("---- Movimiento ----");
    console.log("Nombre:", this.nombre_gasto);
    console.log("Tipo:", this.tipo.charAt(0).toUpperCase() + this.tipo.slice(1));
    console.log("Monto: $" + this.monto_gastado.toFixed(2));
    console.log("--------------------");
};

// Método: Actualizar totales
Movimiento.prototype.recalcularTotales = function () {
    totalIngresos = 0;
    totalEgresos = 0;
    for (let mov of movimientos) {
        if (mov.tipo === 'ingreso') {
            totalIngresos += mov.monto_gastado;
        } else {
            totalEgresos += mov.monto_gastado;
        }
    }
    console.log(`Totales actualizados: Ingresos = $${totalIngresos.toFixed(2)} | Egresos = $${totalEgresos.toFixed(2)}`);
};

// Subclase Ingreso
function Ingreso(monto, descripcion) {
    Movimiento.call(this, 'ingreso', monto, descripcion);
}
Ingreso.prototype = Object.create(Movimiento.prototype);
Ingreso.prototype.constructor = Ingreso;

// Subclase Egreso
function Egreso(monto, descripcion) {
    Movimiento.call(this, 'egreso', monto, descripcion);
}
Egreso.prototype = Object.create(Movimiento.prototype);
Egreso.prototype.constructor = Egreso;




/*FUNCIONES PRINCIPALES*/
//Función Registrar movimiento: Refactorización total del registro
function registrarMovimiento(){
    let nombre_gasto = '';  
    let tipo = '';
    let monto_gastado = 0;
    //FUNCIONES IMPERATIVAS
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
    
    try {
        //Creo instancia del objeto Movimiento
        //Guardar movimiento en el array:
        const movimiento = new Movimiento(tipo, monto_gastado, nombre_gasto);
        movimientos.push(movimiento); //Guardo el array global
        // Mostrar movimiento en consola:
        movimiento.mostrarEnConsola();
    } catch (error) {
        alert("Error al registrar movimiento: " + error.message);
    }
}

//Función total de saldo:
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

//Función mostrar resumen:
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

    //Listar nombres de movimientos:
    const nombres = movimientos.map(mov => mov.nombre_gasto);
    console.log("Nombres de movimientos registrados: ", nombres);

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
}

//Función buscar movimiento por nombre:
function buscarMovimiento(){
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
}

/*FLUJO PRINCIPAL DEL PROGRAMA*/
//Bucle principal: Registro por consola
while (continuar.toLowerCase() === 'si') {
    registrarMovimiento();
    continuar = prompt("¿Registrar otro movimiento? (si/no):");
    console.log(`¿Registrar otro movimiento? (si/no): ${continuar}`);
    console.log("");
}

calcularTotalSaldo();
mostrarResumen();
buscarMovimiento();