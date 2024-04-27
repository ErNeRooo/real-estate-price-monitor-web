import styles from "./MainBar.module.sass";
import { ChartBar } from "../ChartBar/ChartBar";
import { YAxis } from "../YAxis/YAxis";

interface Props {
  cityName: string;
}

export const MainBar = ({ cityName }: Props) => {
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

  return (
    <div className={styles.mainBar}>
      <h1>
        Ceny Najmu Mieszkań {cityName == "Wrocławiu" ? "we" : "w"} {cityName}
      </h1>
      <YAxis chartAxisElements={chartAxisElements}></YAxis>
      <ChartBar chartAxisElements={chartAxisElements}></ChartBar>
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
  );
};
