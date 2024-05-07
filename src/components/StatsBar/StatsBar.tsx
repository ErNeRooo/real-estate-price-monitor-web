import styles from "./StatsBar.module.sass";

interface Props {
  isLoading: boolean;
  cityName: (string | string)[];
  prices: number[];
}

export const StatsBar = ({ isLoading, prices }: Props) => {
  const calculateAverage = () => {
    const sum = [...prices].reduce((partialSum, a) => partialSum + a, 0);

    return parseInt((sum / prices.length).toString());
  };

  const calculateMedian = () => {
    if (prices.length % 2 == 0) {
      return (prices[prices.length / 2] + prices[prices.length / 2 - 1]) / 2;
    } else {
      return prices[Math.floor(prices.length / 2)];
    }
  };

  const calculateDominants = () => {
    const occurrences: Map<number, number> = new Map();

    // Iterate through the array and count occurrences
    for (const number of prices) {
      if (occurrences.has(number)) {
        occurrences.set(number, occurrences.get(number)! + 1);
      } else {
        occurrences.set(number, 1);
      }
    }

    let maxOccurrences = 0;
    const dominants: number[] = [];

    // Find the maximum number of occurrences
    occurrences.forEach((count) => {
      if (count > maxOccurrences) {
        maxOccurrences = count;
      }
    });

    // Find all numbers with the maximum number of occurrences
    occurrences.forEach((count, number) => {
      if (count === maxOccurrences) {
        dominants.push(number);
      }
    });

    return dominants;
  };

  if (isLoading) {
    return <div className={styles.stats}></div>;
  }

  return (
    <div className={styles.stats}>
      <div>
        <label>Średnia</label>
        <label className={styles.result}>{calculateAverage() + " zł"}</label>
      </div>

      <div>
        <label>Mediana</label>
        <label className={styles.result}>{calculateMedian() + " zł"}</label>
      </div>
      <div>
        <label>Dominanty</label>
        {calculateDominants().map((item) => {
          return <label className={styles.result}>{item + " zł"}</label>;
        })}
      </div>
    </div>
  );
};
