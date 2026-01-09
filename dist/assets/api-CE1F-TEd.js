const n=`# sendDogecoin

Sends Dogecoin from the connected wallet to a specified address.

## Request

### Method

\`\`\`typescript
sendDogecoin(to: string, amount: number): Promise<string>
\`\`\`

### Parameters

- **to** (string, required): The recipient Dogecoin address
- **amount** (number, required): The amount to send in satoshi (smallest unit of DOGE)

### Example Request

\`\`\`typescript
const txid = await provider.sendDogecoin(
  "D7hrf5D9LPtfC4cRo3UpFg8q6B3KJ2KZ2R",
  2000000,
);
\`\`\`

## Response

### Result

- **Type**: \`string\`
- **Description**: The transaction ID (txid)

### Example Response

\`\`\`json
"a1b2c3d4e5f6..."
\`\`\`

## Example

\`\`\`javascript
const amount = 2000000; // 0.02 DOGE (in satoshi)
const txid = await provider.sendDogecoin(recipientAddress, amount);
console.log("Transaction ID:", txid);
\`\`\`

## Notes

- Amount is specified in satoshi (1 DOGE = 100,000,000 satoshi)
- The transaction is immediately broadcast to the network
- Returns the transaction ID immediately
- The transaction may still be pending when the ID is returned
- Ensure sufficient balance before sending

## Amount Conversion

- 1 DOGE = 100,000,000 satoshi
- 0.01 DOGE = 1,000,000 satoshi
- 0.1 DOGE = 10,000,000 satoshi
- 1 DOGE = 100,000,000 satoshi

## Errors

- \`Provider is not available\`: Wallet is not connected
- \`Insufficient balance\`: Not enough DOGE in the wallet
- \`Invalid address\`: The recipient address is invalid
- \`User rejected the request\`: User denied sending the transaction
`;export{n as default};
