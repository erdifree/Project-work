import { DrinkList } from "../components/foodCategory/DrinkList";
import { useState, useEffect } from "react";
import { getDrinksByType } from "../api";
import { useParams } from "react-router-dom";

export const GetDrinksByCategory = ({ addDrink }) => {
  const [drinks, setDrinks] = useState([]);
  const { type } = useParams();
  console.log(" LOCAAAAAAAAAAAAAAAAAAAAA", localStorage.getItem("OrderID"));
  console.log("Sono il type drinkkkkkkkk ", { type });
  const loadDrinks = async () => {
    const result = await getDrinksByType(type);
    setDrinks(result.data);
  };
  console.log("LISTA PIATTTIIIII", drinks);
  useEffect(() => {
    loadDrinks();
  }, []);

  return (
    <DrinkList
      drinks={drinks}
      addDrink={addDrink}
      idOrder={localStorage.getItem("OrderID")}
    />
  );
};
