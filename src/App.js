import React, {Component} from 'react';
import {HousesList} from './components/HousesList'
import 'bootstrap/dist/css/bootstrap.css';
import {Nav} from './components/Nav'
import {NewHouseForm} from './components/NewHouseForm'

class App extends Component {
  render(){
    return (
      <div>
        <Nav />
        <NewHouseForm /> {/* CRUD Create portion of assignment */}
        <HousesList />
      </div>
    )
  }
}

export default App;
