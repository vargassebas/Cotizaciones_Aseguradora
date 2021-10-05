# Cotizaciones_Aseguradora
Aplicacion que te genera una cotizacion para un seguro.

## Problema del Proyecto

Una empresa de seguros llamada TKU quiere facilitar la forma en la que 
realiza cotizaciones para sus clientes. Ellos tienen un metodo manual 
entonces es bastante tardado, hay espacio para errores y tambien es muy
complicado. 

Entonces, ellos para solucionar ese problema, quieren tener una aplicacion
que les haga las cotizaciones de manera automatica y rapida en donde solo
necesite introducir el nombre del asegurado, su conyuge (si tiene, agregar
recargo extra por la edad que tenga) y sus hijos (si tiene, agregar cargos
por cada hijo que tenga). 

## Algoritmo para resolver el problema

1. identificar los tres problemas.
2. declarar las variables nombre y edad.
3. convertir la edad introducida en numeros.
4. preguntar si tiene conyuge.
4.1. si tiene conyugue, preguntar su edad.
4.2. convertir la edad del conyugue en numeros.
5. preguntar si tiene hijos.
5.1. si tiene hijos, preguntar cuantos tiene.
6. crear tres condiciones para agregar los cargos correspondientes a cada rango de edad del asegurado.
7. crear tres condiciones para agregar los cargos corresponientes a cada rango de edad del conyugue.
8. crear un ciclo, donde dependa de la cantidad de hijos para agregar el cargo extra.
9. mostrar los resultados de los cambios para que se impriman en pantalla.
