import { useEffect, useState } from "react";
import styles from "./StatsBar.module.sass";

interface Props {
  isLoading: boolean;
  cityName: (string | string)[];
}

export const StatsBar = ({ isLoading, cityName }: Props) => {
  const [average, setAverage] = useState(0);
  const [median, setMedian] = useState(0);
  const [dominants, setDominants] = useState([0, 0]);

  useEffect(() => {
    fetch(`http://localhost:5157/getAverage/${cityName[0]}`, { mode: "cors" })
      .then((res) => res.json())
      .then((res) => {
        setAverage(res);
      });
    fetch(`http://localhost:5157/getMedian/${cityName[0]}`, { mode: "cors" })
      .then((res) => res.json())
      .then((res) => {
        setMedian(res);
      });
    fetch(`http://localhost:5157/getDominants/${cityName[0]}`, { mode: "cors" })
      .then((res) => res.json())
      .then((res) => {
        setDominants(res);
      });
  }, []);

  if (isLoading) {
    return <div className={styles.stats}></div>;
  }

  return (
    <div className={styles.stats}>
      <div>
        <label>Średnia</label>
        <label className={styles.result}>{average + " zł"}</label>
      </div>

      <div>
        <label>Mediana</label>
        <label className={styles.result}>{median + " zł"}</label>
      </div>
      <div>
        <label>Dominanty</label>
        {dominants.map((item) => {
          return <label className={styles.result}>{item + " zł"}</label>;
        })}
      </div>
    </div>
  );
};
