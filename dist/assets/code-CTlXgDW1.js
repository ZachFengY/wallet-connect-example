const n=`# Send Dogecoin - Code Example

## Using @tomo-inc/wallet-connect-kit

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function Example() {
  const { currentProvider, address } = useAccount();

  const sendDogecoin = async () => {
    if (!currentProvider || !address) return;
    try {
      const amount = 2000000; // satoshi unit (0.02 DOGE)
      const txid = await currentProvider.sendDogecoin(address, amount);
      console.log("Transaction ID:", txid);
    } catch (error) {
      console.error("Send dogecoin failed:", error);
    }
  };

  return (
    <button onClick={sendDogecoin}>
      Send Dogecoin
    </button>
  );
}
\`\`\`

## Send to Different Address

\`\`\`typescript
const recipientAddress = "D7hrf5D9LPtfC4cRo3UpFg8q6B3KJ2KZ2R";
const amountInSatoshi = 100000000; // 1 DOGE
const txid = await currentProvider.sendDogecoin(
  recipientAddress,
  amountInSatoshi,
);
\`\`\`

## Convert DOGE to Satoshi

\`\`\`typescript
const amountInDoge = 0.5;
const amountInSatoshi = Math.floor(amountInDoge * 100000000);
const txid = await currentProvider.sendDogecoin(
  recipientAddress,
  amountInSatoshi,
);
\`\`\`

## Handle Errors

\`\`\`typescript
try {
  const txid = await currentProvider.sendDogecoin(recipientAddress, amount);
  console.log("Transaction sent:", txid);
} catch (error: unknown) {
  if ((error as { message: string }).message.includes("balance")) {
    console.error("Insufficient balance");
  } else {
    console.error("Send failed:", error);
  }
}
\`\`\`
`;export{n as default};
