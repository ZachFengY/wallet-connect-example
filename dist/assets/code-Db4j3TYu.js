const n=`# Add Chain - Code Example

## Using @tomo-inc/wallet-connect-kit

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function Example() {
  const { currentProvider } = useAccount();

  const addChain = async () => {
    if (!currentProvider) return;
    try {
      await currentProvider.request({
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
      console.log("Chain added successfully");
    } catch (error) {
      console.error("Add chain failed:", error);
    }
  };

  return (
    <button onClick={addChain}>
      Add Chain
    </button>
  );
}
\`\`\`

## Add Polygon Chain

\`\`\`typescript
await currentProvider.request({
  method: "wallet_addEthereumChain",
  params: [
    {
      chainId: "0x89",
      chainName: "Polygon",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://polygon-rpc.com"],
      blockExplorerUrls: ["https://polygonscan.com"],
    },
  ],
});
\`\`\`

## Handle Errors

\`\`\`typescript
try {
  await currentProvider.request({
    method: "wallet_addEthereumChain",
    params: [chainParams],
  });
} catch (error: unknown) {
  if ((error as { code: number }).code === 4902) {
    console.log("Chain not added to wallet");
  } else {
    console.error("Failed to add chain:", error);
  }
}
\`\`\`
`;export{n as default};
