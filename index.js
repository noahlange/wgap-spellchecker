// Module dependencies
var spelling = require('spellchecker');
var fs = require('fs');

// Export check function
module.exports = (text, opts) => {
  
  // Not currently doing anything with these.
  opts = opts || {};
    
  var suggestions = [];
  var wordRegExp = /([\w']+)/g;
  var matchArr;
  
  // Go through the hunk of text and return promises for all the words.
  while ((matchArr = wordRegExp.exec(text)) !== null) {
    
    var match = matchArr;
    var word = match[0];
    
    // Check if the spelling is correct.
    if (spelling.isMisspelled(word)) {
      var suggestion = `${ word } (${ spelling.getCorrectionsForMisspelling(word).slice(0,3).join(', ')})`;
      suggestions.push({ reason: suggestion, index: match.index, offset: word.length });
    }
  }
  
  return suggestions;
  
};