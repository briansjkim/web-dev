// practice with forEach

var suspects = ['Brian', 'Josh', 'Austin'];

suspects.forEach((suspect) => {
  console.log(suspect); // logs each name one by one
});

suspects.forEach((suspect) => {
  suspects.push('Boo'); // pushes 'Boo' at the end for every suspect in suspects
})

console.log(suspects);
