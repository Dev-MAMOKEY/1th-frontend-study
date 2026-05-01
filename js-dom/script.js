document.addEventListener('DOMContentLoaded', () => {     //html의 버튼, 입력창이 준비되면 아래 코드 실행
    const input = document.querySelector('.box');  //box 클래스 가진 입력창 가져오기
    const buttons = document.querySelectorAll('button'); //모든 버튼 가져오기

    buttons.forEach(btn => {    //모든 buttons를 각각을 btn 이라고 한다
        btn.addEventListener('click', () => {   //btn 클릭시 클릭할시 실행
            const val = btn.innerText;   //클릭된 버튼 택스트를 val에 저장

            if (val === 'AC') {     // ac를 누를시 빈칸
                input.value = '';
            } 
            else if (val === '=') {      //=을 누를시 문자열을 eval 함수로 계산
                input.value = eval(input.value);
            } 
            else {     //위 말고 다른 버튼을 누를시 기존 내용에 val 값을 이어붙임
                input.value = input.value + val;
            }
        });
    });
});