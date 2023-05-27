import {
  addDays,
  toJSFormattedDate,
} from "@/components/shared/lib/DateManagment";

export const trainingExercise = (count, dayId) => {
  return {
    exercise: null,
    name: "",
    count: count,
    sets: null,
    reps: null,
    weight: null,
    comment: "",
    training_day: dayId,
  };
};

export const programDay = (date, programId) => {
  return {
    exercises: [],
    date: date,
    program: programId,
  };
};

export const weekdays = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

export const trainingWeek = (programId, dateStart) => {
  const week = [];
  let date = dateStart;
  console.log("aA?");
  for (let i = 0; i < 7; i++) {
    console.log("a", i);
    week.push(programDay(date, programId));
    date = addDays(toJSFormattedDate(date), 1).toLocaleDateString();
  }
  return week;
};
