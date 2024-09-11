const array1 = ['a', 'b', 'c', 'a', 'a', 'd', 'b'];
const array2 = [1, 2, 3, 4, 5, 6, 7, 1, 3, 4];

const question1 = (array) => {
  return array.filter((item, index) => array.indexOf(item) !== index);
};

console.log(question1(array1));
console.log(question1(array2));
