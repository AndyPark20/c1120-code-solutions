import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const dotId=[
  {id:0},{id:1},{id:2},{id:3},{id:4}
]

ReactDOM.render(<Carousel pokemon={['./001.png','./004.png','./007.png','./025.png','./039.png']} dotId={dotId} />,document.querySelector('#root'))
