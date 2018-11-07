import React, { Component } from 'react';

const API = 'http://localhost:4000/api/items/';

class ItemNew extends Component {

  constructor(props){
    super(props)     
    this.state = {
      CollectionId: this.props.match.params.collectionId,
      Name: '',
      Price: '',
      Collected: '0'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
    // console.log(this.state);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state)
    fetch(API, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        CollectionId: this.state.CollectionId,
        Name: this.state.Name,
        Price: this.state.Price,
        Collected: this.state.Collected
      }),
    })
    .then((response) => window.location.href = "http://localhost:3000/collections/" + this.state.CollectionId )
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div>
        <p className="h1">New Item</p>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            
            <div className="col-6 form-group">
              <label htmlFor="Name">Name</label>
              <input type="text" id="Name" name="Name" className="form-control" placeholder="Name" onChange={this.handleChange} />
            </div>
            
            <div className="col-4 form-group">
              <label htmlFor="Price">Value</label>
              <input type="number" step="0.01" id="Price" name="Price" className="form-control" placeholder="Value" onChange={this.handleChange}/>
            </div>

            <div className="col-2 form-group">
              <label htmlFor="Collected" >Collected</label>
              <select id="Collected" name="Collected" className="form-control" defaultValue="0" onChange={this.handleChange}>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>

          </div>
          <div className="row">
            <div className="col-12 form-group">
              <button className="btn btn-success" type="submit">Create</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ItemNew;