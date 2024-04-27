import styles from "./YAxis.module.sass";

interface Props {
  chartAxisElements: (string | number)[][];
}

export const YAxis = ({ chartAxisElements }: Props) => {
  const axisElements = () => {
    return Array.from(chartAxisElements).map(([item]) => {
      return <div>{item}</div>;
    });
  };

  return <div className={styles.axis}>{axisElements()}</div>;
};
