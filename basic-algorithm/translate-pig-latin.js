function translatePigLatin(str) {
  var vowel = /[aeiou]/;
  var firstVowel = str.match(vowel).index;
  var firstConsonant = str.substr(0, firstVowel);
  var rest = str.substr(firstVowel);
  var ret = rest;

  if (firstVowel === 0) {
    ret += 'w';
  }
  ret += firstConsonant;
  ret += 'ay';

  return ret;
}

module.exports = translatePigLatin;
