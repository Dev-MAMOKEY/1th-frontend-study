// 계산 기록 저장 배열
const historyList = [];



// DOM 요소들을 한 번에 가져오는 함수 (객체 형태로 반환)
function getCalculatorElements() {
    return {
        num1Input: document.getElementById("num1"),
        num2Input: document.getElementById("num2"),
        operator: document.getElementById("operator"),
        resultBox: document.getElementById("result")
    };
}



// 입력 칸 초기화 후 첫 번째 입력 칸으로 포커싱
function clearInputsAndFocus(num1Input, num2Input) {
    num1Input.value = "";
    num2Input.value = "";
    num1Input.focus();
}



// 입력값이 비어있는지 검사
function isEmptyInput(num1Input, num2Input) {
    return num1Input.value.trim() === "" || num2Input.value.trim() === "";  //true, false
}


// 입력값이 숫자인지 검사
function isInvalidNumber(num1Input, num2Input) {
    return isNaN(num1Input.value) || isNaN(num2Input.value); //true, false
}



// 입력값 검증 함수 (isEmptyInput, isInvalidNumber 함수 사용)
function validateInputs(num1Input, num2Input) {

    // 입력값이 비어있는지 먼저 검사
    if (isEmptyInput(num1Input, num2Input)) {
        alert("숫자를 모두 입력해주세요!");

        clearInputsAndFocus(num1Input, num2Input);  // 입력칸 초기화 및 포커싱
        return false; 
    }

    // 숫자가 아닌 값 입력 방지
    if (isInvalidNumber(num1Input, num2Input)) {
        alert("올바른 숫자를 입력하세요!");

        clearInputsAndFocus(num1Input, num2Input); // 입력칸 초기화 및 포커싱
        return false;
    }

    return true;
}



// 문자열 입력값을 숫자로 변환하는 함수 (객체로 리턴)
function getNumbers(num1Input, num2Input) {
    return {
        num1: Number(num1Input.value),
        num2: Number(num2Input.value)
    };
}



// 실제 계산을 처리하는 함수
function handleCalculation(num1, num2, operatorValue, num2Input) {

    if (operatorValue === "+") {
        return num1 + num2;

    } else if (operatorValue === "-") {
        return num1 - num2;

    } else if (operatorValue === "*") {
        return num1 * num2;

    } else if (operatorValue === "/") {

        // 0으로 나누기 예외 처리
        if (num2 === 0) {
            alert("0으로 나눌 수 없습니다!");
            num2Input.value = "";
            num2Input.focus();
            return null;    // 값이 없음
        }

        return num1 / num2;
    }

    return null;    // 값이 없음
}

// 계산 기록 문자열 생성 함수
function createRecord(num1, operatorValue, num2, result) {
    return `${num1} ${operatorValue} ${num2} = ${result}`;
}


// 계산 실행 함수
function calculate() {

    // DOM 요소 가져오기
    const { num1Input, num2Input, operator, resultBox } = getCalculatorElements();

    // 입력값 검증
    const isValid = validateInputs(num1Input, num2Input);

    if (!isValid) {
        return;
    }

    // 문자열 -> 숫자 변환
    const { num1, num2 } = getNumbers(num1Input, num2Input);

    // 연산자 값 가져오기 (매개변수와 같은 변수로 설정)
    const operatorValue = operator.value;

    // 계산 실행
    const result = handleCalculation(num1, num2, operatorValue, num2Input);

    // 계산이 실패한 경우 함수 종료
    if (result === null) {
        return;
    }

    // 결과 화면에 출력
    resultBox.textContent = `결과: ${result}`;

    // 계산 기록 문자열 생성
    const record = createRecord(num1, operatorValue, num2, result);

    // 계산 기록 배열에 저장
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

        // li 요소 생성 후 현재 historyList[i]에 있는 요소를 textContent로 넣기
        const li = document.createElement("li");
        li.textContent = historyList[i];

        // 생성 후 값을 넣은 li 요소를 history DOM에 할당
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

    // 계산 기록 배열 초기화
    historyList.length = 0;

    // 화면에 반영
    showHistory();
}




// 버튼 이벤트 연결 (이벤트 : click)
document.getElementById("calculateBtn").addEventListener("click", calculate);
document.getElementById("resetBtn").addEventListener("click", resetCalculator);