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

let sayings = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', 'why does the red dot always get away...'];

for(let i = 0; i <= 20; i++){
    let randomIndex = Math.floor(Math.random() * sayings.length)
    if(i % 2 === 0){
        console.log (sayings[randomIndex])
    } else {
        console.log("Love me, pet me! HSSSSSS!");
    };
};