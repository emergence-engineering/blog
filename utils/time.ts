export const convertTimestampToLocaleDateString = (
  timestamp: number,
  locale = "en-US",
): string => {
  const date = new Date(timestamp);

  return date.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
