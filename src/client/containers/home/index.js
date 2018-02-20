import React, { Component } from 'react'

export default class Home extends Component {
    componentDidMount(){
        document.title = this.props.route.title
    }
    render() {
        return (
            <div>
                <p> home </p>
            </div>
        )
    }
}