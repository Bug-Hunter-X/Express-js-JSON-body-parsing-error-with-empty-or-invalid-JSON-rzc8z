# Express.js JSON Body Parsing Error with Empty or Invalid JSON
This repository demonstrates a common error in Express.js applications where JSON body parsing fails when the request body is empty or contains invalid JSON data.

## Bug Description
The provided Express.js code snippet uses `express.json()` middleware to parse incoming JSON request bodies.  However, it doesn't handle cases where the request body is empty or contains malformed JSON. This leads to an unexpected behavior where the server logs an empty object (`{}`) instead of raising an error, making it harder to debug.

## Bug Reproduction Steps
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `node bug.js` to start the server.
4. Send a POST request to `/user` with an empty request body or an invalid JSON payload (e.g., missing closing bracket).
5. Observe the server's console log. It will show an empty object instead of any error indication.

## Solution
The `bugSolution.js` file demonstrates a solution that addresses the issue using error handling. The solution uses a `try...catch` block to handle potential `JSON.parse` errors which provides more robust handling of invalid or empty JSON bodies.