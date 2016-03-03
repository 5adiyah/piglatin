var hasConsonantAt = function(word, position){
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++){
    if(word[position] === vowels[i]){ //So if the letter at position is a vowel then it's going to return a false because vowel != consonant
      return false;
    }
  }
  return true; //If the letter at position is not a vowel, it will return true (letter is a consonant)
};

var indexOfFirstVowel = function(word){
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var letters = word.split("");

  for(var i = 0; i < letters.length; i++){
    for (var k = 0; j < vowels.length; j++){
      if (letters[i] === vowels[j]){
        return i;
      }
    }
  }
};

var pigLatin = function(englishword){
  var englishword = englishword.split(" ");
  if(englishword != ""){
    if(!hasConsonantAt(englishword, 0)){
      var translatedWord = englishword;
    } else if (hasConsonantAt(englishword, 1)){
      var translatedWord = englishword.slice(2) + englishword.slice(0, 2);
    } else if (hasConsonantAt(englishword, 0)){
      var translatedWord = englishword.slice(1) + englishword.slice(0, 1);
    }
    return translatedWord + 'ay';
  }
};

$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    var englishword =$("input#phrase").val();
    var result = pigLatin(englishword);
    $(".sentence").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
