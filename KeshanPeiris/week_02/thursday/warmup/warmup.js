// Anagram Detector
// Write a program that, given a word and a list of possible anagrams, selects the correct one(s).

// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".


var anagram = {
  haveSameLetters: function (word, candidate){
    console.log(word, candidate)
  }
  matches:function(word, candidates){
    console.log(word,candidates)
  }

};
// var word = "listen"
// var potentialsWords = ['enlists', 'google', 'preserve']
// anagram.matches( word, potentialsWords)