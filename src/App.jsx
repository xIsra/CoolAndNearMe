import React from 'react';
import './app.scss';




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
  spinRandom = () => {
    const { sliceCount, active } = this.state;
    // const randomIndex = parseInt(Math.random() * sliceCount);
    // const classString = this.rouletteRef.current.className;
    this.setState({
      index: parseInt(Math.random() * sliceCount),
      active: active ? false : true,
    })
    // setTimeout(()=>{
    //   this.setState({
    //     // index: null,
    //     active: false,
    //   })
    // },600)
  }

  render() {
    const { index, active } = this.state;
    return (
      <div className="App">
        <div className="main-section">
          <h1>Select your place!</h1>

          <div className="roulette" ref={this.rouletteRef}>
            <p className="love">CLick the SPINNER!</p>
            <div className={"spinner " + (index != null ? " index-" + index : "") + (active?" spin":"")}>
                <img src="https://picsum.photos/650/450" className="triangle "/>
              
                <img src="https://picsum.photos/650/450" className="triangle "/>

                <img src="https://picsum.photos/650/450" className="triangle "/>
                <img src="https://picsum.photos/650/450" className="triangle "/>
                <img src="https://picsum.photos/650/450" className="triangle "/>
                <img src="https://picsum.photos/650/450" className="triangle "/>
                <img src="https://picsum.photos/650/450" className="triangle "/>
                <img src="https://picsum.photos/650/450" className="triangle "/>
                <img src="https://picsum.photos/650/450" className="triangle "/>
                <img src="https://picsum.photos/650/450" className="triangle "/>
                <img src="https://picsum.photos/650/450" className="triangle "/>
                <img src="https://picsum.photos/650/450" className="triangle "/>
            </div>
            <div id="like" className="button button-spin" onClick={this.spinRandom}><span>SPIN</span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
