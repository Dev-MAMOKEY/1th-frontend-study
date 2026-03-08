# 🦁 마모키 프론트엔드 스터디

> HTML, CSS, JavaScript, React를 배우고 과제를 제출하는 공간입니다.

---

## 📁 브랜치 & 폴더 구조

모든 스터디원은 아래 구조를 따라 과제를 제출합니다.

```
{username}/                          ← 본인 브랜치 (예: likelion2014)
├── profile/
│   ├── index.html
│   ├── style.css
│   └── README.md
├── clone/
│   ├── index.html
│   └── README.md
└── ...
```

---

## 🚀 시작하기

### 1단계 — 본인 브랜치 생성

`main` 브랜치에서 **본인의 GitHub 사용자명**으로 브랜치를 만듭니다.

```bash
git checkout main
git pull origin main
git checkout -b {username}         # 예: git checkout -b likelion2014
git push origin {username}         # 예: git push origin likelion2014
```

---

### 2단계 — 과제 브랜치 생성

과제가 주어지면 **본인 브랜치에서 분기**하여 과제 브랜치를 만듭니다.

```bash
git checkout {username}                # 본인 브랜치로 이동
git checkout -b {username}/{과제명}    # 예: likelion2014/profile
```

---

### 3단계 — Pull Request 생성

작업이 끝나면 GitHub에서 **`{username}/{과제명}` → `{username}`** 으로 PR을 생성합니다.

> ⚠️ `main` 브랜치로 직접 PR을 보내지 않습니다.

---

## 🔀 PR 컨벤션

### 제목

```
[과제명] 본인이름 제출합니다.
```

예시: `[나만의 프로필 페이지] 김멋사 제출합니다.`

### 본문 템플릿

```markdown
## 과제명
<!-- 제출하는 과제 이름을 적어주세요 -->

## 💡 작업 내용
<!-- 구현한 기능이나 작업 내용을 간단히 작성해 주세요 -->
-

## 🔗 참고 링크
<!-- 참고한 자료나 클론한 사이트 URL을 적어주세요 -->
-

## 🤔 느낀 점 / 어려웠던 점
<!-- 자유롭게 작성해 주세요 -->
```

---

## 📚 과제 목록

### 🌱 PART 1 — 웹 기초 (1~4주차)

| 주차 | 폴더명 | 설명 |
|---|---|---|
| 3주차 | [`나만의 프로필 페이지`](https://www.notion.so/3-31b0e70c795681268bdaf876f0089c6a?source=copy_link) | HTML/CSS로 나를 소개하는 프로필 페이지 제작 |
| 4주차 | [`클론 코딩 랜딩 페이지`](https://www.notion.so/4-clone-31b0e70c795681e58cdcc7a87b8a703a?source=copy_link) | 마음에 드는 웹사이트 클론 코딩 |

### ⚡ PART 2 — JavaScript (5~7주차)

| 주차 | 폴더명 | 설명 |
|---|---|---|
| 6주차 | [`JavaScript 기초 미니 앱`](https://www.notion.so/6-JavaScript-31b0e70c795681538b9fc485c16349c8?source=copy_link) | DOM 조작 & 이벤트 리스너 실습 |
| 7주차 | [`HTML/CSS/JS 종합 웹앱`](https://www.notion.so/7-HTML-CSS-JS-31b0e70c795681629b4ad66108aea391?source=copy_link) | HTML/CSS/JS 종합 미니 프로젝트 |

### ⚛️ PART 3 — React (8~10주차)

| 주차 | 폴더명 | 설명 |
|---|---|---|
| 8주차 | [`React 컴포넌트 만들기`](https://www.notion.so/8-React-31b0e70c795681efbdfcc5085b587369?source=copy_link) | React 컴포넌트 & Props 실습 |
| 9주차 | [`useState & useEffect 활용 앱`](https://www.notion.so/9-useState-useEffect-31b0e70c79568108858dcba205c15dac?source=copy_link) | useState/useEffect Hook 활용 |
| 10주차 | [`REST API 연동 React 앱`](https://www.notion.so/10-REST-API-React-31b0e70c795681158a77cc65e6288ebc?source=copy_link) | REST API 연동 및 Vercel 배포 |

### 🚀 PART 4 — 자율 프로젝트 (11~12주차)

| 주차 | 폴더명 | 설명 |
|---|---|---|
| 11~12주차 | [`개인 프로젝트 기획 & 개발`](https://www.notion.so/11-12-31b0e70c79568154bddcf5498ce62a2e?source=copy_link) | 개인 프로젝트 기획 → 개발 → GitHub 배포 → 발표 |

---

## ✅ 과제 폴더 README 작성 가이드

각 과제 폴더 안의 `README.md`에는 아래 내용을 포함해 주세요.

```markdown
# 과제명
<!-- 제출하는 과제 이름을 적어주세요 -->

## 📎 참고 링크
- 클론한 사이트 URL (clone 과제의 경우)
- 참고한 자료

## 💡 작업 내용
- 구현한 기능 목록

## 🤔 느낀 점 / 어려웠던 점
- 자유롭게 작성
```

---

## ⚠️ 주의사항

- 반드시 **본인 브랜치**에서 과제 브랜치를 분기하세요.
- 다른 사람의 브랜치에 직접 push하지 마세요.
