const n=`# Open Wallet Modal - Code Example

## Basic Usage

\`\`\`typescript
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";

function ConnectButton() {
  const { openModal, isConnected, disconnect } = useWalletConnect();

  return (
    <button onClick={() => (isConnected ? disconnect() : openModal())}>
      {isConnected ? "Disconnect" : "Connect Wallet"}
    </button>
  );
}
\`\`\`

## With Modal State

\`\`\`typescript
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";

function WalletControls() {
  const { openModal, closeModal, isOpenModal, isConnected } = useWalletConnect();

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpenModal && (
        <button onClick={closeModal}>Close Modal</button>
      )}
      <div>Connected: {isConnected ? "Yes" : "No"}</div>
    </div>
  );
}
\`\`\`

## Complete Example

\`\`\`typescript
import React from "react";
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";

export function ConnectButton() {
  const { openModal, isConnected, disconnect, isConnecting, error } = useWalletConnect();

  if (isConnecting) {
    return <button disabled>Connecting...</button>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
        <button onClick={openModal}>Try Again</button>
      </div>
    );
  }

  return (
    <button onClick={() => (isConnected ? disconnect() : openModal())}>
      {isConnected ? "Disconnect" : "Connect Wallet"}
    </button>
  );
}
\`\`\`
`;export{n as default};
