// esercizio 1
// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

// let lista = [
//     {
//         oggetto: "zucchina",
//         varietà: 0,
//         peso: "10 kg",
//         lunghezza: "12 cm"
//     },
//     {
//         oggetto: "zucchina",
//         varietà: 0,
//         peso: "12 kg",
//         lunghezza: "15 cm"
//     },
//     {
//         oggetto: "zucchina",
//         varietà: 0,
//         peso: "13 kg",
//         lunghezza: "17 cm"
//     },
// ]

// let somma = 0;

// lista.forEach(function (elemento, indice) {
//     const singoloPeso = parseInt(elemento.peso);
//     console.log("il peso della zucchina " + (indice + 1) + " è " + singoloPeso)
//     somma += singoloPeso;
// })
// console.log("la sommma dei pesi è: " + somma)




// esercizio 2
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

// let lista = [
//     {
//         oggetto: "zucchina1",
//         varietà: 0,
//         peso: "10 kg",
//         lunghezza: "12 cm"
//     },
//     {
//         oggetto: "zucchina2",
//         varietà: 0,
//         peso: "12 kg",
//         lunghezza: "15 cm"
//     },
//     {
//         oggetto: "zucchina3",
//         varietà: 0,
//         peso: "13 kg",
//         lunghezza: "17 cm"
//     },
//     {
//         oggetto: "zucchina4",
//         varietà: 0,
//         peso: "13 kg",
//         lunghezza: "17 cm"
//     },
//     {
//         oggetto: "zucchina5",
//         varietà: 0,
//         peso: "13 kg",
//         lunghezza: "13 cm"
//     },
//     {
//         oggetto: "zucchina6",
//         varietà: 0,
//         peso: "13 kg",
//         lunghezza: "17 cm"
//     },
// ]

// let listaOne = [];
// let listaDue = [];
// let somma1 = 0;
// let somma2 = 0;

// lista.forEach(function (elemento) {
//     let lunghezza = parseInt(elemento.lunghezza);
//     if (lunghezza > 15) {
//         listaOne.push(lunghezza)
//         somma1 += lunghezza;
//     } else {
//         listaDue.push(lunghezza)
//         somma2 += lunghezza;
//     }
// })

// console.log("la somma +15 è: " + somma1);
// console.log("la somma -15 è: " + somma2);




// esercizio 3
// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)

// function rigira(stringa) {
//     let reverseParola = "";
//     for (let i = stringa.length - 1; i >= 0; i--) {
//         console.log(i + " " + stringa[i]);
//         reverseParola += stringa[i]
//     }
//     return reverseParola;
// }

// let parola = "ciao";
// let parolaGirata = rigira(parola);
// console.log(parola + " la parola girata è: " + parolaGirata);




// esercizio 4
// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//elementi) prendendo alternativamente gli elementi da uno e dall’altro
//es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// function aggiungi(arrayOne, arrayTwo) {
//     let terzoArray = [];
//     for (let i = 0; i < arrayOne.length; i++) {
//         terzoArray.push(arrayOne[i])
//         terzoArray.push(arrayTwo[i])
//     }
//     return terzoArray;
// }
// const primoArray = ["1", "2", "3", "4", "5"];
// const secondoArray = ["a", "b", "c", "d", "e"];

// let mixArray = aggiungi(primoArray, secondoArray);
// console.log(mixArray);




// esercizio 5
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

// const array = ["a", "b", "c", "d", "e"];
// const a = 1;
// const b = 5;

// function stampa(array, a, b) {
//     let primo = parseInt(a);
//     let ultimo = parseInt(b);
//     let stringa = "";
//     for (let i = 0; i < array.length; i++) {
//         if ((i >= primo) && (i < ultimo - 1)) {
//             stringa += array[i];
//         }
//     }
//     return stringa;
// }

// let finale = stampa(array, a, b);
// console.log(finale);












