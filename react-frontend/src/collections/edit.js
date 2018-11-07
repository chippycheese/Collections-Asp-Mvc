import React, { Component } from 'react';


const API = 'http://localhost:4000/api/collections/';

class CollectionEdit extends Component {

  constructor(props){
    super(props) 
    this.state = {
      collection: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { collectionId } = this.props.match.params
    this.data = fetch(API + collectionId)
      .then(response => response.json())
      .then(data => this.setState( {collection:  data} )  );
  }

  handleChange(event){
    this.setState( {collection:{[event.target.name]: event.target.value}});
  }

  handleSubmit(event){
    const { collectionId } = this.props.match.params
    event.preventDefault();
    fetch(API + collectionId, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name: this.state.collection.Name
      }),
    })
    .then((response) => window.location.href = "http://localhost:3000/collections/" + collectionId)
    .catch((error) => {
      console.error(error);
    });
  }

  handleDelete(event){
    const { collectionId } = this.props.match.params
    event.preventDefault();
    fetch(API + collectionId, {
      method: 'Delete',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => window.location.href = "http://localhost:3000/")
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    if(this.state.collection){
      return (
        <div>
          <p className="h1">Edit Collection</p>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-12 form-group">
                <label htmlFor="collection_Name">Name</label>
                <input type="text" id="Name" name="Name" className="form-control" placeholder="Name" defaultValue={this.state.collection.Name} onChange={this.handleChange}/>
              </div>
              <div className="col-12 form-group">
                <button type="Submit" className="btn btn-success">Update</button>
                <span className="btn btn-danger" style={{float: 'right'}} onClick={this.handleDelete}>Delete</span>
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