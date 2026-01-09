const n=`# eth_sendTransaction

Creates, signs, and sends a new transaction to the network.

## Request

### Method

\`\`\`
eth_sendTransaction
\`\`\`

### Parameters

- **transaction** (object, required): The transaction object
  - **from** (string, required): 20 Bytes - The address the transaction is sent from
  - **to** (string, optional): 20 Bytes - The address the transaction is directed to
  - **gas** (string, optional): Integer of the gas provided for the transaction execution
  - **gasPrice** (string, optional): Integer of the gasPrice used for each paid gas
  - **value** (string, optional): Integer of the value sent with this transaction
  - **data** (string, optional): Hash of the method signature and encoded parameters
  - **nonce** (string, optional): Integer of a nonce
  - **chainId** (string, optional): Integer of the chain ID

### Example Request

\`\`\`json
{
  "jsonrpc": "2.0",
  "method": "eth_sendTransaction",
  "params": [
    {
      "from": "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
      "to": "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
      "value": "0x16345785d8a0000",
      "chainId": "0x1"
    }
  ],
  "id": 1
}
\`\`\`

## Response

### Result

- **Type**: \`string\` (hex string)
- **Description**: The transaction hash

### Example Response

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
\`\`\`

## Example

\`\`\`javascript
const txHash = await provider.request({
  method: "eth_sendTransaction",
  params: [transactionParameters],
});
console.log("Transaction Hash:", txHash);
\`\`\`

## Notes

- The transaction is immediately broadcast to the network
- Returns the transaction hash immediately
- The transaction may still be pending when the hash is returned
- Use \`eth_getTransactionReceipt\` to check transaction status

## Errors

- **4001**: User rejected the request
- **-32602**: Invalid parameters
- **-32603**: Internal error
`;export{n as default};
