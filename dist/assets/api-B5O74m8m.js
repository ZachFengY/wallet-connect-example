const e=`# signMessage

Signs a message using the connected Dogecoin wallet.

## Request

### Method

\`\`\`typescript
signMessage(message: string): Promise<string>
\`\`\`

### Parameters

- **message** (string, required): The message to sign

### Example Request

\`\`\`typescript
const signature = await provider.signMessage("Hello from Dogecoin");
\`\`\`

## Response

### Result

- **Type**: \`string\`
- **Description**: The signature of the message

### Example Response

\`\`\`json
"3045022100a1b2c3d4e5f6..."
\`\`\`

## Example

\`\`\`javascript
const message = "Hello from Dogecoin";
const signature = await provider.signMessage(message);
console.log("Signature:", signature);
\`\`\`

## Notes

- The message is signed using the wallet's private key
- The signature can be verified off-chain
- The message format may vary by wallet implementation
- This method requires the wallet to be connected

## Errors

- \`Provider is not available\`: Wallet is not connected
- \`signMessage is not a function\`: Provider does not support this method
- \`User rejected the request\`: User denied signing the message
`;export{e as default};
