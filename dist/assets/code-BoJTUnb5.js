const n=`# Estimate Gas - Code Example

## Using @tomo-inc/wallet-connect-kit

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";
import { parseEther, toHex } from "viem";

function Example() {
  const { currentProvider, address } = useAccount();

  const estimateGas = async () => {
    if (!currentProvider || !address) return;
    try {
      const gas = await currentProvider.request({
        method: "eth_estimateGas",
        params: [
          {
            from: address,
            to: address,
            value: toHex(parseEther("0.0001")),
          },
        ],
      });
      console.log("Estimated Gas:", gas);
    } catch (error) {
      console.error("Estimate gas failed:", error);
    }
  };

  return (
    <button onClick={estimateGas}>
      Estimate Gas
    </button>
  );
}
\`\`\`

## Convert to Number

\`\`\`typescript
import { fromHex } from "viem";

const gasHex = await currentProvider.request({
  method: "eth_estimateGas",
  params: [{ from: address, to: address, value: "0x0" }],
});
const gas = fromHex(gasHex as \`0x\${string}\`, "number");
console.log("Estimated Gas (number):", gas);
\`\`\`

## Estimate Gas for Contract Call

\`\`\`typescript
const gas = await currentProvider.request({
  method: "eth_estimateGas",
  params: [
    {
      from: address,
      to: contractAddress,
      data: "0x70a08231000000000000000000000000" + address.slice(2),
    },
  ],
});
\`\`\`
`;export{n as default};
