import { useState } from "react";

function ColorChanger() {

  // 기본 상태 변수 초기화값 : white
  const [bgColor, setBgColor] = useState("white");

  // 핑크색으로 변경
  function changePink() {
    setBgColor("#ffe4e6");
  }

  // 파란색으로 변경
  function changeBlue() {
    setBgColor("#dbeafe");
  }

  // 초록색으로 변경
  function changeGreen() {
    setBgColor("#dcfce7");
  }


  return (
    <section
      className="section-box color-box"

      // section 부분 컬러를 bgColor로 지정
      style={{ backgroundColor: bgColor }}
    >
      <h2>3. 색상 변경 버튼</h2>

      <p>아래 버튼을 누르면 배경색이 변경됩니다.</p>

      <button className="pink-btn" onClick={changePink}>분홍색</button>
      <button className="blue-btn" onClick={changeBlue}>파란색</button>
      <button className="green-btn" onClick={changeGreen}>초록색</button>
    </section>
  );
}

export default ColorChanger;