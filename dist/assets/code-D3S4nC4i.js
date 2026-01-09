const n=`# chainType - Code Example

## Basic Usage

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function ChainTypeDisplay() {
  const { chainType, address } = useAccount();

  if (!address) {
    return <div>Not connected</div>;
  }

  return <div>Chain Type: {chainType || "Unknown"}</div>;
}
\`\`\`

## With Conditional Logic

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function ChainSpecificFeatures() {
  const { chainType } = useAccount();

  if (!chainType) {
    return <div>Please connect a wallet</div>;
  }

  if (chainType === "evm") {
    return <div>EVM features available</div>;
  }

  if (chainType === "solana") {
    return <div>Solana features available</div>;
  }

  return <div>Other chain features</div>;
}
\`\`\`

## With Chain-Specific Actions

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function ChainActions() {
  const { chainType, address } = useAccount();

  if (!address || !chainType) {
    return <div>Not connected</div>;
  }

  const renderActions = () => {
    switch (chainType) {
      case "evm":
        return <div>EVM-specific actions</div>;
      case "solana":
        return <div>Solana-specific actions</div>;
      case "aptos":
        return <div>Aptos-specific actions</div>;
      default:
        return <div>Generic actions</div>;
    }
  };

  return (
    <div>
      <div>Chain: {chainType}</div>
      {renderActions()}
    </div>
  );
}
\`\`\`
`;export{n as default};
