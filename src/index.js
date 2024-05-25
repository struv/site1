import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import nft from './img/nft.png';
import wik from './img/wik.png';
import pose1 from './img/pose1.png';
import pose2 from './img/pose2.png';
import pose3 from './img/pose3.png';

let i=0;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imgSrc: wik,
      imgSrc2: pose1,
      i:0
    }
    
  }

  changeImage = () => {
    console.log("img Src = " + this.state.imgSrc);
    if(this.state.imgSrc == wik){
      this.setState({
        imgSrc: nft,
      });
    }
    else{
      this.setState({
        imgSrc: wik,
      });
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  // Expected output: 0, 1 or 2
  cyclePose = () => {
    switch(this.state.i) {
      case 0:
        this.setState({
          imgSrc2: pose1,
          i:1
        });
        break;
      case 1:
        this.setState({
          imgSrc2: pose2,
          i:2
        });
        break;
        case 2:
          this.setState({
            imgSrc2: pose3,
            i:0
          });
          
          break;
      default:
        this.setState({
          imgSrc2: nft,
          i:0
        });
    }
    console.log("img Src = " + i);
  }

  render() {
    return (
      <div className="App">
        <article>
        <img src={this.state.imgSrc} id="pic2" alt="retard" height="400"width="400"></img>
        <button onClick={this.changeImage}>CHANGE</button>
        <div>
        <h1>DO u got back pain BLAKE? Anterior Pelvic Tilt PERHAPS? Do this 3 exercise!</h1>
        <button onClick={this.cyclePose}>EEE</button>
        <img src={this.state.imgSrc2} alt="fku" height="400"width="400"></img>
        
        </div>
        </article>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
