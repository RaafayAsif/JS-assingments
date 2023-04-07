var guests = ["rahid","faris","buffon"]

console.log(guests[0] + " you are invited for dinner tonight");

console.log(guests[1] + " you are invited for dinner tonight");
console.log(guests[2] + " you are invited for dinner tonight");
console.log(guests[2] + " is not available for dinner");
guests.pop([2]);
guests.push("karim");
console.log(guests[2] + " you are invited for dinner tonight");

// alert("now we got bigger table arrangement so we invited 3 more guests");
guests.push("carlos");
guests.push("luis");
guests.push("deni");

console.log("Now we updated guests list \n\t GUESTS "+ "\n" + guests[0] + "\n" 
+ guests[1] + "\n" + guests[2] + "\n"+ guests[3] + "\n" + guests[4] + "\n" +  guests[5] );




guests.pop();
console.log(guests + "you'r removed")

guests.pop();
console.log(guests  + "you'r removed")

guests.pop();
console.log(guests  + "you'r removed")

guests.pop();
console.log(guests  + "you'r removed")

console.log(guests)


console.log(guests  + "you'r also removed")
guests.pop();
console.log(guests  + "you'r also removed")

guests.pop();

console.log(guests)