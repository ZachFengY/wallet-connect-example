const n=`# getBalance

Returns the current balance of the connected Dogecoin wallet.

## Request

### Method

\`\`\`typescript
getBalance(): Promise<{ balance: number }>
\`\`\`

### Parameters

None

## Response

### Result

- **Type**: \`{ balance: number }\`
- **Description**: Object containing the balance in satoshi (smallest unit of Dogecoin)

### Example Response

\`\`\`json
{
  "balance": 2000000
}
\`\`\`

## Example

\`\`\`javascript
const result = await provider.getBalance();
console.log("Balance:", result.balance); // 2000000 (0.02 DOGE)
\`\`\`

## Notes

- Balance is returned in satoshi (1 DOGE = 100,000,000 satoshi)
- To convert to DOGE, divide by 100,000,000
- This method requires the wallet to be connected

## Errors

- \`Provider is not available\`: Wallet is not connected
- \`getBalance is not a function\`: Provider does not support this method
`;export{n as default};
