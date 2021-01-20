import React from 'react';
import ReactDOM  from 'react-dom';


// const pokedex = [
//   { number: '001', name: 'Bulbasaur' },
//   { number: '004', name: 'Charmander' },
//   { number: '007', name: 'Squirtle' },
//   { number: '025', name: 'Pikachu' },
//   { number: '039', name: 'Jigglypuff' }
// ];


// export default class RenderPokedex extends React.Component{
//   render(){
//     return(
//       <ul>
//         <li>{pokedex.map(values=><li key={values.number}>{values.name}</li>)}</li>
//       </ul>
//     );
//   }
// }

// ReactDOM.render(<RenderPokedex />, document.querySelector('#root'))

/*-------------------------------------------------------------*/
const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
console.log('testing')
function RenderPokedex(props){
  const result =props.list
  const array=result.map(values=><li key={values.number}>{values.name}</li>)
  return(
    <ul>
      {array}
    </ul>
  );
}

const element =<RenderPokedex list={pokedex} />
ReactDOM.render(element, document.querySelector('#root'));
