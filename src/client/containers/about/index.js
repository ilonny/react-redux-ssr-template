import React, { Component } from 'react'

export default class About extends Component {
    componentDidMount() {
        document.title = document.title = this.props.route.title
    }
    render() {
        return (
            <div>
                <p> about page </p>
            </div>
        )
    }
}