const takeAChance = require('./take-a-chance');

 const promiseResult =takeAChance('Andy')

promiseResult.then((success)=>{
    console.log(success);
})

promiseResult.catch((fail)=>{
  console.log(fail);
})
