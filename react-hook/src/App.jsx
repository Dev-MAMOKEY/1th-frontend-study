import { useState } from 'react'

import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoListItems from './components/TodoListItems'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const handleCreate = (value) => {
    setTodos([...todos ,{
      id: Math.random(),     //식별할수 있게 id 랜덤으로 돌리기
      text: value, 
      isCompleted: false, 
    }]);
  };

  const handleToggle = (id) => {
    const nextTodos = todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }
      
      return {
        ...todo,
        isCompleted: !todo.isCompleted,
      }});

    setTodos (nextTodos);
  };


  const handleDelete = (id) => {
    const nextTodos = todos.filter ((todo) => {        {/*flilter 메소드는 true인 값만 반환 */}
    if (todo.id !== id) {
      return true;
    }

    return false;
    })

    setTodos(nextTodos);
  };



  return (
    <div className='todoListContainer'>
      <Header />
      <TodoInput onCreate = {handleCreate} />          {/*입력창*/}
      <TodoListItems todos = {todos} onToggle={handleToggle} onDelete={handleDelete}/>      {/*할 일 목록*/}
    </div>  
  )
}

export default App
