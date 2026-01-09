const n=`# eth_signTransaction

Signs a transaction that can be submitted to the network at a later time.

## Request

### Method

\`\`\`
eth_signTransaction
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
  "method": "eth_signTransaction",
  "params": [
    {
      "from": "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
      "to": "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
      "value": "0x16345785d8a0000",
      "gas": "0x7530",
      "chainId": "0x1"
    }
  ],
  "id": 1
}
\`\`\`

## Response

### Result

- **Type**: \`object\`
- **Description**: The signed transaction object

### Example Response

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "raw": "0xf86c808502540be400825208943535353535353535353535353535353535353535880de0b6b3a76400008025a028ef61340bd939bc2195fe537567866003e1a15d3c71ff63e1590620aa636276a067cbe9d8997f761aecb703304b24e8ebea5c3e0e0e0e0e0e0e0e0e0e0e0e0e0"
  }
}
\`\`\`

## Example

\`\`\`javascript
const signedTx = await provider.request({
  method: "eth_signTransaction",
  params: [transactionParameters],
});
console.log("Signed Transaction:", signedTx);
\`\`\`

## Notes

- The transaction is signed but not broadcast to the network
- Use \`eth_sendRawTransaction\` to broadcast the signed transaction
- The signed transaction can be stored and sent later
`;export{n as default};
