
// Given an array of arrays : Eg:
// const d = [
//   ["x", "y", "z"],
//   ["x", "y", "a", "b"],
//   ["a", "b", "c"],
//   ["d", "e", "f"],
// ];
//  Find the one that doesn't have any overlaps.




const d = [
  ["x", "y", "z"],
  ["x", "y", "a", "b"],
  ["a", "b", "c"],
  ["d", "e", "f"],
];

function sortArray(arr) {
  let dstin = [];
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!obj[arr[i][j]]) {
        obj[arr[i][j]] = 0;
      }
      obj[arr[i][j]]++;
    }
  }
  // console.log(obj);
  for (let k = 0; k < arr.length; k++) {
    if (obj[arr[k][0]] == 1) {
      let flag = 0;
      for (let w = 1; w < arr[k].length; w++) {
        if (obj[arr[k][w]] !== 1) {
          flag = 1;
          break;
        }
      }
      if (flag == 0) {
        // console.log(arr[k]);
        // break;
        return arr[k];
      }
    }
  }
}
console.log(sortArray(d));
