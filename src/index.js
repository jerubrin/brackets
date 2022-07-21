module.exports = function check(str, bracketsConfig) {
    let breaketsCount = []
    for (let j = 0; j < bracketsConfig.length; j++) {
        breaketsCount = breaketsCount.concat(0);
    }
    let waitFor = [];

    let arr = str.split('');
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < bracketsConfig.length; j++){
              if (waitFor[waitFor.length - 1] == j && arr[i] == bracketsConfig[j][1]) {
                  waitFor.pop()
                  breaketsCount[j]--;
              } else if(arr[i] == bracketsConfig[j][0]) {
                  breaketsCount[j]++;
                  waitFor.push(j);
              } else if(arr[i] == bracketsConfig[j][1]) {
                  return false;
              }
        }
    }
    for(let j = 0; j < bracketsConfig.length; j++) {
        if (breaketsCount[j] != 0) return false;
    }
    return true;
}


// module.exports = function check(str, bracketsConfig) {
//   let breaketsCount1 = 0; // ()
//   let breaketsCount2 = 0; // []
//   let breaketsCount3 = 0; // {}
//   let breaketsCount4 = 0; // ||
//   let waitForBreaket = []

//   let brArr = str.split('');
//   for (let i = 0; i < brArr.length; i++) {
//     switch(brArr[i]) {
//       case '(':
//         waitForBreaket.push(')');
//         breaketsCount1++;
//       break;
//       case ')':
//         if(waitForBreaket.pop() != ')') return false;
//         breaketsCount1--;
//       break;
//       case '[':
//         waitForBreaket.push(']');
//         breaketsCount2++;
//       break;
//       case ']':
//         if(waitForBreaket.pop() != ']') return false;
//         breaketsCount2--;
//       break;
//       case '{':
//         waitForBreaket.push('}');
//         breaketsCount3++;
//       break;
//       case '}':
//         if(waitForBreaket.pop() != '}') return false;
//         breaketsCount3--;
//       break;
//       case '|':
//         if(waitForBreaket[waitForBreaket.length - 1] != '|'){
//           breaketsCount4++;
//           waitForBreaket.push('|');
//         } else {
//           waitForBreaket.pop();
//           breaketsCount4--;
//         }
//       break;
//     }
//     // console.log(brArr[i] + 
//     //   " 1=" + breaketsCount1 +
//     //   " 2=" + breaketsCount2 +
//     //   " 3=" + breaketsCount3 +
//     //   " 4=" + breaketsCount4 +
//     //   " arr=" + waitForBreaket);
//     if(breaketsCount1 < 0 || breaketsCount2 < 0 || breaketsCount3 < 0 || breaketsCount4 < 0){
//       return false;
//     }
//   }
//   return breaketsCount1 == 0 && breaketsCount2 == 0 && breaketsCount3 == 0 && breaketsCount4 == 0;
// }
