import { useContext } from 'react';
import TodosContext from '../context/todos';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  const renderedTodos = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ));

  return <div>{renderedTodos}</div>;
};

export default TodoList;