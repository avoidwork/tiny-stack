# Tiny Stack

Stack micro library for the browser or server. When loaded as a script tag on the browser, Tiny Stack be available as 'stack()'.

[![build status](https://secure.travis-ci.org/avoidwork/tiny-stack.png)](http://travis-ci.org/avoidwork/tiny-stack)

## API
#### clear
Clears the stack

#### length
Gets the length/size of the stack

#### peek
Gets the top item of the stack

#### pop
Gets & removes the top item of the stack

#### push
Adds an item to the top the stack

#### empty
Tests if this stack is empty

#### search
Returns the 1-based position where an object is on this stack

## Example
```
var stack   = require("tiny-stack"),
    mystack = stack();

var jane = {name: "Jane Doe"};
var john = {name: "John Doe"};
mystack.length(); // 0
mystack.empty(); // true
mystack.push(john);
mystack.push(jane);
mystack.length(); // 2
mystack.search(jane); // 1
mystack.search(john); // 2
mystack.search({}); // -1
mystack.empty(); // false
mystack.peek(); // {name: "Jane Doe"}
mystack.pop();
mystack.length(); // 1
mystack.peek(); // {name: "John Doe"}
mystack.clear();
mystack.length(); // 0
```
