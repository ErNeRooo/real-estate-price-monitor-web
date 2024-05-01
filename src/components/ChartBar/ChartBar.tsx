import styles from "./ChartBar.module.sass";

interface Props {
  chartAxisElements: (string | number)[][];
  isLoading: boolean;
}

export const ChartBar = ({ chartAxisElements, isLoading }: Props) => {
  const data: number[] = [];

  const bars = () => {
    chartAxisElements.forEach((item) => {
      data.push(parseInt(item[1].toString()));
    });

    const maxValue = Math.max(...data);

    return chartAxisElements.map((item, index) => {
      const width = Math.floor((parseInt(item[1].toString()) / maxValue) * 100);

      return (
        <div
          style={{
            width: width + "%",
            animationDelay: (index * 50).toString() + "ms",
          }}
        >
          {<label>{item[1]}</label>}
        </div>
      );
    });
  };

  if (isLoading)
    return (
      <div className={styles.chart}>
        <section className={styles.loader}></section>
      </div>
    );

  return <div className={styles.chart}>{bars()}</div>;
};
