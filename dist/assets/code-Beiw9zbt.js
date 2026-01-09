const n=`# Get Transaction Count - Code Example

## Using @tomo-inc/wallet-connect-kit

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function Example() {
  const { currentProvider, address } = useAccount();

  const getTransactionCount = async () => {
    if (!currentProvider || !address) return;
    try {
      const count = await currentProvider.request({
        method: "eth_getTransactionCount",
        params: [address, "latest"],
      });
      console.log("Transaction Count:", count);
    } catch (error) {
      console.error("Get transaction count failed:", error);
    }
  };

  return (
    <button onClick={getTransactionCount}>
      Get Transaction Count
    </button>
  );
}
\`\`\`

## Convert to Number

\`\`\`typescript
import { fromHex } from "viem";

const countHex = await currentProvider.request({
  method: "eth_getTransactionCount",
  params: [address, "latest"],
});
const count = fromHex(countHex as \`0x\${string}\`, "number");
console.log("Transaction Count (number):", count);
\`\`\`

## Use as Nonce

\`\`\`typescript
const nonce = await currentProvider.request({
  method: "eth_getTransactionCount",
  params: [address, "pending"], // Use pending to include pending transactions
});
\`\`\`
`;export{n as default};
