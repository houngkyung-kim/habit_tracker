import React, { Component } from "react";

class HabitAddForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.inputRef.current.value);
    this.formRef.current.reset();
  };
  formRef = React.createRef();
  inputRef = React.createRef();
  render() {
    return (
      <form
        ref={this.formRef}
        className="add-form"
        onSubmit={this.handleSubmit}
      >
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        ></input>
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
