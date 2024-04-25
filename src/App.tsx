import styles from "./App.module.sass";
import { SideBar } from "./components/SideBar/SideBar";
import { MainBar } from "./components/MainBar/MainBar";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <MainBar></MainBar>
        <SideBar></SideBar>
        <div className={styles.clearBoth}></div>
      </div>
    </div>
  );
}

export default App;
