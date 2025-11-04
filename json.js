// interConversion JSON to an Object  in Node.js
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
 const jsonObject = JSON.parse(jsonString); // Convert JSON string to object
 console.log(jsonObject.name);



//  inter conversion of object to json

const objectToConvert = { name: "Alice", age: 25 };
const jsonStringified = JSON.stringify(objectToConvert); // Convert object
 
 console.log(jsonStringified); // Output: {"name": "Alice", "age":25