/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  const words = title.split(" ");

  return words.map((word) => {
    if (word.length > 2) {
      return `${word[0].toLocaleUpperCase()}${word
        .slice(1)
        .toLocaleLowerCase()}`;
    } else {
      return word.toLocaleLowerCase();
    }
  }).join(' ');
};

console.log(capitalizeTitle("capiTalIze tHe titLe"));
console.log(capitalizeTitle("First leTTeR of EACH Word"));
console.log(capitalizeTitle("i lOve leetcode"));
