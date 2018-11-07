import React, { Component } from 'react';

const API = 'http://localhost:4000/api/collections';

class CollectionIndex extends Component {

 

  constructor(props){
    super(props) 
    this.state = {
      collections: [],
    }
  }

  componentDidMount() {
    this.data = fetch(API)
      .then(response => response.json())
      .then(data => this.setState( {collections:  data} )  );
  }

  render() {
    return (
      <div>
        <p className="h1">My Collections</p>
        <a href="/collections/new" className="btn btn-primary" style={{color: 'white'}}>New</a>
        <table className="table">
          <tbody>
          <tr>
            <th>Name</th>
            <th>Collected</th>
            <th style={{width: 80 + 'px'}}>Actions</th>
          </tr>
          {this.state.collections.map(function(item, key) {
               return (
                  <tr key = {key}>
                      <td>{item.Name}</td>
                      <td>{item.Collected} / {item.Total}</td>
                      <td style={{width: 80 + 'px'}}>
                        <a href={`collections/${item.CollectionId}/items`} className="btn btn-info">Info</a>
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

export default CollectionIndex;