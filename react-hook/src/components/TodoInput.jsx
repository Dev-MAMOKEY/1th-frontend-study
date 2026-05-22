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
            if (value.length === 0) {
                alert("할 일을 입력해주세요");     // 아무것도 안 적히고 클릭할때 위에 알림 뜨기
               
                return
            }

            onCreate(value);
            setValue("");
            }}> 추가 </button>
        </div>
    );
};

export default TodoInput;