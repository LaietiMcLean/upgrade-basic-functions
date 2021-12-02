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
    'Una palabra muy larga'
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
 

    