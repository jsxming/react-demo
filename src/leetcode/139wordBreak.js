// https://leetcode.cn/problems/word-break/solution/dong-tai-gui-hua-ji-yi-hua-hui-su-zhu-xing-jie-shi/
// 139
function wordBreak(s, wordDict) {
  const n = s.length;
  const wordDictSet= new Set(wordDict);
  const dp = new Array(n + 1).fill(false);
  console.log(n)
  dp[0] = true;
  for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        // console.log(wordDictSet.has(s.substr(j, i - j)),s.substr(j, i - j))
          if (dp[j] && wordDictSet.has(s.substr(j, i - j))) {
            console.log(dp[i],i)
              dp[i] = true;
              break;
          }
      }
  }
  console.log(dp,n)
  return dp[n];
};


let r1 = wordBreak('leetcode',["leet", "code"])
// let r2 = wordBreak('aaaaaaa',["aaaa", "aaa"])
// let r3 = wordBreak('goalspecial',["go","goal","goals","special"])
// let r4 = wordBreak('applepenapple',["apple", "pen"])
// console.log(r1,r2,r3,r4)
console.log(r1)
// export default {}
