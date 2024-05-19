/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < seats.length; i++) {
    count += Math.abs(seats[i] - students[i]);
  }

  return count;
};

console.log(minMovesToSeat([3, 1, 5], [2, 7, 4]));
console.log(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6]));
console.log(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6]));
