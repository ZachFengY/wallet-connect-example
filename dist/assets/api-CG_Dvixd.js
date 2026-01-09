const n=`# signPsbt

Signs a Partially Signed Bitcoin Transaction (PSBT) for Dogecoin.

## Request

### Method

\`\`\`typescript
signPsbt(psbtHex: string): Promise<string>
\`\`\`

### Parameters

- **psbtHex** (string, required): The PSBT in hexadecimal format

### Example Request

\`\`\`typescript
const psbtHex = "70736274ff0100...";
const signedPsbt = await provider.signPsbt(psbtHex);
\`\`\`

## Response

### Result

- **Type**: \`string\`
- **Description**: The signed PSBT in hexadecimal format

### Example Response

\`\`\`json
"70736274ff0100..."
\`\`\`

## Example

\`\`\`javascript
const psbtHex = "70736274ff0100...";
const signedPsbt = await provider.signPsbt(psbtHex);
console.log("Signed PSBT:", signedPsbt);
\`\`\`

## Notes

- PSBT (Partially Signed Bitcoin Transaction) is used for multi-signature transactions
- The PSBT must be properly formatted
- The wallet will sign the inputs it controls
- The signed PSBT can be combined with other signatures and broadcast

## Errors

- \`Provider is not available\`: Wallet is not connected
- \`signPsbt is not a function\`: Provider does not support this method
- \`Invalid PSBT\`: The PSBT format is incorrect
- \`User rejected the request\`: User denied signing the PSBT
`;export{n as default};
