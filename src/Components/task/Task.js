import React from "react";
import "./Task.css";

class Task extends React.Component {
  doneTask = (e) => {
    if (e.target.parentElement.firstChild.classList.contains("done")) {
      e.target.parentElement.firstChild.classList.remove("done");
    } else {
      e.target.parentElement.firstChild.classList.add("done");
    }
  };

  render() {
    return (
      <div className="taskContainer">
        <p>
          {this.props.number}. {this.props.description}
        </p>
        <button onClick={this.doneTask}>Done</button>
        <button onClick={() => this.props.onDeleteTask(this.props.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Task;
