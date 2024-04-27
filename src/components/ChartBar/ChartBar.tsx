import styles from "./ChartBar.module.sass";

interface Props {
  chartAxisElements: string[];
}

export const ChartBar = ({ chartAxisElements }: Props) => {
  const chartBars = () => {
    return chartAxisElements.map(() => {
      return <div></div>;
    });
  };

  return <div className={styles.chart}>{chartBars()}</div>;
};
