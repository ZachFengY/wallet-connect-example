const n=`# Get Balance - Code Example

## Using @tomo-inc/wallet-connect-kit

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function Example() {
  const { currentProvider } = useAccount();

  const getBalance = async () => {
    if (!currentProvider) return;
    try {
      const balance = await currentProvider.getBalance();
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

## Convert to DOGE

\`\`\`typescript
const result = await currentProvider.getBalance();
const balanceInDoge = result.balance / 100000000; // Convert satoshi to DOGE
console.log("Balance (DOGE):", balanceInDoge);
\`\`\`

## Display Formatted Balance

\`\`\`typescript
const result = await currentProvider.getBalance();
const balanceInDoge = (result.balance / 100000000).toFixed(8);
console.log(\`Balance: \${balanceInDoge} DOGE\`);
\`\`\`
`;export{n as default};
