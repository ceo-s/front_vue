export function toJSFormattedDate(localeDateString) {
  return localeDateString.split(".").reverse().join("-");
}

export function addDays(dateString, days) {
  let date = new Date(dateString);
  date.setDate(date.getDate() + days);
  return date;
}
