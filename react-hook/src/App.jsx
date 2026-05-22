import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoItem from "./components/TodoItem/TodoItem";
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
            text: text,
            completed: false
        };

        //기존 todos 배열이 바뀌지 않게 복사한 새 배열을 만들고, 그 뒤에 newTodo를 추가 = 상태값 변경
        setTodos([...todos, newTodo]);

    }

    // 설정한 상태값이 바뀔 경우 함수 실행
    useEffect(() => {

        // key값으로 todos, 문자열로 넘김
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])


    // 완료 상태 변경
    function toggleTodo(id) {

        // todos 목록을 펼치고, 
        const updatedTodos = todos.map((todo) => {

            // todo.id와 현재 클릭한 id가 같으면
            if (todo.id === id) {

                // 기존 todo 객체 복사 후, completed 값만 바꾼 새 객체를 반환
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }

            // updatedTodos = todos
            return todo;
        });

        // 새로운 todo값으로 상태 변환
        setTodos(updatedTodos);
    }


    // 투두 삭제
    function deleteTodo(id) {

        const filteredTodos = todos.filter((todo) => {

            // 현재 id와 다른 todo.id만 살린다
            return todo.id !== id;
        });

        // filter된 객체 배열 로컬스토리지에 저장(상태 변환)
        setTodos(filteredTodos);
    }



    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Todo List</h1>

            {/* App에서 사용할 수 있는 함수를 컴포넌트도 다른 이름으로 사용할 수 있도록 넘겨줌(props) */}
            <TodoForm onAddTodo={addTodo} />

            {/* 화면에 리스트 추가 */}
            <ul className={styles.todoList}>
                {/* map으로 리스트 개별요소 확인 */}
                {todos.map((todo) => {
                    // 컴포넌트를 화면에 그려야하므로 리턴
                    return (
                        <TodoItem
                            key={todo.id} // 반복되는 컴포넌트에는 key 값으로 구분할 수 있도록
                            todo={todo} // 현재 todo를 props로 사용
                            onToggleTodo={toggleTodo}
                            onDeleteTodo={deleteTodo}
                        />
                    );
                })}
            </ul>

        </main>
    );
}

export default App;