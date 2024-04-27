import styles from "./StatsBar.module.sass";

export const StatsBar = () => {
  return (
    <>
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
    </>
  );
};
