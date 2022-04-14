import './../styles/CreateTodoButton.css';
import { TodoContext } from '../hooks/TodoContext';
import { useContext } from 'react';

function CreateTodoButton() {
  const {
      openModal,
      setOpenModal,
  } = useContext(TodoContext);
  const onClickButton = () => {
      (!openModal)
          ? setOpenModal(true)
          : setOpenModal(false)
  }
  return (
      <button
          className={ "CreateTodoButton "+ (openModal ? 'active' : '' )}
          onClick={onClickButton}
      >+</button>
  )
}

export {CreateTodoButton};