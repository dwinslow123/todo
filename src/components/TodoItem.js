import React, { Component } from 'react';
import { toggleComplete } from '../actions';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Checkbox, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

class TodoItem extends Component {

  toggleComplete(e) {
    this.props.toggleComplete(this.props.index);
  }

  render() {
    return (
      <div className="container mx-auto">
        <div className="row">
          <div className="col-lg-12">
            <ToggleButtonGroup type="checkbox">
              <ToggleButton value={2}>
                  {this.props.todo.value}
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { toggleComplete })(TodoItem);