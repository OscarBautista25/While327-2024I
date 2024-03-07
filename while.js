var numeroEntrada=0, resultado=0, control=1;
numeroEntrada = prompt("Ingrese el valor de los números naturales a calcular");
while (control<=numeroEntrada) {
    resultado=resultado+control;
    control=control+1;
}
alert("La suma de los primeros " +numeroEntrada + " números naturales es " +resultado);