import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sampleFishes';

class App extends React.Component {
  constructor() {
    super(); //once we write 'super()' then we can use the 'this' below
    this.addFish = this.addFish.bind(this); //this basically makes addFish method available for App component
    this.loadSamples = this.loadSamples.bind(this); //again, we do this so that we can use 'this' in the methods below. for example, on the loadSamples method below
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish) {
    // update our state
    //1. first get the current State
    const fishes = {...this.state.fishes};
    //2. add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({ fishes }); //Long version is: this.setState({ fishes: fishes });
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            <Fish />
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App;
