function ExampleConstructor(){

}

console.log('the value of of prototype property:', ExampleConstructor.prototype)
console.log('typeof value for prototype property:', typeof ExampleConstructor)

var newObject = new ExampleConstructor();
var instanceCheck = newObject instanceof ExampleConstructor


console.log('the instance value of newObject:', instanceCheck)
