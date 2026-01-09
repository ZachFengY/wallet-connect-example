const n=`# Get Accounts - Code Example

## Using @tomo-inc/wallet-connect-kit

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function Example() {
  const { currentProvider } = useAccount();

  const getAccounts = async () => {
    if (!currentProvider) return;
    try {
      const accounts = await currentProvider.getAccounts();
      console.log("Accounts:", accounts);
    } catch (error) {
      console.error("Get accounts failed:", error);
    }
  };

  return (
    <button onClick={getAccounts}>
      Get Accounts
    </button>
  );
}
\`\`\`

## Check if Connected

\`\`\`typescript
const accounts = await currentProvider.getAccounts();
if (accounts.length > 0) {
  console.log("Wallet is connected:", accounts[0]);
} else {
  console.log("Wallet is not connected");
}
\`\`\`

## Get All Accounts

\`\`\`typescript
const accounts = await currentProvider.getAccounts();
accounts.forEach((account, index) => {
  console.log(\`Account \${index + 1}:\`, account);
});
\`\`\`
`;export{n as default};
