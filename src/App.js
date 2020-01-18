import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{
  check = false;
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/users").then(response => {
      return response.json();
    }).then(users => {
      this.setState({monsters: users});
    })
  }

  changeHandler = (e) => {
    this.setState({searchField: e.target.value});
  }

  render(){
    const filteredMonsters = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox changeHandler={this.changeHandler} />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
