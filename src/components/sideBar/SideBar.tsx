import styles from "./SideBar.module.sass";

export const SideBar = () => {
  const cities: string[] = [
    "Warszawa",
    "Kraków",
    "Wrocław",
    "Łódź",
    "Poznań",
    "Gdańsk",
    "Szczecin",
    "Bydgoszcz",
    "Lublin",
    "Białystok",
    "Katowice",
    "Toruń",
    "Rzeszów",
    "Kielce",
    "Olsztyn",
    "Gorzów Wlk.",
    "Zielona Góra",
    "Opole",
  ];

  const cityDivs = () => {
    return cities.map((item) => {
      return <div className={styles.city}>{item}</div>;
    });
  };

  return <div className={styles.sideBar}>{cityDivs()}</div>;
};
