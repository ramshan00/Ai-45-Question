//question 22
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface item{
    name:string
    price:number
}

const book: item={
    name: 'Abb e hayat',
    price: 500
}
const pen: item={
    name: 'dollar', 
    price:200
}
console.log(`book name: ${book.name} ,price: $${book.price}`);
console.log(`pen name: ${pen.name} ,price: $${pen.price}`);

