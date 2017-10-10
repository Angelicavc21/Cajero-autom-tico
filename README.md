Leer lista_de_variables
//Definiendo variables
 str<-'Ingrese nro de TC(16 números)';
 arr<-str;

//Validación de ingreso de datos vacío
Si str es igual a vacío entonces
  str<-str;
FinSi
	//Devuelve el valor de arreglo ingresado al revés
Función reverse(arr)
 Para i<-0 Hasta str con Paso 1 Hacer
  Escribir arr.splice(i, 0, arr.pop());
 FinPara
FinFuncion
	//Valida el nro de la TC
Función isValidCard(arr){
	double<-true;
	numArr<-arreglo;
	sumTotal<-0;
	Leer Función reverse;
  Para i<-1 Hasta arrReverse con Paso 2 Hacer
	 digit<-arrReverse[i+2];
	 product<-0;
	 si double es true entonces
	  product<-digit*2;
	  digit<-toSingle(digit);
	  double<-false;
	 SiNo
	  double<-true;
	 FinSi
	 Escribir numArr.push(digit);			 
	FinPara

	Para i<-0 Hasta numArr.length con Paso 1 Hacer
	 sumTotal<-numArr[i];
	 Escribir diff<-sumTotal%10;
	 Escribir diff<-0;
FinFuncion

//Valida si el numero es mayor a 9 suma cada elemento del número y retorna un nuevo valor de un sólo dígito.

Función toSingle(digit)
	Si digit es mayor a 9 entonces
		Escribir tmp<-digit.toString();
		d1<-parseInt(tmp.charAt(0));
		d2<-parseInt(tmp.charAt(1));
		Escribir d1+d2;
	Si nó
		Escribir digit;
	FinSi
FinFuncion

![diagrama](http://thumbs.subefotos.com/e0067a3fe569ef2ab7ba033fd641744fo.jpg);
