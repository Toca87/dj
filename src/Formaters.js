export const timeFormat = (time) => { // hh:mm:ss
  let date = new Date(null);
  date.setSeconds(time);
  return date.toISOString().substr(11, 8);
}

export const timeFormatDisabled = '--:--:--'