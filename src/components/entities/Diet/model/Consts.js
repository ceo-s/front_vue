export const dayReference = (name, dietProgramId) => {
  return {
    meals: [],
    name,
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

export const scheduleDay = (count, programId, dayType) => {
  return {
    count,
    program: programId,
    day_type: dayType,
  };
};

export const dailyNutrients = (programId) => {
  return {
    name: "Somename",
    water: 0,
    proteins: 0,
    fats: 0,
    carbohydrates: 0,
    calories: 0,
    diet_program: programId,
  };
};
