import { useContext } from 'react';
import { TodoContext } from '../hooks/TodoContext';
import './../styles/TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} tareas</h2>
  );
}

export { TodoCounter };