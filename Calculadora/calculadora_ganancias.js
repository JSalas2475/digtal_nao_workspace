// Función para calcular ingresos totales
function calculoIngreso(salario, bonos, deducciones) {
    // Checar si los numeros son validos
    if (salario < 0 || bonos < 0 || deducciones < 0) {
      return 'Los montos no pueden ser negativos.';
    }
  
    // Calcular ingreso total
    var ingresoTotal = salario + bonos - deducciones;
  
    return `Tu ingreso total es de $${ingresoTotal.toFixed(2)}.`;
  }
  
  // Example usage
  var salario = parseInt(prompt("Ingrese su salario mensual."));   // Monthly salary
  var bonos = parseInt(prompt("Ingrese su ingreso por bonos mensual."));  // Bonus amount
  var deducciones = parseInt(prompt("Ingrese el total de deduccaciones mensuales."));  // Deductions amount
  
  var result = calculoIngreso(salario, bonos, deducciones);
  alert(result); 