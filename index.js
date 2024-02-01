function findLongestWord(words) {
  let wordsReformed = words.map(mot => {
    return {
      mot,
      longeur: mot.length,
    };
  });
  return wordsReformed.reduce((store, currentValue) => {
    if (currentValue.longeur > store.longeur) {
      return currentValue;
    } else {
      return store;
    }
  });
}

const words = ['aza', 'fsdfdsssssss', 'fdf'];
// console.log(findLongestWord(words));

function calculateTotalMarks(students) {
  return students
    .map(student => (student.marks < 50 ? student.marks + 15 : student.marks))
    .filter(mark => mark > 50)
    .reduce((store, currentValue) => store + currentValue);
}

const students = [
  {
    name: 'aa',
    marks: 98,
  },
  {
    name: 'bb',
    marks: 23,
  },
  {
    name: 'cc',
    marks: 45,
  },
  {
    name: 'aa',
    marks: 75,
  },
];

console.log(calculateTotalMarks(students));
