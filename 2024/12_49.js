/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();

  for(const str of strs){
    const key = str.split('').sort().join('');

    let tmpArr = map.get(key) || [];

    tmpArr.push(str);
    map.set(key, tmpArr)
  }
  return [...map.values()]
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
