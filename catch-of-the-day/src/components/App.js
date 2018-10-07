import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';


class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const {params} = this.props.match;
    // reinstate localstorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef)});
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  };

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  };

  componentWillUnmount() {
    base.removeBinding(this.ref);
  };


  addFish = fish => {
    // 1 take copy of existing state
    const fishes = {...this.state.fishes};
    // 2 add new fish to fishes
    fishes[`fish${Date.now()}`] = fish;
    // 3 set new fishes object to state
    this.setState({ fishes }); // updating using es6 prop and value same name
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    //1 take copy of state
    const order = {...this.state.order };
    //2 either add to order or update number in order
    order[key] = order[key] + 1 || 1;
    //3 call setState to update our state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"></Header>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
              key={key}
              index={key}
              details={this.state.fishes[key]}
              addToOrder={this.addToOrder}
              ></Fish>
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          ></Order>
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}></Inventory>
      </div>
    )
  };
}

export default App;