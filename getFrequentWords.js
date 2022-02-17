const { get } = require("express/lib/response");
var fs = require("fs");
// Calculate Frequency here
const getFrequency = (sentences,number) => {
    const sentencesGroup = {};
    var arr = []
    // #1 remove punctuation and split by space
    const newSentences = sentences
      .toLowerCase()
      .match(/[a-zA-Z]+/g)
  //Organize all words into an object then push it to an array 
    newSentences.forEach((e,idx,array) => {
      !sentencesGroup[e] ? (sentencesGroup[e] = 1) : sentencesGroup[e]++;
      if(idx == array.length - 1){
        for (const key in sentencesGroup) {
          arr.push({word: key, count: sentencesGroup[key]});
      }
      }
    });
    return {
      total: newSentences.length,
      frequencies: arr.sort((a,b)=>{return b.count - a.count})
    };
  };


module.exports = getFrequency;
