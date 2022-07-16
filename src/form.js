import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";

class Certificate extends Component {
  certificateWrapper = React.createRef();
  state = {
    Name: ""
  };
  render() {
    return (

        
      <div className="Certificate">
        <div class="open">
          <div class="layer"></div>
          <div class="layer"></div>
    
      </div>
        <div className="Meta">
            <div class="element1"></div>
          <div class="element2"></div>
          <h1>Vitara Learn</h1>
          <br/><br/><br/>   <br/>
          <h2>Congratulations, You have successfully completed the course !!</h2>
          <h3>Please enter your name to get your Certificate.</h3>
          <input
            type="text"
            placeholder="enter your name"
            value={this.state.Name}

            onChange={(e) => {
              this.setState({ Name: e.target.value });
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              exportComponentAsPNG(this.certificateWrapper, {
                html2CanvasOptions: { backgroundColor: null }
              });
            }}
            
          >
        Download
          </button>
        </div>

        <div id="downloadWrapper" ref={this.certificateWrapper}>
          <div id="certificateWrapper">
            {/* <p>Congratulations, You have completed the course !!</p> */}
            <p>{this.state.Name}</p>
            <img src="https://i.imgur.com/g53KBAc.jpg" alt="Certificate" />
            
          </div>
        </div>
      </div>
    );
  }
}

export default Certificate;