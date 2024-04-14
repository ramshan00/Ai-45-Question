"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest_list = ["ramsha", "zoya", "zara", "zarnab"];
let not_present = "zoya";
let new_guest = "Ayesha";
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Maam ' + guest_list[i] + ',\nWe invited you on dinner tommorrow.\nThank You\n');
}
guest_list.unshift('Kiran', 'Jiya', 'Moon');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Maam ' + guest_list[i] + ',\nWe invited you on dinner tommorrow.\nThank You\n');
}
// console.log(`Miss. ${not_present} will not coming tomorrow dinner.`); 
