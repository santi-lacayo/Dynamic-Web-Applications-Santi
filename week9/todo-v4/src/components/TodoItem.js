import { useState, useContext } from 'react';          
import TodosContext from '../context/todos';       
import TodoEdit from './TodoEdit';

const TodoItem = ({ todo }) => {                          
  const [showEdit, setShowEdit] = useState(false);
  const { deleteTodoById, editTodoById } = useContext(TodosContext); 

  const handleDelete = () => {
    deleteTodoById(todo.id);                          
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    editTodoById(todo.id, newTitle);           
    setShowEdit(!showEdit);
  };

  const content = showEdit ? (
    <TodoEdit todo={todo} onSubmit={handleSubmit} />
  ) : (
    <div>
      {todo.title}
      <button onClick={handleDelete}>delete</button>
      <button onClick={handleEdit}>edit</button>
    </div>
  );

  return <div>{content}</div>;
};

export default TodoItem;