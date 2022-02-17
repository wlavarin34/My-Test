const frequent = require("../getFrequentWords");
var fs = require("fs");

test("Get the total amount of words within a txt file",()=>{
    expect(frequent(fs.readFileSync("./test.txt").toString()
    ).total).toEqual(425);
});

test("Get the top 5 most frequent word",()=>{
  expect(frequent(fs.readFileSync("./test.txt").toString()
  ).frequencies.splice(0,5)).toEqual([{"count": 12, "word": "sed"}, {"count": 10, "word": "id"}, {"count": 8, "word": "sit"}, {"count": 8, "word": "amet"}, {"count": 8, "word": "ut"}]);
});