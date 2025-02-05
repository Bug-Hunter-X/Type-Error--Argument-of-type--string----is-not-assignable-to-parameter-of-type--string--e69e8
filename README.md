# Type Error in TypeScript
This repository demonstrates a common type error in TypeScript: passing an array of strings to a function expecting a single string.

## Bug
The `greeter` function expects a string, but we pass an array of strings. This will result in a type error.  See `bug.ts` for the problematic code.

## Solution
The solution in `bugSolution.ts` addresses the type error by iterating through the array of strings and calling the greeter function for each element, or modifying the `greeter` function signature to accept an array of strings.