import styles from "./MainBar.module.sass";

export const MainBar = () => {
  const chartAxisElements: string[] = [
    "500 - 750",
    "751 - 1000",
    "1001 - 1250",
    "1251 - 1500",
    "1501 - 1750",
    "1751 - 2000",
    "2001 - 2250",
    "2251 - 2500",
    "2501 - 2750",
    "2751 - 3000",
    "3001 - 3250",
    "3251 - 3500",
    "3501 - 3750",
    "3751 - 4000",
    "4001 - 4250",
    "4251 - 4500",
    "4501 - 4750",
    "4751 - 5000",
    "5001+",
  ];

  const axisElements = () => {
    return chartAxisElements.map((item) => {
      return <div>{item}</div>;
    });
  };

  const chartBars = () => {
    return chartAxisElements.map(() => {
      return <div></div>;
    });
  };

  return (
    <div className={styles.mainBar}>
      <h1>Ceny Najmu Mieszkań w Olsztynie</h1>
      <div className={styles.dataBar}>
        <div className={styles.axis}>{axisElements()}</div>
        <div className={styles.chart}>{chartBars()}</div>
        <div className={styles.stats}>
          <div>
            <label>Średnia</label>
            <label className={styles.result}>2000 zł</label>
          </div>

          <div>
            <label>Mediana</label>
            <label className={styles.result}>2000 zł</label>
          </div>
          <div>
            <label>Dominanta</label>
            <label className={styles.result}>2000 zł</label>
          </div>
        </div>
      </div>
    </div>
  );
};
