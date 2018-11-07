import React, { Component } from 'react';


const API = 'http://localhost:4000/api/items/';

class ItemEdit extends Component {

  constructor(props){
    super(props) 
    this.state = {
      item: null
    }
    
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleCollectedChange = this.handleCollectedChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { itemId } = this.props.match.params
    this.data = fetch(API + itemId)
      .then(response => response.json())
      .then(data => this.setState( {item:  data} )  );
  }

  handleNameChange(event){
    var edittedItem = Object.assign({}, this.state.item);
    edittedItem.Name = event.target.value; 
    this.setState({item: edittedItem});
  }
  handlePriceChange(event){
    var edittedItem = Object.assign({}, this.state.item);
    edittedItem.Price = event.target.value; 
    this.setState({item: edittedItem});
  }
  handleCollectedChange(event){
    var edittedItem = Object.assign({}, this.state.item);
    edittedItem.Collected = event.target.value; 
    this.setState({item: edittedItem});
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state)
    fetch(API + this.state.item.ItemId, {
      method: 'Put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name: this.state.item.Name,
        Price: this.state.item.Price,
        Collected: this.state.item.Collected
      }),
    })
    .then((response) => window.location.href = "http://localhost:3000/collections/" + this.state.item.CollectionId )
    .catch((error) => {
      console.error(error);
    });
  }

  handleDelete(event){
    const { itemId } = this.props.match.params
    event.preventDefault();
    fetch(API + itemId, {
      method: 'Delete',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => window.location.href = "http://localhost:3000/collections/" + this.state.item.CollectionId )
    .catch((error) => {
      console.error(error);
    });
  }


  render() {
    if(this.state.item){

    return (
      <div>
        <p className="h1">New Item</p>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            
            <div className="col-6 form-group">
              <label htmlFor="Name">Name</label>
              <input type="text" id="Name" name="Name" className="form-control" placeholder="Name" defaultValue={this.state.item.Name} onChange={this.handleNameChange} />
            </div>
            
            <div className="col-4 form-group">
              <label htmlFor="Price">Value</label>
              <input type="number" step="0.01" id="Price" name="Price" className="form-control" placeholder="Value" defaultValue={this.state.item.Price} onChange={this.handlePriceChange} />
            </div>

            <div className="col-2 form-group">
              <label htmlFor="Collected" >Collected</label>
              <select id="Collected" name="Collected" className="form-control" defaultValue={this.state.item.Collected} onChange={this.handleCollectedChange}>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>

          </div>
          <div className="row">
            <div className="col-12 form-group">
              <button className="btn btn-success" type="submit">Update</button>
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

export default ItemEdit;