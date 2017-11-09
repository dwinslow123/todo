import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { addTodo } from '../actions';
import { FormControl, Checkbox, FormGroup, ControlLabel, HelpBlock, Jumbotron, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import '../App.css';

const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
    }
    this.addTodo = this.addTodo.bind(this);
    this.updateNewTodo = this.updateNewTodo.bind(this);
  }

  addTodo(e) {
    e.preventDefault();
    this.props.addTodo({
      value: this.state.newTodo,
      complete: false
    });
    this.setState({
      newTodo: ''
    });
  }

  updateNewTodo(e) {
    this.setState({
      newTodo: e.target.value
    });
  }

  render() {
    return (
      <div className="container text-center mx-auto main">
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={this.addTodo}>
              <FieldGroup 
                id="formControlsText"
                type="text"
                placeholder="Add a todo"
                onChange={this.updateNewTodo}
                value={this.state.newTodo}
                className="text-center"
              />
            </form>
            <TodoList todos={this.props.todos} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
};

export default connect(mapStateToProps, { addTodo })(TodoForm);