import React, { Component } from 'react';
import YesNoFromBoolean from '../components/YesNoFromBoolean';

const API = 'http://localhost:4000/api/items/collection/';

class ItemIndex extends Component {  

  constructor(props){
    super(props) 
    this.state = {
      items: [],
    }
  }
  
  componentDidMount() {

    this.data = fetch(API + this.props.collectionId)
      .then(response => response.json())
      .then(data => this.setState( {items:  data} )  );
      // .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <a href={`/collections/${this.props.collectionId}/items/new`} className="btn btn-primary mt-2 mb-2" style={{color: 'white'}}>New</a>
        <table className="table">
          <tbody>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Collected</th>
            <th style={{width: 80 + 'px'}}>Actions</th>
          </tr>

          {this.state.items.map(function(item, key) {
               return (
                  <tr key = {key}>
                      <td>{item.Name}</td>
                      <td>${item.Price.toFixed(2)}</td>
                      <td>
                      <YesNoFromBoolean active={item.Collected} />
                      </td>
                      <td style={{width: 80 + 'px'}}>
                        <a href={`/collections/${item.CollectionId}/items/edit/${item.ItemId}`} className="btn btn-info">Info</a>
                      </td>
                  </tr>
                )
          })}
          </tbody>
        </table>
      </div>
    );
  }


}

export default ItemIndex;