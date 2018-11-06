import React, { Component } from 'react';


const API = 'http://localhost:4000/api/collections/';

class CollectionEdit extends Component {

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
          <p className="h1">Edit Collection</p>
          <form>
            <div className="row">
              <div className="col-12 form-group">
                <label htmlFor="Name">Name</label>
                <input type="text" id="Name" name="Name" className="form-control" placeholder="Name" defaultValue={this.state.collection.Name} />
              </div>
              <div className="col-12 form-group">
                <button type="Submit" className="btn btn-success">Update</button>
                <span className="btn btn-danger" style={{float: 'right'}}>Delete</span>
              </div>
              
            </div>
          </form>
        </div>
      );
    }else{
      return(
        <p>Loading</p>
      );
    }
  }
}

export default CollectionEdit;