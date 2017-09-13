import React, { Component } from 'react';

const hocLoader = (propName) => (loaderPath) => (ChildComponent) => {
  return class HocLoader extends Component{
    componentDidMount(){
      this.startTime = Date.now()
    }

    componentWillReceiveProps(){
      this.endTime = Date.now()
    }

    isPropsEmpty = () => {
      const prop = this.props[propName];

      if (!prop || ( prop.hasOwnProperty('length') && !prop.length ) || ( !Object.keys(prop).length )) {
          return true
      }
      return false
    };
    showLoadingMessage = () => {
      return <div><img src={loaderPath} alt="loader"/></div>
    };
    render(){
      const newProp = {
        timeDiff: ((this.endTime - this.startTime)/1000).toFixed(2)
      };
      return (
        this.isPropsEmpty() ? this.showLoadingMessage() : <ChildComponent {...this.props} {...newProp}/>
      )
    }
  }
};

export default hocLoader;


