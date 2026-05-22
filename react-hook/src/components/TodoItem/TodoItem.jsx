import styles from "./TodoItem.module.css";

function TodoItem({ todo, onDeleteTodo, onToggleTodo }) {
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
        >
          완료
        </button>


        {/* 삭제 버튼 */}
        <button
          className={styles.deleteButton}
        >
          삭제
        </button>

        
      </div>
    </li>
  );
}

export default TodoItem;