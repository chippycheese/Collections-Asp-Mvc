import React, { Component } from 'react';

class YesNoFromBoolean extends Component {

  constructor(props){
    super(props) 
    this.state = {
      active: null
    }

  }

  componentDidMount() {
    // const { collectionId } = this.props.match.params;
  }

  render() {
    if(this.props.active){
      return (
        <span> Yes </span>
      );
    }else{
      return (
        <span> No </span>
      );
    }
  }
}

export default YesNoFromBoolean;