const n=`# Get Chain ID - Code Example

## Using @tomo-inc/wallet-connect-kit

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function Example() {
  const { currentProvider } = useAccount();

  const getChainId = async () => {
    if (!currentProvider) return;
    try {
      const chainId = await currentProvider.request({ method: "eth_chainId" });
      console.log("Chain ID:", chainId);
    } catch (error) {
      console.error("Get chain ID failed:", error);
    }
  };

  return (
    <button onClick={getChainId}>
      Get Chain ID
    </button>
  );
}
\`\`\`

## Using Web3 Provider Directly

\`\`\`typescript
const chainId = await window.ethereum.request({ method: "eth_chainId" });
console.log("Chain ID:", chainId);
\`\`\`

## Convert to Number

\`\`\`typescript
import { fromHex } from "viem";

const chainIdHex = await currentProvider.request({ method: "eth_chainId" });
const chainId = fromHex(chainIdHex as \`0x\${string}\`, "number");
console.log("Chain ID (number):", chainId);
\`\`\`
`;export{n as default};
