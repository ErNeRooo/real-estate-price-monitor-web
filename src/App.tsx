import styles from "./App.module.sass";
import { SideBar } from "./components/SideBar/SideBar";
import { MainBar } from "./components/MainBar/MainBar";
import { useState } from "react";

function App() {
  const [cityName, setCityName] = useState("Warszawie");

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <MainBar cityName={cityName}></MainBar>
        <SideBar cityNameSetter={setCityName}></SideBar>
        <div className={styles.clearBoth}></div>
      </div>
    </div>
  );
}

export default App;
