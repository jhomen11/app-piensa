export interface ProblemaMatematico {
  pregunta: string
  opciones: number[]
  correcta: number
}

export const generarProblema = (nivel: number): ProblemaMatematico => {
  let num1, num2, operador, resultado;
  
  // Nivel 1: Sumas simples (1-10)
  if (nivel <= 5) {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    operador = '+';
    resultado = num1 + num2;
  } 
  // Nivel 2: Restas simples (resultados positivos)
  else if (nivel <= 10) {
    num1 = Math.floor(Math.random() * 20) + 5;
    num2 = Math.floor(Math.random() * num1); // Asegura resultado positivo
    operador = '-';
    resultado = num1 - num2;
  }
  // Nivel 3: Multiplicaciones simples
  else if (nivel <= 15) {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    operador = '×';
    resultado = num1 * num2;
  }
  // Nivel 4: Operaciones combinadas simples
  else {
    const op = Math.random();
    if (op < 0.33) {
      // Sumas grandes
      num1 = Math.floor(Math.random() * 50) + 10;
      num2 = Math.floor(Math.random() * 50) + 10;
      operador = '+';
      resultado = num1 + num2;
    } else if (op < 0.66) {
      // Restas grandes
      num1 = Math.floor(Math.random() * 100) + 20;
      num2 = Math.floor(Math.random() * num1);
      operador = '-';
      resultado = num1 - num2;
    } else {
      // Multiplicaciones medias
      num1 = Math.floor(Math.random() * 12) + 2;
      num2 = Math.floor(Math.random() * 12) + 2;
      operador = '×';
      resultado = num1 * num2;
    }
  }

  // Generar opciones incorrectas
  const opcionesSet = new Set<number>();
  opcionesSet.add(resultado);

  while (opcionesSet.size < 4) {
    const desviacion = Math.floor(Math.random() * 10) + 1;
    const signo = Math.random() > 0.5 ? 1 : -1;
    const opcionIncorrecta = resultado + (desviacion * signo);
    
    // Evitar negativos si no es apropiado (opcional, pero mejor para niños)
    if (opcionIncorrecta >= 0) {
      opcionesSet.add(opcionIncorrecta);
    }
  }

  // Convertir a array y mezclar
  const opciones = Array.from(opcionesSet).sort(() => Math.random() - 0.5);

  return {
    pregunta: `${num1} ${operador} ${num2}`,
    opciones,
    correcta: resultado
  };
}
