import React from 'react';
import './app.scss';
import { getPlaces } from './lib/api';




class App extends React.Component {
  state = {
    index: null,
    active: false,
    sliceCount: 10,

  }
  constructor(props) {
    super(props);
    this.rouletteRef = React.createRef();
  }
  componentDidMount() {
    getPlaces().then((list) => {

    }).catch((err) => {

    });
  }
  spinRandom = () => {
    const { sliceCount, active } = this.state;
    this.setState({
      index: parseInt(Math.random() * sliceCount),
      active: active ? false : true,
    })
  }

  render() {
    const { index, active } = this.state;
    return (
      <div className="App">
        <div className="main-section">
          <h1>Select your place!</h1>

          <div className="roulette" ref={this.rouletteRef}>
            <p className="love">CLick the SPINNER!</p>
            <div className={"spinner " + (index != null ? " index-" + index : "") + (active ? " spin" : "")}>
              <div className="triangle ">
                <img src="https://picsum.photos/650/450" />
              </div>
              <div className="triangle ">
                <img src="https://picsum.photos/650/450" />
              </div>
              <div className="triangle ">
                <img src="https://picsum.photos/650/450" />
              </div>
              <div className="triangle ">
                <img src="https://picsum.photos/650/450" />
              </div>
              <div className="triangle ">
                <img src="https://picsum.photos/650/450" />
              </div>
              <div className="triangle ">
                <img src="https://picsum.photos/650/450" />
              </div>
              <div className="triangle ">
                <img src="https://picsum.photos/650/450" />
              </div>
              <div className="triangle ">
                <img src="https://picsum.photos/650/450" />
              </div>
              <div className="triangle ">
                <img src="https://picsum.photos/650/450" />
              </div>
              <div className="triangle ">
                <img src="https://picsum.photos/650/450" />
              </div>
              <div className="triangle ">
                <img src="https://picsum.photos/650/450" />
              </div>
              <div className="triangle ">
                <img src="https://picsum.photos/650/450" />
              </div>
            </div>
            <div id="like" className="button button-spin" onClick={this.spinRandom}><span>SPIN</span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
