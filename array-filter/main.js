const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];



const evenNumbers =numbers.filter(values=>{
  return values %2 ===0;
})

const overFive = numbers.filter(values=>{
  return values >5;
})


const startE = names.filter(names=>{
  for (var i=0; i<names.length;i++){
    for (var j=0;j<names[i].length;j++){
      if (names[i][j]==='E'){
        return names;
      }
    }
  }
})

const includeDd =names.filter(names=>{
  for (var i=0;i<names.length;i++){
    for (var j=0;j<names[i].length;j++){
      if(names[i][j]==='D'|| names[i][j]==='d'){
        return names;
      }
    }
  }
})

console.log(`Even Number values are: ${evenNumbers}`);
console.log(`Numbers greater than 5: ${overFive}`);
console.log(`names that start with E ${startE}`);
console.log(`names that start with either 'D' or 'd': ${includeDd}`)
