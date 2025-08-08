// Input:
const arrayString = ["name:John", "age:30", "city:NY"];

function convertArrayToObject(array) {
  // Logic bài toán và trả về kết quả
  return array.reduce((acc, cur) => {
    let result = cur.split(":");
    const [key, value] = result;
    acc[key] = value;
    return acc;
  }, {});
}

// Output:
console.log(convertArrayToObject(arrayString)); // { name: 'John', age: '30', city: 'NY' }
console.log("bai 2");
const categories = [
  { id: 1, name: "Chuyên mục 1", parent: 0 },
  { id: 2, name: "Chuyên mục 2", parent: 0 },
  { id: 3, name: "Chuyên mục 3", parent: 0 },
  { id: 4, name: "Chuyên mục 2.1", parent: 2 },
  { id: 5, name: "Chuyên mục 2.2", parent: 2 },
  { id: 6, name: "Chuyên mục 2.3", parent: 2 },
  { id: 7, name: "Chuyên mục 3.1", parent: 3 },
  { id: 8, name: "Chuyên mục 3.2", parent: 3 },
  { id: 9, name: "Chuyên mục 3.3", parent: 3 },
  { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
  { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
];
//

function convertNested(arr, parentId = 0) {
  return arr
    .filter((item) => item.parent === parentId)
    .map((item) => {
      const children = convertNested(arr, item.id);

      if (children.length > 0) {
        return { id: item.id, name: item.name, children };
      }
      return { id: item.id, name: item.name };
    });
}

const categoriesNess = convertNested(categories);

console.log(categoriesNess);
