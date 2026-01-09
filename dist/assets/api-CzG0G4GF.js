const n=`# eth_getBalance

Returns the balance of the account of given address.

## Request

### Method

\`\`\`
eth_getBalance
\`\`\`

### Parameters

- **address** (string, required): 20 Bytes - address to check for balance
- **blockNumber** (string, optional): integer block number, or the string \`"latest"\`, \`"earliest"\` or \`"pending"\`, see the default block parameter

### Example Request

\`\`\`json
{
  "jsonrpc": "2.0",
  "method": "eth_getBalance",
  "params": ["0x407d73d8a49eeb85d32cf465507dd71d507100c1", "latest"],
  "id": 1
}
\`\`\`

## Response

### Result

- **Type**: \`string\` (hex string)
- **Description**: Integer of the current balance in wei

### Example Response

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x0234c8a3397aab58"
}
\`\`\`

## Example

\`\`\`javascript
const balance = await provider.request({
  method: "eth_getBalance",
  params: [address, "latest"],
});
console.log("Balance:", balance); // "0x0234c8a3397aab58"
\`\`\`

## Notes

- The balance is returned in wei (1 ETH = 10^18 wei)
- To convert to ETH, divide by 10^18
- Use \`"latest"\` for the most recent balance
- Use \`"pending"\` for the balance including pending transactions
`;export{n as default};
