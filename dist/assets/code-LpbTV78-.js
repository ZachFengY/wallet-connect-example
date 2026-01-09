const n=`# isConnected - Code Example

## Basic Usage

\`\`\`typescript
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";

function ConnectionStatus() {
  const { isConnected } = useWalletConnect();

  return (
    <div>
      Status: {isConnected ? "Connected" : "Not Connected"}
    </div>
  );
}
\`\`\`

## With Conditional Rendering

\`\`\`typescript
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";

function ConnectButton() {
  const { isConnected, openModal, disconnect } = useWalletConnect();

  return (
    <button onClick={() => (isConnected ? disconnect() : openModal())}>
      {isConnected ? "Disconnect" : "Connect Wallet"}
    </button>
  );
}
\`\`\`

## With useEffect

\`\`\`typescript
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";
import { useEffect } from "react";

function ConnectionWatcher() {
  const { isConnected } = useWalletConnect();

  useEffect(() => {
    console.log("Connection status changed:", isConnected);
    // Perform side effects when connection status changes
    if (isConnected) {
      // Wallet connected
      // Fetch user data, update UI, etc.
    } else {
      // Wallet disconnected
      // Clear user data, reset UI, etc.
    }
  }, [isConnected]);

  return <div>Connected: {isConnected ? "Yes" : "No"}</div>;
}
\`\`\`
`;export{n as default};
