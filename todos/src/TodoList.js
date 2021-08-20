import React from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { useSelector, useDispatch } from "react-redux";

function TodoList() {
  const todos = useSelector(st => st.todos);
  const dispatch = useDispatch();
  // add a new todo
  const create = newTodo => {
    dispatch({type: "INSERT", todo:newTodo})
  };

  // update a todo with updatedTask
  const update = (id, updatedTask) => {
    dispatch({type: "UPDATE", todo:{task:updatedTask, id:id}})
  };

  // delete a todo by id
  const remove = id => {
    dispatch({type: "DELETE", todo:{id:id}})
  };
  // const todos = dispatch({type: ""})
  // console.log(todos)
  const todoComponents = todos.map(todo => (
    <Todo
      remove={remove}
      key={todo.id}
      id={todo.id}
      task={todo.task}
      update={update}
    />
  ));

  return (
    <div>
      <NewTodoForm createTodo={create} />
      <ul>{todoComponents}</ul>
    </div>
  );
}

export default TodoList;
