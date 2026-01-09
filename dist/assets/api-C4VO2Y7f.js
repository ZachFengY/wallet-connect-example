const n=`# eth_signTypedData_v4

Signs data using EIP-712 typed data signing standard.

## Request

### Method

\`\`\`
eth_signTypedData_v4
\`\`\`

### Parameters

- **address** (string, required): Address to sign with
- **typedData** (string, required): JSON stringified EIP-712 typed data structure

### Typed Data Structure

\`\`\`typescript
{
  types: {
    EIP712Domain: Array<{ name: string; type: string }>;
    [key: string]: Array<{ name: string; type: string }>;
  };
  primaryType: string;
  domain: {
    name?: string;
    version?: string;
    chainId?: number;
    verifyingContract?: string;
    salt?: string;
  };
  message: Record<string, unknown>;
}
\`\`\`

### Example Request

\`\`\`json
{
  "jsonrpc": "2.0",
  "method": "eth_signTypedData_v4",
  "params": [
    "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
    "{\\"types\\":{\\"EIP712Domain\\":[{\\"name\\":\\"name\\",\\"type\\":\\"string\\"}],\\"Mail\\":[{\\"name\\":\\"from\\",\\"type\\":\\"Person\\"}]},\\"primaryType\\":\\"Mail\\",\\"domain\\":{\\"name\\":\\"Ether Mail\\",\\"version\\":\\"1\\",\\"chainId\\":1},\\"message\\":{\\"from\\":{\\"name\\":\\"Cow\\",\\"wallet\\":\\"0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826\\"}}}"
  ],
  "id": 1
}
\`\`\`

## Response

### Result

- **Type**: \`string\` (hex string)
- **Description**: Signature as hex string

### Example Response

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x4355c47d63924e8a72e509b65029052eb6c299d53a04e167c5775fd466751c9d07299936d304c153f6443dfa05f40ff007d72911b9f9410c8f5abc2d1b5b5b5b1c"
}
\`\`\`

## Example

\`\`\`javascript
const signature = await provider.request({
  method: "eth_signTypedData_v4",
  params: [address, JSON.stringify(typedData)],
});
console.log("Signature:", signature);
\`\`\`

## Notes

- The typed data must be JSON stringified
- Follows EIP-712 standard for structured data signing
- The signature can be verified off-chain using the same typed data structure
`;export{n as default};
