//npm i <packageName> -> local
//npm i -g <packageName> -> global
//npm uninstall <packageName>
//npm init 



const _ = require('lodash');

const items = [1, [2, [3, 4]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello people');