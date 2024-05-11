/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  const [day, month, year] = date.split(" ");
  const monthMap = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  const dayN = parseInt(day, 10);

  return `${year}-${monthMap[month]}-${dayN > 9 ? dayN : "0" + dayN}`;
};

console.log(reformatDate("20th Oct 2052"));
console.log(reformatDate("6th Jun 1933"));
console.log(reformatDate("26th May 1960"));
