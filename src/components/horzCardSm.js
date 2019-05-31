import React from 'react'
import Modal from '../components/modal'

export default function horzCardSm(props) {
    return (
        <div className="col s12 m12 l6 xl6">
          <div className="card horizontal">
            <div className="card-image hide-on-small-only">
            <img src={props.image} />
            </div>
            <div className="card-stacked">
              <div className="card-content" style={{}}>
                <span style={{fontSize:"1.4rem"}}>
                  {props.title}
                </span>
                <p>{props.children}</p>
              </div>
              <div className="card-action">
              <button data-target={props.modalId} className="btn waves-effect waves-light right indigo darken-4 modal-trigger" type="button">Get a Quote
              <i className="material-icons right">send</i>
            </button>
              </div>
            </div>
          </div>
          <Modal modalId={props.modalId}>
            <h5>I would like a quote for: {props.title}</h5>      
            <form action="/message-sent" method="GET">
              <p>
                <label>What’s your name?<br/><input type="text" name="name" /></label>
              </p>
              <p><button className="modal-close" type="submit">Send</button></p>
            </form>     
          </Modal>
        </div>
    )
}
