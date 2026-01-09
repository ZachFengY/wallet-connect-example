const n=`# Sign PSBT - Code Example

## Using @tomo-inc/wallet-connect-kit

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";
import { createDogePsbt } from "../../../../../utils";

function Example() {
  const { currentProvider, address } = useAccount();

  const signPsbt = async () => {
    if (!currentProvider || !address) return;
    try {
      const psbt = await createDogePsbt({
        senderAddress: address,
        amount: 0.001,
      });
      const psbtHex = psbt.toHex();
      const res = await currentProvider.signPsbt(psbtHex);
      console.log("Signed PSBT:", res);
    } catch (error) {
      console.error("Sign PSBT failed:", error);
    }
  };

  return (
    <button onClick={signPsbt}>
      Sign PSBT
    </button>
  );
}
\`\`\`

## Create and Sign PSBT

\`\`\`typescript
import { createDogePsbt } from "../utils";

const psbt = await createDogePsbt({
  senderAddress: address,
  recipientAddress: recipientAddress,
  amount: 0.001,
});

const psbtHex = psbt.toHex();
const signedPsbt = await currentProvider.signPsbt(psbtHex);
\`\`\`

## Broadcast Signed PSBT

\`\`\`typescript
const signedPsbt = await currentProvider.signPsbt(psbtHex);
// Broadcast the signed PSBT to the network
// Implementation depends on your backend or RPC provider
\`\`\`
`;export{n as default};
