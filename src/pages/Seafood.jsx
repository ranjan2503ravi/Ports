import React, { useEffect, useState } from "react";
import axios from "axios";

const Seafood = () => {
  const [meals, setMeals] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );
      setMeals(res.data.meals);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🍤 Seafood Meals</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {meals.map((item) => (
          <div
            key={item.idMeal}
            style={{
              width: "180px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              style={{ width: "100%", borderRadius: "6px" }}
            />
            <p>{item.strMeal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seafood;
