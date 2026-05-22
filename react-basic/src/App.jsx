import './components/body.css'
import styles from './App.module.css'
import Card from "./components/Card"

function App() {

  const members = [
    {id: 1 , name: "이동규", role: "프론트엔드", introduction:"코딩을 잘하고 싶습니당!"},
    {id: 2 , name: "엄마", role: "엄마드아", introduction:"어무니는 위대한것이여~"},
    {id: 3 , name: "마우가", role: "돌격", introduction:'"알아"'},
  ];

  return (
    <div className={styles.container}>
      {members.map((member) => {
        return(
          <Card key={member.id}
                name={member.name}                 
                role={member.role} 
                introduction={member.introduction}/>
            )})}
    </div>

  )
}

export default App
