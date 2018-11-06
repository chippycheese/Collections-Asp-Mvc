import React, { Component } from 'react';

// const API = 'http://localhost:4000/api/items/';

class ItemNew extends Component {

  // constructor(props){
  //   // const { itemId } = this.props.match.params
  //   super(props) 
  //   this.state = {
  //     collections: [],
  //   }
  // }

  componentDidMount() {
    // this.data = fetch(API + this.props.itemId)
      // .then(response => response.json())
      // .then(data => console.log(data));
      // .then(data => this.setState( {collections:  data} )  );
  }

  render() {
    return (
      <div>
        <p className="h1">New Item</p>
        <form>
          <div className="row">
            
            <div className="col-6 form-group">
              <label htmlFor="Name">Name</label>
              <input type="text" id="Name" name="Name" className="form-control" placeholder="Name" />
            </div>
            
            <div className="col-4 form-group">
              <label htmlFor="Price">Value</label>
              <input type="number" step="0.01" id="Price" name="Price" className="form-control" placeholder="Value"/>
            </div>

            <div className="col-2 form-group">
              <label htmlFor="Collected" >Collected</label>
              <select id="Collected" name="Collected" className="form-control" defaultValue="0">
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