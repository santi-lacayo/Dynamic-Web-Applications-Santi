import { useState, useContext } from 'react';          
import TodosContext from '../context/todos';    

const TodoEdit = ({ todo, onSubmit }) => {        
  const [title, setTitle] = useState(todo.title);
  const { editTodoById } = useContext(TodosContext);   

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editTodoById(todo.id, title);                     
    onSubmit();                                       
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Update your Todo:</label>
      <input type="text" onChange={handleChange} value={title} />
    </form>
  );
};

export default TodoEdit;