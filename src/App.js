import React, { Component } from 'react'; // imrc snippet
import NavBar from './components/navbar'; // Importamos el navbar
import Counters from './components/counters'; // pegamos desde index.js
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = counter => {
    const newCounters = [...this.state.counters]; //clonamos counters
    const index = newCounters.indexOf(counter); // indice de 1 counter
    newCounters[index] = { ...counter }; //clonamos counter y pasamos index
    newCounters[index].value++; // aumentamos 1 counter y pasamos index
    this.setState({ counters: newCounters }); // actualizamos state con counters nuevo
  };

  handleReset = () => {
    const newCounters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: newCounters });
  };

  handleDelete = (counterId) => {
    const newCounters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: newCounters });
  };
  render() {
    return (

      <React.Fragment>{/* Usamos Fragment */}
        {/* Metemos dentro el navbar */}
        <NavBar totalCounters={
          this.state.counters.filter(c => c.value > 0).length
        } />
        {/* Metemos un main con clase container */}
        <main className="container">
          {/* Agregamos Counters que estaba en index.js */}
          <Counters
            // recibimos del hijo
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>// Cerramos Fragment
    );
  }
}

export default App;