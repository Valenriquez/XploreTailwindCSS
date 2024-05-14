import React, { Component } from 'react';
import { VictoryChart, VictoryBar } from 'victory';

interface BarDatum {
  age: number;
  score: number;
}

interface AppState {
  barData: BarDatum[];
}

class App extends Component<{}, AppState> {
  private setStateInterval: number = 0;

  constructor(props: {}) {
    super(props);
    this.state = {
      barData: this.getBarData(),
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        barData: this.getBarData(),
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getBarData(): BarDatum[] {
    const { random } = Math;
    const range = (start: number, end: number) => {
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    return range(1, 10).map((age) => {
      return {
        age: age,
        score: random() * 10, // Random score between 0 and 10
      };
    });
  }

  render() {
    return (
      <VictoryChart animate={{ duration: 2000, easing: 'bounce' }}>
        <VictoryBar
          data={this.state.barData}
          x="age"
          y="score"
          style={{
            data: {
              fill: 'tomato',
              width: 12, // Adjust the width of the bars
            },
          }}
          animate={{
            duration: 500, // Remove the 'before' function
          }}
        />
      </VictoryChart>
    );
  }
}

export default App;
