import "./App.css";
import Counter from "./components/Counter";
import CardList from "./components/CardList";
import ColorChanger from "./components/ColorChanger";

function App() {
  
  return (
    <main className="container">

      <h1>React Basic Project</h1>

      {/* 카운터 컴포넌트 */}
      <Counter />

      {/* 카드 리스트 컴포넌트 */}
      <CardList />

      {/* 색상 변경 컴포넌트 */}
      <ColorChanger />

    </main>
  );
}

export default App;