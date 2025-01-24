import { FoodList } from "../components/foodCategory/FoodList";
import { useState, useEffect } from "react";
import { getFoodsByType } from "../api";
import { useParams } from "react-router-dom";


const GetFoodByCategory = ({ addFood }) => {
  const [foods, setFoods] = useState([]);
  const { type } = useParams();
  console.log(
    "orders ",
    localStorage.getItem("OrderID")
  );
  console.log("Sono il type", { type });
  console.log("Sono il addfood", { addFood });

  const loadFood = async () => {
    const result = await getFoodsByType(type);
    setFoods(result.data);
  };
  useEffect(() => {
    loadFood();
  }, []);

  return (
    <>
  
      <FoodList
        food={foods}
        addFood={addFood}
        idOrder={localStorage.getItem("OrderID")}
      />
    </>
  );
};

export default GetFoodByCategory;
