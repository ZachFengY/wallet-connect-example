const n=`# currentProvider - Code Example

## Basic Usage

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function ProviderCheck() {
  const { currentProvider, address } = useAccount();

  if (!address) {
    return <div>Not connected</div>;
  }

  return (
    <div>
      Provider: {currentProvider ? "Available" : "Not available"}
    </div>
  );
}
\`\`\`

## EVM RPC Call

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function EvmRpcCall() {
  const { currentProvider, chainType, address } = useAccount();

  const getBlockNumber = async () => {
    if (!currentProvider || chainType !== "evm") {
      alert("EVM provider not available");
      return;
    }

    try {
      const blockNumber = await currentProvider.request({
        method: "eth_blockNumber",
        params: [],
      });
      console.log("Block number:", blockNumber);
    } catch (error) {
      console.error("Failed:", error);
    }
  };

  if (!address) {
    return <div>Not connected</div>;
  }

  return (
    <div>
      <button onClick={getBlockNumber}>Get Block Number</button>
    </div>
  );
}
\`\`\`

## Chain-Specific Provider Usage

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function ChainSpecificProvider() {
  const { currentProvider, chainType, address } = useAccount();

  const handleProviderCall = async () => {
    if (!currentProvider || !chainType) {
      return;
    }

    try {
      if (chainType === "evm") {
        // EVM provider
        const accounts = await currentProvider.request({
          method: "eth_accounts",
          params: [],
        });
        console.log("Accounts:", accounts);
      } else if (chainType === "solana") {
        // Solana provider
        // Use Solana-specific methods
      }
    } catch (error) {
      console.error("Provider call failed:", error);
    }
  };

  if (!address) {
    return <div>Not connected</div>;
  }

  return (
    <div>
      <div>Chain: {chainType}</div>
      <button onClick={handleProviderCall}>Call Provider</button>
    </div>
  );
}
\`\`\`
`;export{n as default};
