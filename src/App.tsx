import styles from "./App.module.sass";
import { SideBar } from "./components/sideBar/SideBar";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mainBar}></div>
        <SideBar></SideBar>
        <div className={styles.clearBoth}></div>
      </div>
    </div>
  );
}

export default App;
