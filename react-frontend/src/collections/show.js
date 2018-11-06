import React, { Component } from 'react';
import ItemIndex from '../items/index';

const API = 'http://localhost:4000/api/collections/';

class CollectionShow extends Component {

  constructor(props){
    super(props) 
    this.state = {
      collection: null
    }
  }

  componentDidMount() {
    const { collectionId } = this.props.match.params
    this.data = fetch(API + collectionId)
      .then(response => response.json())
      .then(data => this.setState( {collection:  data} )  );
  }

  render() {
    if(this.state.collection){
      return (
      <div>
        <p className="h1">Show Collection</p>
        <div className="row">
          <div className="col-4">
            <span className="h3">{this.state.collection.Name}</span>    
          </div>
          <div className="col-4">
            <span className="h3">Collected: {this.state.collection.Collected} / {this.state.collection.Total}</span>
          </div>
          <div className="col-4">
            <a href="/" className="btn btn-primary ml-2" style={{float: 'right', color: 'white'}}> Back</a>
            <a href={`/collections/edit/${this.state.collection.CollectionId}`} className="btn btn-warning" style={{float: 'right'}}> Edit</a>
          </div>
        </div>
        <span className="h3">Items</span>
        <ItemIndex collectionId={this.props.match.params.collectionId}/>
      </div>
      );
    }else{
      return (
      <div>
        <p> Loading </p>
      </div>
      );
    }
  }
}

export default CollectionShow;