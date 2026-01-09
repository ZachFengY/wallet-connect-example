const n=`# Send Transaction - Code Example

## Using @tomo-inc/wallet-connect-kit

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";
import { parseEther, toHex } from "viem";

function Example() {
  const { currentProvider, address } = useAccount();

  const sendTransaction = async () => {
    if (!currentProvider || !address) return;
    try {
      const amount = 0.0001;
      const value = toHex(parseEther(amount.toString()));
      const chainId = await currentProvider.request({ method: "eth_chainId" });
      const transactionParameters = {
        to: address,
        value,
        from: address,
        chainId: chainId,
      };

      const txHash = await currentProvider.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });

      console.log("Transaction hash:", txHash);
    } catch (error) {
      console.error("Send transaction failed:", error);
    }
  };

  return (
    <button onClick={sendTransaction}>
      Send Transaction
    </button>
  );
}
\`\`\`

## Send ETH to Another Address

\`\`\`typescript
const transactionParameters = {
  to: recipientAddress,
  value: toHex(parseEther("0.1")),
  from: address,
  chainId: await currentProvider.request({ method: "eth_chainId" }),
};

const txHash = await currentProvider.request({
  method: "eth_sendTransaction",
  params: [transactionParameters],
});
\`\`\`

## Wait for Transaction Confirmation

\`\`\`typescript
const txHash = await currentProvider.request({
  method: "eth_sendTransaction",
  params: [transactionParameters],
});

// Wait for confirmation
let receipt = null;
while (!receipt) {
  receipt = await currentProvider.request({
    method: "eth_getTransactionReceipt",
    params: [txHash],
  });
  if (!receipt) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
console.log("Transaction confirmed:", receipt);
\`\`\`
`;export{n as default};
