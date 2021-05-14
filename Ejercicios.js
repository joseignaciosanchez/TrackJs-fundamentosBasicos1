/*
EJERCICIO 1
Obtén del 1 al 255: Escribe una función que devuelve un array con 
todos los números del 1 al 255.
*/
function arreglo(x) {	
    var arrayAux = [];				
	for(var i = 1; i <= x; i++){		
		if(i > 0){	
			arrayAux.push(i);
		}	
	}		
return arrayAux;			
}			
y = arreglo(255);			
console.log(y);
/*
EJERCICIO 2
Consigue pares hasta 1000: Escribe una función que entregue la 
suma de todos los números pares del 1 al 1000 - Puedes usar un 
operador de módulo para este ejercicio. 
*/
function sumPares(x) {	
    var numPar = 0;	
    var sum = 0;		
    for(i = 0; i < x; i++){
        if(i % 2 == 0){            
            numPar = numPar + 2;  
            sum+=numPar;
        }
    }
    return sum;
}			
y = sumPares(1000);			
console.log(y);	
/*
EJERCICIO 3
Suma impares hasta 5000: Escribe una función que devuelva la suma 
de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
*/	
function sumImpares(x) {		
    var sum = 0;
      for(i = 0; i < x; i++){
          if (i%2 > 0) { 
            sum+=i;
          }
      }
    return sum;
  }			
  y = sumImpares(5000);
  console.log(y);
/*
EJERCICIO 4
Itera un array: Escribe una función que devuelva la suma 
de todos los valores dentro de un array 
(ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14).
*/
function printSumArray(x) {			
    var sum = 0;			
    for (var i = 0; i < x.length; i++) {			
        if(i => 0){		
            sum+=x[i];		
        }		
    }			
    return sum;			
}			
y = printSumArray([1,2,5]);
console.log(y);
  
y = printSumArray([-5,2,5,12]);
console.log(y);	
/*
EJERCICIO 5
Encuentra el mayor (max): Dado un array con múltiples valores, 
escribe una función que devuelva el número mayor 
(ej: para [-3,3,5,7] el número mayor (max) es 7). 
*/
function mayorElem(x) {			
    var mayorHastaAhora = x[0];			
    for (var i = 0; i < x.length; i++) {			
        if(x[i] > mayorHastaAhora){		
            mayorHastaAhora = x[i];	
        }		
    }			
    return mayorHastaAhora;			
}			
console.log( mayorElem([-3,3,5,7]));	
/*
EJERCICIO 6
Encuentra el promedio (avg): Dado un array con múltiples valores, 
escribe una función que devuelva el promedio de los valores 
(ej: para [1,3,5,7,20] el promedio es 7.2).
*/
var arr = [1,3,5,7,20];
function printAverage(x){
    var sum = 0;
    for(i = 0; i < x.length; i++){
        sum += x[i];        
    }    
    promedio = sum / x.length;
    return promedio;
 }   
 promedio = printAverage(arr);
 console.log(promedio);
 /*
EJERCICIO 7
Array de impares: Escribe una función que devuelva un array de 
todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). 
Pista: Usa el método ‘push’.
*/
function printImpares(x) {	
    var arrayAux = [];
    for(i = 1; i < x; i++){
        if(i % 2 == 1){     
            arrayAux.push(i);
        }
    }
    return arrayAux;
}			
y = printImpares(50);			
console.log(y);
 /*
EJERCICIO 8
Mayor que Y: Dado un valor Y, escribe una función que toma un 
array y devuelve los valores mayores que Y. Por ejemplo, 
si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 
(hay 2 números en el array mayores que 3, esto son 5 y 7). 
*/
var arr = [1,3,5,7];
var y = 3;
function numMayoresY(x) {			
    var CantNumMayores = 0;			
    for (var i = 0; i < x.length; i++) {			
        if(x[i] > y){		        	
            CantNumMayores++;            
        }		        
    }			
return CantNumMayores;			
}
z = numMayoresY(arr);
console.log(z);
 /*
EJERCICIO 9
Cuadrados: Dado un array con múltiples valores, escribe una 
función que reemplace cada valor por el cuadrado del mismo 
valor (ej: [1,5,10,-2] será [1,25,100,4]).
*/
var arr = [1,5,10,-2];
function squareValue(x){
    for(i = 0; i < x.length; i++){
        x[i] = x[i]*x[i];
    } 
    return x;
 }
 y = squareValue(arr);
 console.log(y);
  /*
EJERCICIO 10
Negativos: Dado un array con múltiples valores, escribe una 
función que reemplace cualquier número negativo dentro del array 
por 0. Cuando el programa esté listo, el array no debiera contener 
números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
*/
var arr = [1,5,10,-2];
function reemplazarNumNeg(x){
    for(i = 0; i < x.length; i++){
        if(x[i] < 0){
            x[i] = 0;
        }
    } 
    return x;
}
y = reemplazarNumNeg(arr);
console.log(y);
  /*
EJERCICIO 11
Max/Min/Avg: Dado un array con múltiples valores, escribe una 
función que devuelva un nuevo array que solo contenga el valor 
mayor (max), menor (min) y promedio (avg) del array 
original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
*/
var arr = [1,5,10,-2];
var arrAux = [];
function MaxMinProm(x,y) {			    
    var valorMax = x[0];			
    var valorMin = x[0];
    var sum = 0;
    var promedio = 0;
    for (var i = 0; i < x.length; i++) {			
        if(x[i] > valorMax){		
            valorMax = x[i];	          
        }		
    }						
    for (var i = 0; i < x.length; i++) {			
        if(x[i] < valorMin){		
            valorMin = x[i];	          
        }		
    }			
    for(i = 0; i < x.length; i++){
        sum += x[i];        
    }    
    promedio = sum / x.length;
    y.push(valorMax);
    y.push(valorMin);
    y.push(promedio);
    return y;			
}			
console.log(MaxMinProm(arr,arrAux));	
  /*
EJERCICIO 12
Intercambia Valores: Escribe una función que intercambie el 
primer y el último valor de cualquier array. La extensión mínima 
predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
*/
var arr = [1,5,10,-2];
function InterElem(x){
    var aux = x[x.length - 1];
    x[x.length - 1] = x[0];
    x[0] = aux;
  return x;
}
console.log(InterElem(arr)); 
  /*
EJERCICIO 13
De Número a String: Escribe una función que tome un array 
de números y reemplace cualquier valor negativo por el 
string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], 
tu función devolverá [‘Dojo’,‘Dojo’,2]. 
*/
var arr = [-1,-3,2];
function reempNegativ(x){						
	for(i = 0; i < x.length; i++){					
		if(x[i] < 0){				
		x[i] = "Dojo";				
		}				
	}					
return x;						
}
var y = reempNegativ(arr);						
console.log(y);