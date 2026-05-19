// 1. 자바스크립트가 조작할 대상들을 class,id등을 변수에 추가.
const unitC = document.getElementById('unit-c'); // 섭씨 버튼
const unitF = document.getElementById('unit-f'); // 화씨 버튼
const cityBtns = document.querySelectorAll('.city-btn'); // 모든 지역 버튼들 (서울, 경기, 부산)
const dayBoxes = document.querySelectorAll('.day-box'); //  7개 요일 박스들

const currentIconEl = document.getElementById('current-icon'); // 현재온도 큰 아이콘
const currentTempEl = document.getElementById('current-temp'); // 현재온도 큰 텍스트


// 2. 날씨데이터 (object)
const weatherData = {
    'seoul': [
        { icon: '☀️', temp: 22 }, { icon: '☀️', temp: 24 }, { icon: '☁️', temp: 21 },
        { icon: '🌦️', temp: 19 }, { icon: '☀️', temp: 23 }, { icon: '☀️', temp: 25 }, { icon: '☁️', temp: 22 }
    ],
    'gyeonggi': [
        { icon: '☁️', temp: 20 }, { icon: '🌦️', temp: 18 }, { icon: '☀️', temp: 22 },
        { icon: '☀️', temp: 23 }, { icon: '☁️', temp: 21 }, { icon: '☀️', temp: 24 }, { icon: '☀️', temp: 24 }
    ],
    'busan': [
        { icon: '☀️', temp: 25 }, { icon: '☀️', temp: 26 }, { icon: '☀️', temp: 27 },
        { icon: '☁️', temp: 24 }, { icon: '🌦️', temp: 22 }, { icon: '☀️', temp: 25 }, { icon: '☀️', temp: 26 }
    ]
};


// 3. 현재 상태 기록 (지금 사용자가 무엇을 보고 있는지)
let currentCity = 'seoul'; // 처음에는 서울이 선택되어 있다고 가정
let currentUnit = 'C';    // 처음에는 섭씨 단위라고 가정


//4. 기능을 쪼개어 만든 작은 함수들

// (1) 온도를 단위에 맞게 변환하는 함수
function getDisplayTemp(temp) {
    if (currentUnit === 'F') {
        // 단위가 화씨라면 공식에 맞춰 계산.
        return Math.round((temp * 9/5) + 32);
    }
    // 기본은 섭씨 온도 그대로 반환.
    return temp;
}

// (2) 상단 큰 날씨 영역만 업데이트하는 함수
function updateMainDisplay(data) {
    const today = data[0]; // 첫 번째 데이터(오늘) 기준
    currentIconEl.innerText = today.icon;
    
    let mainTemp = getDisplayTemp(today.temp);
    currentTempEl.innerHTML = `현재온도: <span style="color: #ff6b6b;">${mainTemp}°${currentUnit}</span>`;
}

// (3) 하단 7개 요일 박스들만 업데이트하는 함수
function updateForecastDisplay(data) {
    dayBoxes.forEach((box, index) => {
        const iconEl = box.querySelector('.weather-icon'); // 박스 안의 아이콘 자리
        const tempEl = box.querySelector('.day-temp');     // 박스 안의 온도 자리
        
        // 해당 요일의 아이콘을 넣어줍니다.
        iconEl.innerText = data[index].icon;
        
        // 해당 요일의 온도를 계산해서 넣어줍니다.
        let temp = getDisplayTemp(data[index].temp);
        tempEl.innerHTML = `${temp}<small>°${currentUnit}</small>`;
    });
}

// updateWeather함수는 상태(도시, 단위)가 바뀔 때마다 작은 함수들을 실행시켜 화면을 바꿔줍니다.
function updateWeather() {
    // 현재 선택된 도시의 데이터를 가져옴.
    const data = weatherData[currentCity];
    
    updateMainDisplay(data);      // 상단 큰 화면 업데이트
    updateForecastDisplay(data);  // 하단 7개 박스 업데이트
}


// 5.  사용자가 버튼을 눌렀을 때 디자인이나 자료 업데이트.

// (1) 지역 버튼(서울, 경기, 부산)을 클릭했을 때
cityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 모든 지역 버튼에서 검은색 강조 효과(active)를 뺍니다.
        cityBtns.forEach(b => b.classList.remove('active'));
        // 방금 클릭한 그 버튼에만 강조 효과를 줍니다.
        btn.classList.add('active');
        
        // 현재 선택된 도시 이름을 기억하고 화면을 업데이트합니다.
        currentCity = btn.dataset.city; 
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
