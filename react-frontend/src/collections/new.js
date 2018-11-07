import React, { Component } from 'react';

const API = 'http://localhost:4000/api/collections/';

class CollectionNew extends Component {

  constructor(props){
    super(props)     
    this.state = {
      Name: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    fetch(API, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name: this.state.Name
      }),
    })
    .then((response) => window.location.href = "http://localhost:3000")
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div>
        <p className="h1">New Collection</p>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-12 form-group">
              <label htmlFor="Name">Name</label>
              <input type="text" id="Name" name="Name" className="form-control" placeholder="Name" value={this.state.Name} onChange={this.handleChange} />
            </div>
            <div className="col-12 form-group">
              <button type="Submit" className="btn btn-success">Create</button>
            </div>

            
          </div>
        </form>
      </div>
    );
  }
}

export default CollectionNew;