function calcularPromedioPonderado() {
    let numMaterias = parseInt(prompt("¿Cuántas materias tienes?"));
  
    let notas = [];
    let pesos = [];
  
    for (let i = 1; i <= numMaterias; i++) {
      notas.push(parseFloat(prompt(`Ingrese la nota de la materia ${i}: `)));
      pesos.push(parseFloat(prompt(`Ingrese el peso de la materia ${i}: `)));
    }
  
    // Función para calcular el promedio
    function calcularPromedio(notas, pesos) {
      let sumaPonderada = 0;
      let sumaPesos = 0;
  
      for (let i = 0; i < notas.length; i++) {
        sumaPonderada += notas[i] * pesos[i];
        sumaPesos += pesos[i];
      }
  
      return sumaPonderada / sumaPesos;
    }
  
    // Calculamos el promedio y mostramos el resultado
    let promedio = calcularPromedio(notas, pesos);
    
    if (promedio >= 3.5) {
      alert("¡Felicitaciones! Has aprobado con un promedio de " + promedio.toFixed(2));
    } else if (promedio < 2.5) {
      alert("Lo sentimos, debes repetir el curso. Tu promedio es " + promedio.toFixed(2));
    } else {
      alert("Tu promedio es " + promedio.toFixed(2));
    }
  }
  
  calcularPromedioPonderado();