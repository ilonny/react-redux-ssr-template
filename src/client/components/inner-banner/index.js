import React, { PureComponent } from 'react'
import './inner-banner.scss'

export default class InnerBanner extends PureComponent{
    render(){
        return (
            <div className={this.props.type == "small" ? "inner-banner inner-banner--small" : "inner-banner"} >
                <div className="content">
                    <h1 dangerouslySetInnerHTML={{__html: this.props.title}}></h1>
                    <h2 dangerouslySetInnerHTML={{__html: this.props.text}}></h2>
                </div>
            </div>
        )
    }
}