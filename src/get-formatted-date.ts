const getFormattedDate = (date: Date) => {

  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

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