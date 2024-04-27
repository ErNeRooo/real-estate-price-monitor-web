import styles from "./ChartBar.module.sass";

interface Props {
  chartAxisElements: (string | number)[][];
}

export const ChartBar = ({ chartAxisElements }: Props) => {
  const chartBars = () => {
    return chartAxisElements.map((item) => {
      const width = item[1];
      return <div style={{ width: width.toString() + "%" }}></div>;
    });
  };

  return <div className={styles.chart}>{chartBars()}</div>;
};
