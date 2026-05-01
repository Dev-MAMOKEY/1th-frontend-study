// 계산 기록 저장 배열
const historyList = [];

// 계산 실행 함수
function calculate() {

    // 입력값 및 DOM 요소 가져오기
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operator = document.getElementById("operator");
    const resultBox = document.getElementById("result");


    // 숫자가 아닌 값 입력 방지
    if (isNaN(num1Input.value) || isNaN(num2Input.value)) {

        alert("올바른 숫자를 입력하세요!");
        
        // 입력 칸 비우기
        num1Input.value = "";
        num2Input.value = "";
        num1Input.focus(); // 첫 번재 입력 칸으로 포커싱

        return; // 함수 종료
    }

    // 입력값이 비어있는지 검사 (형식도 같이 검사)
    if (num1Input.value.trim() === "" || num2Input.value.trim() === "") {

        alert("숫자를 모두 입력해주세요!");

        // 입력 칸 비우기
        num1Input.value = "";
        num2Input.value = "";
        num1Input.focus(); // 첫 번재 입력 칸으로 포커싱

        return; // 함수 종료
    }


    let result; // 계산 결과 저장 변수

    // 문자열 -> 숫자 변환
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);

    // 연산자에 따른 분기 처리
    if (operator.value === "+") {
        result = num1 + num2;

    } else if (operator.value === "-") {
        result = num1 - num2;

    } else if (operator.value === "*") {
        result = num1 * num2;

    } else if (operator.value === "/") {

        // 0으로 나누기 예외 처리
        if (num2 === 0) {
            alert("0으로 나눌 수 없습니다!");
            num2Input.value = "";
            num2Input.focus();
            return;
        }
        
        result = num1 / num2;
    }

    // 결과 화면에 출력
    resultBox.textContent = `결과: ${result}`;

    // 계산 기록 문자열 생성 후 배열에 저장
    const record = `${num1} ${operator.value} ${num2} = ${result}`;
    historyList.push(record);

    // 기록 화면 업데이트
    showHistory();
}



// 계산 기록을 화면에 출력하는 함수
function showHistory() {

    // id=history를 변수로 가져오기
    const historyBox = document.getElementById("history");

    // 기존 목록 초기화 (중복 방지)
    historyBox.innerHTML = "";

    // 배열에 저장된 기록을 반복문으로 화면에 출력
    for (let i = 0; i < historyList.length; i++) {

        //li 요소 생성 후 현재 historyList[i]에 있는 요소를 textContent로 넣기 
        const li = document.createElement("li");
        li.textContent = historyList[i];

        // 생성 후 값을 넣은 li요소를 history DOM에 할당
        historyBox.appendChild(li);
    }

}



// 초기화 버튼 클릭 시 실행
function resetCalculator() {

    // 입력값 초기화
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").value = "+";

    // 결과 영역 초기화
    document.getElementById("result").textContent = "결과가 여기에 표시됩니다.";

    // 계산 기록 배열 초기화 (길이로 초기화)
    historyList.length = 0;

    // 화면에 반영
    showHistory();
}

