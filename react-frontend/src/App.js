import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './navbar/navbar'; 

import CollectionIndex from './collections/index';
import CollectionNew from './collections/new';
import CollectionShow from './collections/show';
import CollectionEdit from './collections/edit';

import ItemNew from './items/new';
import ItemEdit from './items/edit';




const App = () => (
  <Router>

    <div style={{backgroundColor: 'lightgrey', height: 100 + 'vh', overflow: 'scroll'}}>
      <NavBar />
      <div style={{margin: 20 + 'px'}} >
        <Route path="/" exact component={CollectionIndex} />

        <Route path="/collections/" exact component={CollectionIndex} />
        <Route path="/collections/new" exact component={CollectionNew} />
        <Route path="/collections/edit/:collectionId(\d+)" exact component={CollectionEdit} />
        <Route path="/collections/:collectionId(\d+)" exact component={CollectionShow} />
        <Route path="/collections/:collectionId(\d+)/items" exact component={CollectionShow} />
        
        <Route path="/collections/:collectionId(\d+)/items/new" exact component={ItemNew} />
        <Route path="/collections/:collectionId(\d+)/items/:edit/:itemId(\d+)" exact component={ItemEdit} />

      </div>
    </div>
  </Router>
);

export default App;