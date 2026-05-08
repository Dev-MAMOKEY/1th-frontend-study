// 1. 자바스크립트가 조작할 대상들을 class,id등을 변수에 추가.
const unitC = document.getElementById('unit-c'); // 섭씨 버튼
const unitF = document.getElementById('unit-f'); // 화씨 버튼
const cityBtns = document.querySelectorAll('.city-btn'); // 모든 지역 버튼들 (서울, 경기, 부산)
const dayBoxes = document.querySelectorAll('.day-box'); //  7개 요일 박스들

const currentIconEl = document.getElementById('current-icon'); // 현재온도 큰 아이콘
const currentTempEl = document.getElementById('current-temp'); // 현재온도 큰 텍스트


// 2. 날씨데이터 (object)
const weatherData = {
    '서울': [
        { icon: '☀️', temp: 22 }, { icon: '☀️', temp: 24 }, { icon: '☁️', temp: 21 },
        { icon: '🌦️', temp: 19 }, { icon: '☀️', temp: 23 }, { icon: '☀️', temp: 25 }, { icon: '☁️', temp: 22 }
    ],
    '경기도': [
        { icon: '☁️', temp: 20 }, { icon: '🌦️', temp: 18 }, { icon: '☀️', temp: 22 },
        { icon: '☀️', temp: 23 }, { icon: '☁️', temp: 21 }, { icon: '☀️', temp: 24 }, { icon: '☀️', temp: 24 }
    ],
    '부산': [
        { icon: '☀️', temp: 25 }, { icon: '☀️', temp: 26 }, { icon: '☀️', temp: 27 },
        { icon: '☁️', temp: 24 }, { icon: '🌦️', temp: 22 }, { icon: '☀️', temp: 25 }, { icon: '☀️', temp: 26 }
    ]
};


// 3. 현재 상태 기록 (지금 사용자가 무엇을 보고 있는지)
let currentCity = '서울'; // 처음에는 서울이 선택되어 있다고 가정
let currentUnit = 'C';    // 처음에는 섭씨 단위라고 가정


//updateWeather함수는 상태(도시, 단위)가 바뀔 때마다 새 정보를 다시 알려줌.
function updateWeather() {
    // 현재 선택된 도시의 데이터를 가져옴.
    const data = weatherData[currentCity];
    
    // --- (A) 상단 큰 날씨 화면 업데이트 (데이터의 첫 번째인 '월요일'을 기준으로 표시) ---
    currentIconEl.innerText = data[0].icon; //현재온도 아이콘에 월요일(0번째) 아이콘 대입
    let mainTemp = data[0].temp; // 현재온도 텍스트에 월요일(0번째) 텍스트 대입, 기본은 °C 온도

    if (currentUnit === 'F') {
        // 단위가 화씨라면 공식에 맞춰 계산.
        mainTemp = Math.round((mainTemp * 9/5) + 32);  //math.round() = 소수점 없앰
        currentTempEl.innerHTML = `현재온도: <span style="color: #ff6b6b;">${mainTemp}°F</span>`;
    } else {
        currentTempEl.innerHTML = `현재온도: <span style="color: #ff6b6b;">${mainTemp}°C</span>`;
    }
    
    // 하단 7개 각 요일 박스들 업데이트
    dayBoxes.forEach((box, index) => {
        const iconEl = box.querySelector('.weather-icon'); // 박스 안의 아이콘 자리
        const tempEl = box.querySelector('.day-temp');     // 박스 안의 온도 자리
        
        // 해당 요일의 아이콘을 넣어줍니다.
        iconEl.innerText = data[index].icon;
        
        // 해당 요일의 온도를 계산해서 넣어줍니다.
        let temp = data[index].temp;
        if (currentUnit === 'F') {
            temp = Math.round((temp * 9/5) + 32); 
            tempEl.innerHTML = `${temp}<small>°F</small>`;
        } else {
            tempEl.innerHTML = `${temp}<small>°C</small>`;
        }
    });
}

/**
 * 5.  사용자가 버튼을 눌렀을 때 디자인이나 자료 업데이트.
 */

// (1) 지역 버튼(서울, 경기, 부산)을 클릭했을 때
cityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 모든 지역 버튼에서 검은색 강조 효과(active)를 뺍니다.
        cityBtns.forEach(b => b.classList.remove('active'));
        // 방금 클릭한 그 버튼에만 강조 효과를 줍니다.
        btn.classList.add('active');
        
        // 현재 선택된 도시 이름을 기억하고 화면을 업데이트합니다.
        currentCity = btn.innerText; 
        updateWeather(); 
    });
});

//°C 단위를 클릭했을 때
unitC.addEventListener('click', () => {
    unitC.classList.add('active');    // 섭씨 글자를 진하게
    unitF.classList.remove('active'); // 화씨 글자를 흐리게
    
    currentUnit = 'C'; // 단위를 'C'로 기억하고
    updateWeather();   // 화면을 업데이트 합니다.
});

//화씨(°F) 단위를 클릭했을 때
unitF.addEventListener('click', () => {
    unitF.classList.add('active');    // 화씨 글자를 진하게
    unitC.classList.remove('active'); // 섭씨 글자를 흐리게
    
    currentUnit = 'F'; // 단위를 'F'로 기억하고
    updateWeather();   // 화면을 업데이트 합니다.
});

// 웹 페이지가 처음 열렸을 때 기본 데이터(서울, 섭씨)를 업데이트 합니다.
updateWeather();