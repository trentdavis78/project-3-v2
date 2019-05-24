import React from 'react'

export default function horzCardSm() {
    return (
        <div className="col s12 m6 l6">
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://lorempixel.com/150/150/technics/6" alt="" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
    )
}
