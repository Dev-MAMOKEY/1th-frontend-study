import styles from "./TodoListItems.module.css";

const TodoListItems = ({ todos , onToggle, onDelete}) => {
  return (
    <div className={styles.todoListItems}>
      <h3> 할 일 목록</h3>
      
      {/*배열 개수가 0일때 "할일 목록 없습니다." 아니면 목록 뜨기*/}
      {todos.length === 0 ? (               
        <div>할 일 목록이 없습니다</div>
      ) : (
      <ul>                               {/*map은 안에 들어있는 아이템들을 처음부터 끝까지 하나씩 꺼내는거 반복*/}
        {todos.map ((todo) => {return(  
          <li key = {todo.id}>   {/*리스트가 구분할수 있게 */}
            <input 
            type="checkbox" 
            checked = {todo.isCompleted}
            onChange={() => {
              onToggle(todo.id)
            }}/>
            
            <span className={todo.isCompleted ? styles.completed : ""}>   {/*isCompleated일때 completed 클래스명ㅇ 추가 */}  
                {todo.text}
            </span>
            <button
            onClick={() => {
              onDelete(todo.id);
            }}
            > 삭제 </button>
        </li>);
      })}
        
      </ul>
      )}
    </div>
  );
};

export default TodoListItems;
