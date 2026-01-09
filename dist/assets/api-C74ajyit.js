const n=`# eth_getTransactionCount

Returns the number of transactions sent from an address.

## Request

### Method

\`\`\`
eth_getTransactionCount
\`\`\`

### Parameters

- **address** (string, required): 20 Bytes - address
- **blockNumber** (string, optional): integer block number, or the string \`"latest"\`, \`"earliest"\` or \`"pending"\`, see the default block parameter

### Example Request

\`\`\`json
{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionCount",
  "params": ["0x407d73d8a49eeb85d32cf465507dd71d507100c1", "latest"],
  "id": 1
}
\`\`\`

## Response

### Result

- **Type**: \`string\` (hex string)
- **Description**: Integer of the number of transactions sent from this address

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
const count = await provider.request({
  method: "eth_getTransactionCount",
  params: [address, "latest"],
});
console.log("Transaction Count:", count);
\`\`\`

## Notes

- The transaction count is also known as the nonce
- This value is used when creating new transactions
- Use \`"latest"\` for the most recent count
- Use \`"pending"\` for the count including pending transactions
`;export{n as default};
