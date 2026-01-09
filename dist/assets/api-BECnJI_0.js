const n=`# eth_estimateGas

Generates and returns an estimate of how much gas is necessary to allow the transaction to complete.

## Request

### Method

\`\`\`
eth_estimateGas
\`\`\`

### Parameters

- **transaction** (object, required): The transaction call object
  - **from** (string, optional): 20 Bytes - The address the transaction is sent from
  - **to** (string, optional): 20 Bytes - The address the transaction is directed to
  - **gas** (string, optional): Integer of the gas provided for the transaction execution
  - **gasPrice** (string, optional): Integer of the gasPrice used for each paid gas
  - **value** (string, optional): Integer of the value sent with this transaction
  - **data** (string, optional): Hash of the method signature and encoded parameters

### Example Request

\`\`\`json
{
  "jsonrpc": "2.0",
  "method": "eth_estimateGas",
  "params": [
    {
      "from": "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
      "to": "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
      "value": "0x16345785d8a0000"
    }
  ],
  "id": 1
}
\`\`\`

## Response

### Result

- **Type**: \`string\` (hex string)
- **Description**: The amount of gas used

### Example Response

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5208"
}
\`\`\`

## Example

\`\`\`javascript
const gas = await provider.request({
  method: "eth_estimateGas",
  params: [
    {
      from: address,
      to: address,
      value: "0x16345785d8a0000",
    },
  ],
});
console.log("Estimated Gas:", gas);
\`\`\`

## Notes

- The estimate may differ from the actual gas used
- If the transaction would fail, an error is returned
- The estimate includes the base gas cost (21,000) plus the cost of executing the transaction
`;export{n as default};
