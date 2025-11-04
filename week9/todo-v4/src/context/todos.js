import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context object
const TodosContext = createContext();

function Provider({ children }) {
  const [todos, setTodos] = useState([]);

  // Fetch all todos from the server
  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:3001/todos');
    setTodos(response.data);
  };

  // Create a new todo
  const createTodo = async (title) => {
    const response = await axios.post('http://localhost:3001/todos', { title });
    setTodos([...todos, response.data]);
  };

  // Delete a todo by id
  const deleteTodoById = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Edit a todo by id
  const editTodoById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, { title: newTitle });
    setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const valueToShare = {
    todos,
    createTodo,
    deleteTodoById,
    editTodoById,
  };

  return (
    <TodosContext.Provider value={valueToShare}>
      {children}
    </TodosContext.Provider>
  );
}

export { Provider };
export default TodosContext;