//Exercise 43 - Unchanged magicians - continuing with Exercise 41 code
// Define the make_great function to modify the original array
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] += " the Great";
    }
}
// Define the show_magicians function
function show_magicians(magicians) {
    console.log("Magicians:");
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Array of magician's names
var magicians = ["Me", "You", "They", "Them"];
// Create a copy of the original array
var originalMagicians = magicians.slice();
// Call the make_great function with the copy of the array
make_great(originalMagicians);
// Call the show_magicians function with the original array
console.log("Original Magicians:");
show_magicians(magicians);
// Call the show_magicians function with the array containing "the Great" added to each magician's name
console.log("\nGreat Magicians:");
show_magicians(originalMagicians);
