import { Provider } from './context/todos';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';

function App() {
  return (
    <Provider>
      <div>
        <TodoCreate />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;