import React, { Component } from 'react';

export class parallax extends Component {
 
  componentDidMount() {
    this.M = window.M; 
    var elems1 = document.querySelectorAll(".parallax");
    var instances1 = this.M.Parallax.init(elems1);
  }
  render() {
    return (
        <div className="parallax-container">
        <div className="valign-wrapper" style={{height: "100%"}}>
          {this.props.children}
          <div className="parallax lighten-1">
            <img src={this.props.imgPath} alt={this.props.altTag} />
          </div>
        </div>
      </div>
    )
  }
}

export default parallax
