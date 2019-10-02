import React, { Component } from 'react'

export default class Todo extends Component {
    render(props) {
        return (
            <div 
            onClick={this.props.onClick}
            className={`item${this.props.item.completed ? " purchased" : ""}`}>
                {this.props.item.task}
            </div>
        )
    }
}
