//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%


//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0


//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor", "respuesta aqui")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ", "0")
var edad_numero = parseInt(edad)
var casado = prompt("¿Está casado actualmente?", "si/nono")

//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "0")
}
//convirtiendo las edades ingresadas a números 
var edad_conyuge_numero = 0

//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

//Comprobamos la cantidad de hijos solamente si los tienen
var hijos = prompt("¿Tiene hijos o hijas?", "si/no")
/**
 * 1. convierta la cantidad de hijos a numero
 */
var cantidad_hijos
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = prompt("¿Cuantos hijos tiene?", "0")
}

hijos_numero = parseInt(cantidad_hijos);

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edad_numero>=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}
//aqui puede colocar un else if() con el siguiente rango
if (edad_numero >=25 && edad_numero < 50){
  recargo = precio_base * edad_25
  recargo_total = recargo_total + recargo
}

if (edad_numero >=50 ){
  recargo = precio_base * edad_50
  recargo_total = recargo_total + recargo
}

/** 
 * 2. Recargo por la edad del conyuge
 */
if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
  recargo = precio_base * edad_18
  recargo_total = recargo_total + recargo
}
if (edad_conyuge_numero >=25 && edad_conyuge_numero < 50){
  recargo = precio_base * edad_25
  recargo_total = recargo_total + recargo
}

if (edad_conyuge_numero >=50 ){
  recargo = precio_base * edad_50
  recargo_total = recargo_total + recargo
}

/**
 * 3. Recargo por la cantidad de hijos 
 */ 

var i = 1;
var total = 0;
var recargo = 0;
var recargohijos = 0;
while (i <= hijos_numero){
    total = i * hijos_recargo;
    recargohijos = total * precio_base;
    i++;
}
    
precio_final = precio_base + recargo_total + recargohijos;
//Resultado

document.write ("<br>" + "Para el asegurado "+ nombre + " de "+ edad + " años."+ "<br>")
if ("SI" == casado.toUpperCase()){
  document.write("Para su conyuge de " + edad_conyuge_numero + " años ")
}
if ("SI" == hijos.toUpperCase()){
  document.write("y con " + hijos_numero + " hijos." + "<br>")
}
document.write("<br>");

if ("SI" == casado.toUpperCase()){
  document.write ("El recargo total por usted y su conyuge será de: Q."+ recargo_total.toFixed(2) + "<br>")
}
else {document.write ("El recargo total será de: Q."+ recargo_total+ "<br>")}

if ("SI" == hijos.toUpperCase()){
  document.write("El recargo total por sus hijos es: Q.");
  document.write(recargohijos.toFixed(2) + "<br>");
}

document.write("El precio del seguro completo será de: Q."+ precio_final.toFixed(2) + "<br>");


