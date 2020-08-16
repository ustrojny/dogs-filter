import React from 'react';
import './App.css';
import { northernDogs } from './AllDogs';
import DogsList from './DogsList';

console.log(northernDogs);

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      filteredDogs: northernDogs
    };
  }

  filterDogs(e) {
    const text = e.currentTarget.value;
    const filteredDogs = this.getFilteredDogsForText(text)
    this.setState({
      filteredDogs
    });
  }

  getFilteredDogsForText(text) {
    return northernDogs.filter(dog => dog.toLowerCase().includes(text.toLowerCase()))
  }
  render() {
    return (
          <div>
            <h1>Psy Północy</h1>
            <input type="search" placeholder="Wyszukaj" onInput={this.filterDogs.bind(this)} />
            <DogsList dogs={this.state.filteredDogs}/>
          </div>
    );
  }
}

export default App;
