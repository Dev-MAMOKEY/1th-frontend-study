import styles from "./TodoItem.module.css";

function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
  return (
    <li className={styles.todoItem}>

        {/* 텍스트 */}
      <span
        className={todo.completed ? styles.completedText : styles.todoText}
      >
        {todo.text}
      </span>


{/* 버튼 영역 */}
      <div className={styles.buttonBox}>

        {/* 완료 버튼 */}
        <button
          className={styles.completeButton}

        //  App props로 해당 id로 함수 실행
          onClick={() => {
            onToggleTodo(todo.id);
          }}
        >
           완료
        </button>


        {/* 삭제 버튼 */}
        <button
          className={styles.deleteButton}

          //  App props로 해당 id로 함수 실행
          onClick={() => {
            onDeleteTodo(todo.id);
          }}
        >
          삭제
        </button>


      </div>
    </li>
  );
}

export default TodoItem;