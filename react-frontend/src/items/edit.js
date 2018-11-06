import React, { Component } from 'react';


const API = 'http://localhost:4000/api/items/';

class ItemEdit extends Component {

  constructor(props){
    super(props) 
    this.state = {
      item: null
    }
  }

  componentDidMount() {
    const { itemId } = this.props.match.params
    this.data = fetch(API + itemId)
      .then(response => response.json())
      // .then(data => console.log(data));
      .then(data => this.setState( {item:  data} )  );
  }

  render() {
    if(this.state.item){

    return (
      <div>
        <p className="h1">New Item</p>
        <form>
          <div className="row">
            
            <div className="col-6 form-group">
              <label htmlFor="Name">Name</label>
              <input type="text" id="Name" name="Name" className="form-control" placeholder="Name" defaultValue={this.state.item.Name} />
            </div>
            
            <div className="col-4 form-group">
              <label htmlFor="Price">Value</label>
              <input type="number" step="0.01" id="Price" name="Price" className="form-control" placeholder="Value" defaultValue={this.state.item.Price} />
            </div>

            <div className="col-2 form-group">
              <label htmlFor="Collected" >Collected</label>
              <select id="Collected" name="Collected" className="form-control" defaultValue={this.state.item.Collected}>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>

          </div>
          <div className="row">
            <div className="col-12 form-group">
              <button className="btn btn-success" type="submit">Update</button>
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

export default ItemEdit;