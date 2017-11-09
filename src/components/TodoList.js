import React from 'react';
import TodoItem from './TodoItem';

export default (props) => {
  const todos = props.todos.map((todo, i) => <TodoItem todo={todo} key={i} index={i} />);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-2">
          { todos }
        </div>
      </div>
    </div>
  );
};