// imrc
import React, { Component } from "react";
import Counter from "./counter"; // importamos counter

// cc
class Counters extends Component {
  
  render() {

    // Destructuramos estos 4 elementos de this.props
    const {onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button
        // evento que llama a una función del padre a través de props
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id} // identifica cada elemento como único
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
