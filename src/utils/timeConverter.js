export function convertTime(dateString) {
  const date = new Date(dateString);

  if (isNaN(date)) {
    return "";
  }

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  };

  return date.toLocaleString("vi-VN", options);
}
