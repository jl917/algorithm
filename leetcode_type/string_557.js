/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

  let result = '';
  let tmp = '';

  for(const t of s){
    if(t === ' '){
      result += `${tmp} `
      tmp = '';
    }else{
      tmp = t + tmp;
    }
  }

  return result + tmp;
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("Mr Ding"));
