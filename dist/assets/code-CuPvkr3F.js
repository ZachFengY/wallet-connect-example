const n=`# Sign Message - Code Example

## Basic Usage

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function SignMessageExample() {
  const { signMessage } = useAccount();

  const onSignMessage = async () => {
    if (!signMessage) {
      console.error("signMessage is not available");
      return;
    }

    try {
      const signature = await signMessage({
        message: "Hello from Wallet Connect",
        nonce: Math.random().toString(36).slice(2),
      });
      console.log("signature:", signature);
    } catch (error) {
      console.error("Sign message failed:", error);
    }
  };

  return <button onClick={onSignMessage}>Sign Message</button>;
}
\`\`\`

## With Custom Message

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";
import { useState } from "react";

function CustomSignMessage() {
  const { signMessage } = useAccount();
  const [message, setMessage] = useState("");
  const [signature, setSignature] = useState<string | null>(null);

  const handleSign = async () => {
    if (!signMessage || !message) return;

    try {
      const sig = await signMessage({
        message,
        nonce: Math.random().toString(36).slice(2),
      });
      setSignature(sig as string);
    } catch (error) {
      console.error("Failed:", error);
    }
  };

  return (
    <div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message to sign"
      />
      <button onClick={handleSign}>Sign</button>
      {signature && <div>Signature: {signature}</div>}
    </div>
  );
}
\`\`\`

## With Error Handling

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function SignMessageWithErrorHandling() {
  const { signMessage, address } = useAccount();

  const handleSign = async () => {
    if (!address) {
      alert("Please connect your wallet first");
      return;
    }

    if (!signMessage) {
      alert("Sign message is not available");
      return;
    }

    try {
      const signature = await signMessage({
        message: "Hello World",
        nonce: Math.random().toString(36).slice(2),
      });
      console.log("Success:", signature);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("rejected")) {
          alert("User rejected the signing request");
        } else {
          alert(\`Error: \${error.message}\`);
        }
      }
    }
  };

  return <button onClick={handleSign}>Sign Message</button>;
}
\`\`\`
`;export{n as default};
