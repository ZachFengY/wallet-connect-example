const n=`# currentProvider

## Description

The provider object for the currently connected chain. This is the chain-specific provider (e.g., Ethereum provider for EVM chains) that can be used to make RPC calls directly to the blockchain.

## Property

\`currentProvider?: any\`

## Source

\`useAccount()\` hook from \`@tomo-inc/wallet-connect-kit\`

## Type

\`any\` - Chain-specific provider object (varies by chain type)

## Provider Types

- **EVM**: EIP-1193 provider with \`request()\` method
- **Solana**: Solana web3.js provider
- **Aptos**: Aptos provider
- **Dogecoin**: Dogecoin-specific provider

## Usage

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function ProviderExample() {
  const { currentProvider, chainType, address } = useAccount();

  const handleRpcCall = async () => {
    if (!currentProvider || chainType !== "evm") {
      console.log("Provider not available");
      return;
    }

    try {
      // Make RPC call using the provider
      const result = await currentProvider.request({
        method: "eth_blockNumber",
        params: [],
      });
      console.log("Block number:", result);
    } catch (error) {
      console.error("RPC call failed:", error);
    }
  };

  if (!address) {
    return <div>Not connected</div>;
  }

  return (
    <div>
      <div>Provider: {currentProvider ? "Available" : "Not available"}</div>
      <button onClick={handleRpcCall}>Get Block Number</button>
    </div>
  );
}
\`\`\`

## Notes

- Returns \`undefined\` if wallet is not connected or provider is not available
- Provider type depends on \`chainType\`
- For EVM chains, provider follows EIP-1193 standard
- Use \`currentProvider.request()\` for RPC calls
- Provider may have additional chain-specific methods

## Related Properties

- \`currentWallet\` - Current wallet connector
- \`chainType\` - Current chain type
- \`chainId\` - Current chain ID
`;export{n as default};
