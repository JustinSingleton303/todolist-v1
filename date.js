
module.exports = getDate;

function getDate() {
  var today = new Date();

  var options = {
    weekday: 'long',
    day: 'numeric',
    year: 'numeric',
    month: 'long'
  }
  var aDay = today.toLocaleDateString("en-US", options);
  return aDay;
}
