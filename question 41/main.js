//Exercise 41 - Magicians
//creating function with array
function showMagicians(magicians) {
    console.log('The Magicians are...');
    //for every element of the magician array
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        //printing the name of each magician
        console.log(magician);
    }
}
//creating new string array
var myMagicians = ['Me', 'You', 'Them', 'Who'];
//passing the created string array in function showMagician
showMagicians(myMagicians);
