import React from "react";
import "./List.css";
import Task from "../task/Task";

class List extends React.Component {
  state = {
    tasks: [],
    newTask: "",
  };

  handleTaskInput = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  addNewTask = (e) => {
    if (this.state.newTask) {
      //вкарай нов таск, само ако има нещо написано
      this.setState({
        tasks: [...this.state.tasks, this.state.newTask],
        newTask: "",
      });
    }
  };

  handleDeleteTask = (id) => {
    console.log("handle delete");
    this.setState({
      tasks: this.state.tasks.filter((t) => t !== id),
    });
  };

  render() {
    return (
      <div id="listContainer">
        <div id="inputContainer">
          <label className="inputChild" htmlFor="inputEl">
            Add task:
          </label>
          <input
            className="inputChild"
            id="inputEl"
            type="text"
            placeholder="Write new task here"
            value={this.state.newTask}
            onInput={this.handleTaskInput}
          ></input>
          <button onClick={this.addNewTask}>Add task</button>
        </div>

        <div id="tasksList">
          {this.state.tasks.length > 0 ? (
            this.state.tasks.map((task, i) => (
              <Task
                number={i + 1}
                description={task}
                key={i}
                id={task}
                onDeleteTask={this.handleDeleteTask}
              />
            ))
          ) : (
            <div>No tasks</div>
          )}
        </div>
      </div>
    );
  }
}

export default List;
