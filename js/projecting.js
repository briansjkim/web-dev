const videoData = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false }
    ]
  },
  {
    name: 'Mrs. White',
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false }
    ]
  }
]

// Filter and then map this data structure to get the names of the final susepcts
var suspects = videoData.filter((suspects) => {
  return suspects.present;
});

// console.log(suspects);
var suspectNames = suspects.map((suspect) => {
  return suspect.name;
})

// console.log(suspectNames);

