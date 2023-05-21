export function transformProgram(daysArr) {
  // transforms array with days to array with weeks filled with its days
  const weeks = [];
  while (daysArr.length) {
    weeks.push(daysArr.slice(0, 7));
    daysArr = daysArr.slice(7);
  }
  return weeks;
}
