const getFormattedDate = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return {
    year : year,
    month : (month < 10 ? '0' : '') + month,
    day : (day < 10 ? '0' : '') + day,
    hour : (hour < 10 ? '0' : '') + hour,
    minutes : (min < 10 ? '0' : '') + min,
    seconds : (sec < 10 ? '0' : '') + sec
  }
};


export {
  getFormattedDate
}