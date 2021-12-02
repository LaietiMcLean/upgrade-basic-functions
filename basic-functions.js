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



    