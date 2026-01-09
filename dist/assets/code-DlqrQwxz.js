const n=`# Sign Message - Code Example

## Using @tomo-inc/wallet-connect-kit

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function Example() {
  const { currentProvider } = useAccount();

  const signMessage = async () => {
    if (!currentProvider) return;
    try {
      const message = "abcdefghijk123456789";
      const signature = await currentProvider.signMessage(message);
      console.log("Signature:", signature);
    } catch (error) {
      console.error("Sign message failed:", error);
    }
  };

  return (
    <button onClick={signMessage}>
      Sign Message
    </button>
  );
}
\`\`\`

## Sign Custom Message

\`\`\`typescript
const message = "Hello from my DApp";
const signature = await currentProvider.signMessage(message);
console.log("Message:", message);
console.log("Signature:", signature);
\`\`\`

## Sign with Timestamp

\`\`\`typescript
const message = \`Sign in to my DApp\\nTimestamp: \${Date.now()}\`;
const signature = await currentProvider.signMessage(message);
\`\`\`
`;export{n as default};
