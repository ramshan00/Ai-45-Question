//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var member = ['Kainat', 'Ramsha', 'Uzma', 'Komal', 'Suhana'];
var message = "you are invited";
for (var i = 0; i < member.length; i++) {
    console.log(message + member[i]);
}
