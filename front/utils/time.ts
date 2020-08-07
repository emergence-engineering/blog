export const convertTimestampToLocaleDateString = (
  timestamp: number,
  locale = "en-US",
): string => {
  const date = new Date(timestamp);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(locale, options);
};
