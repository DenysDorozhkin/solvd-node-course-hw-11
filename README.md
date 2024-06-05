<h3 align="center">My JSON Parse</h3>

---

<p align="center"> Custom JSON parser in JavaScript using regular expressions.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Steps of Parsing](#steps_of_parsing)
- [Functions](#functions)
- [Reflection](#reflection)
- [Testing](#testing)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This project implements a custom JSON parser in JavaScript using regular expressions. The parser can convert a JSON string into a JavaScript object. The core function, myJSONParse, tokenizes the input JSON string and then parses the tokens to construct the corresponding JavaScript object.

## 🏁 Getting Started <a name = "getting_started"></a>

```
git clone https://github.com/DenysDorozhkin/solvd-node-course-hw-11.git
```

```
cd solvd-node-course-hw-11
```

## 🎈 Usage <a name = "usage"></a>

Function: `myJSONParse`

This function takes a JSON string as input and returns the corresponding JavaScript object.

```
import { myJSONParse } from './my-json-parse.js';

const jsonString = '{"name": "John", "age": 30, "isStudent": false}';
const jsonObject = myJSONParse(jsonString);
console.log(jsonObject); // Output: { name: 'John', age: 30, isStudent: false }
```

## 🔧 Steps of Parsing <a name = "steps_of_parsing"></a>

1. Tokenization: The tokenize function uses a regular expression to identify and extract JSON elements from the input string, removing any surrounding whitespace.

2. Parsing Values: The parseValue function determines the type of the next token and delegates parsing to the appropriate function (e.g., parseObject, parseArray).

3. Parsing Objects: The parseObject function constructs a JavaScript object by parsing key-value pairs until the closing brace (}) is encountered.

4. Parsing Arrays: The parseArray function constructs a JavaScript array by parsing values until the closing bracket (]) is encountered.

## ↔ Functions <a name = "functions"></a>

`tokenize(jsonString)`

- Input: jsonString - A string containing JSON data.
- Output: An array of tokens.
- Description: Uses a regular expression to extract JSON elements and returns an array of tokens.

`parseObject(tokens)`

- Input: tokens - An array of tokens.
- Output: A JavaScript object.
- Description: Parses key-value pairs into an object until a closing brace (}) is encountered.

`parseArray(tokens)`

- Input: tokens - An array of tokens.
- Output: A JavaScript array.
- Description: Parses values into an array until a closing bracket (]) is encountered.

`parseValue(tokens)`

- Input: tokens - An array of tokens.
- Output: A JavaScript value (object, array, string, number, boolean, or null).
- Description: Determines the type of the next token and delegates parsing to the appropriate function.

## 🚀 Reflection <a name = "reflection"></a>

Experience and Challenges

Implementing a JSON parser with regular expressions was an enlightening experience. Here are some of the challenges encountered and how they were addressed:

1. Complexity of Regular Expressions:

- JSON has a relatively complex structure with various data types (objects, arrays, strings, numbers, booleans, null). Writing a regular expression to accurately capture all these elements required careful consideration.
- To manage this, I broke down the regular expression into parts that match each JSON element type, ensuring that each part was correctly handling its respective element.

2. Handling Escaped Characters in Strings:

- JSON strings can contain escaped characters, which complicates the parsing process.
- The regular expression includes specific handling for escaped characters, ensuring that they are correctly recognized and parsed.

3. Recursive Parsing:

- JSON structures can be nested, necessitating a recursive approach for parsing objects and arrays.
- Functions like parseObject and parseArray were designed to call parseValue recursively, ensuring that nested structures are parsed correctly.

4. Error Handling:

- Proper error handling is crucial for a parser to provide meaningful feedback when encountering invalid JSON.
- I implemented specific error messages for different parsing issues (e.g., expected a string key, expected a colon, unexpected token).

Overall, this project reinforced the importance of careful planning and testing when dealing with complex data parsing. It was a rewarding challenge to create a functional JSON parser from scratch using regular expressions.

## 🎉 Testing <a name = "testing"></a>

To test the functionality, you can use the following code snippets:

```
const testCases = [
  '{"name": "John", "age": 30}',
  '{"booleanTrue": true, "booleanFalse": false, "nullValue": null}',
  '{"array": [1, 2, 3], "nestedObject": {"key": "value"}}',
];

testCases.forEach(test => {
  try {
    const result = myJSONParse(test);
    console.log('Parsed successfully:', result);
  } catch (error) {
    console.error('Parsing failed:', error.message);
  }
});
```

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - App Environment

## ✍️ Authors <a name = "authors"></a>

- https://github.com/DenysDorozhkin
