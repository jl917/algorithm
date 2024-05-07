/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let count = 0;

  for(let i = 0; i< s.length; i++){
    if(s[i] === ' '){
      count++
    }

    if(count >= k){
      return s.slice(0, i);
    }
  }

  return s;
};

console.log(truncateSentence("Hello how are you Contestant", 4));
console.log(truncateSentence("What is the solution to this problem", 4));
console.log(truncateSentence("chopper is not a tanuki", 5));
