import styles from ".//components/Card.module.css"
import Card from "./components/Card"

function App() {

  return (
    <div className={styles.container}>
      <Card name = "이동규" role = "프론트엔드" introduction = "코딩을 잘하고 싶습니당!"/>
      <Card name = "엄마" role = "엄마드아" introduction = "어무니는 위대한것이여~"/>
      <Card name = "마우가" role = '"돌격"' introduction = '"알아"'/>
    </div>

  )
}

export default App
