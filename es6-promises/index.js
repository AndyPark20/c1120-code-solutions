const takeAChance = require('./take-a-chance');

 const promiseResult =takeAChance('Andy')

promiseResult.then((response)=>{
    console.log(response);
})

promiseResult.catch((reject)=>{
  console.log(reject);
})
