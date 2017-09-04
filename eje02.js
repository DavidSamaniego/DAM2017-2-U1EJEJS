
function palindromo(cadena){
    cadena=cadena.split(" ");
    cadena=cadena.join("");
    for(i=0;i<cadena.length/2;i++){
        if(cadena[i] != cadena[cadena.length-1-i]){
            return "No es Palindromo";
        }
    }
    return "Es palindromo";
}

function numPalabras(cadena){   
    let arreglo=cadena.split(" ");
    return arreglo.length;
}

function numLetras(cadena){
    let arreglo=cadena.split(" ");
    return cadena.length-(arreglo.length-1);
}

function vocales(cadena){
    let contador=0;
    cadena=cadena.toLowerCase();
    let arreglo=cadena.split(" ");
    for(i=0;i<arreglo.length;i++){
        for(a=0;a<arreglo[i].length;a++){
             palabra= arreglo[i];            
            if(palabra[a]=='a'|palabra[a]=='e'|palabra[a]=='i'|palabra[a]=='o'|palabra[a]=='u'){
                contador++;
            }
        }
    }
    return contador;
}

function consonantes(cadena){
    let contador=0;
    cadena=cadena.toLowerCase();
    let arreglo=cadena.split(" ");
    for(i=0;i<arreglo.length;i++){
        for(a=0;a<arreglo[i].length;a++){
             palabra= arreglo[i];            
            if(palabra[a]=='a'|palabra[a]=='e'|palabra[a]=='i'|palabra[a]=='o'|palabra[a]=='u'){
                
            }else{
                contador++;
            }
        }
    }
    return contador;
}
function eje02(cadena){
    console.log(palindromo(cadena));
    console.log("EL numero de palabras es: "+numPalabras(cadena));
    console.log("EL numero de letras es: "+numLetras(cadena));
    console.log("El numero de vocales es: "+vocales(cadena));
    console.log("El numero de consonantes es: "+consonantes(cadena));
}

eje02("anita lava la tina");