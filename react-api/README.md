## 과제명
REST API 연동 React 앱

## 🚀 주요 기능
- 키워드 입력 검색
- 영화 리스트 카드 UI
- 로딩 상태 처리
- 에러 처리

## 🔗 참고 링크
https://developer.themoviedb.org/reference/movie-now-playing-list (api 관련)
https://developer.themoviedb.org/docs/image-basics (api 이미지 관련)
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/throw (throw 관련)
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/try...catch (try, catch, finally 관련)
https://shiincs.github.io/day-38/ (try, catch, finally 관련2)


## 🤔 느낀 점 / 어려웠던 점
> API 호출 이후 전체적인 구조를 잡는 과정에서 어려움을 느껴 AI의 도움을 조금 받았습니다

다른 부분은 문법적으로 좀 생소해도 학습을 통해 이해가 되었으나
```jsx
<SearchBar onSearch={(e) => setKeyword(e.target.value)} />
```
이 코드에서 데이터가 흐르는 방향이 직관적으로 이해되지 않아 고민입니다

----

```jsx
<input onChange={(e) => {console.log(e.target.value); }} />
```
를 쓰는 것은 흐름이 이해가 가는데

위에서 말한 부분의 데이터 흐름이 이해가 안된다고 해야하나..
어떤 관점으로 바라보는 것이 좋은지 리뷰어님의 조언을 듣고 싶습니다.