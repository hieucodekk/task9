console.log("Bài 1");
function bt1() {
  const orders = [
    { id: 1, amount: 100, date: "2025-04-01", status: "completed" },
    { id: 2, amount: 200, date: "2025-04-02", status: "pending" },
    { id: 3, amount: 150, date: "2025-04-03", status: "completed" },
    { id: 4, amount: 300, date: "2025-04-04", status: "shipped" },
    { id: 5, amount: 50, date: "2025-04-05", status: "cancelled" },
    { id: 6, amount: 120, date: "2025-04-06", status: "completed" },
    { id: 7, amount: 180, date: "2025-04-07", status: "shipped" },
    { id: 8, amount: 220, date: "2025-04-08", status: "pending" },
    { id: 9, amount: 350, date: "2025-04-09", status: "completed" },
    { id: 10, amount: 500, date: "2025-04-10", status: "completed" },
  ];
  function calculateTotalCompletedAmount(array, amount) {
    const result = array.reduce((acc, cur) => {
      if (cur.status === "completed" && cur.amount > amount) {
        return acc + cur.amount;
      }
      return acc;
    }, 0);
    return result;
  }

  // Output:
  const result = calculateTotalCompletedAmount(orders, 150);
  console.log(result); // 850

  const result2 = calculateTotalCompletedAmount(orders, 1000);
  console.log(result2); // 0
}
bt1();
console.log("bài 2:");
function bt2() {
  const fruits = [
    "apple",
    "banana",
    "kiwi",
    "kiwi",
    "banana",
    "orange",
    "apple",
    "kiwi",
  ];

  function removeDuplicate(arr) {
    // Xử lý và in ra kết quả
    const result = arr.reduce((acc, cur) => {
      if (!acc.includes(cur)) {
        acc.push(cur);
      }
      return acc;
    }, []);
    return result;
  }

  // Output:
  const result3 = removeDuplicate(fruits);
  console.log(result3); // ["apple", "banana", "kiwi", "orange"]
}
bt2();
console.log("Bài 3");
function bt3() {
  Array.prototype.map2 = function (callback) {
    const arr = new Array(this.length);
    const length = this.length;
    for (let i = 0; i < length; i++) {
      if (this.hasOwnProperty(i) && this[i] !== " ") {
        arr[i] = callback(this[i], i, this);
      }
    }
    return arr;
  };

  // Sample 1
  const arr1 = [1, 2, 3, 4, 5];
  const result1 = arr1.map2((value) => value * 2);

  console.log(result1); // [2, 4, 6, 8, 10]
  console.log(`Do dai ${result1.length}`); // 5

  // Sample 2
  const arr2 = [1, , , , 5]; // Có phần tử trống
  const result2 = arr2.map2((value) => value * 2);

  console.log(result2); // [2, , , , 10]
  console.log(`Do dai ${result2.length}`); // 5
}
bt3();
console.log("Bài 4:");
function bt4() {
  Array.prototype.forEach2 = function (callback) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
      if (this.hasOwnProperty(i) && this[i] !== " ") {
        callback(this[i], i, this);
      }
    }
  };

  // Sample usage
  const arr = [1, 2, 3, 4, 5];

  arr.forEach2((value, index) => {
    console.log(`Value at index ${index}: ${value}`);
  });

  // Output:
  // Value at index 0: 1
  // Value at index 1: 2
  // Value at index 2: 3
  // Value at index 3: 4
  // Value at index 4: 5
}
bt4();
