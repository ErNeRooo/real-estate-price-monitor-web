import styles from "./ChartBar.module.sass";

interface Props {
  chartAxisElements: (string | number)[][];
  isLoading: boolean;
}

export const ChartBar = ({ chartAxisElements, isLoading }: Props) => {
  const data: number[] = [];

  const chartBars = () => {
    chartAxisElements.forEach((item) => {
      data.push(parseInt(item[1].toString()));
    });

    const maxValue = Math.max(...data);

    return chartAxisElements.map((item) => {
      const width = Math.floor((parseInt(item[1].toString()) / maxValue) * 100);
      return (
        <div style={{ width: width + "%" }}>{<label>{item[1]}</label>}</div>
      );
    });
  };

  if (isLoading)
    return (
      <div className={styles.chart}>
        <h1>Ładowanie</h1>
      </div>
    );

  return <div className={styles.chart}>{chartBars()}</div>;
};
