const n=`# requestAccounts

Requests access to the user's Dogecoin wallet accounts.

## Request

### Method

\`\`\`typescript
requestAccounts(): Promise<string[]>
\`\`\`

### Parameters

None

## Response

### Result

- **Type**: \`string[]\`
- **Description**: Array of account addresses

### Example Response

\`\`\`json
["D7hrf5D9LPtfC4cRo3UpFg8q6B3KJ2KZ2R"]
\`\`\`

## Example

\`\`\`javascript
const accounts = await provider.requestAccounts();
console.log("Accounts:", accounts);
\`\`\`

## Notes

- This method triggers a user approval prompt
- Returns an array of connected account addresses
- The first account is typically the primary account
- This method is required before accessing other wallet methods

## Errors

- \`Provider is not available\`: Wallet is not connected
- \`User rejected the request\`: User denied account access
`;export{n as default};
