import React, { Component } from 'react'
import Media from 'react-media'



export class featureBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {
                backgroundImage: `linear-gradient(${this.props.deg}, rgba(${this.props.bgcolor}, 0.9) 0%, rgba(${this.props.bgcolor}, 0.7) 49.9%, transparent 50%), url('${this.props.image}')`,
                backgroundSize: "cover",
                borderRadius: 3,
                boxShadow: " 0 1.5rem 4rem rgba(0, 0, 0, 0.25)",
                height: "25rem",
                marginBottom: 40,
                color: `${this.props.txtcolor}`,

            },
            mediaStyle: {
                backgroundImage: `linear-gradient(${this.props.deg}, rgba(${this.props.bgcolor}, 0.9) 0%, rgba(${this.props.bgcolor}, 0.7) 49.9%, transparent 50%), 
                url('${this.props.imageSm}')`,
                backgroundSize: "cover",
                borderRadius: 3,
                boxShadow: " 0 1.5rem 4rem rgba(0, 0, 0, 0.25)",
                height: "25rem",
                marginBottom: 40,
                color: `${this.props.txtcolor}`,
            }
        };
    }
    componentDidMount() {

    }
    render() {
        return (
           <>
            <Media query={{ maxWidth: 599 }}>
                {matches =>
                    matches ? (
                        <div className="feature-box" style={this.state.mediaStyle}>
                        <div className={(this.props.align === "right") ? "feature-right" : "feature-left"}>
                            <span className="feature-box-header">{this.props.title}</span>
                            <p>{this.props.children}</p>
                            <a href={`/${this.props.title}`} className={`waves-effect waves-light btn-large ${this.props.btncss}`}>
                                <i className="material-icons right">{this.props.icon}</i>
                                Go to {this.props.title}</a>
                        </div>
                    </div>
                    ) : (
                        <div className="feature-box" style={this.state.style}>
                        <div className={(this.props.align === "right") ? "feature-right" : "feature-left"}>
                            <span className="feature-box-header">{this.props.title}</span>
                            <p>{this.props.children}</p>
                            <a href={`/${this.props.title}`} className={`waves-effect waves-light btn-large ${this.props.btncss}`}>
                                <i className="material-icons right">{this.props.icon}</i>
                                Go to {this.props.title}</a>
                        </div>
                    </div>
                    )
                }
            </Media>
           </>
        )
    }
}

export default featureBox
