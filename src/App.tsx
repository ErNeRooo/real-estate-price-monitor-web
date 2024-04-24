import styles from "./App.module.sass";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mainBar}></div>
        <div className={styles.sideBar}></div>
        <div className={styles.clearBoth}></div>
      </div>
    </div>
  );
}

export default App;
