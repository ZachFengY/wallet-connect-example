const n=`# Sign Transaction - Code Example

## Using @tomo-inc/wallet-connect-kit

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";
import { numberToHex, parseEther, serializeTransaction, toHex } from "viem";

function Example() {
  const { currentProvider, address } = useAccount();

  const signTransaction = async () => {
    if (!currentProvider || !address) return;
    try {
      const amount = 0.0001;
      const value = toHex(parseEther(amount.toString()));
      const chainId = await currentProvider.request({ method: "eth_chainId" });
      const transactionParameters = {
        to: address,
        value,
        from: address,
        data: toHex("sign tx test"),
        gasLimit: numberToHex(30000),
        chainId: chainId,
      };

      const res = await currentProvider.request({
        method: "eth_signTransaction",
        params: [transactionParameters],
      });

      console.log("Signed transaction:", serializeTransaction(res));
    } catch (error) {
      console.error("Sign transaction failed:", error);
    }
  };

  return (
    <button onClick={signTransaction}>
      Sign Transaction
    </button>
  );
}
\`\`\`

## Simple Transfer Transaction

\`\`\`typescript
const transactionParameters = {
  to: recipientAddress,
  value: toHex(parseEther("0.1")),
  from: address,
  chainId: await currentProvider.request({ method: "eth_chainId" }),
};

const signedTx = await currentProvider.request({
  method: "eth_signTransaction",
  params: [transactionParameters],
});
\`\`\`

## Contract Interaction

\`\`\`typescript
const transactionParameters = {
  to: contractAddress,
  from: address,
  data: "0x70a08231000000000000000000000000" + address.slice(2),
  chainId: await currentProvider.request({ method: "eth_chainId" }),
};

const signedTx = await currentProvider.request({
  method: "eth_signTransaction",
  params: [transactionParameters],
});
\`\`\`
`;export{n as default};
