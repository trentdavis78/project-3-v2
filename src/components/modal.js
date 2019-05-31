import React, { Component } from 'react'

export class Modal extends Component {
     
  componentDidMount() {
    this.M = window.M; 
    var modal = document.querySelectorAll(".modal");
    var modalInstance = this.M.Modal.init(modal);
  }
    render() {
        return (
            <>
            <div id={this.props.modalId} className="modal">
                <div className="modal-content">
                {this.props.children}
                </div>
                <div className="modal-footer">
                <button className="modal-close waves-effect btn-flat">Agree</button>
                </div>
            </div>
            </>
        )
    }
}

export default Modal

