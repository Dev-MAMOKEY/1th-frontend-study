document.addEventListener('DOMContentLoaded', () => {
    // html 요소 선택,입력창과 버튼 소환(?)
    const input = document.querySelector('.box');
    const buttonContainer = document.querySelector('#calc-buttons');


    const buttonTextList = [
        { text: '7', style: 'col-span-1 bg-gray-200 hover:bg-gray-300' },
        { text: '8', style: 'col-span-1 bg-gray-200 hover:bg-gray-300' },
        { text: '9', style: 'col-span-1 bg-gray-200 hover:bg-gray-300' },
        { text: '/', style: 'col-span-1 bg-blue-100 text-blue-600 hover:bg-blue-200' },

        { text: '4', style: 'col-span-1 bg-gray-200 hover:bg-gray-300' },
        { text: '5', style: 'col-span-1 bg-gray-200 hover:bg-gray-300' },
        { text: '6', style: 'col-span-1 bg-gray-200 hover:bg-gray-300' },
        { text: '*', style: 'col-span-1 bg-blue-100 text-blue-600 hover:bg-blue-200' },

        { text: '1', style: 'col-span-1 bg-gray-200 hover:bg-gray-300' },
        { text: '2', style: 'col-span-1 bg-gray-200 hover:bg-gray-300' },
        { text: '3', style: 'col-span-1 bg-gray-200 hover:bg-gray-300' },
        { text: '-', style: 'col-span-1 bg-blue-100 text-blue-600 hover:bg-blue-200' },

        { text: '0', style: 'col-span-1 bg-gray-200 hover:bg-gray-300' },
        { text: '.', style: 'col-span-1 bg-gray-200 hover:bg-gray-300' },
        { text: 'AC', style: 'col-span-1 bg-red-100 hover:bg-red-200' },
        { text: '+', style: 'col-span-1 bg-blue-100 text-blue-600 hover:bg-blue-200' },
        { text: '=', style: 'col-span-4 bg-blue-600 text-white hover:bg-blue-700 mt-2' }
    ];


    buttonTextList.forEach(btnInfo => {
        // <button> 태그를 생성
        const btn = document.createElement('button');
        
        // 버튼에 텍스트를 넣기
        btn.innerText = btnInfo.text;
        
        // 버튼 각각 style에 tailwind css 스타일 넣기
        btn.className = `py-4 rounded-xl font-bold transition-colors ${btnInfo.style}`;
        

        btn.addEventListener('click', () => {
            handleButtonClick(btnInfo.text);
        });

        // btn을 html 컨테이너인 (id="calc-buttons") 안에 넣기
        buttonContainer.appendChild(btn);
    });

    
    function calculate(cal) {
        const safe = /^[+*-/1234567890.()]+$/;    // 숫자와 연산자만 포함되어 있는지 확인.
        if (!safe.test(cal)) return "ERROR";
        try {
            return eval(cal); // 계산
        }   
        
        catch (error) {
            return "ERROR";  // (1++1)과 같은 잘못된 수식 입력 시 error 뜨게하기
        }
    }


    function handleButtonClick(val) {
        if (val === 'AC') {     // AC 클릭 시 입력창을 지움
            input.value = '';
        } else if (val === '=') {
            input.value = calculate(input.value);   // = 클릭 시 계산된 값 호출
        } else {
            if (input.value === "0" || input.value === "ERROR") {    // 처음 입력하거나 에러 상태일 때는 기존 값을 지우고 새로 쓰기
                input.value = val;
            } else {
                // 그 외에는 기존 값 뒤에 이어서 붙이기
                input.value += val;
            }
        }
    }
});