//question 22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.



// Original array
let myArray: number[] = [1, 2, 3, 4, 5];

// Introduce index error by accessing an index out of range
try {
    console.log(myArray[10]); // Accessing index 10 which is out of range
} catch (error) {
    console.error("Index Error: Index out of range");
}

// Correcting the error by accessing a valid index
console.log(myArray[2]); // Accessing index 2 which is valid


