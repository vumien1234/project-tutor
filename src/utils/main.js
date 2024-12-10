export const convertDateTime = (date) => {
  // convert to 2024-10-20T09:00:00 to dd/mm/yyyy hh:mm:ss
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const seconds = newDate.getSeconds();

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

export const convertDate = (date) => {
  // convert to 2024-10-20T09:00:00 to dd/mm/yyyy
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  return `${day}/${month}/${year}`;
}

export const convertCurrency = (currency) => {
  // convert to vietnamese currency
  return currency.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}