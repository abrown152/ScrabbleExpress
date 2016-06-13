var Scrabble = function() {
  this.score_hash = {
    "A": 1,
    "B": 3,
    "C": 3,
    "D": 2,
    "E": 1,
    "F": 4,
    "G": 2,
    "H": 4,
    "I": 1,
    "J": 8,
    "K": 5,
    "L": 1,
    "M": 3,
    "N": 1,
    "O": 1,
    "P": 3,
    "Q": 10,
    "R": 1,
    "S": 1,
    "T": 1,
    "U": 1,
    "V": 4,
    "W": 4,
    "X": 8,
    "Y": 4,
    "Z": 10,
  };

};

Scrabble.prototype.score = function(word) {
  var word_array = word.toUpperCase().split("")
  score_value = 0
  // Applies 50pt bonus for words greater than seven characters long
  if (word_array.length >= 7) {
    score_value += 50;
  }
  var self = this;
  word_array.forEach(function(letter) {
    score_value += self.score_hash[letter];
  });
  return score_value;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var score_hash = {}
  var self = this
  arrayOfWords.forEach(function(word) {
    score_hash[word] = self.score(word);
    score_hash
  });

  return (Object.keys(score_hash).reduce(function(a, b){ return score_hash[a] > score_hash[b] ? a : b}) + " is worth " + score_hash[Object.keys(score_hash).reduce(function(a, b){ return score_hash[a] > score_hash[b] ? a : b})] + " points so it is your highest scoring word!");
};

module.exports = Scrabble;
