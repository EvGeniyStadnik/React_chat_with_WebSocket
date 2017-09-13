import React, { Component } from 'react';
import ws from 'util/ws';

export default (ChildComponent) => {
  return class AuthHOC extends Component {
    auth = () => {
      //for hotModuleReplacement not reload prompt when there is some changes in code
      if(localStorage.getItem('auth')) return true;

      let name = prompt('Enter your name: ');

      if(!name || !name.trim().length){
        return false;
      }
      //for hotModuleReplacement not reload prompt when there is some changes in code
      localStorage.setItem('auth', name);
      ws.emit(name);
      return true;
    };
    noName = () => {
      return (
        <div class="noname-wrap">
          You didn't enter name :c
          <br />
          <button onClick={() => {window.location.reload()}}>try again?</button>
        </div>
      )
    }
    render() {
      return (
        this.auth() ? <ChildComponent /> : this.noName()
      );
    }
  }
}
