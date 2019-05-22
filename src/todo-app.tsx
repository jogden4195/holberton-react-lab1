import React, { Component } from "react";
import Title from "./title";
import AddTodo from "./add-todo";
import TodoList from "./todo-list";

export interface MyList {
 todos: MyObj[];
}

export interface MyObj {
 text: string;
 id: number;
}

class TodoApp extends Component <{}, MyList>{
  constructor(props: {}) {
    super(props);

    //initialize state - `todos` is our initial dummy array of todos
    this.state = {
      todos: [
        { text: " This is a simple todo list app written in React!", id: 1 },
        { text: "Hover over todos and click on the `XX` to delete them!", id: 2 },
        { text: "Add new todos if you like!", id: 3 }
      ]
    };

    // binding methods
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  // Handler to add a todo
  public addTodo(todo:MyObj) {
    this.setState({ todos: [...this.state.todos, todo] });
  }
  // Handler to remove a todo
  public removeTodo(id:number) {
    this.setState({ todos: this.state.todos.filter((todo: MyObj) => todo.id !== id) })
  }

  public render() {
    return (
      <div className="container">
        <Title />
        <AddTodo handleAdd={this.addTodo} />
        <TodoList todos={this.state.todos} handleRemove={this.removeTodo} />
      </div>
    );
  }
}

export default TodoApp;

