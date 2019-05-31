import React from 'react'


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
              <button className="btn waves-effect waves-light right indigo darken-4" type="button">Get a Quote
              <i className="material-icons right">send</i>
            </button>
              </div>
            </div>
          </div>
        </div>
    )
}
