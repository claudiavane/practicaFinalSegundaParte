import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import Header from '../shared/components/layout/Header';
import Footer from '../shared/components/layout/Footer';
import Content from '../shared/components/layout/Content';
// import Chart from '../Chart/Chart';
// import Timer from './Pomodoro/Timer';
// import Xss from './Xss/Xss';
// import Person from './Person/Person';
// import Home from './Home/Home';
// import User from '../User';
// import Numbers from './Numbers/Numbers';
// import Calculator from './Calculator/Calculator';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // eslint-disable-next-line
      chartType: 'area',
    };

    // this.columns = [
    //   ['BTC', 3000, 6000, 10000, 15000, 13000, 11000],
    //   ['ETH', 2000, 3000, 5000, 4000, 3000, 940],
    //   ['XRP', 100, 200, 300, 500, 400, 300],
    // ];
  }

  // setBarChart = () => {
  //   this.setState({
  //     chartType: 'bar',
  //   });
  // };

  // setLineChart = () => {
  //   this.setState({
  //     chartType: 'area',
  //   });
  // };

  render() {
    return (
      <div className="App">
        <Header title="My Blog" />
        <Content>
          {this.props.children}
          {/* <Numbers /> */}
          {/* <Home /> */}
          {/* <User username="Christian" lastname="Tola" age={29} /> */}
          {/* <Calculator /> */}
          {/* <Person /> */}
          {/* <Xss /> */}
          {/* <Chart columns={this.columns} chartType={this.state.chartType} /> */}
          {/* <p>
            Chart type
            <button type="button" onClick={this.setBarChart}>Bar</button>
            <button type="button" onClick={this.setLineChart}>Area</button>
          </p> */}
          {/* <Timer /> */}
        </Content>

        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};
export default App;
