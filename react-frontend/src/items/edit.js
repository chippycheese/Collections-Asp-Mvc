import React, { Component } from 'react';

const API = 'http://localhost:4000/api/items/';

class ItemEdit extends Component {

  constructor(props){
    const { itemId } = this.props.match.params
    super(props) 
    this.state = {
      collections: [],
    }
  }

  componentDidMount() {
    this.data = fetch(API + this.props.itemId)
      .then(response => response.json())
      .then(data => console.log(data));
      // .then(data => this.setState( {collections:  data} )  );
  }

  render() {
    return (
      <div>
        <p className="h1">Edit Item</p>
        
          
      </div>
    );
  }
}

export default ItemEdit;