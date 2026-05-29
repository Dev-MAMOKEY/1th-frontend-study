import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ onAddTodo }) {

    // 입력 상태 변수
  const [inputText, setInputText] = useState("");

  // 입력 폼에 상태가 변할 때마다 입력 상태 함수에 데이터 삽입
  function changeInput(event) {
    setInputText(event.target.value);
  }


  // 입력 값을 폼으로 제출(event는 제출 현황)
  function submitTodo(event) {

    //form은 모든 동작 후 새로고침을 하는데 그걸 방지
    event.preventDefault();

    // 입력하지 않았을 경우 알림
    if (inputText.trim() === "") {
      alert("할 일을 입력해주세요.");
      return;
    }

    onAddTodo(inputText);

    // 입력 값 초기화
    setInputText("");

  }

  return (
    <form className={styles.form} onSubmit={submitTodo}>
      <input
        className={styles.input}
        type="text"
        value={inputText}
        onChange={changeInput}
        placeholder="할 일을 입력하세요"
      />

      <button className={styles.addButton} type="submit">
        추가
      </button>
    </form>
  );
}

export default TodoForm;