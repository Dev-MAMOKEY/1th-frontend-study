import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import styles from "./App.module.css";

function App() {

    // 객체 배열 상태 변수 선언
    const [todos, setTodos] = useState([]);

    // 화면을 처음 그릴 때 실행(로컬스토리지에 저장된 내용 가져오기)
    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");

        // 기존 로컬스토리지에 저장된 투두가 없을 경우
        if (savedTodos === null || savedTodos === "[]") {
            console.log("저장된 todos가 없습니다.");
            return;
        }

        // 기존 로컬스토리지에 저장된 투두가 있을 경우 -> 상태값 변환 (가져오기)
        setTodos(JSON.parse(savedTodos));

        console.log("화면이 생성됐습니다");
    }, []);



    // 투두 객체 생성
    function addTodo(text) {

        const newTodo = {
            id: Date.now(),
            text: text
        };

        //기존 todos 배열이 바뀌지 않게 복사한 새 배열을 만들고, 그 뒤에 newTodo를 추가 = 상태값 변경
        setTodos([...todos, newTodo]);

    }

    // 설정한 상태값이 바뀔 경우 함수 실행
    useEffect(() => {

        // key값으로 todos, 문자열로 넘김
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log(todos);
    }, [todos])



    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Todo List</h1>

            {/* App에서 사용할 수 있는 함수를 컴포넌트도 다른 이름으로 사용할 수 있도록 넘겨줌(props) */}
            <TodoForm onAddTodo={addTodo} />

        </main>
    );
}

export default App;