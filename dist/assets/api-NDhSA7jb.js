const n=`# getAccounts

Returns the currently connected Dogecoin wallet accounts without requesting permission.

## Request

### Method

\`\`\`typescript
getAccounts(): Promise<string[]>
\`\`\`

### Parameters

None

## Response

### Result

- **Type**: \`string[]\`
- **Description**: Array of currently connected account addresses, or empty array if not connected

### Example Response

\`\`\`json
["D7hrf5D9LPtfC4cRo3UpFg8q6B3KJ2KZ2R"]
\`\`\`

## Example

\`\`\`javascript
const accounts = await provider.getAccounts();
console.log("Accounts:", accounts);
\`\`\`

## Notes

- This method does not trigger a user approval prompt
- Returns an empty array if no accounts are connected
- Use \`requestAccounts()\` if you need to request access
- The returned accounts are the currently authorized accounts

## Differences from requestAccounts

- \`getAccounts()\`: Returns current accounts without prompting
- \`requestAccounts()\`: Requests permission and returns accounts
`;export{n as default};
