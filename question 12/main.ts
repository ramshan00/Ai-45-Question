//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

var member: string[] = ['Kainat','Ramsha','Uzma','Komal','Suhana'];
let message: string="you are invited"
for(let i = 0; i < member.length; i++){
    console.log(message + member[i]);
}