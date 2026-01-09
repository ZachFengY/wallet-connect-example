const n=`# Request Accounts - Code Example

## Using @tomo-inc/wallet-connect-kit

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function Example() {
  const { currentProvider } = useAccount();

  const requestAccounts = async () => {
    if (!currentProvider) return;
    try {
      const accounts = await currentProvider.requestAccounts();
      console.log("Accounts:", accounts);
    } catch (error) {
      console.error("Request accounts failed:", error);
    }
  };

  return (
    <button onClick={requestAccounts}>
      Request Accounts
    </button>
  );
}
\`\`\`

## Get First Account

\`\`\`typescript
const accounts = await currentProvider.requestAccounts();
const primaryAccount = accounts[0];
console.log("Primary account:", primaryAccount);
\`\`\`

## Handle User Rejection

\`\`\`typescript
try {
  const accounts = await currentProvider.requestAccounts();
  console.log("Accounts:", accounts);
} catch (error: unknown) {
  if ((error as { message: string }).message.includes("rejected")) {
    console.log("User rejected account access");
  } else {
    console.error("Request accounts failed:", error);
  }
}
\`\`\`
`;export{n as default};
