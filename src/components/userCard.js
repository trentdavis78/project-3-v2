import React from 'react'

export default function userCard(props) {
    return (
        <div className="col s12 m4 l4 xl4">
              <div className="card medium">
              <div className="card-image" style={{margin:"auto",paddingTop:"2rem"}}>
                <img style={{borderRadius:"50%"}} src={props.userImg} alt=""/>               
              </div>
              <div className="card-content">
                <h5 className="text-center" style={{fontSize:"1.75rem", color: "#003594", fontWeight:900}}>{props.userName}</h5>
                <h6 className="text-center">{props.userTitle}</h6>
                <h6 className="text-center" style={{fontSize:".75rem"}}>{props.userTagline}</h6>
              </div>
              <div className="card-action text-center">
              <a href={`/authors/${props.user}`} className="waves-effect waves-light btn indigo darken-4">see full profile</a>
              </div>
            </div>
        </div>
    )
}
