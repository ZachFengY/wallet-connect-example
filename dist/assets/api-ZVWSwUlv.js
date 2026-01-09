const n=`# wallet_addEthereumChain

Creates a confirmation asking the user to add the specified chain to the wallet.

## Request

### Method

\`\`\`
wallet_addEthereumChain
\`\`\`

### Parameters

- **chainParams** (object, required): The chain parameters
  - **chainId** (string, required): The chain ID as a hex string
  - **chainName** (string, required): The name of the chain
  - **nativeCurrency** (object, required): The native currency information
    - **name** (string, required): The currency name
    - **symbol** (string, required): The currency symbol
    - **decimals** (number, required): The number of decimals
  - **rpcUrls** (string[], required): Array of RPC URLs
  - **blockExplorerUrls** (string[], optional): Array of block explorer URLs

### Example Request

\`\`\`json
{
  "jsonrpc": "2.0",
  "method": "wallet_addEthereumChain",
  "params": [
    {
      "chainId": "0x2105",
      "chainName": "Base",
      "nativeCurrency": {
        "name": "ETH",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": ["https://mainnet.base.org"],
      "blockExplorerUrls": ["https://basescan.org"]
    }
  ],
  "id": 1
}
\`\`\`

## Response

### Result

- **Type**: \`null\`
- **Description**: Returns \`null\` if the user approves the request

### Example Response

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": null
}
\`\`\`

## Example

\`\`\`javascript
await provider.request({
  method: "wallet_addEthereumChain",
  params: [
    {
      chainId: "0x2105",
      chainName: "Base",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://mainnet.base.org"],
      blockExplorerUrls: ["https://basescan.org"],
    },
  ],
});
\`\`\`

## Errors

- **4902**: The chain has not been added to the wallet
- **32603**: Invalid parameters
`;export{n as default};
