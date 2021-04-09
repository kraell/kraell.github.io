import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// function App() {
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      data: {}
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            <code>Hi, I'm Keegan Elliott. Welcome to my website.</code>
            <br />
            <br />
            <code>Things are a bit messy at the moment, but the site should be back up and running in no time. Thanks for bearing with me!</code>
          </p>
        </header>
      </div>
    );
  }
}

// }

export default App;
