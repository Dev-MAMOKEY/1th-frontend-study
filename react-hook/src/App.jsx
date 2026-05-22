import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import styles from "./App.module.css";

function App() {
  

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>

      <TodoForm />

    </main>
  );
}

export default App;