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