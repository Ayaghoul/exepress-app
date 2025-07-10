import React, { Component } from "react";

// Définir les types des Props (ici aucune)
interface CounterProps {}

//  Définir les types du State
interface CounterState {
  count: number;
}

// Ajouter les types dans la classe
class Counter extends Component<CounterProps, CounterState> {
  // Initialisation du state
  state: CounterState = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Affichage
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
