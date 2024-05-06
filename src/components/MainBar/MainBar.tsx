import styles from "./MainBar.module.sass";
import { ChartBar } from "../ChartBar/ChartBar";
import { YAxis } from "../YAxis/YAxis";
import { StatsBar } from "../StatsBar/StatsBar";
import { useState, useEffect } from "react";

interface Props {
  cityName: (string | string)[];
}

export const MainBar = ({ cityName }: Props) => {
  const [prices, setPrices] = useState<number[]>([]);
  const [chartRows, setChartRows] = useState([
    ["500 - 750", 0],
    ["751 - 1000", 0],
    ["1001 - 1250", 0],
    ["1251 - 1500", 0],
    ["1501 - 1750", 0],
    ["1751 - 2000", 0],
    ["2001 - 2250", 0],
    ["2251 - 2500", 0],
    ["2501 - 2750", 0],
    ["2751 - 3000", 0],
    ["3001 - 3250", 0],
    ["3251 - 3500", 0],
    ["3501 - 3750", 0],
    ["3751 - 4000", 0],
    ["4001 - 4250", 0],
    ["4251 - 4500", 0],
    ["4501 - 4750", 0],
    ["4751 - 5000", 0],
    ["5001+", 0],
  ]);
  const [isLoading, setIsLoading] = useState(true);

  const groupData = (prices: number[]) => {
    prices.forEach((price) => {
      let arrayIndex: number = 0;

      if (price < 500) arrayIndex;
      else if (price > 750 && price <= 1000) arrayIndex = 1;
      else if (price > 1000 && price <= 1250) arrayIndex = 2;
      else if (price > 1250 && price <= 1500) arrayIndex = 3;
      else if (price > 1500 && price <= 1750) arrayIndex = 4;
      else if (price > 1750 && price <= 2000) arrayIndex = 5;
      else if (price > 2000 && price <= 2250) arrayIndex = 6;
      else if (price > 2250 && price <= 2500) arrayIndex = 7;
      else if (price > 2500 && price <= 2750) arrayIndex = 8;
      else if (price > 2750 && price <= 3000) arrayIndex = 9;
      else if (price > 3000 && price <= 3250) arrayIndex = 10;
      else if (price > 3250 && price <= 3500) arrayIndex = 11;
      else if (price > 3500 && price <= 3750) arrayIndex = 12;
      else if (price > 3750 && price <= 4000) arrayIndex = 13;
      else if (price > 4000 && price <= 4250) arrayIndex = 14;
      else if (price > 4250 && price <= 4500) arrayIndex = 15;
      else if (price > 4500 && price <= 4750) arrayIndex = 16;
      else if (price > 4750 && price <= 5000) arrayIndex = 17;
      else if (price > 5000) arrayIndex = 18;

      setChartRows((prev) => {
        prev[arrayIndex][1] = parseInt(prev[arrayIndex][1].toString()) + 1;
        return [...prev];
      });
    });
  };

  const getData = () => {
    fetch(
      `https://real-estate-price-monitor-api.azurewebsites.net/getPrices/${cityName[0]}`
    )
      .then((res) => res.json())
      .then((res) => {
        setPrices(res);
        groupData(res);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getData();

    return () => {
      setChartRows([
        ["500 - 750", 0],
        ["751 - 1000", 0],
        ["1001 - 1250", 0],
        ["1251 - 1500", 0],
        ["1501 - 1750", 0],
        ["1751 - 2000", 0],
        ["2001 - 2250", 0],
        ["2251 - 2500", 0],
        ["2501 - 2750", 0],
        ["2751 - 3000", 0],
        ["3001 - 3250", 0],
        ["3251 - 3500", 0],
        ["3501 - 3750", 0],
        ["3751 - 4000", 0],
        ["4001 - 4250", 0],
        ["4251 - 4500", 0],
        ["4501 - 4750", 0],
        ["4751 - 5000", 0],
        ["5001+", 0],
      ]);
    };
  }, [cityName]);

  return (
    <div className={styles.mainBar}>
      <h1>
        Ceny Najmu Mieszkań {cityName[1] == "Wrocławiu" ? "we" : "w"}{" "}
        {cityName[1]}
      </h1>
      <label className={styles.quatityTitle}>Ilość Ofert</label>
      <label className={styles.priceTitle}>Cena [zł/miesiąc]</label>
      <YAxis chartAxisElements={chartRows}></YAxis>
      <ChartBar chartRows={chartRows} isLoading={isLoading}></ChartBar>
      <StatsBar
        isLoading={isLoading}
        cityName={cityName}
        prices={prices}
      ></StatsBar>
    </div>
  );
};
