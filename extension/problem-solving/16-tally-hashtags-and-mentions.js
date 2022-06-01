const { check, runTest, skipTest } = require("../../test-api");

// declare tallyHashtagsAndMentions here

console.log("tallyHashtagsAndMentions");

runTest("returns an object", function () {
  check(typeof tallyHashtagsAndMentions()).isEqualTo("object");
});
skipTest("returns {hashtags: 0, mentions: 0} if it finds none", function () {
  check(tallyHashtagsAndMentions("hello this is a tweet guaranteed to get very little engagement")).isEqualTo({
    hashtags: 0,
    mentions: 0,
  });
});
skipTest("recognises no mentions", function () {
  check(tallyHashtagsAndMentions("#yolo")).isEqualTo({
    hashtags: 1,
    mentions: 0,
  });
});
skipTest("recognises no hashtags", function () {
  check(tallyHashtagsAndMentions("@yobo")).isEqualTo({
    hashtags: 0,
    mentions: 1,
  });
});
skipTest("finds multiple hashtags and mentions and returns that number", function () {
  check(tallyHashtagsAndMentions("#yolo @bolo #golo")).isEqualTo({
    hashtags: 2,
    mentions: 1,
  });
  check(tallyHashtagsAndMentions("@boyo #goyo @loyo #zoyo")).isEqualTo({
    hashtags: 2,
    mentions: 2,
  });
  check(
    tallyHashtagsAndMentions("So excited to start at @northcoders on Monday! #learntocode #codingbootcamp")
  ).isEqualTo({ hashtags: 2, mentions: 1 });
});
