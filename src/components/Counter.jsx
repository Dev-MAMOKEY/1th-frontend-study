// 리액트 라이브러리에서 상태 변수 Hook 가져옴
import { useState } from "react";

function Counter() {

    // 상태 변수, set상태값, 초기값
  const [count, setCount] = useState(0);

  // 숫자 추가 함수
  function increaseCount() {
    setCount(count + 1);
  }

  // 숫자 감소 함수
  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <section className="section-box">

      <h2>1. 카운터 컴포넌트</h2>

      <p className="count-text">현재 숫자: {count}</p>

      <button className="minus-btn" onClick={decreaseCount}>-</button>
      <button className="plus-btn" onClick={increaseCount}>+</button>
    </section>
  );


}

// 다른 파일에서 사용할 수 있도록 내보내기
export default Counter;