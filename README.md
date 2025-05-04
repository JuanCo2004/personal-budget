# personal-budget
## ¿Cómo funciona el programa?
El programa tiene como objetivo permitir al usuario registrar y controlar sus movimientos financieros (ingresos y egresos) desde la consola, validando los datos ingresados y mostrando un resumen general y por tipo. Esto lo ayuda a llevar un control básico de su presupuesto personal y analizar sus hábitos de gasto e ingreso.
## Lista de funciones creadas: 
- registrarMovimiento(): solicita y valida datos, y guarda cada movimiento.
- calcularTotalSaldo(): recorre el array y suma (o resta) los montos.
- mostrarResumen(): muestra cantidad de movimientos, total de gastos y total de ingresos.
## Reflexión sobre cómo las estructuras de control de flujo facilitaron el desarrollo:
Las estructuras de control de flujo permitieron organizar la lógica de manera clara y funcional. Gracias a los bucles como while y for, fue posible repetir la solicitud de datos al usuario hasta que se ingresaran correctamente, garantizando la validez de la información. Además, se usaron para registrar múltiples movimientos sin necesidad de código duplicado.

Las estructuras condicionales if y else permitieron validar cada campo (nombre, tipo y monto), controlar qué tipo de movimiento se estaba registrando (ingreso o egreso), y realizar los cálculos adecuados según el caso. Esto facilitó que el programa reaccionara de forma dinámica a la entrada del usuario, haciendo el sistema más confiable.

## Función pura:
Una función pura es aquella que siempre devuelve el mismo resultado con los mismos argumentos y no produce efectos secundarios, es decir, no modifica variables externas ni interactúa con el entorno fuera de la función.

## Diferencias entre imperativo y funcional:
La programación imperativa se basa en decirle al programa cómo debe hacer las cosas, usando instrucciones paso a paso, cambios de estado y estructuras como bucles (for, while). 
En cambio, la programación funcional se enfoca en lo que se quiere lograr, usando funciones puras, evitando cambios de estado y favoreciendo expresiones en lugar de instrucciones. 
En estilo imperativo se manipulan variables y estados, mientras que en el funcional se encadenan funciones y se evita mutar datos.

## Comparación entre paradigmas imperativo y funcional:
El paradigma imperativo se basa en dar instrucciones paso a paso al computador sobre qué hacer y cómo hacerlo. En cambio, el paradigma funcional se enfoca en el "qué" se quiere lograr utilizando funciones puras, sin afectar el estado global, y permite escribir código más conciso y legible. 
Al aplicar funciones como map(), filter() y find(), pude apreciar mayor claridad y menos necesidad de variables temporales o estructuras complejas.

## Como aplique el principio DRY:
Apliqué el principio DRY al encapsular tareas repetitivas dentro de funciones como registrarMovimiento() y mostrarResumen(), evitando duplicar código para validaciones o salidas por consola. También, al reutilizar funciones de orden superior (map, filter, find) para distintas operaciones, logré que el código fuera más limpio y fácil de mantener, ya que los cambios solo se deben hacer en un lugar si se necesita ajustar alguna funcionalidad.

