//Iteración 1
function sum(numberOne , numberTwo) {
    console.log(Math.max(numberOne, numberTwo));
  }

    //Testeo de la función:
        sum(10,6); //Devuelve 10

//Iteración 2
const avengers = [
    'Hulk', 
    'Thor', 
    'IronMan', 
    'Captain A.', 
    'Spiderman', 
    'Captain M.',
];

    function findLongestWord(param) {
        let longest = param[0];
        param.forEach((long) => {
            let longitudMasLargo = longest.length;
            let longitudValorActual = long.length;
            if (longitudValorActual > longitudMasLargo) {
                longest = long;
            } 
        })
        return longest;
        };

        let resultado = findLongestWord(avengers);
        console.log(resultado);
 
//Iteración 3
const numbers = [1, 2, 3, 5, 45, 37, 58];

    function sumAll(param) {
        var suma = 0;
        param.forEach (function(a){
            suma += a;
        });
        return suma; 
    }

var suma = sumAll(numbers);
console.log(suma);

//Iteración 4
const numbers1 = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    var suma = 0;
    for (var i = 0; i < param.length; i++) {
        suma += parseInt(param[i])
  }
  var promed = suma/param.length;
  return promed;
}

let resultPromed = average(numbers1)
console.log(resultPromed);

//Iteración 5
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
    function averageWord(param) {
        let total = 0;
        for (let i = 0; i < param.length; i++) {
            if (typeof param[i] === "number") {
                total += param[i];
            } else {
                total += param[i].length
            }
        }
        return total;    
    }

let sumMixedElements = averageWord(mixedElements);
console.log(sumMixedElements);

//Iteración 6
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  
    function removeDuplicates(param) {
        for (i = 0; i < param.length; i++) {
            var unicos = new Set(param);
        } 
     return unicos;
    }

    console.log(removeDuplicates(duplicates));

//Iteración 7
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

    function finderName(param, a) {
        for (let i = 0; i < param.length; i++) {
            if (param[i] === a) {
                true;
                var position = param.indexOf(a);
                return position;
            } 
        }
    }

    //Testeo - búsqueda nombre Natasha
    let result = finderName(nameFinder, 'Natasha');
    console.log(result); //Devuelve posición 3, correcto

//Iteración 8
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

function repeatCounter(param) {
    var historico = [];  
    var repetidas = [];  
    var contador = 0;
   
    for (i=0; i < param.length;i++){  
        if(historico.includes(param[i])){
            repetidas.push(param[i]);
        } else {
            historico.push(param[i]);
                } 
    }

    for (i = 0; i < historico.length; i++){
        contador = 0;
        for (j=0; j< param.length; j++) {
            if (historico[i] == param[j]) {
                contador++;
            }
        }
        
        console.log(historico[i]+ " se repite: "+ contador +" veces.")
    }
}
  
  total = repeatCounter(counterWords);
  console.log(total);



  //for (j=0; j< param.length;j++){}











    //function repeatCounter(param){
        //var word = [];
        //var wordRecorridas = [];
        //var repeticiones = [];
        //contador = 1
        //for (var i = 0; i < param.length; i++) {
            //if (param[i] == !word[i]) {
                //wordRecorridas.push(param[i]);
                //contador++;
            //} else {
                //repeticiones.push(pram[i]);
                //contador++;
            //}
            //console.log(wordRecorridas);
            //console.log(repeticiones);
        //}
    //}




    //function repeatCounter(param) {
        //let elementos = [];
        //let repeticiones = [];
        //let contador = 1;

        //for (let i = 0; i < param.length; i++) {
            //if(param[i+1] === param[i]){
               //console.log("Se repite el elemento " + param[i]);
               //contador++;
            //} else {
                //elementos.push(param[i]);
                //repeticiones.push(contador);
                //contador = 1;
            //}
        //}
        //console.log(elementos);
        //console.log(repeticiones);

        //for (let y = 0; y < elementos.length; y++){
            //console.log("El valor " + elementos[y] + " se repite " + repeticiones[y]);
            //}
        //}
    //let resultado2 = repeatCounter(counterWords);
    //console.log(resultado2);

















    