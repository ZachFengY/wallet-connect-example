const n=`# chainId - Code Example

## Basic Usage

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function ChainIdDisplay() {
  const { chainId, address } = useAccount();

  if (!address) {
    return <div>Not connected</div>;
  }

  return <div>Chain ID: {chainId || "N/A"}</div>;
}
\`\`\`

## With Chain Name Mapping

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function ChainNameDisplay() {
  const { chainId, chainType } = useAccount();

  const chainNames: Record<string, string> = {
    "0x1": "Ethereum Mainnet",
    "0x89": "Polygon",
    "0x38": "BNB Smart Chain",
    "0xa": "Optimism",
  };

  if (!chainId) {
    return <div>Not connected</div>;
  }

  const chainName = chainNames[chainId] || \`Chain \${chainId}\`;

  return (
    <div>
      <div>Chain: {chainName}</div>
      <div>ID: {chainId}</div>
    </div>
  );
}
\`\`\`

## With Chain Detection

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function ChainDetector() {
  const { chainId, chainType } = useAccount();

  if (!chainId) {
    return <div>Not connected</div>;
  }

  const isMainnet = chainId === "0x1" || chainId === "1";
  const isTestnet = !isMainnet;

  return (
    <div>
      <div>Chain ID: {chainId}</div>
      <div>Type: {isMainnet ? "Mainnet" : isTestnet ? "Testnet" : "Unknown"}</div>
    </div>
  );
}
\`\`\`
`;export{n as default};
