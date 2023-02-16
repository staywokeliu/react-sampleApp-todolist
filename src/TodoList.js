import React, { Component, Fragment } from "react";

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'input',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <div><input
                    value={this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)}
                />
                    <button> tijiao </button> </div>
                <ul>
                    <li>aaa</li>
                    <li>bbb</li>
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })

    }
}

export default TodoList;