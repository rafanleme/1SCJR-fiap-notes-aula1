const options: Intl.DateTimeFormatOptions = {
  dateStyle: "short",
  timeStyle: "medium",
  // year: "2-digit",
  // month: "numeric"
};

console.log(navigator.language)

export const formatDate = (date: Date) =>
  Intl.DateTimeFormat(undefined, options).format(date);