# README
# IVY ASSIGNMENT

## ASK FROM ASSIGNMENT
 Given access to an autocomplete API running at `http://35.200.185.69:8000`, Task is to extract ALL possible names available through this API's autocomplete system.
## REQUIREMENTS
 1. Writing a program that can efficiently extract all possible names from the autocomplete system
 2. Solution must work within the API's constraints.
 3. Document any interesting findings, endpoints, or features.
 4. Include your approach to solving rate limiting and other challenges you encounter
## Approach and Findings
1. **Approach**: 
    - Analyzed the API documentation to understand the endpoints, parameters, and response structure.
    - Designed a script to automate API requests and handle pagination (if applicable).
    - Parsed and stored the API responses for further analysis.
    - Validated the data to ensure accuracy and completeness.

2. **Findings**:
    - Time taken by one response is approximately 171 ms;
    - Identified key insights and patterns in the data.
    - Have 3 verions and the prefix is varying upto first 3 characters
    - Request processed (Without Rate Limiting) -> 100.

## Tools and Scripts
- **Scripts**: 
  - Created a backend using the `Axios' && 'Express.js` library for API interaction.
  - Used `generate.js` for prefix generation.
  - Implemented error handling to manage API rate limits and unexpected responses.

- **Tools**:
  - Postman for initial API exploration and testing.
  - Expressjs,body-parser and Axios are used.

## Total Number of Requests
- The total number of API requests made: [18719*3]

## Total Number of Records
- The total number of records obtained from the API: [[v1]-10009,[v2]-4345,[v3]-3417]

## How to Run the Script
1. Clone the repository.
2. Install the required dependencies using `npm i`.
3. Run the server using `npx nodemon server.js`.
4. For frontend run `npm run dev`.

## Notes
- Ensure you have a valid API key (if required) and update the script accordingly.
- Refer to the API documentation for any additional configuration.

