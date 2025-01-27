


let numbers = [11, 16, 17, 18, 20]

// numbers.map()

// ces deux fonctions anomymes retournent des valeurs 1 et puissance d'un nombre
let an = () => 1 ;
let bn = (x) => x**2 ;

console.log(an())

console.log(bn(5))

// Exercices 
// Créez la fonction anomyme qui retourne une puissance de 3 d'un nombre quelconque

let cn = (x) => x**3 ;
// une autre syntaxe existe avec des accolades attention avec cette syntaxe vous devez explicitement 
// retourner les valeurs 
let cn2 = (x) => {

    x = x + 1 ;

    return  x**3 ;
}

console.log(cn(4));
console.log(cn2(4));

// Essayez d'afficher les valeurs du tableau numbers avec un map 

numbers.map( (number) => {
    console.log(number)
} )
console.log('----------------------------')
// Essayez de mettre à la puissance 3 chaque valeur du tableau numbers

numbers.map( (number) => {
    console.log(number**3)
} )

// on peut passer la fonction anonyme à un map
numbers  = numbers.map(cn)

console.log(numbers)


const users = [{ id : 1, name : "Alan",} , { id : 3, name : "Sophie"}]

console.log( users.filter( user => user.id !== 3) )

const user = { id:  7, name : "Phil"}
console.log( [ ...users, user  ] ) 