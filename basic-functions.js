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





    