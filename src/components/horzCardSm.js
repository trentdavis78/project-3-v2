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
          <div className="row">
            <div className="col s12 indigo darken-2 white-text" style={{margin:"-10px 0 10px 0"}}>
              <h5>I would like a quote for: {props.title}</h5>    
            </div>            
            <form action="/message-sent" method="GET" className="col s12">
              <div className="row">
                <div className="input-field col s12 m6">
                  <i className="material-icons prefix">account_circle</i>
                  <input id="icon_prefix" type="text" name="name" className="validate" />
                  <label for="icon_prefix">First Name</label>
                </div>
                <div className="input-field col s12 m6">
                  <i className="material-icons prefix">phone</i>
                  <input id="icon_telephone" type="tel" name="phone" className="validate" />
                  <label for="icon_telephone">Telephone</label>
                </div>               
              </div>
              <div className="row">
                <div className="input-field col s12">
                <i className="material-icons prefix">mail</i>
                  <input id="email" type="email" name="email" className="validate" />
                  <label for="email">Email</label>
                  <span className="helper-text" data-error="Wrong Email Format" data-success="Valid Email">yourname@email.com</span>
                </div>
              </div>
              <div className="row">
              <div className="input-field col s12">
                  <i className="material-icons prefix">mode_edit</i>
                  <textarea maxLength="500" id="icon_prefix2" className="materialize-textarea" name="message" style={{height:"46px"}}></textarea>
                  <label for="icon_prefix2">Description of Issue <span style={{fontSize:12, marginLeft:10}}>(max 500 characters)</span></label>
                </div>
              </div>
              <button className="btn waves-effect waves-light red modal-close right" type="button">Cancel
                <i className="material-icons right">close</i>
              </button>
              <button style={{marginRight:20}} className="btn waves-effect waves-light modal-close right" type="submit">Submit
                <i className="material-icons right">send</i>
              </button>
            </form>
          </div>
         </Modal>
        </div>
    )
}
