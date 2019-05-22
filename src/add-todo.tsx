import React, { Component } from "react";

export interface TextValue {
    todoText: string;
}

export interface MyObj {
    handleAdd(todo: { text: string; id: number }): void;
}

class AddTodo extends Component<MyObj, TextValue> {
    constructor(props: MyObj) {
        super(props);
        this.state = {
            todoText: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleChange(event: any) {
        this.setState({ todoText: event.target.value });
    }

    public handleSubmit() {
        this.props.handleAdd({
            text: this.state.todoText,
            id: Math.random()
        });
        this.setState({ todoText: "" });
    }

    public render() {
        return (
            <div className="row">
                <input
                    type="text"
                    value={this.state.todoText}
                    placeholder="Add todos here..."
                    autoComplete="off"
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}> + </button>
            </div>
        );
    }
}

export default AddTodo;
