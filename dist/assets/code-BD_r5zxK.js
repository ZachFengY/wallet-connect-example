const n=`# Disconnect - Code Example

## Basic Usage

\`\`\`typescript
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";

function DisconnectButton() {
  const { disconnect, isConnected } = useWalletConnect();

  if (!isConnected) {
    return <div>Not connected</div>;
  }

  return <button onClick={disconnect}>Disconnect</button>;
}
\`\`\`

## With Confirmation

\`\`\`typescript
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";

function DisconnectWithConfirmation() {
  const { disconnect, isConnected } = useWalletConnect();

  const handleDisconnect = async () => {
    if (confirm("Are you sure you want to disconnect?")) {
      try {
        await disconnect();
        console.log("Disconnected successfully");
      } catch (error) {
        console.error("Disconnect failed:", error);
      }
    }
  };

  if (!isConnected) {
    return <div>Not connected</div>;
  }

  return <button onClick={handleDisconnect}>Disconnect</button>;
}
\`\`\`

## Complete Example

\`\`\`typescript
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";
import { useState } from "react";

function WalletControls() {
  const { disconnect, isConnected, openModal } = useWalletConnect();
  const [isDisconnecting, setIsDisconnecting] = useState(false);

  const handleDisconnect = async () => {
    setIsDisconnecting(true);
    try {
      await disconnect();
      console.log("Disconnected");
    } catch (error) {
      console.error("Error disconnecting:", error);
    } finally {
      setIsDisconnecting(false);
    }
  };

  return (
    <div>
      {isConnected ? (
        <button
          onClick={handleDisconnect}
          disabled={isDisconnecting}
        >
          {isDisconnecting ? "Disconnecting..." : "Disconnect"}
        </button>
      ) : (
        <button onClick={openModal}>Connect Wallet</button>
      )}
    </div>
  );
}
\`\`\`
`;export{n as default};
