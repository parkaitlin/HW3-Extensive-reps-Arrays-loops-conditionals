// // Easy Going
// for(let i = 0; i <=20; i++){
//     console.log(i);
// };

// // Get Even
// for(let i = 0; i <= 200; i++) {
//     if(i % 2 === 0){
//         console.log(i);
//     };
// };

// Excited Kitten
// write a for loop to evaluate for even numbers
// if the number is even it should log a string randomly from the sayings array
// otherwise, it should log "love me, pet me! HSSSSSS!"
// randomIndex should be inside the loop so that it renews

// let sayings = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', 'why does the red dot always get away...'];

// for(let i = 0; i <= 20; i++){
//     let randomIndex = Math.floor(Math.random() * sayings.length)
//     if(i % 2 === 0){
//         console.log (sayings[randomIndex])
//     } else {
//         console.log("Love me, pet me! HSSSSSS!");
//     };
// };

// // Fizz Buzz
// for(i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//     console.log("FizzBuzz");
//     } else if(i % 3 === 0){
//         console.log('Fizz');
//     } else if(i % 5 === 0){
//         console.log("Buzz");
//     } else{
//         console.log(i);
//     };
// };

// // Getting to Know You
// const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];

// //1
// kenny[0] = "Gameboy";
// console.log(kenny);
// //2
// jimClark[1] = 187;
// console.log(jimClark);
// //3
// ryan[2] = "Gotham City";
// console.log(ryan);
// //4
// reuben.pop();
// console.log(reuben);
// reuben[2] = "Chicago";
// console.log(reuben);
// //5
// jimHaff.pop();
// jimHaff.push("Chicago", "New York", "Seoul");
// console.log(jimHaff);
// //6
// jimHaff.splice(2,1);
// console.log(jimHaff);

// Yell at the ninja Turtles
// let turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// for(let i = 0; i < turtles.length; i++) {
//     console.log(turtles[i].toUpperCase());
// };
// Bonus in process
//     for(let i = 0; i < turtles.length; i++) {    
//     for(let j = 0; j < turtle[i].length; j++) {
//         let turtleArray = turtles[i].split('');
//     if(j % 2 === 0) {
//         turtleArray[j].toUpperCase;

//         }
//     }
//     console.log(turtles[i].toUpperCase());
// };

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

// // Alien Attire
// //remove Kristyn's left shoe from her array
// kristynsCloset.shift();
// // declare a variable 'kristynsShoe'
// kristynsCloset.unshift("kristynsShoe");
// console.log(kristynsCloset);
// // add 'kristynsShoe' to Thom's accessories array
// thomsCloset[2].push("kristynsShoe");
// console.log(thomsCloset);
 
//   // Dirty Laundry
// console.log("Kristyn will be wearing her favorite " + kristynsCloset[3] + " paired with her " + kristynsCloset[4] + " and accessorize it with a " + kristynsCloset[5] + ".");
// let temp = 75
// if(temp < 60){
//     console.log("Thom should wear a " + thomsCloset[0][1] + " with " + thomsCloset[1][1] + " and a " + thomsCloset[2][1] + " because it's " + temp + " degrees out!");
// } else {
//     console.log("Thom should wear a " + thomsCloset[0][2] + " with " + thomsCloset[1][0] + " and " + thomsCloset[2][2] + " because it's " + temp + " degrees out!");
// }

// // Dirty Laundry
// for(i = 0; i < kristynsCloset.length; i++){
//   console.log("WHIRR: Now washing " + kristynsCloset[i]);
// }

// // Inventory
// for(i = 0; i < 1; i++) {
//   console.log("Shirts" + ":" + thomsCloset[i].length + " items");
//   console.log("Pants" + ":" + thomsCloset[i].length + " items");
//   console.log("Accessries" + ":" + thomsCloset[i].length + " items");
// }

// function numSum() {
//   let total = 0;
//   for(i = 0; i < 1000; i++){
//     if(i % 3 === 0 || i % 5 === 0){
//       total += i;
//     };
//   };
// return total;
// };
// console.log(numSum());

// Hungry for more?
// declare a variable 'argument'
//create a loop
let argument = 7;
for(i = 1; i <= 7; i++){
  console.log("#".repeat(i));
}

for(i = 1; i <= 7; i++){
  console.log(" ".repeat(7 - i) + "#".repeat(i));
}

for(i = 7; i >= 1; i--){
  console.log("#".repeat(i));
};

for(i = 7; i >= 1; i--){
  console.log(" ".repeat(7 - i) + "#".repeat(i));
}