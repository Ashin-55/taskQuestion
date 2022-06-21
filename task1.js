const inputArry = [
  {
    job_id: 1,
    status: "CONFIRMED",
    assigned_to: ["raghav", "vijay"],
  },
  {
    job_id: 2,
    status: "ON_MY_WAY",
    assigned_to: ["vijay"],
  },
  {
    job_id: 3,
    status: "CONFIRMED",
    assigned_to: ["ranjith"],
  },
  {
    job_id: 4,
    status: "STARTED",
    assigned_to: ["raghav"],
  },
  {
    job_id: 5,
    status: "STARTED",
    assigned_to: ["ranjith"],
  },
  {
    job_id: 6,
    status: "COMPLETED",
    assigned_to: ["vijay"],
  },
];

function resultFun(arr) {
  let obj = {};
  let obj2 = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];

    if (!obj[key.status]) {
      obj[key.status] = 0;
    }

    obj[key.status]++;
  }
  return obj;
}
let count_by_status = resultFun(inputArry);

function nameFun(arr) {
  let arr3 = [];

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i].assigned_to;
    for (let j = 0; j < key.length; j++) {
      let key2 = key[j];
      if (arr3.length > 0) {
        let obj2 = arr3.find((value) => value.name === key2);
        if (obj2) {
          obj2.count++;
        } else {
          let obj = {
            name: key2,
            count: 1,
          };
          arr3.push(obj);
        }
      } else {
        let obj = {
          name: key2,
          count: 1,
        };
        arr3.push(obj);
      }
    }
  }
  return arr3;
}
let count_by_user = nameFun(inputArry);
console.log(
  "count_by_status:",
  count_by_status,
  "count_by_user :",
  count_by_user
);
