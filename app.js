//Definiendo variables
var str = parseInt(prompt('Ingrese el numero de taejeta(16 dígitos):'));//ingresa los caracteres de la TC-16 digitos.
var arr = Array.from(str);//convierte el string a Array


//Validación de ingreso de datos
if(str === ''){
  alert('Tiene que ingresar un valor');
  str = parseInt(prompt('Ingrese el número de tarjeta(16 dígitos):'));
}

  //Devuelve el valor de arreglo ingresado al revés
function reverse(arr){
  for(var i = 0; i < arr.length; i++){
  arr.splice(i, 0, arr.pop());
  }
  return arr;
}

//Valida el numero de la tarjeta de crédito
function isValidCard(arr){
  var double = true;
  var numArr = [];
  var sumTotal = 0;
  var arrReverse = reverse(arr);
  for(i=1; i<arrReverse.length; i+2){
    var digit = arrReverse[i+2];
    var product = 0;
    if(double){
      product = digit * 2;
      digit = toSingle(digit);
      double = false;
    } else {
      double = true;
    }
      numArr.push(digit);
    }

    for(i=0; i<numArr.length; i++){
      sumTotal += numArr[i];
    }
    var diff = sumTotal % 10;
    return (diff == "0");
}

//Valida si el numero es mayor a 9 suma cada elemento del número y retorna un nuevo valor de un sólo dígito.
function toSingle(digit){
  if(digit > 9){
    var tmp = digit.toString();
    var tj1 = parseInt(tmp.charAt(0));
    var tj2 = parseInt(tmp.charAt(1));
    return (tj1 + tj2);
  } else {
    return digit;
  }
}

isValidCard(arr);
