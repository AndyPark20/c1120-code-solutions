const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((accumulator, currentValue)=>accumulator + currentValue)
const product = numbers.reduce((accumulator,currentValue)=>accumulator * currentValue)
const balance =account.reduce((acc,curr)=>{
  if(curr.type==='deposit'){
    return acc + curr.amount;
  }else if(curr.type==='withdrawal'){
    return acc - curr.amount;
  }
},0)
const composite = traits.reduce((acc,curr)=>{
  return Object.assign(acc,curr)
})

console.log('the single value for numbers is:', sum)
console.log('the single value for multiplication is:', product)
console.log('total value of combining all transactions:', balance)
console.log('object with combined property:',composite)
