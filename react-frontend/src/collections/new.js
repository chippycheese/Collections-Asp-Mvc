import React, { Component } from 'react';

class CollectionNew extends Component {

  // constructor(props){
  //   super(props)     
  // }

  // componentDidMount() {
    
  // }

  render() {
    return (
      <div>
        <p className="h1">New Collection</p>
        <form>
          <div className="row">
            <div className="col-12 form-group">
              <label htmlFor="Name">Name</label>
              <input type="text" id="Name" name="Name" className="form-control" placeholder="Name" />
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