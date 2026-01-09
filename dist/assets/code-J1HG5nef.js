const n=`# Get Balance - Code Example

## Using @tomo-inc/wallet-connect-kit

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function Example() {
  const { currentProvider, address } = useAccount();

  const getBalance = async () => {
    if (!currentProvider || !address) return;
    try {
      const balance = await currentProvider.request({
        method: "eth_getBalance",
        params: [address, "latest"],
      });
      console.log("Balance:", balance);
    } catch (error) {
      console.error("Get balance failed:", error);
    }
  };

  return (
    <button onClick={getBalance}>
      Get Balance
    </button>
  );
}
\`\`\`

## Convert to ETH

\`\`\`typescript
import { formatEther } from "viem";

const balanceHex = await currentProvider.request({
  method: "eth_getBalance",
  params: [address, "latest"],
});
const balanceInEth = formatEther(balanceHex as \`0x\${string}\`);
console.log("Balance (ETH):", balanceInEth);
\`\`\`

## Get Balance for Specific Block

\`\`\`typescript
const balance = await currentProvider.request({
  method: "eth_getBalance",
  params: [address, "0x1234"], // specific block number
});
\`\`\`
`;export{n as default};
