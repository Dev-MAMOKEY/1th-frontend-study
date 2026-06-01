import { useState } from "react";

import styles from "./TodoInput.module.css"
const TodoInput = ({onCreate}) => {
    const [value, setValue] = useState("");


    return (
        <div className={styles.todoInput}>
        <input
        placeholder="할 일을 입력해주세요"  
        value={value}
        onChange={(e) => {
            setValue(e.target.value)
        }}/>
        <button onClick={() => {
            if (value.trim().length === 0) {
                alert("할 일을 입력해주세요");     // 공백만 있거나 아무것도 안 적혔을 때 알림
                return;
            }

            onCreate(value.trim()); // 양쪽 공백을 제거한 값으로 생성
            setValue("");
            }}> 추가 </button>
        </div>
    );
};

export default TodoInput;