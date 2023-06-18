export function getProductNutrients(foodAmount) {
  return {
    proteins: (foodAmount.grams / 100) * foodAmount.product.proteins,
    fats: (foodAmount.grams / 100) * foodAmount.product.fats,
    carbohydrates: (foodAmount.grams / 100) * foodAmount.product.carbohydrates,
    calories: (foodAmount.grams / 100) * foodAmount.product.calories,
  };
}

export function getTotalNutrients(nutrientsArray) {
  return nutrientsArray.reduce((prev, nutrientVal) => {
    return {
      proteins: prev.proteins + nutrientVal.proteins,
      fats: prev.fats + nutrientVal.fats,
      carbohydrates: prev.carbohydrates + nutrientVal.carbohydrates,
      calories: prev.calories + nutrientVal.calories,
    };
  });
}
