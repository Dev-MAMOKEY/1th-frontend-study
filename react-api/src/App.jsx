import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';

const API_KEY = "";
const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`;

function App() {
  const [movies, setMovies] = useState([]);       // 영화 목록 저장
  const [loading, setLoading] = useState(true);   // 로딩 상태
  const [error, setError] = useState(null);       // 에러 상태
  const [keyword, setKeyword] = useState('');     // 검색어 저장

  // 1. API 호출 (useEffect 사용)
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true); //loding을 true 상태로 바꾸기
        const response = await fetch(MOVIE_API_URL); //api에서 영화 데이터 가져오기
        
        if (!response.ok) { 
          throw new Error('데이터를 가져오는데 실패했습니다.');
        } // response가 응답 성공에 실패했다면 Error 
        
        const data = await response.json();  //json으로 데이터 변환
        setMovies(data.results);   //가져온 데이터(영화) moves 변수에 넣기
      } catch (error) {
        setError(error.message);  //실패시 에러 메세지 기록
      } finally {
        setLoading(false);   //loding을 false로 바꾸기,  finally는 성공하든 실패하는 무조건 실행
      }
    };

    fetchMovies();
  }, []);

  // 2. 검색어에 따른 필터
  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(keyword.toLowerCase())
  );
  /*
  toLowerCase = 소문자로 바꾸기
  includes = 글자가 포함되어 있는지.. 만약 includes가 ("") 빈글자 일때는 모든 글자가 빈 글자를 포함하고 있기 때문에 영화가 전부 나타남
  */


  // 로딩 중일 때 보여줄 화면
  if (loading) return <div className="status">로딩 중...</div>;
  
  // 에러 발생 시 보여줄 화면
  if (error) return <div className="status">에러 발생: {error}</div>;

  return (
    <div className='movieContainer'>
      <div className='navigationBar'>
        <Header />
        {/* 검색어 상태를 변경하는 함수를 전달 */}
        <SearchBar onSearch={(e) => setKeyword(e.target.value)} />
      </div>

      <div className='movieList'>
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <div className="status">검색 결과가 없습니다.</div>
        )}
      </div>
    </div>
  )
}

export default App
