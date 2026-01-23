import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Categories</h2>

      <Link to="/electronics">electronics</Link><br />
      <Link to="/clothes">clothes</Link><br />
      <Link to="/books">books</Link><br />
      <Link to="/mobiles">mobiles</Link>
      <Link to="/seafood">Seafood Meals</Link>

    </div>
  );
};

export default Home;
