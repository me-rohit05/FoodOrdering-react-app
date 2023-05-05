import React, { Fragment } from "react";
import MealsSummary from "./MealsSummery";
import AvailableMeals from "./AvailableMeals";

function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}

export default Meals;
