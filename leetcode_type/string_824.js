/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  return sentence.split(" ").map((str,i) => {
    let word = '';
    let postFix = 'ma';
    let count = i+1;
    while(count > 0){
      postFix += 'a';
      count--;
    }
    if(set.has(str[0])){
      word = str;
    }else{
      word = str.slice(1) + str[0];
    }

    return word + postFix;
  }).join(' ');
};

console.log(toGoatLatin("I speak Goat Latin"));
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"));
