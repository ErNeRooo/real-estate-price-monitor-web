import styles from "./ChartBar.module.sass";

interface Props {
  chartAxisElements: (string | number)[][];
}

export const ChartBar = ({ chartAxisElements }: Props) => {
  const data: number[] = [];

  const chartBars = () => {
    chartAxisElements.forEach((item) => {
      data.push(parseInt(item[1].toString()));
    });

    const maxValue = Math.max(...data);

    return chartAxisElements.map((item) => {
      const width = Math.floor((parseInt(item[1].toString()) / maxValue) * 100);
      console.log(item);
      return <div style={{ width: width + "%" }}></div>;
    });
  };

  return <div className={styles.chart}>{chartBars()}</div>;
};
