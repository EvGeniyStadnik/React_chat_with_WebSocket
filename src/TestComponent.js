import React, { Component } from 'react';
import Counter from './Counter';
//меньше 10 кб и должны преобразоваться в dataURL
import smallPic from './assets/images/react_logo_small.jpg';
//больше 10 кб и должна быть файлом
import bigPic from './assets/images/redux_logo_big.png';

class TestComponent extends Component {
  render(){
    return (
      <div>
        <div>Test Component</div>
        <img src={smallPic} />
        <Counter />
        <img style={{maxWidth: '200px'}} src={bigPic} />
      </div>
    )
  }
}

export default TestComponent;