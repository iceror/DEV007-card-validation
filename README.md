# Tarjeta de crédito válida

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Uso de HTML, CSS y JS (Eventos del DOM)](#2-uso-de-html-css-y-js-(eventos-del-dom))
* [3. Uso de JS](#3-uso-de-js)

***
## Preámbulo
El algoritmo de Luhn, también llamado algoritmo de módulo 10, es un método de suma de verificación, se utiliza para validar números de identificación; tales como el IMEI de los celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que solamente contiene dígitos [0-9]); a todos los números que ocupan una posición par se les debe multiplicar por dos, si este número es mayor o igual a 10, debemos sumar los dígitos del resultado; el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.

gráfica de algoritmo de Luhn

## 1. Resumen del proyecto

En este proyecto construí una aplicación que le permite a lxs usuarixs ingresar 
un número de tarjeta y validarlo al finalizar una compra dentro de un ecommerce. 
Los objetivos de los usuarixs serían finalizar una compra y mantener los números 
de su tarjeta ocultos. 

El número de tarjeta es validado mediante el algoritmo de Luhn; al ser aceptado,
el número de tarjeta será ocultado excepto los últimos 4 dígitos para que el ususario
pueda corroborar que el cargo se ha hecho a su tarjeta.

Para realizar este proyecto implementé HTML, CSS, y JS. 
Aplicando eventos del DOM, funciones, métodos y ciclos/bucles.

Usé GitHub para el control de versiones y GitHub Pages para realizar el deploy del proyecto.

## 2. Uso de HTML, CSS y JS (Eventos del DOM)
Trabajé HTML siguiendo el boilerplate proporcionado. 

Utilicé las etiquetas section y div para dividir los elementos de mi diseño.
Las etiquetas h1, h2, y h3 para los diferentes títulos de las secciones y 
la etiqueta p para el texto común. 

A cada etiqueta le asigné una class y un id; las class las utilicé para llamarlas 
con CSS y aplicar estilos. Utilicé las propiedades de Flexbox para posicionar los elementos 
dentro de las secciones. 

El id lo utilicé para llamar los elementos del HTML con JS: 
"const validateButton = document.getElementById('validate-btn');".
También lo utilicé para mostrar en pantalla el resultado de mis funciones de JS: 
"document.getElementById("show-card-number").textContent = validator.maskify(creditCardNumber);". 
Y para aplicer eventos: 
"validateButton.addEventListener("click", validateCreditCard);".

Finalmente, hice uso de LocalStorage para guardar algunos datos del usuario y poder mostrarlos al término
de su compra en una ventana de confirmación.

## 3. Uso de JS 
Con JS realicé asignación de variables y constantes. Asignación de funciones, ciclos, métodos del objeto validator,
y métodos de array.

