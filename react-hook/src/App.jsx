import { useState, useEffect } from 'react' // useEffect 추가

import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoListItems from './components/TodoListItems'
import './App.css'

function App() {
  // 초기 상태를 설정할 때 localStorage에서 데이터를 가져오기.
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos'); 
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });

  // todos 배열이 변경될 때마다 실행됩니다.
  useEffect(() => {
    // localStorage는 문자열만 저장할 수 있어서 JSON.stringify로 변환해서 저장.
    localStorage.setItem('todos', JSON.stringify(todos));  //JSON.stringify는 자바스크립트를 문자열로 만들기
  }, [todos]); //[todos]가 바뀔 때마다 코드를 실행하라는 의미

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
    const nextTodos = todos.filter((todo) => todo.id !== id);
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
