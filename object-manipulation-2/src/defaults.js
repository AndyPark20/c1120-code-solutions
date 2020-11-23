/* exported defaults */

function defaults(target,source) {
  for (var targetName in target) {
    for (var sourceName in source) {

    }
  }
}


const target = {};
const source = {
  foo: 1,
  bar: 2,
  baz: 3
};
defaults(target, source);
console.log(target) // -> { foo: 1, bar: 2, baz: 3 }
