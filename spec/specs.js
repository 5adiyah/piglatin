describe("pigLatin", function() {
  it('adds an ay to the end of a word that starts with the letter a', function() {
    pigLatin("apple").should.equal("appleay");
  });

  it('adds an ay to the end of a word that starts with a vowel', function() {
    pigLatin("apple").should.equal("appleay");
  });

  it('takes a single consonant at the beginning of a word and moves it to the end', function() {
    pigLatin("cat").should.equal("atcay");
  });

  it('takes two consonants at the beginning of a word and moves them to the end', function() {
    pigLatin("cricket").should.equal("icketcray");
  });

});

describe("hasConsonantAt", function() {
  it('returns true if a word has a consonant in the specified spot', function() {
    hasConsonantAt("peanut", 0).should.equal(true);
  });

  it('returns false if a word does not have a consonant in the specified spot', function() {
    hasConsonantAt("peanut", 1).should.equal(false);
  });
});

describe("indexOfFirstVowel", function() {
  it('returns 0 for a word htheat starts with a vowel', function() {
    indexOfFirstVowel("peanut", 0).should.equal(true);
  });

});
