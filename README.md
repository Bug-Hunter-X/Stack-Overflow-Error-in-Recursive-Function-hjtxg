# Stack Overflow Error in Recursive Function

This repository demonstrates a common error in recursive JavaScript functions: stack overflow due to a missing or incorrect base case. The function `foo` is supposed to compare two numbers. However, when `a` is greater than `b`, the function makes recursive calls without ever reaching a stopping condition, resulting in a stack overflow error.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version with a proper base case to prevent stack overflow.

## How to Reproduce

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run the buggy code using Node.js: `node bug.js`
4. Observe the stack overflow error.
5. Run the corrected code: `node bugSolution.js`
6. Observe the correct output.

This example highlights the importance of carefully designing base cases in recursive functions to avoid infinite recursion and subsequent stack overflow errors.