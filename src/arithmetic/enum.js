
//完美立方 解法  枚举
//枚举的核心：优化枚举条件，有些值不需要判断
function t(n){
  for(let a=2;a<n;a++){
    for(let b = 2;b<a;b++){
      for(let c = b;c<a;c++){
        for(let d = c;d<a;d++){
          if(a*a*a ===b*b*b+c*c*c+d*d*d){
            console.log(a,b,c,d)
          }
        }
      }
    }
  }
}

// t(100)

//  人有体力、情商、智商的高峰日子，它们分别每隔23天、28天和33天出现一次。对于每个人，我们想知道何时三个高峰落在同一天。
// 给定三个高峰出现的日子p,e和i（不一定是第一次高峰出现的日子）, 再给定另一个指定的日子d，你的任务是输出日子d之后，下一次三个高峰落在同一天的日子（用距离d 的天数表示）。
// 例如：给定日子为10，下次出现三个高峰同一天的日子是12，则输出2。
//  输入：
//  输入四个整数：p, e, i和d。 p, e, i分别表示体力、情感和智力高峰出现的日子。d是给定的日子，可能小于p, e或 i。所有给定日子是非负的并且小于或等于365，所求的日子小于或等于21252。
//  输出：
//  从给定日子起，下一次三个高峰同一天的日子（距离给定日子的天数）。
//  输入样例：
//  0 0 0 0
//  0 0 0 100
//  5 20 34 325
//  4 5 6 7
//  283 102 23 320
//  203 301 203 40
//  -1 -1 -1 -1
//  输出样例：
//  Case 1: the next triple peak occurs in 21252 days.
//  Case 2: the next triple peak occurs in 21152 days.
//  Case 3: the next triple peak occurs in 19575 days.
//  Case 4: the next triple peak occurs in 16994 days.
//  Case 5: the next triple peak occurs in 8910 days.
//  Case 6: the next triple peak occurs in 10789 days.
function t2(p,e,i,d){
  let day = d+1
	for(;(day-p)%23!=0;day++)
  console.log(day,day-p)

  for(;(day-e)%28!= 0;day+=23);
  console.log(day)

  for(;(day-i)%33!= 0;day+=23*28);
  console.log(day)

  let find = day-d;
  console.log(find)
}
t2(5,20,34,325)