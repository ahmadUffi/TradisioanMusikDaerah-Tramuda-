import { useEffect, createContext, useContext } from "react";
import { useState } from "react";

export const ItemsContext = createContext();
function ItemsProvider({ children }) {
  const context = useContext(ItemsContext);
  const [item, setItem] = useState({});

  const API = "API";
  const dataItem = {
    id: "",
    nama: "",
    iframe: "0",
    iframe_2: "0",
    iframe_3: "0",
    memainkan: "",
    asal: "",
    p1: "",
    p2: "",
  };

  useEffect(() => {
    const fatchData = () => {
      if (localStorage.getItem(API) == null) {
        localStorage.setItem(API, "{}");
      } else {
        const getAPI = JSON.parse(localStorage.getItem(API));
        setItem(getAPI);
      }
    };

    fatchData();
  }, []);

  function changeItem(newItem) {
    localStorage.setItem(API, JSON.stringify(newItem));
    const getAPI = JSON.parse(localStorage.getItem(API));
    setItem(getAPI);
  }

  return (
    <ItemsContext.Provider value={{ item, changeItem }}>
      {children}
    </ItemsContext.Provider>
  );
}

export default ItemsProvider;
