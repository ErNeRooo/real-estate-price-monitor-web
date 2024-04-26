import styles from "./SideBar.module.sass";

interface Props {
  cityNameSetter: React.Dispatch<string>;
}

export const SideBar = ({ cityNameSetter }: Props) => {
  const cities: Map<string, string> = new Map([
    ["Warszawa", "Warszawie"],
    ["Kraków", "Krakowie"],
    ["Wrocław", "Wrocławiu"],
    ["Łódź", "Łodzi"],
    ["Poznań", "Poznaniu"],
    ["Gdańsk", "Gdańsku"],
    ["Szczecin", "Szczecinie"],
    ["Bydgoszcz", "Bydgoszczy"],
    ["Lublin", "Lublinie"],
    ["Białystok", "Białymstoku"],
    ["Katowice", "Katowicach"],
    ["Toruń", "Toruniu"],
    ["Rzeszów", "Rzeszowie"],
    ["Kielce", "Kielcach"],
    ["Olsztyn", "Olsztynie"],
    ["Gorzów Wlk.", "Gorzowie Wielkopolskim"],
    ["Zielona Góra", "Zielonej Górze"],
    ["Opole", "Opolu"],
  ]);

  const onClickHandler = (key: string) => {
    const value: string = cities.get(key) ?? "";
    cityNameSetter(value);
  };

  const cityDivs = () => {
    return Array.from(cities).map(([key, value]) => {
      return (
        <div
          onClick={() => {
            onClickHandler(key);
          }}
          className={styles.city}
        >
          {key}
        </div>
      );
    });
  };

  return <div className={styles.sideBar}>{cityDivs()}</div>;
};
