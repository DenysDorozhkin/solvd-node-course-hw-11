import { myJSONParse } from "./my-json-parse.js";

// Testing
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = myJSONParse(jsonString);
console.log(jsonObject);

console.log(myJSONParse('{"a":1, "b":[true, false, null, {"c":2}]}'));
console.log(myJSONParse('[1, "string", {"key": "value"}, false, null]'));
console.log(myJSONParse("true"));
console.log(myJSONParse("null"));
console.log(myJSONParse('"Hello"'));
