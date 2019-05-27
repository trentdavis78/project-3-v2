import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

export class parallax extends Component {
    componentDidMount() {
        let parallax = document.querySelectorAll(".parallax");
        M.Parallax.init(parallax, {});
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
