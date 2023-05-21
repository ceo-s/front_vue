export const dayReference = (dietProgramId) => {
  return {
    meals: [],
    name: "Somename",
    diet_program: dietProgramId,
  };
};

export const dietMeal = (dayId) => {
  return {
    food_amount: [],
    name: "Meal",
    day: dayId,
  };
};
