import React from 'react';
import './app.scss';




function App() {
  return (
    <div className="App">
      <div className="main-section">
        <h1>Select your place!</h1>

        <div class="roulette">
          <p class="love">Clic en Spin para iniciar!</p>
          <div class="spinner">
            <div class="triangle">
              <span class="text">1</span>
            </div>
            <div class="triangle">
              <span class="text">2</span>
            </div>
            <div class="triangle">
              <span class="text">3</span>
            </div>
            <div class="triangle">
              <span class="text">4</span>
            </div>
            <div class="triangle">
              <span class="text">5</span>
            </div>
            <div class="triangle">
              <span class="text">6</span>
            </div>
            <div class="triangle">
              <span class="text">7</span>
            </div>
            <div class="triangle">
              <span class="text">8</span>
            </div>
            <div class="triangle">
              <span class="text">9</span>
            </div>
            <div class="triangle">
              <span class="text">10</span>
            </div>
            <div class="triangle">
              <span class="text">11</span>
            </div>
            <div class="triangle">
              <span class="text">12</span>
            </div>
          </div>
          <div id="like" class="button button-spin" onclick="spin()"><span>SPIN</span></div>
        </div>
      </div>
    </div>
  );
}

export default App;
