const n=`# eth_chainId

Returns the current chain ID.

## Request

### Method

\`\`\`
eth_chainId
\`\`\`

### Parameters

None

## Response

### Result

- **Type**: \`string\` (hex string)
- **Description**: The current chain ID in hexadecimal format (e.g., \`"0x1"\` for Ethereum mainnet)

### Example Response

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1"
}
\`\`\`

## Example

\`\`\`javascript
const chainId = await provider.request({ method: "eth_chainId" });
console.log("Chain ID:", chainId); // "0x1"
\`\`\`

## Common Chain IDs

- \`0x1\` - Ethereum Mainnet
- \`0x5\` - Goerli Testnet
- \`0x89\` - Polygon Mainnet
- \`0x2105\` - Base Mainnet
- \`0xa\` - Optimism Mainnet
- \`0xa4b1\` - Arbitrum One

## Errors

This method does not return errors in normal operation.
`;export{n as default};
