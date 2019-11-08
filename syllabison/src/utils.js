export function getCurrentDate() {
  var months = new Array(12);
  months[0] = 'January';
  months[1] = 'February';
  months[2] = 'March';
  months[3] = 'April';
  months[4] = 'May';
  months[5] = 'June';
  months[6] = 'July';
  months[7] = 'August';
  months[8] = 'September';
  months[9] = 'October';
  months[10] = 'November';
  months[11] = 'December';

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();

  return `${months[month]} ${date}, ${year}`;
}
