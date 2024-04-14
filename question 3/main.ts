// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//Lowe Case
var personName = "Baber";
console.log("lowercase:", personName.toLowerCase());
//Upper Case
console.log("lowercase:", personName.toLocaleUpperCase());
//Title Case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toLocaleUpperCase(); }));
