
const url = 'https://jsonplaceholder.typicode.com/users'

const fetch_Url = fetch(url,{
  method: 'GET',
  headers: {
    'Content-type': 'application/json'
  }
})
  .then(res => {
    return res.json()
  })
  .then(data => {
    console.log('jsonplaceholder',data);
  })


  //**********************************POKEAPI fetch****************************//
const url_pokeApi ='https://pokeapi.co/api/v2/pokemon/1';
const fetch_pokeApi =fetch(url_pokeApi,{
  method:'GET',
  headers:{
    'Content-type': 'application/json'
  }
})

  .then(info => {
    return info.json()
  })
  .then(result => {
    console.log('PokeApi', result);
  })
