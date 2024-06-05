// Uses a regular expression to identify and extract JSON elements from the input string, removing any surrounding whitespace.
function tokenize(jsonString) {
  const regex =
    /\s*(true|false|null|[{}\[\],:]|"(?:\\["\\\/bfnrt]|\\u[a-fA-F0-9]{4}|[^"\\])*"|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\s*/g;
  let tokens = [];
  let match;
  while ((match = regex.exec(jsonString))) {
    tokens.push(match[1]);
  }
  return tokens;
}

// Constructs a JavaScript object by parsing key-value pairs until the closing brace (}) is encountered.
function parseObject(tokens) {
  let obj = {};
  let token;

  if (tokens[0] === "}") {
    tokens.shift();
    return obj;
  }

  do {
    token = tokens.shift();
    if (token[0] !== '"') throw new SyntaxError("Expected string key");
    let key = token.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");

    token = tokens.shift();
    if (token !== ":") throw new SyntaxError("Expected colon after key");

    obj[key] = parseValue(tokens);

    token = tokens.shift();
  } while (token === ",");

  if (token !== "}") throw new SyntaxError("Expected closing brace");

  return obj;
}

// Constructs a JavaScript array by parsing values until the closing bracket (]) is encountered.
function parseArray(tokens) {
  let arr = [];
  let token;

  if (tokens[0] === "]") {
    tokens.shift();
    return arr;
  }

  do {
    arr.push(parseValue(tokens));
    token = tokens.shift();
  } while (token === ",");

  if (token !== "]") throw new SyntaxError("Expected closing bracket");

  return arr;
}

// Determines the type of the next token and delegates parsing to the appropriate function (parseObject, parseArray, etc.).
function parseValue(tokens) {
  let token = tokens.shift();

  if (token === "{") return parseObject(tokens);
  if (token === "[") return parseArray(tokens);
  if (token === "true") return true;
  if (token === "false") return false;
  if (token === "null") return null;
  if (/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(token)) return parseFloat(token);
  if (/^".*"$/.test(token))
    return token.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");

  throw new SyntaxError("Unexpected token: " + token);
}

// Combines tokenization and parsing steps to convert a JSON string into a JavaScript object. It first tokenizes the input string and then parses the tokens, ensuring that there are no leftover tokens after parsing.
export function myJSONParse(jsonString) {
  let tokens = tokenize(jsonString);
  let result = parseValue(tokens);

  if (tokens.length !== 0)
    throw new SyntaxError("Unexpected tokens after parsing");

  return result;
}
