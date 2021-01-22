/* => isObject Function
Write a method that verifies an argument is a plain object, not an array or null */
const isPlainObject = element =>
  typeof element === "object" && !Array.isArray(element) && element !== null;
const data = { a: 1 };
console.log(isPlainObject(data)); // true

const data1 = [23, 23, 1];
console.log(isPlainObject(data1));

const data2 = null;
console.log(isPlainObject(data2));

/* => makePairs Function
Write a method that returns a deep array like [[key, value]] */
const makePairs = object => {
  return Object.entries(object);
};
const data = { a: 1, b: 2 };
console.log(makePairs(data)); // [['a', 1], ['b', 2]]

/* => withoutKeys Function
Write a method that returns new object without provided properties */
const without = (object, ...args) => {
  const newObject = { ...object };

  args.forEach(arg => {
    delete newObject[arg];
  });

  return newObject;
};

const data = { a: 1, b: 2, c: 23 };
console.log(without(data, "b", "c")); // { a: 1 }

/* => isEmpty Function
Write a method that makes a shallow check is object empty */
const isEmpty = object => {
  const objectKeys = Object.keys(object);
  if (objectKeys.length === 0) {
    return true;
  }
  return !objectKeys.filter(
    key => object[key] || object[key] === 0 || object[key] === false
  ).length;
};
const data = { a: 1, b: undefined };
const data2 = { a: undefined };
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true

/* => isEqual Function
Write a method that makes a shallow compare of two objects */
export const isEqual = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  if (firstObjKeys.length !== secondObjKeys.length) {
    return false;
  }

  return !firstObjKeys.filter(key => firstObj[key] !== secondObj[key]).length;
};

/* => Invoke Function
Write a method that invokes an array method on a specific path */
const invoke = (object, path, func, args) => {
  const keys = path.split(".");
  let actualData = [];
  let sliceOfObject = object;
  for (key of keys) {
    sliceOfObject = sliceOfObject[key];
  }
  return sliceOfObject[func](...args);
};
const data = { a: { b: [1, 2, 3], x: { c: [23, 23, 1, 2] } } };
console.log(invoke(data, "a.b", "splice", [1, 2])); // [2, 3]




/* => isEmptyDeep Function
Task description: Write a method that makes a deep check is an object empty */

const isEmptyDeep = (element) => {
  const flattenObject = obj =>  Object.assign({}, ...function _flatten(o) { return [].concat(...Object.keys(o).map(k => typeof o[k] === 'object' ? _flatten(o[k]) : ({[k]: o[k]})))}(obj))
  const isEmpty = object => {
    const objectKeys = Object.keys(object);
    if (objectKeys.length === 0) {
      return true;
    }
    return !objectKeys.filter(
      key => object[key] || object[key] === 0 || object[key] === false
    ).length;
  };
  
  return isEmpty(flattenObject(element))
};
const data = { a: { b: undefined, } };
console.log(isEmptyDeep(data)); // true


